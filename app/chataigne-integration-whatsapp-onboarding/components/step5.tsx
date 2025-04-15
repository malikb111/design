import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { InfoIcon, MessageSquareMore, Loader2, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import WhatsAppFlowPreview from "./WhatsAppFlowPreview";

interface Step5Props {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step5({ onNext, onPrevious }: Step5Props) {
  const [enableFlow, setEnableFlow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [usedMessageIndexes, setUsedMessageIndexes] = useState<number[]>([]);

  const loadingMessages = [
    { text: "Configuration du flux WhatsApp en cours...", emoji: "⚙️" },
    { text: "Création des interactions personnalisées...", emoji: "🔄" },
    { text: "Connexion à l'API WhatsApp Business...", emoji: "🔌" },
    { text: "Mise en place des menus interactifs...", emoji: "📱" },
    { text: "Optimisation des flux de conversation...", emoji: "💬" },
    { text: "Les clients vont adorer commander chez vous !", emoji: "😍" },
    { text: "Configuration des options de livraison...", emoji: "🚚" },
    { text: "Plus que quelques instants...", emoji: "⏳" },
    { text: "Presque terminé...", emoji: "🏁" },
  ];

  const getRandomMessage = () => {
    const availableIndexes = loadingMessages
      .map((_, index) => index)
      .filter((index) => !usedMessageIndexes.includes(index));

    if (availableIndexes.length === 0) {
      setUsedMessageIndexes([]); // Reset si on a utilisé toutes les phrases
      return Math.floor(Math.random() * loadingMessages.length);
    }

    const randomIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    setUsedMessageIndexes((prev) => [...prev, randomIndex]);
    return randomIndex;
  };

  // Utiliser useEffect pour gérer le changement de message pendant le chargement
  useEffect(() => {
    let messageInterval: NodeJS.Timeout;

    if (isLoading) {
      // Initial message
      setLoadingMessageIndex(getRandomMessage());

      // Changer le message toutes les 3 secondes pendant le chargement
      messageInterval = setInterval(() => {
        setLoadingMessageIndex(getRandomMessage());
      }, 3000);
    }

    // Nettoyer l'intervalle lorsque l'état de chargement change
    return () => {
      if (messageInterval) clearInterval(messageInterval);
    };
  }, [isLoading]); // Ce useEffect se déclenche quand isLoading change

  const handleActivation = async () => {
    if (!enableFlow) return onNext();

    setIsLoading(true);
    setUsedMessageIndexes([]);

    // Simulation d'un temps de chargement de 9 secondes
    await new Promise((resolve) => setTimeout(resolve, 9000));

    setIsLoading(false);
    setIsSynced(true);
  };

  if (isLoading) {
    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <div className="text-center space-y-1.5">
          <h1 className="text-2xl text-[#212121]">
            Configuration du flux de commande
          </h1>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center py-8">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#25D366]/10 rounded-full animate-ping" />
              <Loader2 className="h-12 w-12 text-[#25D366] animate-spin relative z-10" />
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-medium text-[#212121]">
                Configuration en cours...
              </h3>
              <div className="bg-[#25D366]/5 rounded-2xl p-4 max-w-sm mx-auto">
                <p className="text-[#757575] text-base flex items-center justify-center gap-2">
                  <span>{loadingMessages[loadingMessageIndex].text}</span>
                  <span className="text-xl">
                    {loadingMessages[loadingMessageIndex].emoji}
                  </span>
                </p>
              </div>
              <p className="text-sm text-[#757575]/70">
                Cette opération peut prendre quelques secondes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSynced) {
    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <div className="text-center space-y-1.5">
          <h1 className="text-2xl text-[#212121]">
            Configuration du flux de commande
          </h1>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center py-4">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6">
              <Check className="h-7 w-7 text-[#25D366]" />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-[#212121] mb-1">
                Flux WhatsApp configuré !
              </h3>
              <p className="text-[#757575] text-base">
                Les interactions personnalisées sont maintenant activées
              </p>
            </div>
            <Button
              className="w-full max-w-xs bg-[#25D366] hover:bg-[#25D366]/90 text-white h-11 text-base font-medium"
              onClick={onNext}
            >
              Configurer le flux
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#212121] mb-3">
          Configuration du flux de commande
        </h1>
        <p className="text-[#757575] text-base">
          Personnalisez l'expérience de commande de vos clients sur WhatsApp
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-start mt-10">
        {/* Côté gauche: prévisualisation */}
        <div className="flex-1 flex justify-center md:justify-end">
          <WhatsAppFlowPreview />
        </div>

        {/* Côté droit: options et contrôles */}
        <div className="flex-1 space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex gap-3 mb-4">
            <InfoIcon className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium mb-2">
                Qu'est-ce que le flux de commande WhatsApp ?
              </p>
              <p className="text-sm text-amber-700">
                Cette fonctionnalité permet d'enrichir l'expérience client avec
                des interactions personnalisées :
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Sélection de produits dans un menu interactif</li>
                  <li>
                    Choix de modalités de livraison (sur place, à emporter)
                  </li>
                  <li>Personnalisation des commandes</li>
                  <li>Confirmation des détails avant finalisation</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#212121] font-medium">
                  Activer le flux de commande
                </h3>
                <p className="text-sm text-[#757575]">
                  Cette fonctionnalité est entièrement optionnelle
                </p>
              </div>
              <Switch
                checked={enableFlow}
                onCheckedChange={setEnableFlow}
                className="data-[state=checked]:bg-[#25D366]"
              />
            </div>

            {enableFlow && (
              <div className="bg-[#25D366]/5 rounded-md p-4 mt-4">
                <p className="text-sm text-[#212121]">
                  Le flux de commande WhatsApp sera activé pour votre compte.
                </p>
              </div>
            )}
          </div>

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
              onClick={handleActivation}
            >
              {enableFlow ? "Activer et configurer" : "Terminer sans activer"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
