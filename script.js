/* ============================================================================
 * 1️⃣ SECTION LEGACY - Données embarquées obsolètes
 * Lignes : 1-1403
 * Statut : ⚠️ LEGACY / UNUSED (code commenté, non exécuté)
 * Rôle : Aucun - Code commenté, jamais exécuté
 * Impact si supprimée : Aucun - Le code est déjà commenté
 * ============================================================================ */
// ⚠️ LEGACY / UNUSED: Données embarquées obsolètes (1400+ lignes) - À SUPPRIMER après validation
// Données désormais externalisées via projects.json
/* (supprimé) const embeddedProjects = {
    charte: [
        {
            id: 1,
            title: "Charte Graphique - Thémis",
            category: "branding",
            image: "assets/images/charte/branding/Chartre graphique Thémis.3 (1).pdf",
            description: "Charte graphique complète pour Thémis",
            client: "Thémis",
            year: "2024"
        },
        {
            id: 2,
            title: "Identité Visuelle - Unisson",
            category: "branding",
            image: "assets/images/charte/branding/ID_Visuelle_UNISSON_BENSEDIRA_REDOUANE.pdf",
            description: "Identité visuelle complète pour Unisson",
            client: "Unisson",
            year: "2024"
        },
        {
            id: 3,
            title: "Règles Design - Gazelle",
            category: "branding",
            image: "assets/images/charte/branding/Previsu Regle design.png",
            description: "Règles de design pour Gazelle",
            client: "Gazelle",
            year: "2024"
        },
        {
            id: 4,
            title: "Prévisualisation - Gazelle",
            category: "branding",
            image: "assets/images/charte/branding/previsu gazelle.png",
            description: "Prévisualisation de l'identité Gazelle",
            client: "Gazelle",
            year: "2024"
        },
        {
            id: 5,
            title: "Identité Visuelle - Gazelle",
            category: "branding",
            image: "assets/images/charte/branding/ID GAZELLE.pdf",
            description: "Identité visuelle complète pour Gazelle",
            client: "Gazelle",
            year: "2024"
        },
        {
            id: 6,
            title: "Mock-up - Carte de Visite",
            category: "mockup",
            image: "assets/images/charte/Mock up/CARTE VISITE Gazelle rieuseL.png",
            description: "Mock-up de carte de visite",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 7,
            title: "Mock-up - Carte de Visite 2",
            category: "mockup",
            image: "assets/images/charte/Mock up/carte_de_visite_mock_up_2.jpg",
            description: "Mock-up de carte de visite alternative",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 8,
            title: "Mock-up - Polo Face",
            category: "mockup",
            image: "assets/images/charte/Mock up/Polo_De_Face_LogoBase.jpg",
            description: "Mock-up de polo vue de face",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 9,
            title: "Mock-up - Polo Dos",
            category: "mockup",
            image: "assets/images/charte/Mock up/Polo_De_Dos.jpg",
            description: "Mock-up de polo vue de dos",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 10,
            title: "Mock-up - Polo Logo Seul",
            category: "mockup",
            image: "assets/images/charte/Mock up/Polo_De_Face_Logo_Seul.jpg",
            description: "Mock-up de polo avec logo seul",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 11,
            title: "Mock-up - Polaire Face",
            category: "mockup",
            image: "assets/images/charte/Mock up/Polair_de_face.jpg",
            description: "Mock-up de polaire vue de face",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 12,
            title: "Mock-up - Polaire Dos",
            category: "mockup",
            image: "assets/images/charte/Mock up/Polair_de_dos.jpg",
            description: "Mock-up de polaire vue de dos",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 13,
            title: "Mock-up - Casque Noir Face",
            category: "mockup",
            image: "assets/images/charte/Mock up/Casque_Noir_de_face_Logo_Couleurs.jpg",
            description: "Mock-up de casque noir vue de face",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 14,
            title: "Mock-up - Casque Noir Côté",
            category: "mockup",
            image: "assets/images/charte/Mock up/Casque_Noir_de_cote_Logo_Couleurs.jpg",
            description: "Mock-up de casque noir vue de côté",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 15,
            title: "Mock-up - Casque Noir Face Blanc",
            category: "mockup",
            image: "assets/images/charte/Mock up/Casque_Noir_de_face_Logo_Blanc.jpg",
            description: "Mock-up de casque noir avec logo blanc",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 16,
            title: "Mock-up - Casque Noir Côté Blanc",
            category: "mockup",
            image: "assets/images/charte/Mock up/Casque_Noir_de_cote_Logo_Blanc.jpg",
            description: "Mock-up de casque noir vue de côté avec logo blanc",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 17,
            title: "Mock-up - Casque Orange Face",
            category: "mockup",
            image: "assets/images/charte/Mock up/Casque_orange_de_face_Logo_NOIR.jpg",
            description: "Mock-up de casque orange vue de face",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 18,
            title: "Mock-up - Casque Orange Côté",
            category: "mockup",
            image: "assets/images/charte/Mock up/Casque_orange_de_cote_Logo_NOIR.jpg",
            description: "Mock-up de casque orange vue de côté",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 19,
            title: "Mock-up - Camion Vue Droite",
            category: "mockup",
            image: "assets/images/charte/Mock up/Camion_vue_de_droite.jpg",
            description: "Mock-up de camion vue de droite",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 20,
            title: "Mock-up - Camion Vue Arrière",
            category: "mockup",
            image: "assets/images/charte/Mock up/Camion_vue_de_derriere.jpg",
            description: "Mock-up de camion vue arrière",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 21,
            title: "Mock-up - Spotify",
            category: "mockup",
            image: "assets/images/charte/Mock up/Spotify_PhoneMosckup.jpg",
            description: "Mock-up d'application Spotify",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 22,
            title: "Mock-up - Vinyle",
            category: "mockup",
            image: "assets/images/charte/Mock up/cover_Vinyl_Mockup_&&@1,5x.jpg",
            description: "Mock-up de pochette vinyle",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 23,
            title: "Mock-up - Gazelle",
            category: "mockup",
            image: "assets/images/charte/Mock up/Gazelle.png",
            description: "Mock-up de l'identité Gazelle",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 24,
            title: "Mock-up - Vaara",
            category: "mockup",
            image: "assets/images/charte/Mock up/vaara2.png",
            description: "Mock-up de l'identité Vaara",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 25,
            title: "Mock-up - Vaara Original",
            category: "mockup",
            image: "assets/images/charte/Mock up/vaara.png",
            description: "Mock-up original de l'identité Vaara",
            client: "ID Gazelle",
            year: "2024"
        },
        {
            id: 26,
            title: "Logo - Fluide Air",
            category: "logo",
            image: "assets/images/charte/logo/Fluide air.png",
            description: "Logo pour Fluide Air",
            client: "Fluide Air",
            year: "2024"
        },
        {
            id: 27,
            title: "Logo - Underground Corner (Noir)",
            category: "logo",
            image: "assets/images/charte/logo/underground corner_ LOGO_DROIT_NOIR.png.png",
            description: "Logo noir pour Underground Corner",
            client: "Underground Corner",
            year: "2024"
        },
        {
            id: 28,
            title: "Logo - Underground Corner (Blanc)",
            category: "logo",
            image: "assets/images/charte/logo/underground corner_ LOGO_DROIT_BLANC.png",
            description: "Logo blanc pour Underground Corner",
            client: "Underground Corner",
            year: "2024"
        },
        {
            id: 29,
            title: "Logo - Underground Corner (Full White)",
            category: "logo",
            image: "assets/images/charte/logo/underground corner_ FULL_LOGO_WHITE.png",
            description: "Logo complet blanc pour Underground Corner",
            client: "Underground Corner",
            year: "2024"
        },
        {
            id: 30,
            title: "Logo - Gazelle",
            category: "logo",
            image: "assets/images/charte/logo/Logo_Gazelle_Couleur_Avec_Fond.png copie 2.png",
            description: "Logo couleur pour Gazelle",
            client: "Gazelle",
            year: "2024"
        }
    ],
    design: [
        {
            id: 1,
            title: "Cover - Blur Final",
            category: "cover",
            image: "assets/images/design/Cover/Blur FINAL.PNG",
            description: "Cover design pour Blur",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 2,
            title: "Cover - Blur Final 2",
            category: "cover",
            image: "assets/images/design/Cover/Blur FINAL 2.PNG",
            description: "Cover design alternatif pour Blur",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 3,
            title: "Cover - Trapped in Paradise",
            category: "cover",
            image: "assets/images/design/Cover/TTRAPPED-IN-PARADISE-100.JPG",
            description: "Cover design pour Trapped in Paradise",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 4,
            title: "Cover - Portrait 1",
            category: "cover",
            image: "assets/images/design/Cover/IMG_8464.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 5,
            title: "Cover - Portrait 2",
            category: "cover",
            image: "assets/images/design/Cover/IMG_8123.jpg",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 6,
            title: "Cover - Portrait 3",
            category: "cover",
            image: "assets/images/design/Cover/IMG_7815.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 7,
            title: "Cover - Portrait 4",
            category: "cover",
            image: "assets/images/design/Cover/IMG_7873.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 8,
            title: "Cover - Portrait 5",
            category: "cover",
            image: "assets/images/design/Cover/IMG_2832.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 9,
            title: "Cover - Portrait 6",
            category: "cover",
            image: "assets/images/design/Cover/IMG_3093.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 10,
            title: "Cover - Portrait 7",
            category: "cover",
            image: "assets/images/design/Cover/IMG_2843.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 11,
            title: "Cover - Portrait 8",
            category: "cover",
            image: "assets/images/design/Cover/IMG_2842.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 12,
            title: "Cover - Portrait 9",
            category: "cover",
            image: "assets/images/design/Cover/IMG_1149.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 13,
            title: "Cover - Portrait 10",
            category: "cover",
            image: "assets/images/design/Cover/IMG_8921.JPG",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 14,
            title: "Cover - Portrait 11",
            category: "cover",
            image: "assets/images/design/Cover/IMG_8026.jpg",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 15,
            title: "Cover - Portrait 12",
            category: "cover",
            image: "assets/images/design/Cover/IMG_2386.jpg",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 16,
            title: "Cover - Portrait 13",
            category: "cover",
            image: "assets/images/design/Cover/cover2.jpg",
            description: "Cover design avec portrait",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 1,
            title: "Joker 2 - Affiche Alternative",
            category: "affiche",
            image: "assets/images/design/affiche/jokeR.png",
            description: "Affiche alternative pour le film Joker 2, mettant en avant l'aspect psychologique du personnage",
            client: "Projet Personnel - Fan Art",
            year: "2023"
        },
        {
            id: 2,
            title: "Django Unchained - Affiche Minimaliste",
            category: "affiche",
            image: "assets/images/design/affiche/djan.png",
            description: "Réinterprétation minimaliste de l'affiche du film Django Unchained",
            client: "Projet Personnel - Fan Art",
            year: "2023"
        },
        {
            id: 3,
            title: "Joker 2 - Affiche Concept",
            category: "affiche",
            image: "assets/images/design/affiche/joker (2).png",
            description: "Affiche concept pour Joker 2, explorant une approche plus sombre et psychologique",
            client: "Projet Personnel - Fan Art",
            year: "2023"
        },
        {
            id: 4,
            title: "The Weeknd - After Hours",
            category: "affiche",
            image: "assets/images/design/affiche/the weeknd1.png",
            description: "Affiche concept pour l'album After Hours de The Weeknd",
            client: "Projet Personnel - Fan Art",
            year: "2024"
        },
        {
            id: 5,
            title: "The Weeknd - Dawn FM",
            category: "affiche",
            image: "assets/images/design/affiche/The weeknd 2.png",
            description: "Affiche concept pour l'album Dawn FM de The Weeknd",
            client: "Projet Personnel - Fan Art",
            year: "2024"
        },
        {
            id: 6,
            title: "The Weeknd - Starboy",
            category: "affiche",
            image: "assets/images/design/affiche/The weeknd 3.png",
            description: "Affiche concept pour l'album Starboy de The Weeknd",
            client: "Projet Personnel - Fan Art",
            year: "2024"
        },
        {
            id: 7,
            title: "Harry Potter",
            description: "Affiche minimaliste de la saga Harry Potter",
            image: "assets/images/design/affiche/harry potter minimaliste.png",
            category: "affiche",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 8,
            title: "Back to the Future",
            description: "Affiche minimaliste de la trilogie Retour vers le Futur",
            image: "assets/images/design/affiche/back to the future minimaliste.png",
            category: "affiche",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 9,
            title: "Les Gardiens de la Galaxie",
            description: "Affiche minimaliste des Gardiens de la Galaxie",
            image: "assets/images/design/affiche/gradien galaxie minimaliste.png",
            category: "affiche",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 10,
            title: "Monstres et Cie",
            description: "Affiche minimaliste de Monstres et Cie",
            image: "assets/images/design/affiche/monster et cie minimaliste.png",
            category: "affiche",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 11,
            title: "La Haut - Affiche Minimaliste",
            category: "affiche",
            image: "assets/images/design/affiche/la haut minimaliste.jpg",
            description: "Design minimaliste pour le film La Haut",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 12,
            title: "Ratatouille - Affiche Minimaliste",
            category: "affiche",
            image: "assets/images/design/affiche/ratatouille minimaliste.jpg",
            description: "Affiche minimaliste pour le film Ratatouille",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 13,
            title: "Design Concept - VAGA",
            category: "concept",
            image: "assets/images/design/concept/VAGA.png",
            description: "Design concept pour VAGA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 14,
            title: "Design Concept - VAG",
            category: "concept",
            image: "assets/images/design/concept/VAG.png",
            description: "Design concept pour VAG",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 15,
            title: "Design Concept - BER4",
            category: "concept",
            image: "assets/images/design/concept/ber4.png",
            description: "Design concept BER4",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 16,
            title: "Design Concept - EZF",
            category: "concept",
            image: "assets/images/design/concept/ezf.png",
            description: "Design concept EZF",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 17,
            title: "Design Concept - BER3",
            category: "concept",
            image: "assets/images/design/concept/ber3.png",
            description: "Design concept BER3",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 18,
            title: "Design Concept - BER23",
            category: "concept",
            image: "assets/images/design/concept/ber23.png",
            description: "Design concept BER23",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 19,
            title: "Design Concept - BER2",
            category: "concept",
            image: "assets/images/design/concept/ber2.png",
            description: "Design concept BER2",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 20,
            title: "Design Concept - BER",
            category: "concept",
            image: "assets/images/design/concept/ber.png",
            description: "Design concept BER",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 21,
            title: "Design Concept - MUST",
            category: "concept",
            image: "assets/images/design/concept/MUST.png",
            description: "Design concept MUST",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 22,
            title: "Design Concept - CHE",
            category: "concept",
            image: "assets/images/design/concept/CHE.png",
            description: "Design concept CHE",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 23,
            title: "Design Concept - ROSE",
            category: "concept",
            image: "assets/images/design/concept/ROSE.png",
            description: "Design concept ROSE",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 24,
            title: "Design Concept - LOOK",
            category: "concept",
            image: "assets/images/design/concept/LOOK.png",
            description: "Design concept LOOK",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 25,
            title: "Design Concept - TRA3",
            category: "concept",
            image: "assets/images/design/concept/TRA3.png",
            description: "Design concept TRA3",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 26,
            title: "Design Concept - TRA2",
            category: "concept",
            image: "assets/images/design/concept/TRA2.png",
            description: "Design concept TRA2",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 27,
            title: "Design Concept - TRA",
            category: "concept",
            image: "assets/images/design/concept/TRA.png",
            description: "Design concept TRA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 28,
            title: "Design Concept - Memento",
            category: "concept",
            image: "assets/images/design/concept/memento.png",
            description: "Design concept Memento",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 29,
            title: "Design Concept - Medusa",
            category: "concept",
            image: "assets/images/design/concept/Medusa.png",
            description: "Design concept Medusa",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 30,
            title: "Design Concept - F",
            category: "concept",
            image: "assets/images/design/concept/f.png",
            description: "Design concept F",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 31,
            title: "Design Concept - Plan de travail",
            category: "concept",
            image: "assets/images/design/concept/Plan de travail 1.png",
            description: "Design concept Plan de travail",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 32,
            title: "Design Concept - FFEZF",
            category: "concept",
            image: "assets/images/design/concept/ffezf.png",
            description: "Design concept FFEZF",
            client: "Projet Personnel",
            year: "2024"
        }
    ],
    video: [
        {
            id: 1,
            title: "Dust and Waves",
            category: "ia",
            image: "assets/images/video/IA/Dust and Waves (ia).mp4",
            description: "Création vidéo générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 2,
            title: "Echoes",
            category: "ia",
            image: "assets/images/video/IA/Echoes (ia).mp4",
            description: "Création vidéo générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 3,
            title: "Collapse Down",
            category: "ia",
            image: "assets/images/video/IA/COLLAPSE DOWN.mp4",
            description: "Création vidéo générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 4,
            title: "The Dying Worlds",
            category: "ia",
            image: "assets/images/video/IA/The Dying Worlds - Short Film IA.mp4",
            description: "Court métrage généré par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 5,
            title: "Vidéo Promo - Experience Mom",
            category: "promo",
            image: "assets/images/video/Promos/exp mom.mp4",
            description: "Vidéo promotionnelle pour Experience Mom",
            client: "Experience Mom",
            year: "2024"
        },
        {
            id: 6,
            title: "Vidéo Promo - Shoot",
            category: "promo",
            image: "assets/images/video/Promos/SHOOT.mp4",
            description: "Vidéo promotionnelle d'un shooting photo",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 7,
            title: "Making Of - Behind The Scenes",
            category: "promo",
            image: "assets/images/video/Promos/bts.mp4",
            description: "Making of et coulisses d'un projet",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 8,
            title: "Clip - Dla Night Business",
            category: "promo",
            image: "assets/images/video/Promos/dlanight_business_lyrics_VIDEO_V01.mp4",
            description: "Clip vidéo avec paroles pour Dla Night Business",
            client: "Dla Night Business",
            year: "2024"
        },
        {
            id: 9,
            title: "Promo Dla Night - Version 1",
            category: "promo",
            image: "assets/images/video/Promos/dlanight_Pomov1.mp4",
            description: "Première version de la vidéo promo Dla Night",
            client: "Dla Night Business",
            year: "2024"
        },
        {
            id: 10,
            title: "Promo Dla Night - Version 2",
            category: "promo",
            image: "assets/images/video/Promos/dlanight_Promov2.mp4",
            description: "Deuxième version de la vidéo promo Dla Night",
            client: "Dla Night Business",
            year: "2024"
        },
        {
            id: 11,
            title: "CV Vidéo",
            category: "motion",
            image: "assets/images/video/Motion/CV video.mp4",
            description: "Vidéo de présentation CV",
            client: "Projet Personnel",
            year: "2024"
        }
    ],
    uiux: [
        {
            id: 1,
            title: "Application Mobile - Fitness",
            category: "mobile",
            image: "assets/images/uiux/Mobile/wireframe — 13 juillet, 14.25.21.pdf",
            description: "Design d'interface pour une application de fitness",
            client: "FitLife App",
            year: "2024"
        },
        {
            id: 2,
            title: "Site Web E-commerce",
            category: "web",
            image: "assets/images/uiux/ecommerce-web.jpg",
            description: "Design d'interface pour une boutique en ligne",
            client: "Online Shop",
            year: "2024"
        },
        {
            id: 3,
            title: "Wireframe Application Mobile",
            category: "mobile",
            image: "assets/images/uiux/Mobile/wireframe — 13 juillet, 14.25.21.pdf",
            description: "Wireframe détaillé pour une application mobile",
            client: "Projet Personnel",
            year: "2024"
        }
    ],
    photo: [
        // Photos iPhone
        {
            id: 1,
            title: "Photo iPhone 1",
            category: "iphone",
            image: "assets/images/photo/Photo iphone/IMG_9451.PNG",
            description: "Photographie prise avec iPhone",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 2,
            title: "Photo iPhone 2",
            category: "iphone",
            image: "assets/images/photo/Photo iphone/IMG_1418.jpg",
            description: "Photographie prise avec iPhone",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 3,
            title: "Photo iPhone 3",
            category: "iphone",
            image: "assets/images/photo/Photo iphone/IMG_0620_jpg.JPG",
            description: "Photographie prise avec iPhone",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 4,
            title: "Photo iPhone 4",
            category: "iphone",
            image: "assets/images/photo/Photo iphone/IMG_0536.JPG",
            description: "Photographie prise avec iPhone",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 5,
            title: "Photo iPhone 5",
            category: "iphone",
            image: "assets/images/photo/Photo iphone/IMG_4710.JPG",
            description: "Photographie prise avec iPhone",
            client: "Projet Personnel",
            year: "2024"
        },
        // Photos noir et blanc
        {
            id: 6,
            title: "Portrait en Noir et Blanc 1",
            category: "argentique",
            image: "assets/images/photo/argentique noir et blanc/000001.JPG",
            description: "Photographie argentique en noir et blanc",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 7,
            title: "Portrait en Noir et Blanc 2",
            category: "argentique",
            image: "assets/images/photo/argentique noir et blanc/000007.JPG",
            description: "Photographie argentique en noir et blanc",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 8,
            title: "Paysage en Couleur",
            category: "argentique",
            image: "assets/images/photo/argentique couleur/IMG_3376.JPG",
            description: "Photographie argentique en couleur",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 9,
            title: "Nature en Couleur",
            category: "argentique",
            image: "assets/images/photo/argentique couleur/IMG_3391.JPG",
            description: "Photographie argentique en couleur",
            client: "Projet Personnel",
            year: "2024"
        },
        // Photos couleur
        {
            id: 10,
            title: "Photo Couleur 1",
            category: "argentique",
            image: "assets/images/photo/argentique couleur/IMG_3376.JPG",
            description: "Photographie argentique en couleur",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 11,
            title: "Photo Couleur 2",
            category: "argentique",
            image: "assets/images/photo/argentique couleur/IMG_3379.jpg",
            description: "Photographie argentique en couleur",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 12,
            title: "Photo Couleur 3",
            category: "argentique",
            image: "assets/images/photo/argentique couleur/IMG_3391.JPG",
            description: "Photographie argentique en couleur",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 13,
            title: "Photo Couleur 4",
            category: "argentique",
            image: "assets/images/photo/argentique couleur/IMG_3401.jpg",
            description: "Photographie argentique en couleur",
            client: "Projet Personnel",
            year: "2024"
        },
        // Photos IA
        {
            id: 14,
            title: "Création IA 1",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-02-07-05_25_52.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 15,
            title: "Création IA 2",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-02-07-05_25_05.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 16,
            title: "Création IA 3",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-02-06-14_52_42.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 17,
            title: "Création IA 4",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-02-06-14_51_10.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 18,
            title: "Création IA 5",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-02-06-14_52_04.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 19,
            title: "Création IA 6",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-31-20_09_35.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 20,
            title: "Création IA 7",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_50_23.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 21,
            title: "Création IA 8",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_50_30 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 22,
            title: "Création IA 9",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_49_52 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 23,
            title: "Création IA 10",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_47_36 (4).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 24,
            title: "Création IA 11",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_47_39 (2).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 25,
            title: "Création IA 12",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_46_04.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 26,
            title: "Création IA 13",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_44_08 (4).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 27,
            title: "Création IA 14",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_44_02 (3).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 28,
            title: "Création IA 15",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_41_43 (3).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 29,
            title: "Création IA 16",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_41_43 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 30,
            title: "Création IA 17",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_40_02 (2).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 31,
            title: "Création IA 18",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_38_29.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 32,
            title: "Création IA 19",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_38_27 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 33,
            title: "Création IA 20",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_36_32 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 34,
            title: "Création IA 21",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_36_36.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 35,
            title: "Création IA 22",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_34_47 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 36,
            title: "Création IA 23",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_32_55 (3).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 37,
            title: "Création IA 24",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_32_55 (2).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 38,
            title: "Création IA 25",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_32_55.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 39,
            title: "Création IA 26",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_32_52 (3).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 40,
            title: "Création IA 27",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_32_52 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 41,
            title: "Création IA 28",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_31_15.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 42,
            title: "Création IA 29",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_31_18.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 43,
            title: "Création IA 30",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_29_15.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 44,
            title: "Création IA 31",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_27_16 (4).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 45,
            title: "Création IA 32",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_27_14.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 46,
            title: "Création IA 33",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_25_08 (3).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 47,
            title: "Création IA 34",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_25_08 (2).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 48,
            title: "Création IA 35",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_25_02.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 49,
            title: "Création IA 36",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_23_22 (3).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 50,
            title: "Création IA 37",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_23_17.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 51,
            title: "Création IA 38",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_16_19.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 52,
            title: "Création IA 39",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_15_54.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 53,
            title: "Création IA 40",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_15_51 (1).jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 54,
            title: "Création IA 41",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_13_45.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 55,
            title: "Création IA 42",
            category: "ia",
            image: "assets/images/photo/ia/FLUX-2025-01-29-15_13_06.jpg",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 56,
            title: "Création IA 43",
            category: "ia",
            image: "assets/images/photo/ia/Midjourney-2025-01-29-15_10_59.png",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 57,
            title: "Création IA 44",
            category: "ia",
            image: "assets/images/photo/ia/Midjourney-2025-01-29-15_10_37.png",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 58,
            title: "Création IA 45",
            category: "ia",
            image: "assets/images/photo/ia/Recraft-2025-01-29-15_05_49.webp",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 59,
            title: "Création IA 46",
            category: "ia",
            image: "assets/images/photo/ia/Recraft-2025-01-29-15_03_50.webp",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 60,
            title: "Création IA 47",
            category: "ia",
            image: "assets/images/photo/ia/Midjourney-2025-01-29-15_02_38.png",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 61,
            title: "Création IA 48",
            category: "ia",
            image: "assets/images/photo/ia/Recraft-2025-01-29-15_03_13.webp",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        },
        {
            id: 62,
            title: "Création IA 49",
            category: "ia",
            image: "assets/images/photo/ia/Recraft-2025-01-29-15_00_23.webp",
            description: "Création artistique générée par IA",
            client: "Projet Personnel",
            year: "2024"
        }
    ]
}; */

