const fs = require('fs');
const path = require('path');

// Mapping des chapitres vers les catégories HTML
const chapterMapping = {
    'identite et branding': 'charte',
    'declinaison visuel': 'design',
    'identite en mouvement': 'video'
};

// Fonction de transformation typographique uniquement
// Transforme les noms de dossiers en noms de filtres affichables
function formatFilterName(folderName) {
    // Remplacer les tirets par des espaces
    let formatted = folderName.replace(/-/g, ' ');
    
    // Capitaliser la première lettre de chaque mot
    formatted = formatted.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    
    // Gérer les cas spéciaux (vidéo avec accent)
    formatted = formatted.replace(/video/gi, 'vidéo');
    
    return formatted;
}

// Fonction pour obtenir les extensions de fichiers supportées
function isMediaFile(filename) {
    const ext = path.extname(filename).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm', '.pdf'].includes(ext);
}

// Fonction pour déterminer le type de fichier
function getFileType(filename) {
    const ext = filename.toLowerCase().split('.').pop();
    if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) return 'image';
    if (['mp4', 'webm'].includes(ext)) return 'video';
    if (ext === 'pdf') return 'pdf';
    return 'unknown';
}

// Fonction pour trouver l'image de couverture dans une liste de fichiers
function findCoverImage(files) {
    if (!files || files.length === 0) return null;
    
    // Priorité 1 : chercher cover.jpg, cover.png, etc.
    const coverPatterns = ['cover.jpg', 'cover.jpeg', 'cover.png', 'cover.webp', 'cover.gif'];
    for (const pattern of coverPatterns) {
        const cover = files.find(file => {
            const fileName = path.basename(file).toLowerCase();
            return fileName === pattern || fileName.startsWith('cover.');
        });
        if (cover && getFileType(cover) === 'image') {
            return cover;
        }
    }
    
    // Priorité 2 : première image disponible (pas vidéo, pas PDF)
    const firstImage = files.find(file => getFileType(file) === 'image');
    if (firstImage) {
        return firstImage;
    }
    
    // Si aucune image, retourner null (sera géré comme erreur)
    return null;
}

