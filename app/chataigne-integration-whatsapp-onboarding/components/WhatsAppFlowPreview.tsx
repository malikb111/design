import { User, Check } from "lucide-react";
import Image from "next/image";

interface WhatsAppFlowPreviewProps {
  restaurantName?: string;
  restaurantLogo?: string;
}

export default function WhatsAppFlowPreview({
  restaurantName = "Votre Restaurant",
  restaurantLogo = "",
}: WhatsAppFlowPreviewProps) {
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
        {/* Titre du flow - centré */}
        <div className="border-b border-[#2A3942] py-2.5 px-4">
          <h2 className="text-base font-semibold text-white text-center">
            Livraison
          </h2>
        </div>

        <div className="p-4 space-y-4">
          {/* Logo du restaurant (réduit) */}
          <div className="flex justify-center mb-2">
            {restaurantLogo ? (
              <Image
                src={restaurantLogo}
                alt={restaurantName}
                width={70}
                height={70}
                className="rounded-full"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#233138] to-[#18252D] flex items-center justify-center">
                <span className="text-xl font-bold">
                  {restaurantName.substring(0, 1)}
                </span>
              </div>
            )}
          </div>

          {/* Message de bienvenue en H1 */}
          <div className="text-left mt-1">
            <h1 className="text-white text-xl font-semibold">
              Bonjour, bienvenue chez {restaurantName}
            </h1>
          </div>

          {/* Question en H2 plus petit */}
          <div className="text-left mb-1">
            <h2 className="text-white text-sm font-normal text-[#8696A0]">
              Comment souhaiteriez-vous récupérer votre commande ?
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            <div className="w-full bg-[#1F2C34] rounded-lg p-3 text-left flex items-center justify-between">
              <span className="text-sm text-white">Je souhaite être livré</span>
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                <Check className="h-4 w-4 text-black" strokeWidth={2} />
              </div>
            </div>

            <div className="w-full bg-[#1F2C34] rounded-lg p-3 text-left flex items-center justify-between">
              <span className="text-sm text-white">
                Je souhaite récupérer en magasin
              </span>
              <div className="opacity-0 w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                <Check className="h-4 w-4 text-black" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Bouton continuer */}
          <button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 transition-colors rounded-lg py-2.5 text-center text-white font-medium mt-2">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