/* ============================================================================
 * 2️⃣ SECTION DONNÉES - Chargement des fichiers JSON
 * Lignes : 1406-1499
 * Statut : 🔴 CRITIQUE (essentiel au fonctionnement)
 * Rôle : Charge les données des projets depuis projects.json
 *        Charge la configuration des filtres depuis types-by-chapter.json
 *        Charge les cartes homepage depuis homepage-cards.json (suspect)
 * Impact si supprimée : Site cassé - Aucun projet ne s'afficherait
 * ============================================================================ */

let projects = null; // Structure: { projects: [...] }
let typesByChapter = null;
// ⚠️ LEGACY / SUSPECT: Variable chargée mais jamais utilisée - À VALIDER
let homepageCards = null;

// Mapping entre les catégories HTML (data-category) et les chapitres JSON (chapter)
const categoryToChapterMap = {
    'charte': 'identite-branding',
    'design': 'declinaisons-visuelles',
    'video': 'identite-en-mouvement'
};

// Mapping inverse (chapter -> category)
const chapterToCategoryMap = {
    'identite-branding': 'charte',
    'declinaisons-visuelles': 'design',
    'identite-en-mouvement': 'video'
};

// Fonction de transformation typographique (identique à celle du script Node.js)
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

// Fonction pour déterminer le type de fichier
function getFileType(filename) {
    const ext = filename.toLowerCase().split('.').pop();
    if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) return 'image';
    if (['mp4', 'webm'].includes(ext)) return 'video';
    if (ext === 'pdf') return 'pdf';
    return 'unknown';
}

