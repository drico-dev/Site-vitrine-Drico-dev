import { personalInfo, formuleOptions } from "../data/constants";

/**
 * Construit une URL wa.me avec un message pré-rempli à partir des données
 * du formulaire de contact.
 */
export function buildWhatsAppUrl({ nom, prenom, formule, message }) {
  const formuleLabel =
    formuleOptions.find((f) => f.value === formule)?.label || "Non précisée";

  const text = [
    "Bonjour, je souhaite créer un site internet.",
    "",
    `Nom : ${nom}`,
    `Prénom : ${prenom}`,
    `Formule choisie : ${formuleLabel}`,
    "",
    "Mon besoin :",
    message,
    "",
    "Merci.",
  ].join("\n");

  return `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** URL WhatsApp générique (sans message pré-rempli spécifique). */
export function buildSimpleWhatsAppUrl(text = "Bonjour, je souhaite discuter d'un projet de site web.") {
  return `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`;
}
