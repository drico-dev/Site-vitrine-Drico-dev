import {
  LayoutTemplate,
  UtensilsCrossed,
  BedDouble,
  ShoppingBag,
  Rocket,
  RefreshCcw,
  PenTool,
  ShieldCheck,
  BadgeCheck,
  Search,
  Handshake,
  Sparkles,
  Smartphone,
  TrendingUp,
  Palette,
  LifeBuoy,
  MessagesSquare,
  Code2,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  HelpCircle,
} from "lucide-react";

// Toutes les icônes référencées (par nom, en string) dans data/constants.js
// doivent être ajoutées à cette table.
const icons = {
  LayoutTemplate,
  UtensilsCrossed,
  BedDouble,
  ShoppingBag,
  Rocket,
  RefreshCcw,
  PenTool,
  ShieldCheck,
  BadgeCheck,
  Search,
  Handshake,
  Sparkles,
  Smartphone,
  TrendingUp,
  Palette,
  LifeBuoy,
  MessagesSquare,
  Code2,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
};

/** <Icon name="Rocket" size={20} className="text-electric-500" /> */
export default function Icon({ name, ...props }) {
  const Cmp = icons[name] || HelpCircle;
  return <Cmp {...props} />;
}