async function loadProjects() {
    try {
        const res = await fetch('projects.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // Nouvelle structure: { projects: [...] }
        projects = data.projects || [];
        console.info(`Projets chargés depuis projects.json: ${projects.length} projets`);
    } catch (err) {
        console.error('Échec du chargement de projects.json:', err);
        projects = [];
    }
}

async function loadTypesByChapter() {
    try {
        const res = await fetch('types-by-chapter.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        typesByChapter = await res.json();
        console.info('Types par chapitre chargés depuis types-by-chapter.json');
    } catch (err) {
        console.error('Échec du chargement de types-by-chapter.json:', err);
        typesByChapter = {};
    }
}

// ⚠️ LEGACY / SUSPECT: Fonction chargée mais résultat jamais utilisé - À VALIDER
async function loadHomepageCards() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1458',message:'loadHomepageCards entry',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    try {
        const res = await fetch('homepage-cards.json', { cache: 'no-cache' });
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1461',message:'homepage-cards.json fetch response',data:{ok:res.ok,status:res.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        homepageCards = await res.json();
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1464',message:'homepageCards loaded',data:{hasCharte:!!homepageCards.charte,hasDesign:!!homepageCards.design,hasVideo:!!homepageCards.video,charteKeys:homepageCards.charte?Object.keys(homepageCards.charte):[]},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        console.info('Cartes homepage chargées depuis homepage-cards.json');
    } catch (err) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1466',message:'homepage-cards.json load error',data:{error:err.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        console.error('Échec du chargement de homepage-cards.json:', err);
        homepageCards = {};
    }
}

