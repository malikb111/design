import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { InfoIcon, User, MapPin, Clock, FileText } from "lucide-react";

interface Step6Props {
  onNext: () => void;
  onPrevious: () => void;
}

interface FlowPageConfig {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  enabled: boolean;
}

export default function Step6({ onNext, onPrevious }: Step6Props) {
  const [flowPages, setFlowPages] = useState<FlowPageConfig[]>([
    {
      id: "information",
      title: "Page d'information",
      description:
        "Affiche une page d'information au début du flux de commande",
      icon: FileText,
      enabled: true,
    },
    {
      id: "name",
      title: "Page de saisie du nom",
      description: "Demande au client de saisir son nom",
      icon: User,
      enabled: true,
    },
    {
      id: "address",
      title: "Page de saisie de l'adresse",
      description: "Demande au client de saisir son adresse",
      icon: MapPin,
      enabled: true,
    },
    {
      id: "time",
      title: "Page de saisie de l'heure",
      description: "Demande au client de choisir une heure de livraison",
      icon: Clock,
      enabled: true,
    },
  ]);

  const handleTogglePage = (id: string) => {
    setFlowPages(
      flowPages.map((page) =>
        page.id === id ? { ...page, enabled: !page.enabled } : page
      )
    );
  };

  // Vérifier si la page d'information est activée avant de continuer
  const handleNext = () => {
    // Le composant parent (page.tsx) détectera l'état via les attributs data-*
    onNext();
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#212121] mb-3">
          Configuration des étapes du flux
        </h1>
        <p className="text-[#757575] text-base">
          Personnalisez les étapes que vos clients verront lors de leur commande
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex gap-3 mb-4">
        <InfoIcon className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-amber-800 font-medium mb-2">
            Personnalisation du flux WhatsApp
          </p>
          <p className="text-sm text-amber-700">
            Activez ou désactivez les pages selon vos besoins. Chaque page
            active sera présentée à vos clients dans l'ordre affiché ci-dessous.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {flowPages.map((page) => (
          <div
            key={page.id}
            data-flow-page={page.id}
            data-enabled={page.enabled.toString()}
            className={`rounded-xl border shadow-sm overflow-hidden transition-all duration-300 ${
              page.enabled
                ? "border-[#25D366]/40 bg-white"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      page.enabled
                        ? "bg-[#25D366]/10 text-[#25D366]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <page.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-medium text-lg ${
                        page.enabled ? "text-[#212121]" : "text-gray-500"
                      }`}
                    >
                      {page.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        page.enabled ? "text-[#757575]" : "text-gray-400"
                      }`}
                    >
                      {page.description}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={page.enabled}
                  onCheckedChange={() => handleTogglePage(page.id)}
                  className="data-[state=checked]:bg-[#25D366]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12 flex justify-end gap-3">
        <Button
          variant="outline"
          className="border-gray-200 text-[#757575]"
          onClick={onPrevious}
        >
          Retour
        </Button>

        <Button
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
          onClick={handleNext}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}
