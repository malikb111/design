import { User } from "lucide-react";
import Image from "next/image";

interface WhatsAppInfoPreviewProps {
  restaurantName?: string;
  restaurantLogo?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function WhatsAppInfoPreview({
  restaurantName = "Votre Restaurant",
  restaurantLogo = "",
  title = "Bienvenue chez Votre Restaurant",
  description = "Nous sommes ravis de vous accueillir sur notre service de commande par WhatsApp. Découvrez notre menu et commandez en quelques clics.",
  buttonText = "Commencer",
}: WhatsAppInfoPreviewProps) {
  return (
    <div className="w-full max-w-[320px] h-[580px] bg-[#0B141A] text-white rounded-xl border border-gray-700 overflow-hidden relative flex flex-col">
      {/* Overlay semi-transparent sur toute la conversation */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"
        style={{ height: "103px" }}
      ></div>

      {/* Header de conversation WhatsApp */}
      <div className="bg-[#202C33] text-white py-3 px-4 flex items-center relative z-0">
        <div className="w-8 h-8 rounded-full bg-[#2A3942] flex items-center justify-center mr-3">
          <User className="h-5 w-5 text-[#8696A0]" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm font-medium">{restaurantName}</p>
          <p className="text-xs text-[#8696A0]">en ligne</p>
        </div>
      </div>

      {/* Conversation derrière */}
      <div className="flex-none h-[50px] py-2 px-3 bg-[#0B141A] relative z-0">
        {/* Message de bienvenue (juste un) */}
        <div className="bg-[#202C33] rounded-lg p-2 max-w-[80%] ml-auto">
          <p className="text-sm text-white">Bonjour, je souhaite commander</p>
        </div>
      </div>

      {/* Flow de commande popup */}
      <div className="flex-1 bg-[#111B21] rounded-t-xl border-t border-[#2A3942] shadow-lg relative z-20">
        {/* Titre du flow */}
        <div className="border-b border-[#2A3942] py-2.5 px-4">
          <h2 className="text-base font-semibold text-white text-center">
            Information
          </h2>
        </div>

        <div className="p-5 space-y-6 flex flex-col h-[calc(100%-53px)]">
          {/* Titre en H1 - aligné à gauche */}
          <div className="text-left mt-8">
            <h1 className="text-white text-xl font-semibold">{title}</h1>
          </div>

          {/* Description - texte aligné à gauche */}
          <div className="text-left">
            <p className="text-white text-sm leading-relaxed">{description}</p>
          </div>

          {/* Espace flexible pour pousser le bouton vers le bas */}
          <div className="flex-grow"></div>

          {/* Bouton continuer */}
          <button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 transition-colors rounded-lg py-2.5 text-center text-white font-medium mt-auto">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