/* ============================================================================
 * 3️⃣ SECTION NAVIGATION - Menu et filtres
 * Lignes : 1502-1557
 * Statut : 🔴 CRITIQUE (essentiel à la navigation)
 * Rôle : Génère les boutons de filtres (Tous, Logos, Affiches, etc.)
 *        Gère le menu mobile (hamburger sur petits écrans)
 *        Formate les noms des filtres (ex: "montage-video" → "Montage Vidéo")
 * Impact si supprimée : Pas de filtres - Menu mobile cassé
 * ============================================================================ */

// Fonction pour générer dynamiquement les filtres dans le HTML
function generateFilters() {
    if (!typesByChapter) {
        console.warn('typesByChapter non chargé, impossible de générer les filtres');
        return;
    }
    
    // Mapping des sections HTML vers les catégories
    const sectionMapping = {
        'identite': 'charte',
        'declinaisons': 'design',
        'mouvement': 'video'
    };
    
    // Générer les filtres pour chaque section
    Object.keys(sectionMapping).forEach(sectionId => {
        const category = sectionMapping[sectionId];
        const filterContainer = document.querySelector(`.filter-buttons[data-section="${sectionId}"]`);
        
        if (!filterContainer) {
            console.warn(`Conteneur de filtres non trouvé pour la section ${sectionId}`);
            return;
        }
        
        const types = typesByChapter[category] || [];
        
        // Vider le conteneur (garder seulement le bouton "Tous")
        filterContainer.innerHTML = '<button class="filter-btn active" data-filter="all">Tous</button>';
        
        // Ajouter les filtres pour chaque type
        types.forEach(typeName => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.setAttribute('data-filter', typeName);
            button.textContent = formatFilterName(typeName);
            filterContainer.appendChild(button);
        });
    });
    
    // Réinitialiser les filtres après génération
    initializeFilters();
}

// Gestion du menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* ============================================================================
 * 4️⃣ SECTION PORTFOLIO - Affichage des projets
 * Lignes : 1561-2310
 * Statut : 🔴 CRITIQUE (cœur du site)
 * Rôle : Génère les cartes de projets affichées dans chaque section
 *        Gère le filtrage quand on clique sur un filtre (Tous, Logos, etc.)
 *        Affiche les projets dans les grilles visuelles
 *        Gère le clic sur une carte pour ouvrir les détails
 * Impact si supprimée : Aucun projet visible - Site inutilisable
 * ============================================================================ */

// Fonction pour générer les cartes de la homepage depuis projects.json
// Chaque carte représente un vrai projet, pas une catégorie abstraite
function generateHomepageCards(category) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1558',message:'generateHomepageCards entry',data:{category,hasProjects:!!projects,projectsLength:projects?.length||0,hasTypesByChapter:!!typesByChapter,typesByChapterKeys:typesByChapter?Object.keys(typesByChapter):[]},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,D'})}).catch(()=>{});
    // #endregion
    // Vérifier que projects.json est disponible (nouvelle structure: tableau)
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1561',message:'projects not available',data:{category},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        console.warn(`projects.json non disponible ou vide`);
        return [];
    }
    
    // Vérifier que typesByChapter est disponible
    if (!typesByChapter || !typesByChapter[category]) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1567',message:'typesByChapter not available',data:{category,typesByChapterValue:typesByChapter?typesByChapter[category]:'null'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
        console.warn(`typesByChapter non disponible pour ${category}`);
        return [];
    }
    
    // Mapper la catégorie HTML vers le chapitre JSON
    const chapter = categoryToChapterMap[category];
    if (!chapter) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1574',message:'category not mapped',data:{category},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        console.warn(`Catégorie non mappée: ${category}`);
        return [];
    }
    
    const cards = [];
    const types = typesByChapter[category] || [];
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1579',message:'types found',data:{category,chapter,typesCount:types.length,types:types},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Pour chaque sous-catégorie, choisir 1 projet réel depuis projects.json
    types.forEach(typeName => {
        // Filtrer les projets par chapter et subcategory
        const projectsForType = projects.filter(project => 
            project.chapter === chapter && project.subcategory === typeName
        );
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1584',message:'filtering projects for type',data:{category,chapter,typeName,projectsForTypeCount:projectsForType.length,allProjectsWithChapter:projects.filter(p=>p.chapter===chapter).map(p=>({id:p.id,subcategory:p.subcategory}))},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        
        if (projectsForType.length > 0) {
            // Sélectionner aléatoirement un projet parmi ceux disponibles pour ce type
            const randomIndex = Math.floor(Math.random() * projectsForType.length);
            const selectedProject = projectsForType[randomIndex];
            
            // Utiliser le projet complet comme source de vérité (nouvelle structure)
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1611',message:'creating card from project',data:{projectId:selectedProject.id,hasContexte:!!selectedProject.contexte,hasDemarche:!!selectedProject.demarche,hasResultat:!!selectedProject.resultat,hasDescription:!!selectedProject.description},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
            // #endregion
            cards.push({
                id: selectedProject.id,
                cover: selectedProject.cover, // Nouveau nom: cover au lieu de coverImage
                category: selectedProject.subcategory, // Pour compatibilité avec le reste du code
                subcategory: selectedProject.subcategory,
                chapter: selectedProject.chapter,
                title: selectedProject.title,
                description: selectedProject.description || '',
                contexte: selectedProject.contexte || '', // Copier les champs du slider
                demarche: selectedProject.demarche || '',
                resultat: selectedProject.resultat || '',
                client: selectedProject.client || '',
                year: selectedProject.year || '',
                assets: selectedProject.assets || [] // Nouveau nom: assets au lieu de images
            });
        } else {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1607',message:'no projects found for type',data:{category,chapter,typeName},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
            // #endregion
            console.warn(`Aucun projet trouvé pour ${category}/${typeName} (chapter: ${chapter})`);
        }
    });
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1611',message:'generateHomepageCards exit',data:{category,cardsCount:cards.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,E'})}).catch(()=>{});
    // #endregion
    
    return cards;
}

// Filtrage des projets
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Trouver la section parente
            const section = button.closest('.portfolio-section');
            const grid = section.querySelector('.portfolio-grid');
            const category = grid.dataset.category;
            const filter = button.dataset.filter;

            // Mise à jour des classes actives
            section.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Filtrage des projets (nouvelle structure: tableau unique)
            if (filter === 'all') {
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1633',message:'filter all clicked',data:{category,filter,hasProjects:!!projects,projectsLength:projects?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,C'})}).catch(()=>{});
                // #endregion
                // Mode "Tous" : générer les cartes depuis projects.json
                const homepageCardsList = generateHomepageCards(category);
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1636',message:'homepageCardsList generated',data:{category,homepageCardsListLength:homepageCardsList.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,E'})}).catch(()=>{});
                // #endregion
                
                if (homepageCardsList.length > 0) {
                    // #region agent log
                    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1638',message:'using homepageCardsList',data:{category,cardsCount:homepageCardsList.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
                    // #endregion
                    // Limiter à 3 cartes maximum (ou 2 pour vidéo)
                    const maxCards = category === 'video' ? 2 : 3;
                    const cardsToShow = homepageCardsList.slice(0, maxCards);
                    displayHomepageCards(cardsToShow, grid, category);
                } else {
                    // #region agent log
                    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1643',message:'using fallback',data:{category,hasProjects:!!projects,projectsLength:projects?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,C'})}).catch(()=>{});
                    // #endregion
                    // Fallback : utiliser projects.json si disponible
                    if (projects && Array.isArray(projects) && projects.length > 0) {
                        const chapter = categoryToChapterMap[category];
                        if (chapter) {
                            const projectsPerPage = category === 'video' ? 2 : 3;
                            const allCategoryProjects = projects.filter(p => p.chapter === chapter);
                            // #region agent log
                            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1649',message:'fallback filtering',data:{category,chapter,allCategoryProjectsCount:allCategoryProjects.length,allCategoryProjectsIds:allCategoryProjects.map(p=>p.id)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                            // #endregion
                            const shuffled = [...allCategoryProjects];
                            
                            for (let i = shuffled.length - 1; i > 0; i--) {
                                const j = Math.floor(Math.random() * (i + 1));
                                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                            }
                            
                            const filteredProjects = shuffled.slice(0, projectsPerPage);
                            // #region agent log
                            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1657',message:'calling displayProjects',data:{category,filteredProjectsCount:filteredProjects.length,filteredProjectsIds:filteredProjects.map(p=>p.id)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                            // #endregion
                            displayProjects(filteredProjects, grid);
                        }
                    } else {
                        // #region agent log
                        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1660',message:'fallback failed no projects',data:{category},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
                        // #endregion
                    }
                }
            } else {
                // Filtre spécifique : utiliser projects.json pour les détails complets
                if (projects && Array.isArray(projects) && projects.length > 0) {
                    const chapter = categoryToChapterMap[category];
                    if (chapter) {
                        const filteredProjects = projects.filter(project => 
                            project.chapter === chapter && project.subcategory === filter
                        );
                        displayProjects(filteredProjects, grid);
                    }
                }
            }
        });
    });
}

/* ============================================================================
 * 6️⃣ SECTION ANIMATIONS - Effets visuels au scroll
 * Lignes : 1732-2454
 * Statut : 🟡 OPTIONNEL (améliore l'expérience mais non essentiel)
 * Rôle : Déclenche des animations quand les sections entrent dans la vue
 *        Réduit le logo progressivement quand on scroll
 *        Anime les cartes à leur apparition (fade in, slide)
 *        Gère les animations de la section héro
 * Impact si supprimée : Pas d'animations - Expérience moins premium
 * ============================================================================ */

