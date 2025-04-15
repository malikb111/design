import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import WhatsAppInfoPreview from "./WhatsAppInfoPreview";

interface Step7Props {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step7({ onNext, onPrevious }: Step7Props) {
  const [infoPageData, setInfoPageData] = useState({
    title: "Bienvenue chez Votre Restaurant",
    description:
      "Nous sommes ravis de vous accueillir sur notre service de commande par WhatsApp. Découvrez notre menu et commandez en quelques clics.",
    buttonText: "Commencer",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfoPageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#212121] mb-3">
          Configuration de la page d'information
        </h1>
        <p className="text-[#757575] text-base">
          Personnalisez le contenu de la page d'accueil de votre flux WhatsApp
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mt-10">
        {/* Côté gauche: prévisualisation */}
        <div className="flex-1 flex justify-center md:justify-end">
          <WhatsAppInfoPreview
            title={infoPageData.title}
            description={infoPageData.description}
            buttonText={infoPageData.buttonText}
          />
        </div>

        {/* Côté droit: formulaire */}
        <div className="flex-1 space-y-6">
          {/* Titre */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-[#212121]"
            >
              Titre
            </label>
            <Input
              id="title"
              name="title"
              value={infoPageData.title}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10"
              placeholder="Titre de votre page d'information"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-[#212121]"
            >
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={infoPageData.description}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10 resize-none min-h-[120px]"
              placeholder="Texte explicatif pour vos clients"
            />
            <p className="text-xs text-[#757575]">
              Présentez votre service de commande et donnez les informations
              utiles à vos clients
            </p>
          </div>

          {/* Texte du bouton */}
          <div className="space-y-2">
            <label
              htmlFor="buttonText"
              className="text-sm font-medium text-[#212121]"
            >
              Texte du bouton
            </label>
            <Input
              id="buttonText"
              name="buttonText"
              value={infoPageData.buttonText}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10"
              placeholder="Texte du bouton d'action"
            />
          </div>

          {/* Boutons d'action */}
          <div className="pt-6 flex justify-end gap-3">
            <Button
              variant="outline"
              className="border-gray-200 text-[#757575]"
              onClick={onPrevious}
            >
              Retour
            </Button>
            <Button
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              onClick={onNext}
            >
              Continuer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
