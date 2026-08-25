# Nova Studio — Site vitrine pour développeur web freelance

Site professionnel (React + Vite + Tailwind CSS) présentant des services de
création de sites web, une grille de tarifs et un formulaire de contact qui
envoie la demande directement sur WhatsApp.

## Installation

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

Build de production :

```bash
npm run build
npm run preview
```

## ⚠️ À personnaliser avant mise en ligne

Toutes les informations commerciales sont centralisées dans
**`src/data/constants.js`** :

- `personalInfo` — nom, marque, téléphone, **numéro WhatsApp**, email
- `socialLinks` — liens réseaux sociaux
- `services`, `whyChooseUs`, `processSteps` — contenu éditorial
- `projects` — réalisations affichées dans la section Portfolio
- `pricingPlans` — les 3 formules et leurs prix
- `testimonials` — témoignages clients (à remplacer par de vrais avis dès que possible)

Le numéro WhatsApp doit être au format international, sans `+` ni espaces
(ex : `2250700000000`).

## Structure du projet

```
src/
├── components/   → composants réutilisables (Button, Navbar, cartes...)
├── sections/     → une section de la page = un fichier
├── data/         → constants.js (toutes les données éditables)
└── utils/        → génération de l'URL WhatsApp
```

## Stack

React 18 · Vite · Tailwind CSS · Framer Motion · lucide-react