// Configuration de l'IntersectionObserver
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observer pour les animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            if (element.classList.contains('portfolio-section')) {
                element.style.animation = 'fadeInUp 0.8s ease forwards';
            } else if (element.classList.contains('about-section')) {
                // Animation subtile pour la section À propos
                element.classList.add('fade-in');
                const aboutImage = element.querySelector('.about-image');
                const aboutContent = element.querySelector('.about-content');
                if (aboutImage) aboutImage.classList.add('fade-in');
                if (aboutContent) aboutContent.classList.add('fade-in');
            } else if (element.classList.contains('project-card')) {
                const delay = element.dataset.index * 0.1;
                element.style.animation = `fadeInUp 0.6s ease ${delay}s forwards`;
            } else if (element.classList.contains('hero-content')) {
                const children = element.children;
                Array.from(children).forEach((child, index) => {
                    child.style.animation = `fadeInUp 0.8s ease ${index * 0.2}s forwards`;
                });
            }
            
            animationObserver.unobserve(element);
        }
    });
}, observerOptions);

// Observer pour l'affichage des projets
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const grid = entry.target;
            if (grid.classList.contains('portfolio-grid')) {
                const category = grid.dataset.category;
                const activeFilter = grid.closest('.portfolio-section').querySelector('.filter-btn.active');
                const filter = activeFilter ? activeFilter.dataset.filter : 'all';
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1656',message:'projectsObserver triggered',data:{category,filter,isIntersecting:entry.isIntersecting},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                // #endregion
                
                if (filter === 'all') {
                    // Mode "Tous" : générer les cartes depuis projects.json
                    const homepageCardsList = generateHomepageCards(category);
                    
                    if (homepageCardsList.length > 0) {
                        const maxCards = category === 'video' ? 2 : 3;
                        const cardsToShow = homepageCardsList.slice(0, maxCards);
                        displayHomepageCards(cardsToShow, grid, category);
                    } else if (projects && Array.isArray(projects) && projects.length > 0) {
                        // Fallback : utiliser projects.json si disponible
                        const chapter = categoryToChapterMap[category];
                        if (chapter) {
                            const projectsPerPage = category === 'video' ? 2 : 3;
                            const allCategoryProjects = projects.filter(p => p.chapter === chapter);
                            const shuffled = [...allCategoryProjects];
                            
                            for (let i = shuffled.length - 1; i > 0; i--) {
                                const j = Math.floor(Math.random() * (i + 1));
                                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                            }
                            
                            const filteredProjects = shuffled.slice(0, projectsPerPage);
                            displayProjects(filteredProjects, grid);
                        }
                    }
                } else {
                    // Filtre spécifique : utiliser projects.json
                    if (projects && Array.isArray(projects) && projects.length > 0) {
                        const chapter = categoryToChapterMap[category];
                        if (chapter) {
                            const filteredProjects = projects.filter(project => 
                                project.chapter === chapter && project.subcategory === filter
                            );
                            displayProjects(filteredProjects, grid);
                        }
                    }
                }
            }
        }
    });
}, observerOptions);

// Fonction pour initialiser les animations et l'affichage
function initializeContent() {
    // Observer les sections de portfolio
    document.querySelectorAll('.portfolio-section').forEach(section => {
        section.style.opacity = '0';
        animationObserver.observe(section);
    });

    // Observer la section À propos
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        animationObserver.observe(aboutSection);
    }

    // Observer les grilles de projets
    document.querySelectorAll('.portfolio-grid').forEach(grid => {
        projectsObserver.observe(grid);
    });

    // Observer le contenu de la section héro
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        Array.from(heroContent.children).forEach(child => {
            child.style.opacity = '0';
        });
        animationObserver.observe(heroContent);
    }
}

// Ajouter les styles d'animation au document
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .portfolio-section {
        opacity: 0;
    }

    .project-card {
        opacity: 0;
    }

    .hero-content > * {
        opacity: 0;
    }
`;
document.head.appendChild(styleSheet);

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les références de la modal
    modal = document.getElementById('imageModal');
    modalImg = document.getElementById('modalImage');
    modalTitle = document.getElementById('modalTitle');
    // Description gérée par le slider (contexte, démarche, résultat)
    modalClient = document.getElementById('modalClient');
    modalYear = document.getElementById('modalYear');
    modalCategory = document.getElementById('modalCategory');
    closeBtn = document.querySelector('.modal-close');
    
    // Initialiser les références de la navbar
    navbar = document.querySelector('.navbar');
    logo = document.querySelector('.logo');
    
    // Initialiser les event listeners de la modal
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        });
        
        // Fermer le modal en cliquant en dehors de l'image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Fermer le modal avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
    
    // ===== CODE DÉSACTIVÉ : Event listeners du logo pour le drag =====
    // Guard conditionnel : désactive définitivement l'interaction draggable
    const DRAG_INTERACTION_ENABLED = false; // Désactivé définitivement
    
    if (false && logo && DRAG_INTERACTION_ENABLED) { // Double guard : false && condition (jamais exécuté)
        // Code draggable (désactivé) - conservé pour référence future
        logo.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('logo')) {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialX = logo.getBoundingClientRect().left;
                initialY = logo.getBoundingClientRect().top;
                
                // Ajouter la classe pendant le déplacement
                logo.classList.add('dragging');
                
                // Empêcher la sélection de texte pendant le déplacement
                e.preventDefault();
            }
        });
    }
    // ===== FIN CODE DÉSACTIVÉ =====
    
    // ⚠️ LEGACY / SUSPECT: loadHomepageCards() chargé mais résultat jamais utilisé - À VALIDER
    Promise.all([loadProjects(), loadTypesByChapter(), loadHomepageCards()]).then(() => {
        generateFilters(); // Générer les filtres dynamiquement
        initializeContent();
        initializeFilters();
        lazyLoadImages();
        animateHeroSection();
        animateOnScroll();
        animateProjectCards();
    });
});

// Réinitialiser lors du retour en haut de page
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        initializeContent();
    }
});

// Définir l'ordre des catégories pour chaque section
const categoryOrder = {
    charte: ['branding', 'logo', 'mockup'],
    design: ['affiche', 'cover', 'concept'],
    video: ['promo', 'ia', 'motion'],
    uiux: ['web', 'mobile', 'app'],
    photo: ['argentique', 'ia', 'iphone']
};

// Fonction pour trier les projets selon l'ordre des catégories
function sortProjectsByCategory(projects, section) {
    const order = categoryOrder[section];
    return [...projects].sort((a, b) => {
        const indexA = order.indexOf(a.category);
        const indexB = order.indexOf(b.category);
        return indexA - indexB;
    });
}

// Fonction pour afficher les cartes de la homepage (générées depuis homepage-cards.json)
// NE DÉPEND PAS de projects.json
function displayHomepageCards(cardsToShow, grid, category) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1841',message:'displayHomepageCards entry',data:{category,cardsCount:cardsToShow.length,gridExists:!!grid},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    grid.innerHTML = '';
    
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    
    const isVideoSection = category === 'video';
    if (isVideoSection) {
        cardsContainer.style.maxWidth = '90%';
        cardsContainer.style.margin = '0 auto';
        cardsContainer.style.display = 'grid';
        cardsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        cardsContainer.style.gap = '2rem';
        cardsContainer.style.height = 'auto';
        grid.style.padding = '2rem 0';
    }
    
    grid.appendChild(cardsContainer);
    
    cardsToShow.forEach((card, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.opacity = '0';
        projectCard.dataset.index = index;
        
        // Style de base
        projectCard.style.width = '100%';
        projectCard.style.position = 'relative';
        projectCard.style.overflow = 'hidden';
        projectCard.style.borderRadius = '8px';
        projectCard.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        projectCard.style.cursor = 'pointer';
        projectCard.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        if (isVideoSection) {
            projectCard.classList.add('video-card');
            projectCard.style.aspectRatio = '1/1';
        } else {
            projectCard.style.aspectRatio = '3/4';
        }
        
        projectCard.style.display = 'none';
        
        // La carte affiche uniquement l'image de couverture (nouvelle structure: cover au lieu de coverImage)
        const coverImage = card.cover || card.coverImage; // Support des deux structures temporairement
        
        if (!coverImage) {
            console.warn(`Carte sans image de couverture`);
            return;
        }
        
        // Vérifier le type de coverImage
        const coverFileType = getFileType(coverImage);
        
        // Si coverImage est une vidéo, chercher la première image dans assets[] comme fallback
        // SAUF dans la section vidéo où on peut afficher la vidéo directement
        let finalCoverImage = coverImage;
        let isVideoCover = false;
        if (coverFileType === 'video') {
            if (isVideoSection) {
                // Dans la section vidéo, on peut afficher la vidéo directement comme cover
                isVideoCover = true;
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2015',message:'video cover in video section',data:{cardTitle:card.title,coverImage},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
                // #endregion
            } else {
                // Pour les autres sections, chercher une image dans assets[] comme fallback
                const assets = card.assets || card.images || [];
                const imageFallback = assets.find(asset => getFileType(asset) === 'image');
                if (imageFallback) {
                    finalCoverImage = imageFallback;
                } else {
                    // #region agent log
                    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2022',message:'card rejected no image fallback',data:{cardTitle:card.title,isVideoSection},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
                    // #endregion
                    console.warn(`Cover est une vidéo et aucune image trouvée dans assets pour ${card.title}`);
                    return; // On ne peut pas afficher une vidéo comme cover dans les sections non-vidéo
                }
            }
        } else if (coverFileType !== 'image') {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2026',message:'card rejected invalid cover type',data:{cardTitle:card.title,coverFileType},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
            // #endregion
            console.warn(`L'image de couverture n'est pas une image: ${coverImage}`);
            return;
        }
        
        // Encoder l'URL pour gérer les espaces et caractères spéciaux
        const encodedUrl = encodeURI(isVideoCover ? coverImage : finalCoverImage);
        // Dans la section vidéo, on peut afficher une vidéo comme cover
        const previewContent = isVideoCover 
            ? `<video src="${encodedUrl}" alt="${card.title}" muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;\\'>Vidéo non disponible</div>';"></video>`
            : `<img src="${encodedUrl}" alt="${card.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;\\'>Image non disponible</div>';">`;
        
        projectCard.innerHTML = `
            <div class="preview-container" style="width: 100%; height: 100%;">
                ${previewContent}
            </div>
            <div class="project-info" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%); color: white; padding: 2rem 1.5rem 1.5rem;">
                <h3 style="margin: 0; font-size: 1.5rem; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${card.title}</h3>
                <div class="project-meta" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">
                    <span>${card.client || ''}</span>
                    <span>${card.year || ''}</span>
                </div>
            </div>
        `;
        
        // Au clic, utiliser directement la carte comme projet (c'est déjà un vrai projet depuis projects.json)
        projectCard.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // La carte est déjà un projet complet depuis generateHomepageCards()
            // Adapter pour la nouvelle structure (cover/assets) et l'ancienne (coverImage/images) pour compatibilité
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2072',message:'creating projectToShow from card',data:{cardId:card.id,hasContexte:!!card.contexte,hasDemarche:!!card.demarche,hasResultat:!!card.resultat,hasDescription:!!card.description},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
            // #endregion
            const projectToShow = {
                id: card.id,
                title: card.title,
                description: card.description || '',
                contexte: card.contexte || '', // Copier les champs du slider
                demarche: card.demarche || '',
                resultat: card.resultat || '',
                client: card.client || '',
                year: card.year || '',
                category: card.category || card.subcategory,
                subcategory: card.subcategory,
                chapter: card.chapter,
                cover: card.cover || card.coverImage, // Support des deux structures
                coverImage: card.cover || card.coverImage, // Pour compatibilité avec showProjectDetails
                assets: card.assets || card.images || [],
                images: card.assets || card.images || [] // Pour compatibilité avec showProjectDetails
            };
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2087',message:'calling showProjectDetails',data:{projectToShowContexte:projectToShow.contexte,projectToShowDemarche:projectToShow.demarche,projectToShowResultat:projectToShow.resultat},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
            // #endregion
            
            showProjectDetails(projectToShow);
        });
        
        // Effets hover
        projectCard.addEventListener('mouseenter', () => {
            projectCard.style.transform = 'scale(1.02)';
            projectCard.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'scale(1)';
            projectCard.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        });
        
        cardsContainer.appendChild(projectCard);
        animationObserver.observe(projectCard);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2093',message:'card appended to container',data:{cardTitle:card.title,index,isVideoCover},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
    });
    
    // Afficher les cartes
    const cards = cardsContainer.querySelectorAll('.project-card');
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2100',message:'displayHomepageCards cards found',data:{cardsCount:cards.length,expectedCount:cardsToShow.length},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    cards.forEach((card, i) => {
        if (card) {
            card.style.display = 'block';
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1974',message:'card display set to block',data:{index:i,display:card.style.display},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
            // #endregion
            setTimeout(() => {
                card.style.animation = 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                card.classList.add('visible');
                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1977',message:'card animation started',data:{index:i},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
                // #endregion
            }, i * 100);
        }
    });
}

