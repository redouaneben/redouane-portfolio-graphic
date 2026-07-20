# Livrables à intégrer — Portfolio Rédouane Bensedira

Ce document liste les fichiers et contenus à ajouter de votre côté. Le site est prêt avec des placeholders.

---

## Priorité 1 — Indispensable pour candidater

| # | Livrable | Emplacement | Format |
|---|----------|-------------|--------|
| 1 | **CV PDF** | `assets/cv/Rdouane-Bensedira-CV.pdf` | PDF 1 page |
| 2 | **Cover Birthday Log** (UI/UX Malt) | `assets/realisation/ui_ux/Birthday/cover.jpg` + `projects-meta.json` | PNG/JPG |

---

## Priorité 2 — Projets phares (enrichir les case studies)

### UrbaFlor (diplôme)
- Planche des **3 pistes créatives** (dont celle retenue)
- Logo final + palette + typographies
- Mockups institutionnels

### Fluid'Air (mission client)
- **Avant / après** logo (IA → vectoriel)
- Déclinaisons déjà en ligne — vérifier qualité

### NMR (brief professionnel)
- Planche concept (Icare, serpent, corbeau)
- Mockups textile — déjà en ligne

### Wobz (candidature)
- Visuels bannières finales — déjà en ligne
- Optionnel : capture du brief

### Dlanight (collaboration)
- Pochette + mockups — déjà en ligne
- Lyrics clip — déjà en ligne

---

## Priorité 3 — Print & boutique Etsy

| Projet | Livrable |
|--------|----------|
| The Still Way (pays) | Affiches en ligne — mockup **poster en vente** + lien Etsy |
| Affiches films | Idem — mockup chambre / cadre |
| **Produits Etsy** | Vêtements, objets design — ajouter dans `boutique etsy` quand prêts + lien [RareDeptSociety](https://www.etsy.com/fr/shop/RareDeptSociety) |

Mettre à jour `projects.json` ou `projects-meta.json` pour chaque nouveau produit.

---

## Priorité 4 — UI/UX (optionnel)

| Livrable | Usage |
|----------|--------|
| Captures Figma (mobile + desktop) | Galerie modale Birthday Log |
| Wireframes | Onglet Démarche ou assets |
| Lien Figma | Champ `demoUrl` ou second lien |

Projet placeholder : **Birthday Log** — demo : https://www.birthdaylog.app/

---

## Priorité 5 — Polish global

- Titres projets harmonisés (`Marque — Type de projet`) — fait
- Favicon « RB » — fait (`assets/favicon.svg`)
- Textes LinkedIn prêts à copier — voir **`LINKEDIN.md`**
- Renseigner `portfolioUrl` dans `profile.json` après déploiement en ligne
- Photos process UrbaFlor (pistes refusées)
- Showreel 60–90 s (motion) — optionnel, section hero ou motion
- Héberger le site en ligne (Netlify, Vercel, etc.)

---

## Fichiers de configuration (si vous modifiez les textes)

| Fichier | Rôle |
|---------|------|
| `profile.json` | Hero, à propos, email, formation, outils |
| `projects-meta.json` | Badges, rôle, outils, livrables, projets phares |
| `projects.json` | Données projets graphisme / motion |
| `types-by-chapter.json` | Filtres par section |

---

## Contact formulaire

Le formulaire ouvre votre **messagerie** (mailto) — pas besoin de Formspree pour l'instant.

Pour un envoi sans ouvrir Outlook/Gmail : configurer **Formspree** plus tard (gratuit).

---

## Prochaine étape (après vos assets)

1. Ajouter le CV PDF
2. Ajouter cover UI/UX
3. Recharger le site via serveur local (Live Server)
4. Demander l'**émulateur device** (mobile / tablette / desktop) en mode Agent
