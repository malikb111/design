import { User, ChevronRight } from "lucide-react";

interface WhatsAppCategoryPreviewProps {
  restaurantName?: string;
  categories?: { id: string; name: string }[];
}

export default function WhatsAppCategoryPreview({
  restaurantName = "Votre Restaurant",
  categories = [],
}: WhatsAppCategoryPreviewProps) {
  // Prix fictifs pour chaque catégorie (en situation réelle, ces données viendraient d'une API)
  const categoryPrices: Record<string, string> = {
    Burgers: "11.00 CHF",
    Boissons: "4.00 CHF",
    Desserts: "6.00 CHF",
    Tacos: "13.50 CHF",
    Snack: "2.00 CHF",
    Pizza: "15.00 CHF",
    Salades: "8.50 CHF",
  };

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
      <div className="flex-1 bg-[#111B21] rounded-t-xl border-t border-[#2A3942] shadow-lg relative z-20 flex flex-col">
        {/* Titre du flow - centré */}
        <div className="border-b border-[#2A3942] py-2.5 px-4">
          <h2 className="text-base font-semibold text-white text-center">
            Catégories
          </h2>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Question */}
          <div className="p-4 text-left">
            <h2 className="text-white text-sm font-normal mb-4">
              Quel produit souhaiteriez-vous choisir ?
            </h2>
          </div>

          {/* Liste des catégories */}
          <div className="overflow-y-auto px-2 flex-1">
            {categories.length === 0 ? (
              <div className="text-center text-[#8696A0] p-4">
                Aucune catégorie disponible
              </div>
            ) : (
              <div className="space-y-1">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-[#1F2C34] rounded-lg p-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">
                        {category.name}
                      </p>
                      <p className="text-xs text-[#8696A0]">
                        Dès {categoryPrices[category.name] || "5.00 CHF"}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#8696A0]" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bouton continuer */}
          <div className="p-4 border-t border-[#2A3942]">
            <button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 transition-colors rounded-lg py-2.5 text-center text-white font-medium">
              Continuer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