// Modifier la fonction displayProjects
function displayProjects(projectsToShow, grid) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2065',message:'displayProjects entry',data:{projectsToShowCount:projectsToShow?.length||0,projectsToShowIds:projectsToShow?.map(p=>p.id)||[],category:grid.dataset.category},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    const section = grid.dataset.category;
    // Trier les projets selon l'ordre des catégories
    const sortedProjects = sortProjectsByCategory(projectsToShow, section);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2068',message:'projects sorted',data:{section,sortedProjectsCount:sortedProjects?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    grid.innerHTML = '';
    
    // Créer un conteneur pour les cartes
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    
    // Déterminer si nous sommes dans la section vidéo
    const isVideoSection = grid.dataset.category === 'video';
    if (isVideoSection) {
        cardsContainer.style.maxWidth = '90%';
        cardsContainer.style.margin = '0 auto';
        cardsContainer.style.display = 'grid';
        cardsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        cardsContainer.style.gap = '2rem';
        cardsContainer.style.height = 'auto';
        grid.style.padding = '2rem 0';
    }
    
    grid.appendChild(cardsContainer);
    
    const projectsPerPage = isVideoSection ? 2 : 3;
    
    // Ajouter les projets triés
    sortedProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.opacity = '0';
        projectCard.dataset.index = index;
        
        // Style de base pour toutes les cartes
        projectCard.style.width = '100%';
        projectCard.style.position = 'relative';
        projectCard.style.overflow = 'hidden';
        projectCard.style.borderRadius = '8px';
        projectCard.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        projectCard.style.cursor = 'pointer';
        projectCard.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        // Style spécifique pour les vidéos
        if (isVideoSection) {
            projectCard.classList.add('video-card');
            projectCard.style.aspectRatio = '1/1';
            projectCard.style.height = 'auto';
        } else {
            // Style pour les autres types de cartes (affiches, photos, etc.)
            projectCard.style.aspectRatio = '3/4';
            projectCard.style.height = 'auto';
        }
        
        projectCard.style.display = 'none';

        // Support des deux structures : nouvelle (cover/assets) et ancienne (coverImage/images)
        let coverImage = project.cover || project.coverImage || project.image;
        const assets = project.assets || project.images || [];
        
        // Vérifier le type de coverImage
        const coverFileType = coverImage ? getFileType(coverImage) : null;
        let isVideoCover = false;
        let finalCoverImage = coverImage;
        
        // Si coverImage est une vidéo
        if (coverFileType === 'video') {
            if (isVideoSection) {
                // Dans la section vidéo, on peut afficher la vidéo directement comme cover
                isVideoCover = true;
            } else {
                // Pour les autres sections, chercher une image dans assets[] comme fallback
                const imageFallback = assets.find(asset => getFileType(asset) === 'image');
                if (imageFallback) {
                    finalCoverImage = imageFallback;
                } else {
                    console.warn(`⚠️  Projet "${project.title}" : cover est une vidéo et aucune image trouvée dans assets`);
                    // On affiche un placeholder au lieu de ne pas créer la carte
                }
            }
        } else if (!coverImage) {
            // Si pas de coverImage, chercher une image dans assets
            const imageFallback = assets.find(asset => getFileType(asset) === 'image');
            if (imageFallback) {
                finalCoverImage = imageFallback;
            } else {
                console.warn(`⚠️  Projet "${project.title}" : aucune image disponible pour la carte`);
            }
        }
        
        // Encoder l'URL pour gérer les espaces et caractères spéciaux
        const encodedUrl = (isVideoCover ? coverImage : finalCoverImage) ? encodeURI(isVideoCover ? coverImage : finalCoverImage) : '';
        
        // Dans la section vidéo, on peut afficher une vidéo comme cover
        const previewContent = isVideoCover
            ? `<video src="${encodedUrl}" alt="${project.title}" muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;\\'>Vidéo non disponible</div>';"></video>`
            : (!finalCoverImage || getFileType(finalCoverImage) !== 'image')
                ? `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;font-size:1.2rem;">Vidéo</div>`
                : `<img src="${encodedUrl}" alt="${project.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;\\'>Image non disponible</div>';">`;

        projectCard.innerHTML = `
            <div class="preview-container" style="width: 100%; height: 100%;">
                ${previewContent}
            </div>
            <div class="project-info" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%); color: white; padding: 2rem 1.5rem 1.5rem;">
                <h3 style="margin: 0; font-size: 1.5rem; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${project.title}</h3>
                <div class="project-meta" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">
                    <span>${project.client}</span>
                    <span>${project.year}</span>
                </div>
            </div>
        `;

        // Ajouter l'événement de clic sur la carte
        projectCard.addEventListener('click', (e) => {
            e.stopPropagation();
            showProjectDetails(project);
        });
        
        // Effet hover pour les cartes
        projectCard.addEventListener('mouseenter', () => {
            projectCard.style.transform = 'scale(1.02)';
            projectCard.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'scale(1)';
            projectCard.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        });

        cardsContainer.appendChild(projectCard);
        animationObserver.observe(projectCard);
    });

    // Afficher les projets directement
        const cards = cardsContainer.querySelectorAll('.project-card');
    const startIndex = 0;
    const endIndex = Math.min(projectsPerPage, sortedProjects.length);

    // Afficher et animer les cartes
            for (let i = startIndex; i < endIndex; i++) {
                const card = cards[i];
        if (card) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.animation = 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                    card.classList.add('visible');
                }, (i - startIndex) * 100);
            }
    }
}

/* ============================================================================
 * 7️⃣ SECTION FORMULAIRE - Contact
 * Lignes : 2326-2354
 * Statut : 🟡 OPTIONNEL (fonctionnalité de contact)
 * Rôle : Gère le formulaire de contact en bas de page
 *        Affiche un message de succès après envoi
 *        Réinitialise le formulaire après 3 secondes
 * Impact si supprimée : Formulaire inactif - Pas de feedback
 * ============================================================================ */

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Ici, vous pouvez ajouter votre logique d'envoi d'email
        console.log('Message envoyé:', data);
        
        // Animation de succès
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Envoyé !';
        submitBtn.classList.add('success');
        
        // Réinitialisation du formulaire
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = 'Envoyer';
            submitBtn.classList.remove('success');
        }, 3000);
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du chargement des images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"][data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset && img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Animation des éléments au défilement
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .filter-buttons, .portfolio-grid, .project-card, .contact-form, .form-group, .submit-btn, .social-links a');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
        observer.observe(element);
    });
};

// Animation des cartes de projet
const animateProjectCards = () => {
    const cards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.classList.contains('odd') ? 
                    'fadeInLeft 0.8s ease forwards' : 
                    'fadeInRight 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? 'odd' : 'even');
        observer.observe(card);
    });
};

