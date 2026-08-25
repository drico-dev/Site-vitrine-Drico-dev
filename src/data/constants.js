// ============================================================================
// constants.js — TOUTES les informations modifiables du site sont ici.
// Aucune donnée commerciale (nom, prix, numéro WhatsApp, projets...) ne doit
// être écrite en dur dans un composant. Modifiez uniquement ce fichier.
// ============================================================================

export const personalInfo = {
  name: "Drico-Dev", 
  brand: "Drico",
  brandSuffix: "-Dev",
  role: "Développeur Web Freelance",
  tagline: "Sites web professionnels pour entreprises ambitieuses",
  location: "Abidjan, Côte d'Ivoire",
  phone: "+225 01 40 58 64 40", 
  whatsapp: "2250140586440", 
  email: "angecedric766@gmail.com", 
  availability: "Disponible pour de nouveaux projets",
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Formules", href: "#formules" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/2250140586440", icon: "MessageCircle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ange-cedric-n-goran-374236404/?skipRedirect=true", icon: "Linkedin" },
  { label: "GitHub", href: "https://github.com/drico-dev", icon: "Github" },
];

// ----------------------------------------------------------------------------
// SERVICES
// ----------------------------------------------------------------------------
export const services = [
  {
    id: "vitrine",
    icon: "LayoutTemplate",
    title: "Site vitrine",
    description:
      "Un site clair et professionnel pour présenter votre activité, vos services et vos coordonnées, disponible 24h/24.",
  },
  {
    id: "restaurant",
    icon: "UtensilsCrossed",
    title: "Site pour restaurant",
    description:
      "Menu digital, ambiance visuelle soignée et prise de contact directe pour donner envie de réserver une table.",
  },
  {
    id: "hotel",
    icon: "BedDouble",
    title: "Site pour hôtel",
    description:
      "Présentation des chambres et services, galerie immersive et demandes de réservation simplifiées.",
  },
  {
    id: "ecommerce",
    icon: "ShoppingBag",
    title: "Site e-commerce",
    description:
      "Catalogue produits, panier et paiement pour vendre en ligne et élargir votre zone de chalandise.",
  },
  {
    id: "landing",
    icon: "Rocket",
    title: "Landing page",
    description:
      "Une page unique, ciblée et orientée conversion pour un lancement, une offre ou une campagne publicitaire.",
  },
  {
    id: "refonte",
    icon: "RefreshCcw",
    title: "Refonte de site",
    description:
      "Votre site actuel vieillit ou convertit mal ? Je le modernise sans perdre votre référencement existant.",
  },
  {
    id: "uiux",
    icon: "PenTool",
    title: "Design UI/UX",
    description:
      "Une interface pensée pour votre audience : parcours clair, hiérarchie visuelle et expérience agréable.",
  },
  {
    id: "maintenance",
    icon: "ShieldCheck",
    title: "Maintenance & accompagnement",
    description:
      "Mises à jour, ajustements de contenu et support technique pour garder un site fiable dans la durée.",
  },
];

// ----------------------------------------------------------------------------
// POURQUOI UN SITE PROFESSIONNEL
// ----------------------------------------------------------------------------
export const whyChooseUs = [
  {
    icon: "BadgeCheck",
    title: "Une image professionnelle",
    description: "Un visiteur juge votre sérieux en quelques secondes. Un site soigné inspire confiance immédiatement.",
  },
  {
    icon: "Search",
    title: "Meilleure visibilité sur Google",
    description: "Une structure optimisée pour apparaître dans les recherches de vos futurs clients.",
  },
  {
    icon: "Handshake",
    title: "Plus de crédibilité",
    description: "Face à la concurrence, un site professionnel fait pencher la balance en votre faveur.",
  },
  {
    icon: "Sparkles",
    title: "Expérience utilisateur moderne",
    description: "Navigation fluide, temps de chargement rapide et design agréable à parcourir.",
  },
  {
    icon: "Smartphone",
    title: "Adapté au mobile",
    description: "Plus de 70% du trafic vient du mobile : votre site s'affiche parfaitement partout.",
  },
  {
    icon: "TrendingUp",
    title: "Meilleure conversion",
    description: "Des parcours et des appels à l'action pensés pour transformer les visiteurs en clients.",
  },
  {
    icon: "Palette",
    title: "Une solution personnalisée",
    description: "Aucun template générique : chaque site est construit autour de votre identité.",
  },
  {
    icon: "LifeBuoy",
    title: "Un accompagnement personnalisé",
    description: "Du premier échange à la mise en ligne, vous êtes accompagné à chaque étape.",
  },
];

// ----------------------------------------------------------------------------
// PROCESSUS
// ----------------------------------------------------------------------------
export const processSteps = [
  {
    number: "01",
    title: "Échange",
    description: "Nous discutons de votre activité, de vos besoins et de vos objectifs.",
    icon: "MessagesSquare",
  },
  {
    number: "02",
    title: "Conception",
    description: "Je définis la structure, le design et l'expérience utilisateur.",
    icon: "PenTool",
  },
  {
    number: "03",
    title: "Développement",
    description: "Je transforme la conception en un site web moderne, responsive et performant.",
    icon: "Code2",
  },
  {
    number: "04",
    title: "Mise en ligne",
    description: "Le site est déployé avec son nom de domaine et son hébergement.",
    icon: "Rocket",
  },
];

