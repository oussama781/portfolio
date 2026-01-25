# Portfolio Premium - TAIDI Oussama

Portfolio professionnel moderne et élégant pour ingénieur full-stack, développé avec React, Tailwind CSS et Framer Motion.

## 🚀 Technologies Utilisées

- **React 19** - Bibliothèque UI
- **React Router DOM** - Navigation multi-pages
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Icons** - Icônes des technologies

## 📁 Structure du Projet

```
src/
├── components/
│   └── Layout.js          # Layout principal avec Navbar et Footer
├── pages/
│   ├── Home.js            # Page d'accueil avec Hero section
│   ├── About.js           # Page À propos (CV interactif)
│   ├── Skills.js          # Page Compétences techniques
│   ├── Work.js            # Page Projets
│   └── Contact.js         # Page Contact avec formulaire
├── data/
│   ├── cvData.js          # Données du CV (expériences, formations, etc.)
│   └── skillsData.js       # Données des compétences avec icônes
├── App.js                 # Configuration React Router
└── index.js               # Point d'entrée
```

## 🎨 Caractéristiques

- ✅ Architecture multi-pages avec React Router
- ✅ Design dark theme premium
- ✅ Animations subtiles avec Framer Motion
- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Navigation fluide avec indicateur actif
- ✅ Formulaire de contact fonctionnel
- ✅ Timeline interactive pour les expériences
- ✅ Logos officiels des technologies
- ✅ Grid background animé
- ✅ Typographie moderne et élégante

## 📦 Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Build pour Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

## 🌐 Déploiement

### Déploiement sur Netlify

1. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

2. **Via l'interface Netlify**
   - Connecter votre repository GitHub
   - Build command: `npm run build`
   - Publish directory: `build`
   - Déployer

### Déploiement sur Vercel

1. **Via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Via l'interface Vercel**
   - Importer votre projet GitHub
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Déployer

### Déploiement sur GitHub Pages

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Ajouter dans package.json**
   ```json
   "homepage": "https://votre-username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

## 📝 Personnalisation

### Modifier les données du CV

Éditez le fichier `src/data/cvData.js` pour mettre à jour :
- Informations personnelles
- Expériences professionnelles
- Formations
- Certifications
- Projets
- Langues

### Modifier les compétences

Éditez le fichier `src/data/skillsData.js` pour :
- Ajouter/retirer des compétences
- Modifier les catégories
- Changer les icônes

### Modifier les couleurs

Les couleurs principales sont définies dans les classes Tailwind :
- Bleu d'accent : `blue-500`, `blue-400`
- Fond : `#0B0F14`
- Texte : `gray-200`, `gray-400`

Pour changer le thème de couleur, remplacez `blue` par une autre couleur Tailwind (ex: `green`, `purple`, `violet`).

## 🎯 Pages Disponibles

- `/` - Page d'accueil avec Hero section
- `/about` - CV interactif complet
- `/skills` - Compétences techniques par catégorie
- `/work` - Projets réalisés
- `/contact` - Formulaire de contact

## 📱 Responsive Design

Le portfolio est entièrement responsive :
- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

## 🔧 Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée la version de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte Create React App (irréversible)

## 📄 Licence

Ce projet est privé et destiné à un usage personnel.

## 👤 Auteur

**TAIDI Oussama**
- Email: oussama.taidi@gmail.com
- LinkedIn: [oussa-ma-taidi](https://linkedin.com/in/oussa-ma-taidi)
- Téléphone: +212 6 87 86 95 21

---

**Note** : Assurez-vous que le fichier `public/cv.pdf` contient votre CV à jour pour le téléchargement.