// Animation des éléments de la section héro
const animateHeroSection = () => {
    const heroElements = document.querySelectorAll('.hero-content > *');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animation = `fadeInUp 0.8s ease ${index * 0.2}s forwards`;
    });
};

// Gestion de la navbar au scroll
let navbar, logo;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (!navbar || !logo) return;
    
    const currentScroll = window.pageYOffset;
    const scrollThreshold = 50;
    const maxScroll = 200;
    
    // Calcul du ratio de scroll (0 à 1)
    const scrollRatio = Math.min(Math.max((currentScroll - scrollThreshold) / (maxScroll - scrollThreshold), 0), 1);
    
    if (currentScroll > scrollThreshold) {
        navbar.classList.add('scrolled');
        // Ajustement progressif de la taille du logo
        const scale = 1 - (scrollRatio * 0.05); // Réduction maximale de 5%
        const fontSize = 1.5 - (scrollRatio * 0.3); // Réduction de 1.5rem à 1.2rem
        logo.style.transform = `scale(${scale})`;
        logo.style.fontSize = `${fontSize}rem`;
    } else {
        navbar.classList.remove('scrolled');
        logo.style.transform = 'scale(1)';
        logo.style.fontSize = '1.5rem';
    }
    
    lastScroll = currentScroll;
});

/* ============================================================================
 * 5️⃣ SECTION MODAL - Fenêtre de détails projet
 * Lignes : 2489-2928
 * Statut : 🔴 CRITIQUE (essentiel à la consultation des projets)
 * Rôle : Ouvre une fenêtre popup quand on clique sur un projet
 *        Affiche les images/vidéos du projet en grand format
 *        Affiche les informations (titre, client, année, catégorie)
 *        Gère le slider de description (Contexte, Démarche, Résultat)
 *        Navigation entre fichiers si le projet a plusieurs images
 * Impact si supprimée : Clics inactifs - Pas de détails - Expérience cassée
 * ============================================================================ */

// Gestion de la prévisualisation des images
let modal, modalImg, modalTitle, modalClient, modalYear, modalCategory, closeBtn;

function showProjectDetails(project) {
    console.log('Affichage des détails du projet:', project);
    const modal = document.getElementById('imageModal');
    const modalImage = document.querySelector('.modal-image-container');
    const modalNavigation = document.getElementById('modalNavigation');
    
    if (!modal || !modalImage) {
        console.error('Modal ou modalImage non trouvé');
        return;
    }
    
    // Obtenir tous les fichiers du projet (nouvelle structure: assets, ancienne: images)
    // Support des deux structures pour compatibilité
    const projectFiles = project.assets || project.images || (project.cover || project.coverImage ? [project.cover || project.coverImage] : [project.image]) || [];
    
    if (projectFiles.length === 0) {
        console.error(`⚠️  Projet "${project.title}" n'a aucun fichier`);
        return;
    }
    
    // Vider le contenu existant
    modalImage.innerHTML = '';
    if (modalNavigation) {
        modalNavigation.innerHTML = '';
        modalNavigation.style.display = 'none';
    }
    
    // Si un seul fichier, l'afficher directement (pas de navigation nécessaire)
    if (projectFiles.length === 1) {
        const file = projectFiles[0];
        const fileType = getFileType(file);
        
        // Masquer la zone de navigation pour un seul fichier
        if (modalNavigation) {
            modalNavigation.style.display = 'none';
        }
        
        if (fileType === 'pdf') {
        const pdfContainer = document.createElement('div');
        pdfContainer.style.width = '100%';
        pdfContainer.style.height = '100%';
        pdfContainer.style.overflow = 'hidden';
        pdfContainer.style.backgroundColor = '#f5f5f5';
        pdfContainer.style.display = 'flex';
        pdfContainer.style.alignItems = 'center';
        pdfContainer.style.justifyContent = 'center';
        
        const pdfLink = document.createElement('a');
            pdfLink.href = file;
        pdfLink.target = '_blank';
        pdfLink.rel = 'noopener';
        pdfLink.style.display = 'flex';
        pdfLink.style.flexDirection = 'column';
        pdfLink.style.alignItems = 'center';
        pdfLink.style.justifyContent = 'center';
        pdfLink.style.textDecoration = 'none';
        pdfLink.style.color = '#333';
        pdfLink.style.padding = '2rem';
        
        const pdfIcon = document.createElement('i');
        pdfIcon.className = 'fas fa-file-pdf';
        pdfIcon.style.fontSize = '4rem';
        pdfIcon.style.color = '#ff4444';
        pdfIcon.style.marginBottom = '1rem';
        
        const pdfText = document.createElement('span');
        pdfText.textContent = 'Ouvrir le PDF';
        pdfText.style.fontSize = '1.2rem';
        
        pdfLink.appendChild(pdfIcon);
        pdfLink.appendChild(pdfText);
        pdfContainer.appendChild(pdfLink);
        modalImage.appendChild(pdfContainer);
        } else if (fileType === 'video') {
        const video = document.createElement('video');
            video.src = encodeURI(file); // Encoder l'URL pour gérer les espaces et caractères spéciaux
        video.controls = true;
        video.autoplay = false;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'contain';
        modalImage.appendChild(video);
    } else {
        const img = document.createElement('img');
            img.src = encodeURI(file); // Encoder l'URL pour gérer les espaces et caractères spéciaux
        img.alt = project.title;
        img.className = 'modal-content';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        modalImage.appendChild(img);
        }
    } else {
        // Plusieurs fichiers : créer une galerie avec navigation
        let currentIndex = 0;
        
        function displayFile(index) {
            modalImage.innerHTML = '';
            const file = projectFiles[index];
            const fileType = getFileType(file);
            
            if (fileType === 'pdf') {
                const pdfContainer = document.createElement('div');
                pdfContainer.style.width = '100%';
                pdfContainer.style.height = '100%';
                pdfContainer.style.overflow = 'hidden';
                pdfContainer.style.backgroundColor = '#f5f5f5';
                pdfContainer.style.display = 'flex';
                pdfContainer.style.alignItems = 'center';
                pdfContainer.style.justifyContent = 'center';
                pdfContainer.style.position = 'relative';
                
                const pdfLink = document.createElement('a');
                pdfLink.href = file;
                pdfLink.target = '_blank';
                pdfLink.rel = 'noopener';
                pdfLink.style.display = 'flex';
                pdfLink.style.flexDirection = 'column';
                pdfLink.style.alignItems = 'center';
                pdfLink.style.justifyContent = 'center';
                pdfLink.style.textDecoration = 'none';
                pdfLink.style.color = '#333';
                pdfLink.style.padding = '2rem';
                
                const pdfIcon = document.createElement('i');
                pdfIcon.className = 'fas fa-file-pdf';
                pdfIcon.style.fontSize = '4rem';
                pdfIcon.style.color = '#ff4444';
                pdfIcon.style.marginBottom = '1rem';
                
                const pdfText = document.createElement('span');
                pdfText.textContent = 'Ouvrir le PDF';
                pdfText.style.fontSize = '1.2rem';
                
                pdfLink.appendChild(pdfIcon);
                pdfLink.appendChild(pdfText);
                pdfContainer.appendChild(pdfLink);
                modalImage.appendChild(pdfContainer);
            } else if (fileType === 'video') {
                const video = document.createElement('video');
                video.src = file;
                video.controls = true;
                video.autoplay = false;
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.objectFit = 'contain';
                modalImage.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = encodeURI(file); // Encoder l'URL pour gérer les espaces et caractères spéciaux
                img.alt = `${project.title} - ${index + 1}/${projectFiles.length}`;
                img.className = 'modal-content';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';
                modalImage.appendChild(img);
            }
            
            // Mettre à jour les contrôles de navigation dans la zone dédiée (hors de l'image)
            if (projectFiles.length > 1 && modalNavigation) {
                modalNavigation.innerHTML = '';
                modalNavigation.style.display = 'flex';
                modalNavigation.style.justifyContent = 'center';
                modalNavigation.style.alignItems = 'center';
                modalNavigation.style.gap = '1rem';
                modalNavigation.style.marginTop = '1.5rem';
                modalNavigation.style.paddingTop = '1.5rem';
                modalNavigation.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
                
                const prevBtn = document.createElement('button');
                prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
                prevBtn.className = 'modal-nav-btn';
                prevBtn.style.padding = '0.75rem 1.25rem';
                prevBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                prevBtn.style.color = 'white';
                prevBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                prevBtn.style.borderRadius = '5px';
                prevBtn.style.cursor = index > 0 ? 'pointer' : 'not-allowed';
                prevBtn.style.opacity = index > 0 ? '1' : '0.5';
                prevBtn.style.transition = 'all 0.3s ease';
                prevBtn.disabled = index === 0;
                
                prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (index > 0) {
                        currentIndex = Math.max(0, currentIndex - 1);
                        displayFile(currentIndex);
                    }
                });
                
                prevBtn.addEventListener('mouseenter', () => {
                    if (index > 0) {
                        prevBtn.style.background = 'rgba(255, 255, 255, 0.2)';
                        prevBtn.style.transform = 'scale(1.05)';
                    }
                });
                
                prevBtn.addEventListener('mouseleave', () => {
                    prevBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                    prevBtn.style.transform = 'scale(1)';
                });
                
                const counter = document.createElement('span');
                counter.textContent = `${index + 1} / ${projectFiles.length}`;
                counter.style.padding = '0.75rem 1.5rem';
                counter.style.background = 'rgba(255, 255, 255, 0.1)';
                counter.style.color = 'white';
                counter.style.borderRadius = '5px';
                counter.style.fontSize = '0.95rem';
                counter.style.minWidth = '80px';
                counter.style.textAlign = 'center';
                
                const nextBtn = document.createElement('button');
                nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
                nextBtn.className = 'modal-nav-btn';
                nextBtn.style.padding = '0.75rem 1.25rem';
                nextBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                nextBtn.style.color = 'white';
                nextBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                nextBtn.style.borderRadius = '5px';
                nextBtn.style.cursor = index < projectFiles.length - 1 ? 'pointer' : 'not-allowed';
                nextBtn.style.opacity = index < projectFiles.length - 1 ? '1' : '0.5';
                nextBtn.style.transition = 'all 0.3s ease';
                nextBtn.disabled = index === projectFiles.length - 1;
                
                nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (index < projectFiles.length - 1) {
                        currentIndex = Math.min(projectFiles.length - 1, currentIndex + 1);
                        displayFile(currentIndex);
                    }
                });
                
                nextBtn.addEventListener('mouseenter', () => {
                    if (index < projectFiles.length - 1) {
                        nextBtn.style.background = 'rgba(255, 255, 255, 0.2)';
                        nextBtn.style.transform = 'scale(1.05)';
                    }
                });
                
                nextBtn.addEventListener('mouseleave', () => {
                    nextBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                    nextBtn.style.transform = 'scale(1)';
                });
                
                modalNavigation.appendChild(prevBtn);
                modalNavigation.appendChild(counter);
                modalNavigation.appendChild(nextBtn);
            } else if (modalNavigation) {
                modalNavigation.style.display = 'none';
            }
        }
        
        displayFile(0);
    }

    // Mise à jour des métadonnées
    const modalTitle = document.getElementById('modalTitle');
    const modalContexte = document.getElementById('modalContexte');
    const modalDemarche = document.getElementById('modalDemarche');
    const modalResultat = document.getElementById('modalResultat');
    const modalClient = document.getElementById('modalClient');
    const modalYear = document.getElementById('modalYear');
    const modalCategory = document.getElementById('modalCategory');
    
    if (modalTitle) modalTitle.textContent = project.title;
    
    // Gérer les 3 sections de description (Contexte, Démarche, Résultat)
    // Si le projet a des champs séparés, les utiliser, sinon diviser la description
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2719',message:'checking project fields',data:{hasContexte:!!project.contexte,hasDemarche:!!project.demarche,hasResultat:!!project.resultat,hasDescription:!!project.description,contexteLength:project.contexte?.length||0,demarcheLength:project.demarche?.length||0,resultatLength:project.resultat?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    if (project.contexte && project.demarche && project.resultat) {
        // Utiliser les champs séparés si disponibles
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2722',message:'using separate fields',data:{contexteLength:project.contexte.length,demarcheLength:project.demarche.length,resultatLength:project.resultat.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        if (modalContexte) modalContexte.textContent = project.contexte;
        if (modalDemarche) modalDemarche.textContent = project.demarche;
        if (modalResultat) modalResultat.textContent = project.resultat;
    } else if (project.description) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5265bfd-1c19-41e9-8154-9e20732baec1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:2727',message:'dividing description',data:{descriptionLength:project.description.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        // Diviser la description en 3 parties approximativement égales
        const desc = project.description;
        const length = desc.length;
        const partLength = Math.ceil(length / 3);
        
        // Trouver des points de coupure naturels (phrases)
        const sentences = desc.match(/[^.!?]+[.!?]+/g) || [desc];
        const sentencesPerPart = Math.ceil(sentences.length / 3);
        
        const contexte = sentences.slice(0, sentencesPerPart).join(' ').trim();
        const demarche = sentences.slice(sentencesPerPart, sentencesPerPart * 2).join(' ').trim();
        const resultat = sentences.slice(sentencesPerPart * 2).join(' ').trim();
        
        if (modalContexte) modalContexte.textContent = contexte || project.description;
        if (modalDemarche) modalDemarche.textContent = demarche || project.description;
        if (modalResultat) modalResultat.textContent = resultat || project.description;
    } else {
        // Fallback si pas de description
        if (modalContexte) modalContexte.textContent = '';
        if (modalDemarche) modalDemarche.textContent = '';
        if (modalResultat) modalResultat.textContent = '';
    }
    
    // Initialiser le slider et réinitialiser à "Contexte"
    initializeDescriptionSlider();
    resetDescriptionSlider();
    
    if (modalClient) {
        modalClient.innerHTML = `<span class="meta-icon">👤</span>${project.client}`;
        modalClient.setAttribute('data-type', 'client');
    }
    
    if (modalYear) {
        modalYear.innerHTML = `<span class="meta-icon">📅</span>${project.year}`;
        modalYear.setAttribute('data-type', 'year');
    }
    
    // Emoji spécifique selon la catégorie
    let categoryEmoji = '🏷️';
    // Utiliser subcategory (nouvelle structure) ou category (ancienne structure) pour compatibilité
    const projectCategory = project.subcategory || project.category || '';
    
    switch(projectCategory) {
        case 'affiche':
            categoryEmoji = '🎨';
            break;
        case 'photo':
            categoryEmoji = '📸';
            break;
        case 'video':
            categoryEmoji = '🎥';
            break;
        case 'design':
            categoryEmoji = '🎯';
            break;
        case 'branding':
            categoryEmoji = '🎨';
            break;
        case 'ia':
            categoryEmoji = '🤖';
            break;
        case 'cover':
            categoryEmoji = '💿';
            break;
        case 'concept':
            categoryEmoji = '💡';
            break;
        case 'logo':
            categoryEmoji = '✨';
            break;
        case 'mockup':
            categoryEmoji = '📱';
            break;
        case 'promo':
            categoryEmoji = '📢';
            break;
        case 'motion':
            categoryEmoji = '🎬';
            break;
        case 'event':
            categoryEmoji = '🎪';
            break;
        case 'web':
            categoryEmoji = '🌐';
            break;
        case 'mobile':
            categoryEmoji = '📱';
            break;
        case 'app':
            categoryEmoji = '📲';
            break;
        case 'argentique':
            categoryEmoji = '🎞️';
            break;
        case 'iphone':
            categoryEmoji = '📷';
            break;
    }
    
    if (modalCategory) {
        const categoryDisplayName = formatFilterName(projectCategory);
        modalCategory.innerHTML = `<span class="meta-icon">${categoryEmoji}</span>${categoryDisplayName}`;
        modalCategory.setAttribute('data-type', 'category');
        modalCategory.setAttribute('data-category', projectCategory);
    }
    
    // Afficher le modal
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    
    console.log('Modal affiché');
}