// ----------------------------------------------------------------------------
// PROJETS / RÉALISATIONS — ajoutez un objet ici pour ajouter un projet
// ----------------------------------------------------------------------------
export const projects = [
  {
    id: "projet-restaurant",
    name: "Chez Awa",
    category: "Restaurant",
    description: "Site vitrine avec menu digital et prise de contact WhatsApp intégrée.",
    image: "restaurant",
    link: "#",
  },
  {
    id: "projet-hotel",
    name: "Hôtel Baobab",
    category: "Hôtellerie",
    description: "Présentation des chambres, galerie photo et formulaire de réservation.",
    image: "hotel",
    link: "#",
  },
  {
    id: "projet-boutique",
    name: "Loulou Boutique",
    category: "Boutique",
    description: "Catalogue produits et parcours d'achat pensé pour la conversion mobile.",
    image: "boutique",
    link: "#",
  },
  {
    id: "projet-entreprise",
    name: "Atlas Conseil",
    category: "Entreprise",
    description: "Site institutionnel présentant l'expertise et les références du cabinet.",
    image: "entreprise",
    link: "#",
  },
  {
    id: "projet-portfolio",
    name: "Studio K.",
    category: "Portfolio",
    description: "Portfolio professionnel mettant en valeur un univers créatif fort.",
    image: "portfolio",
    link: "#",
  },
];

// ----------------------------------------------------------------------------
// FORMULES / TARIFS — les prix sont centralisés ici uniquement
// ----------------------------------------------------------------------------
export const pricingPlans = [
  {
    id: "essential",
    name: "Essential",
    price: "80 000",
    currency: "FCFA",
    period: "50% à la commande, 50% à la livraison",
    description: "Pour les petites entreprises qui souhaitent simplement être présentes en ligne.",
    popular: false,
    features: [
      "Site vitrine professionnel",
      "Design responsive",
      "3 à 5 pages",
      "Formulaire de contact",
      "Intégration WhatsApp",
      "Mise en ligne",
      "Support de base (7 jours)",
    ],
    cta: "Choisir Essential",
  },
  {
    id: "pro",
    name: "Pro",
    price: "150 000",
    currency: "FCFA",
    period: "50% à la commande, 50% à la livraison",
    description: "La formule la plus complète pour une présence en ligne qui convertit.",
    popular: true,
    features: [
      "Site web professionnel",
      "Jusqu'à 7 pages",
      "Design personnalisé",
      "SEO de base",
      "Intégration WhatsApp",
      "Formulaire de contact avancé",
      "Galerie / catalogue produits",
      "Mise en ligne et configuration du nom de domaine",
      "Support 30 jours",
    ],
    cta: "Choisir Pro",
  },
  {
    id: "premium",
    name: "Premium",
    price: "Sur devis",
    currency: "",
    period: "selon le projet",
    description: "Pour les entreprises qui souhaitent une présence en ligne complète et sur-mesure.",
    popular: false,
    features: [
      "Site web premium sur-mesure",
      "Design entièrement personnalisé",
      "Pages illimitées selon le projet",
      "SEO avancé",
      "Animations avancées",
      "Galerie / catalogue produits",
      "Formulaires avancés",
      "Intégration WhatsApp",
      "Optimisation des performances",
      "Maintenance & accompagnement",
    ],
    cta: "Choisir Premium",
  },
];

export const formuleOptions = [
  { value: "essential", label: "Essential" },
  { value: "pro", label: "Pro" },
  { value: "premium", label: "Premium" },
  { value: "unsure", label: "Je ne sais pas encore" },
];

// ----------------------------------------------------------------------------
// TÉMOIGNAGES — à remplacer par de vrais retours clients dès que possible
// ----------------------------------------------------------------------------
export const testimonials = [
  {
    id: "temoin-1",
    name: "Awa Koné",
    role: "Gérante, Chez Awa",
    quote:
      "Depuis la mise en ligne du site, nous recevons des réservations chaque semaine directement via WhatsApp. Un vrai gain de temps.",
    avatarInitials: "AK",
  },
  {
    id: "temoin-2",
    name: "Jean-Marc Kouassi",
    role: "Directeur, Atlas Conseil",
    quote:
      "Un travail sérieux, des délais respectés et un site qui reflète enfin le niveau de notre cabinet.",
    avatarInitials: "JK",
  },
  {
    id: "temoin-3",
    name: "Fatou Diabaté",
    role: "Fondatrice, Loulou Boutique",
    quote:
      "Le site est rapide, beau sur mobile, et mes clientes commandent plus facilement qu'avant. Je recommande.",
    avatarInitials: "FD",
  },
];
