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
 * Impact si supprimée : Site cassé - Aucun projet ne s'afficherait
 * ============================================================================ */

// URL de base pour les assets hébergés sur Supabase Storage
const ASSETS_BASE_URL = 'https://kuntmymcafnywqlqzcdb.supabase.co/storage/v1/object/public/assets/';

function shouldUseLocalAssets() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('remoteAssets')) return false;

    const host = window.location.hostname;
    return host === 'localhost'
        || host === '127.0.0.1'
        || window.location.protocol === 'file:';
}

function getAssetUrl(folder, file) {
    if (!folder || !file) return '';
    if (/^https?:\/\//i.test(file)) return file;

    const normalizedFolder = folder.replace(/^\/+|\/+$/g, '');
    const normalizedFile = file.replace(/^\/+/, '');
    const path = `${normalizedFolder}/${normalizedFile}`;

    if (shouldUseLocalAssets()) {
        return `assets/${path}`;
    }

    return `${ASSETS_BASE_URL}${path}`;
}

function encodeAssetUrl(url) {
    if (!url) return '';

    const supabaseMatch = url.match(/^(https?:\/\/[^/]+\/storage\/v1\/object\/public\/assets\/)(.+)$/i);
    if (supabaseMatch) {
        return supabaseMatch[1] + supabaseMatch[2].split('/').map((segment) => encodeURIComponent(segment)).join('/');
    }

    const localMatch = url.match(/^(assets\/)(.+)$/);
    if (localMatch) {
        return localMatch[1] + localMatch[2].split('/').map((segment) => encodeURIComponent(segment)).join('/');
    }

    return encodeURI(url);
}

function resolveAssetFile(folder, file) {
    if (!file) return '';
    if (/^https?:\/\//i.test(file)) return file;

    const normalizedFile = file.replace(/^\/+/, '');
    if (normalizedFile.includes('/')) {
        return getPublicAssetUrl(normalizedFile);
    }

    return getAssetUrl(folder, file);
}

function resolveProjectAssets(project) {
    if (!project) return project;

    const folder = project.storageFolder;
    if (folder && project.coverFile) {
        const cover = resolveAssetFile(folder, project.coverFile);
        const assets = (project.assetFiles || []).map((file) => resolveAssetFile(folder, file));
        const enriched = { ...project, cover, assets };

        if (project.chartePdfFile) {
            enriched.chartePdfUrl = getAssetUrl(folder, project.chartePdfFile);
        }

        return enriched;
    }

    return {
        ...project,
        cover: project.cover || project.coverImage || '',
        assets: project.assets || project.images || []
    };
}

function getPublicAssetUrl(relativePath) {
    if (!relativePath) return '';
    if (/^https?:\/\//i.test(relativePath)) return relativePath;

    const path = relativePath.replace(/^assets\//, '').replace(/^\/+/, '');
    if (shouldUseLocalAssets()) {
        return `assets/${path}`;
    }

    return `${ASSETS_BASE_URL}${path}`;
}

let projects = null; // Structure: { projects: [...] }
let typesByChapter = null;

// Mapping entre les catégories HTML (data-category) et les chapitres JSON (chapter)
const categoryToChapterMap = {
    'charte': 'identite-branding',
    'design': 'declinaisons-visuelles',
    'video': 'identite-en-mouvement',
    'print': 'print-produits',
    'uiux': 'ui-ux'
};

const chapterToCategoryMap = {
    'identite-branding': 'charte',
    'declinaisons-visuelles': 'design',
    'identite-en-mouvement': 'video',
    'print-produits': 'print',
    'ui-ux': 'uiux'
};

const FILTERLESS_PORTFOLIO_SECTIONS = new Set(['uiux']);

const PROJECT_TYPE_LABELS = {
    'client-paye': 'Client réel',
    'mission-client': 'Mission client',
    'brief': 'Brief professionnel',
    'diplome': 'Projet diplôme',
    'collaboration': 'Collaboration',
    'candidature': 'Candidature',
    'personnel': 'Projet personnel',
    'academique': 'Projet académique',
    'en-vente': 'Boutique Etsy'
};

const FILTER_LABEL_OVERRIDES = {
    'affiches creees': 'Affiches créées',
    'boutique etsy': 'Produits Etsy'
};

const FILTER_EMPTY_STATES = {
    'boutique etsy': {
        message: 'Affiches, vêtements et objets design disponibles sur ma boutique Etsy RareDeptSociety.',
        linkLabel: 'Ouvrir la boutique Etsy →',
        useEtsyUrl: true
    }
};

const PROJECT_TYPE_PRIORITY = {
    'client-paye': 1,
    'mission-client': 2,
    'brief': 3,
    'diplome': 4,
    'candidature': 5,
    'collaboration': 6,
    'academique': 7,
    'en-vente': 8,
    'personnel': 9
};

let profile = null;
let featuredIds = [];

// Fonction de transformation typographique (identique à celle du script Node.js)
function formatFilterName(folderName) {
    if (FILTER_LABEL_OVERRIDES[folderName]) {
        return FILTER_LABEL_OVERRIDES[folderName];
    }

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

function getProjectCountForFilter(category, typeName) {
    if (!projects || !Array.isArray(projects)) return 0;
    const chapter = categoryToChapterMap[category];
    if (!chapter) return 0;
    return projects.filter(project =>
        project.chapter === chapter && project.subcategory === typeName
    ).length;
}

function showPortfolioEmptyState(grid, message, hint = '', linkUrl = '') {
    const hintBlock = linkUrl
        ? `<a href="${linkUrl}" class="portfolio-empty-link" target="_blank" rel="noopener">${hint}</a>`
        : hint
            ? `<p class="portfolio-empty-hint"><i class="fas fa-arrow-up"></i> ${hint}</p>`
            : '';

    grid.innerHTML = `
        <div class="portfolio-empty-state">
            <p class="portfolio-empty-message">${message}</p>
            ${hintBlock}
        </div>
    `;
}

function showFilterEmptyState(grid, filterKey) {
    const custom = FILTER_EMPTY_STATES[filterKey];
    if (!custom) {
        showPortfolioEmptyState(grid, 'Aucun projet dans cette catégorie pour le moment.');
        return;
    }

    const etsyUrl = profile?.etsyShopUrl || 'https://www.etsy.com/fr/shop/RareDeptSociety';
    showPortfolioEmptyState(
        grid,
        custom.message,
        custom.linkLabel,
        custom.useEtsyUrl ? etsyUrl : ''
    );
}

function getProjectsForPortfolioSection(category, filter) {
    const chapter = categoryToChapterMap[category];
    if (!chapter || !projects || !Array.isArray(projects)) return [];

    if (FILTERLESS_PORTFOLIO_SECTIONS.has(category)) {
        return projects.filter(project => project.chapter === chapter);
    }

    return projects.filter(project =>
        project.chapter === chapter && project.subcategory === filter
    );
}

function displayPortfolioSection(category, grid, filter) {
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
        showPortfolioEmptyState(
            grid,
            FILTERLESS_PORTFOLIO_SECTIONS.has(category)
                ? 'Aucun projet UI/UX pour le moment.'
                : 'Choisissez une catégorie pour découvrir les projets',
            FILTERLESS_PORTFOLIO_SECTIONS.has(category) ? '' : 'Utilisez les filtres ci-dessus'
        );
        return;
    }

    const filteredProjects = getProjectsForPortfolioSection(category, filter);

    if (filteredProjects.length === 0) {
        if (FILTERLESS_PORTFOLIO_SECTIONS.has(category)) {
            showPortfolioEmptyState(grid, 'Aucun projet UI/UX pour le moment.');
        } else {
            showFilterEmptyState(grid, filter);
        }
        return;
    }

    displayProjects(filteredProjects, grid);
}

function applyFilter(button) {
    const section = button.closest('.portfolio-section');
    const grid = section.querySelector('.portfolio-grid');
    const category = grid.dataset.category;
    const filter = button.dataset.filter;

    section.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    displayPortfolioSection(category, grid, filter);
}

function activateDefaultFilters() {
    document.querySelectorAll('.filter-buttons').forEach(container => {
        const firstBtn = container.querySelector('.filter-btn');
        if (firstBtn) applyFilter(firstBtn);
    });

    document.querySelectorAll('.portfolio-grid').forEach(grid => {
        const category = grid.dataset.category;
        if (FILTERLESS_PORTFOLIO_SECTIONS.has(category)) {
            displayPortfolioSection(category, grid);
        }
    });
}

function getProjectTypeLabel(projectType) {
    return PROJECT_TYPE_LABELS[projectType] || '';
}

function renderProjectTypeBadge(projectType) {
    const label = getProjectTypeLabel(projectType);
    if (!label) return '';
    return `<span class="project-type-badge" data-project-type="${projectType}">${label}</span>`;
}

function applyProjectTypeBadge(element, projectType) {
    if (!element) return;

    const label = getProjectTypeLabel(projectType);
    if (!label) {
        element.style.display = 'none';
        element.textContent = '';
        element.removeAttribute('data-project-type');
        return;
    }

    element.textContent = label;
    element.className = 'project-type-badge';
    element.setAttribute('data-project-type', projectType);
    element.style.display = 'inline-block';
}

function sortProjectsForDisplay(list) {
    return [...list].sort((a, b) => {
        const pa = PROJECT_TYPE_PRIORITY[a.projectType] || 99;
        const pb = PROJECT_TYPE_PRIORITY[b.projectType] || 99;
        if (pa !== pb) return pa - pb;
        return (b.year || '').localeCompare(a.year || '');
    });
}

async function loadProfile() {
    try {
        const res = await fetch('profile.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        profile = await res.json();
    } catch (err) {
        console.error('Échec du chargement de profile.json:', err);
        profile = {};
    }
}

function populateProfileUI() {
    if (!profile) return;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el && text) el.textContent = text;
    };

    setText('heroTitle', profile.title);
    setText('heroSubtitle', profile.subtitle);
    setText('heroTagline', profile.tagline);
    setText('heroAvailability', profile.availability);
    setText('aboutJobSearch', profile.jobSearch);
    setText('aboutJobDetail', profile.jobSearchDetail);
    setText('aboutMobility', profile.mobility);
    setText('aboutLanguages', profile.languages);

    const heroLocation = document.getElementById('heroLocation');
    if (heroLocation && profile.location) {
        heroLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${profile.location} — ${profile.mobility || ''}`;
    }

    const email = profile.email || 'R.Bensedira@gmail.com';

    document.querySelectorAll('.contact-email-btn').forEach(el => {
        el.href = `mailto:${email}`;
        el.innerHTML = `<i class="fas fa-envelope"></i> ${email}`;
    });

    if (profile.cvPath) {
        const cvUrl = getPublicAssetUrl(profile.cvPath);
        document.querySelectorAll('#heroCvBtn, .contact-cv-btn').forEach(el => {
            el.href = cvUrl;
        });
    }

    if (profile.etsyShopUrl) {
        const etsyLink = document.getElementById('etsyShopLink');
        if (etsyLink) etsyLink.href = profile.etsyShopUrl;
    }
    if (profile.etsyShopName) {
        const etsyName = document.getElementById('etsyShopName');
        if (etsyName) etsyName.textContent = profile.etsyShopName;
    }

    const aboutText = document.getElementById('aboutText');
    if (aboutText && profile.about) {
        aboutText.innerHTML = profile.about.map((p, i) =>
            `<p${i === 0 ? ' class="about-intro"' : ''}>${p}</p>`
        ).join('');
    }

    const aboutEducation = document.getElementById('aboutEducation');
    if (aboutEducation && profile.education) {
        aboutEducation.innerHTML = profile.education.map(e => `<li>${e}</li>`).join('');
    }

    const aboutTools = document.getElementById('aboutTools');
    if (aboutTools && profile.tools) {
        aboutTools.innerHTML = profile.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
    }

    const aboutCompetencies = document.getElementById('aboutCompetencies');
    if (aboutCompetencies && profile.competencies) {
        aboutCompetencies.innerHTML = profile.competencies.map(c => `<li>${c}</li>`).join('');
    }

    if (profile.title) {
        document.title = `${profile.name} — ${profile.title}`;
    }

    const ogUrl = document.getElementById('og-url');
    if (ogUrl) {
        ogUrl.content = profile.portfolioUrl || (window.location.protocol !== 'file:' ? window.location.href.split('#')[0] : '');
    }

    const socialMap = {
        linkedin: profile.linkedin,
        behance: profile.behance,
        instagram: profile.instagram
    };
    Object.entries(socialMap).forEach(([network, url]) => {
        if (!url) return;
        document.querySelectorAll(`.social-links a[aria-label="${network.charAt(0).toUpperCase() + network.slice(1)}"], .social-links a[href*="${network}"]`).forEach(el => {
            el.href = url;
        });
    });
}

function displayFeaturedProjects() {
    const grid = document.getElementById('featuredGrid');
    if (!grid || !projects) return;

    const featuredProjects = featuredIds
        .map(id => projects.find(p => p.id === id))
        .filter(Boolean);

    if (featuredProjects.length === 0) return;

    grid.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'cards-container featured-cards-container';
    grid.appendChild(container);

    featuredProjects.forEach((project, index) => {
        container.appendChild(createProjectCard(project, index, { forceVisible: true }));
    });
}

function createProjectCard(project, index, options = {}) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.index = index;
    projectCard.style.opacity = options.forceVisible ? '1' : '0';

    const isVideoSection = project.chapter === 'identite-en-mouvement';
    const isUiProject = project.chapter === 'ui-ux';

    projectCard.style.width = '100%';
    projectCard.style.position = 'relative';
    projectCard.style.overflow = 'hidden';
    projectCard.style.borderRadius = '8px';
    projectCard.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    projectCard.style.cursor = 'pointer';
    projectCard.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    projectCard.style.aspectRatio = isVideoSection ? '1/1' : '3/4';
    projectCard.style.height = 'auto';

    if (isVideoSection) projectCard.classList.add('video-card');
    if (options.forceVisible) {
        projectCard.classList.add('featured-project-card', 'visible');
        projectCard.style.display = 'block';
        projectCard.style.visibility = 'visible';
        projectCard.style.opacity = '1';
    } else {
        projectCard.style.display = 'none';
    }

    const badgeHtml = renderProjectTypeBadge(project.projectType);

    const previewSource = getProjectCardPreviewSource(project);
    const previewFileType = previewSource ? getFileType(previewSource) : null;

    let previewContent;
    if (isUiProject && !previewSource) {
        previewContent = `<div class="ui-placeholder"><i class="fas fa-mobile-alt"></i><span>${project.title}</span></div>`;
    } else if (previewFileType === 'video' && previewSource) {
        previewContent = `<video src="${encodeAssetUrl(previewSource)}" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
    } else if (previewSource && previewFileType === 'image') {
        previewContent = `<img src="${encodeAssetUrl(previewSource)}" alt="${project.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
    } else {
        previewContent = `<div class="ui-placeholder"><i class="fas fa-play-circle"></i><span>${project.title}</span></div>`;
    }

    projectCard.innerHTML = `
        ${badgeHtml}
        <div class="preview-container" style="width: 100%; height: 100%;">
            ${previewContent}
        </div>
        <span class="project-card-cta">Voir le projet →</span>
        <div class="project-info">
            <h3>${project.title}</h3>
            <div class="project-meta">
                <span>${project.client || ''}</span>
                <span>${project.year || ''}</span>
            </div>
        </div>
    `;

    projectCard.addEventListener('click', (e) => {
        e.stopPropagation();
        showProjectDetails(project);
    });

    if (!options.forceVisible) {
        animationObserver.observe(projectCard);
    }

    return projectCard;
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
        featuredIds = data.featuredIds || [];
        const loaded = data.projects || [];
        projects = loaded.map((project) => resolveProjectAssets(project));
        console.info(`Projets chargés: ${projects.length} projets`);
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
        'mouvement': 'video',
        'print': 'print',
        'uiux': 'uiux'
    };
    
    // Générer les filtres pour chaque section
    Object.keys(sectionMapping).forEach(sectionId => {
        const category = sectionMapping[sectionId];
        if (FILTERLESS_PORTFOLIO_SECTIONS.has(category)) return;

        const filterContainer = document.querySelector(`.filter-buttons[data-section="${sectionId}"]`);
        
        if (!filterContainer) {
            console.warn(`Conteneur de filtres non trouvé pour la section ${sectionId}`);
            return;
        }
        
        const types = typesByChapter[category] || [];
        
        filterContainer.innerHTML = '';
        
        types.forEach(typeName => {
            const button = document.createElement('button');
            const count = getProjectCountForFilter(category, typeName);
            button.className = 'filter-btn';
            button.setAttribute('data-filter', typeName);
            button.textContent = `${formatFilterName(typeName)} (${count})`;
            filterContainer.appendChild(button);
        });
    });
    
    initializeFilters();
    activateDefaultFilters();
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
    // #endregion
    // Vérifier que projects.json est disponible (nouvelle structure: tableau)
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
        // #region agent log
        // #endregion
        console.warn(`projects.json non disponible ou vide`);
        return [];
    }
    
    // Vérifier que typesByChapter est disponible
    if (!typesByChapter || !typesByChapter[category]) {
        // #region agent log
        // #endregion
        console.warn(`typesByChapter non disponible pour ${category}`);
        return [];
    }
    
    // Mapper la catégorie HTML vers le chapitre JSON
    const chapter = categoryToChapterMap[category];
    if (!chapter) {
        // #region agent log
        // #endregion
        console.warn(`Catégorie non mappée: ${category}`);
        return [];
    }
    
    const cards = [];
    const types = typesByChapter[category] || [];
    // #region agent log
    // #endregion
    
    // Pour chaque sous-catégorie, choisir 1 projet réel depuis projects.json
    types.forEach(typeName => {
        // Filtrer les projets par chapter et subcategory
        const projectsForType = projects.filter(project => 
            project.chapter === chapter && project.subcategory === typeName
        );
        // #region agent log
        // #endregion
        
        if (projectsForType.length > 0) {
            // Sélectionner aléatoirement un projet parmi ceux disponibles pour ce type
            const randomIndex = Math.floor(Math.random() * projectsForType.length);
            const selectedProject = projectsForType[randomIndex];
            
            // Utiliser le projet complet comme source de vérité (nouvelle structure)
            // #region agent log
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
            // #endregion
            console.warn(`Aucun projet trouvé pour ${category}/${typeName} (chapter: ${chapter})`);
        }
    });
    // #region agent log
    // #endregion
    
    return cards;
}

// Filtrage des projets
let filtersInitialized = false;

function initializeFilters() {
    if (filtersInitialized) return;
    filtersInitialized = true;

    document.querySelectorAll('.filter-buttons').forEach(container => {
        container.addEventListener('click', (e) => {
            const button = e.target.closest('.filter-btn');
            if (!button) return;
            applyFilter(button);
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
                element.classList.add('fade-in');
                const aboutContent = element.querySelector('.about-content');
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
                const section = grid.closest('.portfolio-section');

                if (FILTERLESS_PORTFOLIO_SECTIONS.has(category)) {
                    displayPortfolioSection(category, grid);
                    return;
                }

                const activeFilter = section?.querySelector('.filter-btn.active');
                if (!activeFilter) return;

                const filter = activeFilter.dataset.filter;
                // #region agent log
                // #endregion

                if (projects && Array.isArray(projects) && projects.length > 0) {
                    displayPortfolioSection(category, grid, filter);
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
    
    // Fonction centralisée de fermeture de la modale
    function closeModal() {
        if (!modal) return;
        if (typeof closeAllDevicePreviewFullscreen === 'function') {
            closeAllDevicePreviewFullscreen();
        }
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.src = '';
        });
        const modalImage = modal.querySelector('.modal-image-container');
        if (modalImage && typeof teardownUiDevicePreview === 'function') {
            teardownUiDevicePreview(modalImage);
        } else if (modalImage) {
            modalImage.innerHTML = '';
        }
        if (typeof hideUiDemoActions === 'function') {
            hideUiDemoActions();
        }
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }

    // Initialiser les event listeners de la modal
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', closeModal);
        
        // Fermer le modal en cliquant en dehors de l'image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    // Fermer le modal avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === "flex") {
            if (document.querySelector('.device-preview--fullscreen') && typeof closeAllDevicePreviewFullscreen === 'function') {
                closeAllDevicePreviewFullscreen();
                return;
            }
            closeModal();
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
    
    Promise.all([loadProfile(), loadTypesByChapter()]).then(() => {
        return loadProjects();
    }).then(() => {
        populateProfileUI();
        initContactForm();
        generateFilters();
        displayFeaturedProjects();
        initializeContent();
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
    charte: ['branding', 'logo', 'mockup', 'charte graphique', 'logos'],
    design: ['affiche', 'cover', 'concept', 'mockup', 'visuels promo'],
    video: ['promo', 'ia', 'motion', 'montage video - communication visuel', 'montage video - promo'],
    print: ['affiches creees', 'boutique etsy'],
    uiux: ['site et app']
};

// Fonction pour trier les projets selon l'ordre des catégories
function sortProjectsByCategory(projects, section) {
    const order = categoryOrder[section];
    if (!order || order.length === 0) return projects;

    return [...projects].sort((a, b) => {
        const keyA = a.subcategory || a.category || '';
        const keyB = b.subcategory || b.category || '';
        const indexA = order.indexOf(keyA);
        const indexB = order.indexOf(keyB);
        const rankA = indexA === -1 ? order.length : indexA;
        const rankB = indexB === -1 ? order.length : indexB;
        return rankA - rankB;
    });
}

// Fonction pour afficher les cartes de la homepage (générées depuis projects.json)
// NE DÉPEND PAS de projects.json
function displayHomepageCards(cardsToShow, grid, category) {
    // #region agent log
    // #endregion
    grid.innerHTML = '';
    
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    
    const isVideoSection = category === 'video';
    if (isVideoSection) {
        cardsContainer.classList.add('video-cards-grid');
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
        
        // Déterminer si la cover est une vidéo ou une image
        let isVideoCover = (coverFileType === 'video');
        
        if (!isVideoCover && coverFileType !== 'image') {
            console.warn(`L'image de couverture n'est pas un format reconnu: ${coverImage}`);
            return;
        }
        
        // Encoder l'URL pour gérer les espaces et caractères spéciaux
        const encodedUrl = encodeAssetUrl(coverImage);
        // Si la cover est une vidéo (.mp4), utiliser <video> avec autoplay en boucle sans son
        // Si c'est une image (.gif, .jpg, .png), garder <img>
        const previewContent = isVideoCover 
            ? `<video src="${encodedUrl}" muted autoplay loop playsinline style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;\\'>Vidéo non disponible</div>';"></video>`
            : `<img src="${encodedUrl}" alt="${card.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#f0f0f0;color:#666;\\'>Image non disponible</div>';">`;
        
        projectCard.innerHTML = `
            <div class="preview-container" style="width: 100%; height: 100%;">
                ${previewContent}
            </div>
            <span class="project-card-cta">Voir le projet →</span>
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
            // #endregion
            const projectToShow = {
                id: card.id,
                title: card.title,
                description: card.description || '',
                contexte: card.contexte || '',
                demarche: card.demarche || '',
                resultat: card.resultat || '',
                client: card.client || '',
                year: card.year || '',
                category: card.category || card.subcategory,
                subcategory: card.subcategory,
                chapter: card.chapter,
                demoUrl: card.demoUrl,
                defaultDevice: card.defaultDevice,
                cover: card.cover || card.coverImage,
                coverImage: card.cover || card.coverImage,
                assets: card.assets || card.images || [],
                images: card.assets || card.images || []
            };
            // #region agent log
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
        // #endregion
    });
    
    // Afficher les cartes
    const cards = cardsContainer.querySelectorAll('.project-card');
    // #region agent log
    // #endregion
    cards.forEach((card, i) => {
        if (card) {
            card.style.display = 'block';
            // #region agent log
            // #endregion
            setTimeout(() => {
                card.style.animation = 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                card.classList.add('visible');
                // #region agent log
                // #endregion
            }, i * 100);
        }
    });
}

// Affichage des projets dans les grilles portfolio
function displayProjects(projectsToShow, grid) {
    const section = grid.dataset.category;
    const sortedProjects = sortProjectsForDisplay(sortProjectsByCategory(projectsToShow, section));

    if (sortedProjects.length === 0) {
        showPortfolioEmptyState(grid, 'Aucun projet dans cette catégorie pour le moment.');
        return;
    }

    grid.innerHTML = '';

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';

    const isVideoSection = grid.dataset.category === 'video';
    if (isVideoSection) {
        cardsContainer.classList.add('video-cards-grid');
    }

    grid.appendChild(cardsContainer);

    sortedProjects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        cardsContainer.appendChild(card);
        card.style.display = 'block';
        setTimeout(() => {
            card.style.animation = 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            card.classList.add('visible');
            card.style.opacity = '1';
        }, index * 80);
    });
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

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm || contactForm.dataset.initialized === 'true') return;
    contactForm.dataset.initialized = 'true';

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.submit-btn');
        const statusEl = document.getElementById('contact-form-status');
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        const accessKey = profile?.web3formsAccessKey;

        if (!accessKey) {
            const to = profile?.email || 'R.Bensedira@gmail.com';
            const subject = encodeURIComponent(`Portfolio — ${data['project-type'] || 'Contact'} — ${data.name}`);
            const body = encodeURIComponent(
                `Nom: ${data.name}\nEmail: ${data.email}\nType: ${data['project-type']}\n\n${data.message}`
            );
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours…';
        }
        if (statusEl) {
            statusEl.textContent = '';
            statusEl.className = 'contact-form-status';
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: data.name,
                    email: data.email,
                    subject: `Portfolio — ${data['project-type'] || 'Contact'} — ${data.name}`,
                    message: data.message,
                    project_type: data['project-type'],
                    from_name: data.name,
                    replyto: data.email,
                    botcheck: data.botcheck || ''
                })
            });

            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Échec envoi');
            }

            contactForm.reset();
            if (statusEl) {
                statusEl.textContent = 'Message envoyé — merci, je vous réponds rapidement.';
                statusEl.className = 'contact-form-status contact-form-status--success';
            }
            if (submitBtn) {
                submitBtn.classList.add('success');
                submitBtn.textContent = 'Message envoyé ✓';
            }
        } catch (err) {
            console.error('Erreur formulaire contact:', err);
            if (statusEl) {
                statusEl.textContent = 'Envoi impossible. Réessayez ou écrivez-moi directement par email.';
                statusEl.className = 'contact-form-status contact-form-status--error';
            }
            if (submitBtn) {
                submitBtn.textContent = 'Envoyer';
            }
        } finally {
            if (submitBtn) submitBtn.disabled = false;
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.textContent = 'Envoyer';
                    submitBtn.classList.remove('success');
                }
                if (statusEl) {
                    statusEl.textContent = '';
                    statusEl.className = 'contact-form-status';
                }
            }, 5000);
        }
    });
}

// Gestion du formulaire de contact — initialisé après chargement du profil

// Navigation fluide (ancres internes uniquement — pas les liens modale / externes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
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
    const elements = document.querySelectorAll('.section-header, .filter-buttons, .portfolio-grid, .contact-form, .form-group, .submit-btn, .social-links a');
    
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
    const cards = document.querySelectorAll('.portfolio-grid .project-card');
    
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

function getProjectGalleryFiles(project) {
    const assets = (project.assets || project.images || []).filter(Boolean);
    if (assets.length > 0) return assets;

    const cover = project.cover || project.coverImage || '';
    return cover ? [cover] : [];
}

function getUiProjectGalleryFiles(project) {
    return getProjectGalleryFiles(project);
}

function getProjectCardPreviewSource(project) {
    const cover = project.cover || project.coverImage || project.image || '';
    const assets = project.assets || project.images || [];

    if (cover && getFileType(cover) === 'video') return cover;

    if (project.chapter === 'identite-en-mouvement') {
        const videoAsset = assets.find(asset => getFileType(asset) === 'video');
        if (videoAsset) return videoAsset;
    }

    if (cover) return cover;

    return assets.find(asset => getFileType(asset) === 'image') || assets[0] || '';
}

function appendModalVideo(container, src, label) {
    const video = document.createElement('video');
    video.src = encodeAssetUrl(src);
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.className = 'modal-content';
    if (label) video.setAttribute('aria-label', label);
    container.appendChild(video);
    return video;
}

function hideUiDemoActions() {
    const actions = document.getElementById('modalUiDemoActions');
    if (actions) actions.style.display = 'none';
}

function setupUiDemoActions(project) {
    const actions = document.getElementById('modalUiDemoActions');
    const fullscreenBtn = document.getElementById('modalUiDemoFullscreen');
    const externalLink = document.getElementById('modalUiDemoExternal');

    if (!project.demoUrl || project.chapter !== 'ui-ux') {
        hideUiDemoActions();
        return;
    }

    if (typeof mountHiddenUiDevicePreview === 'function') {
        mountHiddenUiDevicePreview(project);
    }

    if (externalLink) {
        externalLink.href = project.demoUrl;
        externalLink.onclick = (e) => {
            e.stopPropagation();
        };
    }

    if (fullscreenBtn) {
        fullscreenBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof openUiDevicePreviewFullscreen === 'function') {
                openUiDevicePreviewFullscreen();
            }
        };
    }

    if (actions) {
        actions.style.display = 'flex';
    }
}

function renderModalNavigation(container, { index = 0, total = 1, onPrev, onNext, chartePdfUrl } = {}) {
    if (!container) return;

    container.innerHTML = '';
    const hasGalleryNav = total > 1;
    const hasPdf = Boolean(chartePdfUrl);

    if (!hasGalleryNav && !hasPdf) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';

    if (hasGalleryNav) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.className = 'modal-nav-btn';
        prevBtn.disabled = index === 0;
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (index > 0 && typeof onPrev === 'function') onPrev();
        });

        const counter = document.createElement('span');
        counter.className = 'modal-nav-counter';
        counter.textContent = `${index + 1} / ${total}`;

        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.className = 'modal-nav-btn';
        nextBtn.disabled = index >= total - 1;
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (index < total - 1 && typeof onNext === 'function') onNext();
        });

        container.appendChild(prevBtn);
        container.appendChild(counter);
        container.appendChild(nextBtn);
    }

    if (hasPdf) {
        const downloadBtn = document.createElement('a');
        downloadBtn.href = chartePdfUrl;
        downloadBtn.className = 'modal-nav-btn modal-nav-download';
        downloadBtn.target = '_blank';
        downloadBtn.rel = 'noopener noreferrer';
        downloadBtn.innerHTML = '<i class="fas fa-file-pdf"></i><span>Télécharger la charte</span>';
        downloadBtn.addEventListener('click', (e) => e.stopPropagation());
        container.appendChild(downloadBtn);
    }
}

function showProjectDetails(project) {
    console.log('Affichage des détails du projet:', project);
    const modal = document.getElementById('imageModal');
    const modalImage = document.querySelector('.modal-image-container');
    const modalNavigation = document.getElementById('modalNavigation');
    
    if (!modal || !modalImage) {
        console.error('Modal ou modalImage non trouvé');
        return;
    }
    
    const isUiDemoProject = project.demoUrl && project.chapter === 'ui-ux';
    const projectFiles = getProjectGalleryFiles(project);
    
    if (projectFiles.length === 0 && !project.demoUrl) {
        console.error(`⚠️  Projet "${project.title}" n'a aucun fichier`);
        return;
    }
    
    // Vider le contenu existant
    if (typeof teardownHiddenUiDevicePreview === 'function') {
        teardownHiddenUiDevicePreview();
    }
    hideUiDemoActions();
    if (typeof teardownUiDevicePreview === 'function') {
        teardownUiDevicePreview(modalImage);
    } else {
        modalImage.innerHTML = '';
        modalImage.classList.remove('modal-image-container--device');
    }
    if (modalNavigation) {
        modalNavigation.innerHTML = '';
        modalNavigation.style.display = 'none';
    }

    if (!isUiDemoProject && projectFiles.length === 0 && project.demoUrl) {
        mountUiDevicePreview(modalImage, project.demoUrl, project.title, project.defaultDevice || 'desktop');
    } else if (projectFiles.length === 1) {
        const file = projectFiles[0];
        const fileType = getFileType(file);
        
        renderModalNavigation(modalNavigation, {
            total: projectFiles.length,
            chartePdfUrl: project.chartePdfUrl
        });
        
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
            appendModalVideo(modalImage, file, project.title);
    } else {
        const img = document.createElement('img');
            img.src = encodeAssetUrl(file);
            console.log("🎬 Chargement média :", img.src);
        img.alt = project.title;
        img.className = 'modal-content';
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
                appendModalVideo(modalImage, file, `${project.title} - ${index + 1}/${projectFiles.length}`);
            } else {
                const img = document.createElement('img');
                img.src = encodeAssetUrl(file);
                console.log("🎬 Chargement média :", img.src);
                img.alt = `${project.title} - ${index + 1}/${projectFiles.length}`;
                img.className = 'modal-content';
                modalImage.appendChild(img);
            }
            
            // Mettre à jour les contrôles de navigation sous l'image
            renderModalNavigation(modalNavigation, {
                index,
                total: projectFiles.length,
                onPrev: () => {
                    currentIndex = Math.max(0, currentIndex - 1);
                    displayFile(currentIndex);
                },
                onNext: () => {
                    currentIndex = Math.min(projectFiles.length - 1, currentIndex + 1);
                    displayFile(currentIndex);
                },
                chartePdfUrl: project.chartePdfUrl
            });
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
    // #endregion
    if (project.contexte && project.demarche && project.resultat) {
        // Utiliser les champs séparés si disponibles
        // #region agent log
        // #endregion
        if (modalContexte) modalContexte.textContent = project.contexte;
        if (modalDemarche) modalDemarche.textContent = project.demarche;
        if (modalResultat) modalResultat.textContent = project.resultat;
    } else if (project.description) {
        // #region agent log
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
        modalClient.textContent = project.client || '';
        modalClient.setAttribute('data-type', 'client');
    }
    
    if (modalYear) {
        modalYear.textContent = project.year || '';
        modalYear.setAttribute('data-type', 'year');
    }
    
    const projectCategory = project.subcategory || project.category || '';
    
    if (modalCategory) {
        modalCategory.textContent = formatFilterName(projectCategory);
        modalCategory.setAttribute('data-type', 'category');
        modalCategory.setAttribute('data-category', projectCategory);
    }

    const modalProjectType = document.getElementById('modalProjectType');
    applyProjectTypeBadge(modalProjectType, project.projectType);

    const modalProjectInfo = document.getElementById('modalProjectInfo');
    if (modalProjectInfo) {
        const infoParts = [];
        if (project.role) infoParts.push(`<p><strong>Rôle :</strong> ${project.role}</p>`);
        if (project.tools) infoParts.push(`<p><strong>Outils :</strong> ${project.tools}</p>`);
        if (project.deliverables) infoParts.push(`<p><strong>Livrables :</strong> ${project.deliverables}</p>`);
        modalProjectInfo.innerHTML = infoParts.join('');
        modalProjectInfo.style.display = infoParts.length ? 'block' : 'none';
    }

    const modalDemoLink = document.getElementById('modalDemoLink');
    if (modalDemoLink) {
        if (project.demoUrl && !isUiDemoProject) {
            modalDemoLink.href = project.demoUrl;
            modalDemoLink.style.display = 'inline-flex';
        } else {
            modalDemoLink.style.display = 'none';
        }
    }

    if (isUiDemoProject) {
        setupUiDemoActions(project);
    }
    
    // Afficher le modal
    modal.style.display = "flex";
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