const fs = require('fs');
const path = require('path');

const folderMap = {
    'fluid-air-logos': 'realisation/identite_branding/logos/fluid_air',
    'charte-graphique-UrbaFlor': 'realisation/identite_branding/charte_graphique/urbflor',
    'charte-graphique-gazelles': 'realisation/identite_branding/charte_graphique/gazelles',
    'charte-graphique-marlou': 'realisation/identite_branding/charte_graphique/marlou',
    'nmr-logos': 'realisation/identite_branding/logos/nmr',
    'nmr-mockup': 'realisation/declinaisons_visuelles/mockup/nmr',
    "fluid'air-mockup": 'realisation/declinaisons_visuelles/mockup/fluid_air',
    'dlanight-mockup': 'realisation/declinaisons_visuelles/mockup/dlanight',
    'django-visuel-promo': 'realisation/declinaisons_visuelles/visuels_promo/django',
    'theweekend-visuels-promo': 'realisation/declinaisons_visuelles/visuels_promo/theweeknd',
    'joker-visuel-promo': 'realisation/declinaisons_visuelles/visuels_promo/joker',
    'Lyrics-Clip-dlanight': 'realisation/motion_video/montage_communication_visuel/dlanight_lyrics',
    'Reel-road-trip-Ecosse': 'realisation/motion_video/montage_communication_visuel/ecosse_reel',
    'maestra-promo': 'realisation/motion_video/montage_promo/maestra',
    'dlanight-promo': 'realisation/motion_video/montage_promo/dlanight',
    'cv-motion': 'realisation/motion_video/motion/cv_motion',
    'Adaptation-de-visuels-publicitaires': 'realisation/motion_video/motion/wobz_distribution',
    'affiche-pays-minimaliste': 'realisation/print_etsy/affiches_creees/the_still_way',
    'affiche-films-minimaliste': 'realisation/print_etsy/affiches_creees/cinema_films',
    'birthday-log-ui': 'realisation/ui_ux/birthday_log',
    'anote-in-the-void': 'realisation/ui_ux/a_note_in_the_void'
};

const projects = JSON.parse(fs.readFileSync(path.join(__dirname, 'projects.json'), 'utf8')).projects;
const out = {};

for (const project of projects) {
    const folder = folderMap[project.id];
    if (!folder) continue;

    const coverUrl = project.cover || '';
    const coverFile = decodeURIComponent((coverUrl.split('/').pop() || 'cover.png').split('?')[0]);
    const assetFiles = (project.assets || [])
        .map((url) => decodeURIComponent(url.split('/').pop().split('?')[0]))
        .filter((file) => file && file !== coverFile);

    out[project.id] = { folder, coverFile, assetFiles };
}

out['birthday-log-ui'] = {
    folder: folderMap['birthday-log-ui'],
    coverFile: 'cover.png',
    assetFiles: ['mockup_finale_2.jpg', 'mockup_finale_3.jpg', 'mockupF2_.jpg']
};

out['anote-in-the-void'] = {
    folder: folderMap['anote-in-the-void'],
    coverFile: 'cover.png',
    assetFiles: ['ecran-accueil.jpg', 'ecran-contexte.jpg', 'context.jpg']
};

fs.writeFileSync(path.join(__dirname, 'project-storage.json'), JSON.stringify(out, null, 2));
console.log(`project-storage.json: ${Object.keys(out).length} projets`);