// Fonction pour initialiser le slider de description
function initializeDescriptionSlider() {
    const tabs = document.querySelectorAll('.slider-tab');
    const panels = document.querySelectorAll('.slider-panel');
    
    // Supprimer les anciens event listeners en clonant les éléments
    tabs.forEach(tab => {
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);
    });
    
    // Réattacher les event listeners
    document.querySelectorAll('.slider-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Retirer la classe active de tous les onglets et panneaux
            document.querySelectorAll('.slider-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.slider-panel').forEach(p => p.classList.remove('active'));
            
            // Ajouter la classe active à l'onglet et au panneau sélectionnés
            tab.classList.add('active');
            const targetPanel = document.getElementById(`panel-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Fonction pour réinitialiser le slider à "Contexte"
function resetDescriptionSlider() {
    const contexteTab = document.querySelector('.slider-tab[data-tab="contexte"]');
    const contextePanel = document.getElementById('panel-contexte');
    
    if (contexteTab && contextePanel) {
        document.querySelectorAll('.slider-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.slider-panel').forEach(p => p.classList.remove('active'));
        
        contexteTab.classList.add('active');
        contextePanel.classList.add('active');
    }
}

// Les event listeners de la modal sont maintenant initialisés dans DOMContentLoaded

/* ============================================================================
 * 8️⃣ SECTION LEGACY DÉSACTIVÉ - Code draggable du logo
 * Lignes : 2932-2989
 * Statut : ⚠️ LEGACY / DÉSACTIVÉ (code conservé mais jamais exécuté)
 * Rôle : Aucun - Code désactivé avec un guard conditionnel
 *        Ancienne fonctionnalité qui permettait de déplacer le logo avec la souris
 *        Désactivée car bugguée et non souhaitée
 * Impact si supprimée : Aucun - Le code est déjà désactivé
 * ============================================================================ */

// ===== CODE DÉSACTIVÉ : Gestion du déplacement de l'image du logo =====
// Guard conditionnel : désactive définitivement l'interaction draggable
const DRAG_INTERACTION_ENABLED = false; // Désactivé définitivement

if (DRAG_INTERACTION_ENABLED) { // Guard : jamais exécuté (flag = false)
    // Code draggable (désactivé) - conservé pour référence future
    let isDragging = false;
    let startX, startY;
    let initialX, initialY;
    let currentX, currentY;

    // Les event listeners du logo sont maintenant initialisés dans DOMContentLoaded

    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !logo || !navbar) return;
        
        // Calculer la position relative à la souris
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        
        // Limiter le déplacement à la navbar
        const navbarRect = navbar.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();
        
        // Calculer les limites avec une marge plus précise
        const maxX = navbarRect.width - logoRect.width - 20; // Marge de 20px
        const maxY = navbarRect.height - logoRect.height - 10; // Marge de 10px
        
        // Appliquer les limites avec une transition plus fluide
        currentX = Math.min(Math.max(currentX, 0), maxX);
        currentY = Math.min(Math.max(currentY, 0), maxY);
        
        // Appliquer la transformation avec une transition plus fluide
        requestAnimationFrame(() => {
            if (logo) {
                logo.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        });
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging || !logo) return;
        
        isDragging = false;
        
        // Animation de retour à la position d'origine avec une durée plus longue
        logo.style.transition = 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        logo.style.transform = 'translate(0, 0)';
        
        // Attendre que l'animation de position soit presque terminée avant de retirer la classe dragging
        setTimeout(() => {
            if (logo) {
                logo.classList.remove('dragging');
            }
        }, 1000); // Légèrement avant la fin de l'animation de position
    });
}
// ===== FIN CODE DÉSACTIVÉ =====

// (Supprimé) Initialisation dupliquée: tout est fait après loadProjects() plus haut