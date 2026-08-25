import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { personalInfo, formuleOptions } from "../data/constants";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const emptyForm = { nom: "", prenom: "", formule: "", message: "" };

/** presetPlan est fourni par App.jsx lorsqu'une formule est choisie plus haut sur la page. */
export default function Contact({ presetPlan }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (presetPlan) {
      setForm((f) => ({ ...f, formule: presetPlan }));
    }
  }, [presetPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.nom.trim()) nextErrors.nom = "Votre nom est requis.";
    if (!form.prenom.trim()) nextErrors.prenom = "Votre prénom est requis.";
    if (!form.formule) nextErrors.formule = "Sélectionnez une formule.";
    if (!form.message.trim() || form.message.trim().length < 10)
      nextErrors.message = "Décrivez votre besoin en quelques mots (10 caractères minimum).";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = buildWhatsAppUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-navy-950 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Parlons de votre projet"
              description="Décrivez votre activité et votre besoin : vous recevrez une réponse rapide, directement sur WhatsApp."
              dark
            />

            <div className="mt-10 flex flex-col gap-5">
              <InfoRow icon={Phone} label="Téléphone" value={personalInfo.phone} />
              <InfoRow icon={Mail} label="Email" value={personalInfo.email} />
              <InfoRow icon={MapPin} label="Localisation" value={personalInfo.location} />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-white p-7 shadow-glow md:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InputField
                label="Nom"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                error={errors.nom}
              />
              <InputField
                label="Prénom"
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
                error={errors.prenom}
              />
            </div>

            <div className="mt-5">
              <InputField
                label="Formule souhaitée"
                name="formule"
                type="select"
                value={form.formule}
                onChange={handleChange}
                options={formuleOptions}
                required
                error={errors.formule}
              />
            </div>

            <div className="mt-5">
              <InputField
                label="Votre besoin"
                name="message"
                type="textarea"
                value={form.message}
                onChange={handleChange}
                placeholder="Parlez-moi de votre activité et de ce que vous souhaitez pour votre site..."
                required
                error={errors.message}
              />
            </div>

            <Button type="submit" variant="whatsapp" size="lg" icon="whatsapp" className="mt-7 w-full">
              Envoyer ma demande sur WhatsApp
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function InfoRow({ icon: IconCmp, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-electric-300">
        <IconCmp size={18} strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-xs font-mono text-slate-500">{label}</p>
        <p className="text-[15px] font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