// Fonction récursive pour trouver les projets (derniers dossiers contenant des fichiers)
function findProjects(currentDir, chapterName, typeName, relativePath = '') {
    const projects = [];
    
    if (!fs.existsSync(currentDir)) {
        return projects;
    }
    
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    const files = items.filter(item => item.isFile() && isMediaFile(item.name));
    const directories = items.filter(item => item.isDirectory());
    
    // Si ce dossier contient des fichiers ET pas de sous-dossiers = c'est un projet
    if (files.length > 0 && directories.length === 0) {
        const projectName = path.basename(currentDir);
        const projectFiles = files.map(file => {
            const fileRelativePath = relativePath ? `${relativePath}/${file.name}` : `${projectName}/${file.name}`;
            return `assets/realisation/${chapterName}/${typeName}/${fileRelativePath}`.replace(/\\/g, '/');
        });
        
        // Trouver l'image de couverture (obligatoire)
        const coverImage = findCoverImage(projectFiles);
        
        if (!coverImage) {
            console.warn(`⚠️  Projet "${projectName}" n'a pas d'image de couverture (seulement ${projectFiles.map(f => path.extname(f)).join(', ')})`);
            // On continue quand même mais avec le premier fichier comme fallback
        }
        
        // Utiliser directement le nom du dossier comme catégorie (source de vérité)
        const projectCategory = typeName;
        
        // S'assurer que coverImage est toujours une image (pas une vidéo)
        let finalCoverImage = coverImage;
        if (!finalCoverImage) {
            // Chercher la première image dans projectFiles
            finalCoverImage = projectFiles.find(file => getFileType(file) === 'image') || null;
        }
        
        return [{
            id: 0, // Sera assigné plus tard
            title: projectName.charAt(0).toUpperCase() + projectName.slice(1).replace(/'/g, "'"),
            category: projectCategory,
            coverImage: finalCoverImage, // Image de couverture obligatoire (toujours une image, jamais une vidéo)
            images: projectFiles, // Tous les fichiers du projet (peut contenir images et vidéos)
            description: `Projet ${projectName}`,
            client: projectName.charAt(0).toUpperCase() + projectName.slice(1),
            year: new Date().getFullYear().toString()
        }];
    }
    
    // Sinon, explorer les sous-dossiers récursivement
    directories.forEach(dir => {
        const subDirPath = path.join(currentDir, dir.name);
        const newRelativePath = relativePath ? `${relativePath}/${dir.name}` : dir.name;
        const subProjects = findProjects(subDirPath, chapterName, typeName, newRelativePath);
        projects.push(...subProjects);
    });
    
    return projects;
}

// Fonction pour scanner un répertoire et identifier les projets
function scanProjects(chapterPath, chapterName, typeName) {
    const typePath = path.join(chapterPath, typeName);
    
    if (!fs.existsSync(typePath)) {
        return [];
    }
    
    const items = fs.readdirSync(typePath, { withFileTypes: true });
    const hasSubdirectories = items.some(item => item.isDirectory());
    
    // Si pas de sous-dossiers, les fichiers directs sont des projets individuels
    if (!hasSubdirectories) {
        const files = items
            .filter(item => item.isFile() && isMediaFile(item.name))
            .map(item => item.name);
        
        return files.map((file, index) => {
            const filePath = `assets/realisation/${chapterName}/${typeName}/${file}`.replace(/\\/g, '/');
            // Utiliser directement le nom du dossier comme catégorie (source de vérité)
            const projectCategory = typeName;
            const projectName = path.parse(file).name;
            
            // Pour les fichiers isolés, le fichier lui-même est l'image de couverture si c'est une image
            const coverImage = getFileType(filePath) === 'image' ? filePath : null;
            
            // S'assurer que coverImage est toujours une image (pas une vidéo)
            let finalCoverImage = coverImage;
            if (!finalCoverImage) {
                // Si le fichier n'est pas une image, coverImage reste null (sera géré côté rendu)
                console.warn(`⚠️  Projet "${projectName}" n'a pas d'image de couverture (fichier: ${file})`);
            }
            
            return {
                id: index + 1,
                title: projectName.charAt(0).toUpperCase() + projectName.slice(1),
                category: projectCategory,
                coverImage: finalCoverImage, // Toujours une image ou null (jamais une vidéo)
                images: [filePath], // Tous les fichiers (peut contenir images et vidéos)
                description: `Projet ${projectName}`,
                client: projectName.charAt(0).toUpperCase() + projectName.slice(1),
                year: new Date().getFullYear().toString()
            };
        });
    }
    
    // Utiliser la fonction récursive pour trouver tous les projets dans les sous-dossiers
    const projects = findProjects(typePath, chapterName, typeName);
    
    // Assigner les IDs
    projects.forEach((project, index) => {
        project.id = index + 1;
    });
    
    return projects;
}

// Fonction pour collecter toutes les images disponibles par sous-catégorie (pour homepage)
function collectImagesByType(chapterPath, chapterName, typeName) {
    const images = [];
    const typePath = path.join(chapterPath, typeName);
    
    if (!fs.existsSync(typePath)) {
        return images;
    }
    
    function scanForImages(currentDir, relativePath = '') {
        const items = fs.readdirSync(currentDir, { withFileTypes: true });
        const files = items.filter(item => item.isFile() && isMediaFile(item.name));
        const directories = items.filter(item => item.isDirectory());
        
        // Si ce dossier contient des fichiers ET pas de sous-dossiers = c'est un projet
        if (files.length > 0 && directories.length === 0) {
            const projectName = path.basename(currentDir);
            files.forEach(file => {
                const filePath = relativePath ? `${relativePath}/${file.name}` : `${projectName}/${file.name}`;
                const fullPath = `assets/realisation/${chapterName}/${typeName}/${filePath}`.replace(/\\/g, '/');
                
                // Ne collecter que les images (pas vidéos, pas PDF)
                if (getFileType(fullPath) === 'image') {
                    images.push(fullPath);
                }
            });
        } else {
            // Explorer les sous-dossiers récursivement
            directories.forEach(dir => {
                const subDirPath = path.join(currentDir, dir.name);
                const newRelativePath = relativePath ? `${relativePath}/${dir.name}` : dir.name;
                scanForImages(subDirPath, newRelativePath);
            });
        }
    }
    
    const items = fs.readdirSync(typePath, { withFileTypes: true });
    const hasSubdirectories = items.some(item => item.isDirectory());
    
    if (!hasSubdirectories) {
        // Fichiers directs
        items.filter(item => item.isFile() && isMediaFile(item.name))
            .forEach(item => {
                const filePath = `assets/realisation/${chapterName}/${typeName}/${item.name}`.replace(/\\/g, '/');
                if (getFileType(filePath) === 'image') {
                    images.push(filePath);
                }
            });
    } else {
        // Projets dans sous-dossiers
        scanForImages(typePath);
    }
    
    return images;
}

// Fonction principale pour générer projects.json
function generateProjectsJson() {
    const realisationPath = path.join(__dirname, 'assets', 'realisation');
    const projects = {
        charte: [],
        design: [],
        video: []
    };
    
    // Structure pour stocker les types par chapitre (pour génération des filtres)
    const typesByChapter = {
        charte: [],
        design: [],
        video: []
    };
    
    // Structure pour stocker les images disponibles par sous-catégorie (pour homepage)
    const homepageCards = {
        charte: {},
        design: {},
        video: {}
    };
    
    if (!fs.existsSync(realisationPath)) {
        console.error('Le dossier assets/realisation n\'existe pas');
        return;
    }
    
    // Scanner chaque chapitre
    const chapters = fs.readdirSync(realisationPath, { withFileTypes: true })
        .filter(item => item.isDirectory())
        .map(item => item.name);
    
    chapters.forEach(chapterName => {
        const chapterPath = path.join(realisationPath, chapterName);
        const htmlCategory = chapterMapping[chapterName];
        
        if (!htmlCategory) {
            console.warn(`Chapitre non mappé: ${chapterName}`);
            return;
        }
        
        // Scanner les types dans ce chapitre
        const types = fs.readdirSync(chapterPath, { withFileTypes: true })
            .filter(item => item.isDirectory())
            .map(item => item.name);
        
        // Stocker les types uniques pour ce chapitre
        types.forEach(typeName => {
            if (!typesByChapter[htmlCategory].includes(typeName)) {
                typesByChapter[htmlCategory].push(typeName);
            }
            
            // Collecter toutes les images disponibles pour cette sous-catégorie
            const availableImages = collectImagesByType(chapterPath, chapterName, typeName);
            if (availableImages.length > 0) {
                homepageCards[htmlCategory][typeName] = availableImages;
            }
            
            const typeProjects = scanProjects(chapterPath, chapterName, typeName);
            projects[htmlCategory].push(...typeProjects);
        });
    });
    
    // Générer le JSON des projets
    const jsonContent = JSON.stringify(projects, null, 2);
    fs.writeFileSync(path.join(__dirname, 'projects.json'), jsonContent, 'utf8');
    
    // Générer le JSON des types par chapitre (pour génération dynamique des filtres)
    const typesContent = JSON.stringify(typesByChapter, null, 2);
    fs.writeFileSync(path.join(__dirname, 'types-by-chapter.json'), typesContent, 'utf8');
    
    // Générer le JSON des images disponibles par sous-catégorie (pour homepage)
    const homepageContent = JSON.stringify(homepageCards, null, 2);
    fs.writeFileSync(path.join(__dirname, 'homepage-cards.json'), homepageContent, 'utf8');
    
    console.log('✅ projects.json généré avec succès!');
    console.log(`   - Identité & Branding: ${projects.charte.length} projets`);
    console.log(`   - Déclinaisons Visuelles: ${projects.design.length} projets`);
    console.log(`   - Identité en Mouvement: ${projects.video.length} projets`);
    console.log('\n✅ types-by-chapter.json généré avec succès!');
    console.log('   Types disponibles pour génération dynamique des filtres.');
    console.log('\n✅ homepage-cards.json généré avec succès!');
    console.log('   Images disponibles par sous-catégorie pour les cartes homepage.');
}

// Exécuter le script
generateProjectsJson();
