"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Check,
  ArrowRight,
  Loader2,
  Phone,
  CreditCard,
  Package,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function OnboardingHubrisePage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [usedMessageIndexes, setUsedMessageIndexes] = useState<number[]>([]);

  const loadingMessages = [
    { text: "C'est mieux que de tout importer à la main non ?", emoji: "😌" },
    {
      text: "Ça va mettre un peu de temps, je m'attendais pas à devoir porter autant de menus",
      emoji: "💪",
    },
    { text: "Je synchronise tout ça avec soin...", emoji: "✨" },
    { text: "Presque fini, plus que quelques produits...", emoji: "⚡️" },
    { text: "Je fais de mon mieux pour aller vite !", emoji: "🚀" },
    { text: "Tellement de délicieux plats à importer...", emoji: "😋" },
    { text: "Je range tout ça bien proprement...", emoji: "🧹" },
    { text: "Un peu de patience, la qualité ça prend du temps", emoji: "🎯" },
    { text: "Je compte les calories... Non je rigole !", emoji: "😅" },
    { text: "Votre menu a l'air délicieux au passage", emoji: "😍" },
    { text: "Je m'assure que tout soit parfaitement organisé", emoji: "📋" },
    { text: "Plus rapide qu'une livraison à vélo !", emoji: "🚴" },
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

  const handleSync = async () => {
    setIsLoading(true);
    setUsedMessageIndexes([]);

    // Changer le message toutes les 3.5 secondes pendant le chargement
    const messageInterval = setInterval(() => {
      setLoadingMessageIndex(getRandomMessage());
    }, 3500);

    // Augmenter le temps total à 15 secondes
    await new Promise((resolve) => setTimeout(resolve, 15000));

    clearInterval(messageInterval);
    setIsLoading(false);
    setIsSynced(true);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#25D366", "#4CAF50", "#8BC34A"],
    });
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="h-16 bg-white border-b border-gray-100">
        <div className="container h-full mx-auto px-4 flex justify-center items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/chataigne.svg"
              alt="Chataigne"
              width={130}
              height={32}
              className="h-6 w-auto"
              priority
            />
            <span className="text-[#757575] px-2">×</span>
            <Image
              src="https://cdn.prod.website-files.com/6161f4404b466c76cff33b55/636524c49ea67840b4e707a7_61b0977e2a0bde23060054ec_HubRise%20Logo-p-500.webp"
              alt="Hubrise"
              width={100}
              height={32}
              className="h-5 w-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container max-w-xl mx-auto px-4 py-12">
        {step === 1 ? (
          <div className="space-y-6">
            <div className="text-center space-y-1.5">
              <h1 className="text-2xl text-[#212121]">
                Connectons votre menu Hubrise
              </h1>
            </div>

            <div className="p-8">
              {!isLoading && !isSynced ? (
                <div className="flex flex-col items-center">
                  <div className="mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center">
                      <Package className="h-7 w-7 text-[#25D366]" />
                    </div>
                  </div>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-[#212121] mb-2">
                      Importation du catalogue
                    </h3>
                    <p className="text-[#757575] text-base max-w-sm">
                      Synchronisez votre menu Hubrise pour commencer à recevoir
                      des commandes
                    </p>
                  </div>
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white h-11 text-base font-medium mb-3"
                    onClick={handleSync}
                  >
                    Synchroniser le catalogue
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[#757575] hover:text-[#212121] text-sm font-normal"
                    onClick={() => setStep(2)}
                  >
                    Passer cette étape
                  </Button>
                </div>
              ) : isLoading ? (
                <div className="flex flex-col items-center py-8">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-[#25D366]/10 rounded-full animate-ping" />
                    <Loader2 className="h-12 w-12 text-[#25D366] animate-spin relative z-10" />
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-medium text-[#212121]">
                      Importation en cours...
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
              ) : (
                <div className="flex flex-col items-center py-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-[#25D366]" />
                  </div>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-[#212121] mb-1">
                      Catalogue synchronisé !
                    </h3>
                    <p className="text-[#757575] text-base">
                      Votre menu est maintenant importé
                    </p>
                  </div>
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white h-11 text-base font-medium"
                    onClick={handleConfetti}
                  >
                    Continuer la configuration
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-1.5 mb-8">
              <h1 className="text-2xl font-semibold text-[#212121]">
                Configuration des services
              </h1>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  title: "Service Livraison",
                  description: "WhatsApp pour la livraison",
                  placeholder: "+33 6 XX XX XX XX",
                },
                {
                  icon: Phone,
                  title: "Service À emporter",
                  description: "WhatsApp pour l'emporter",
                  placeholder: "+33 6 XX XX XX XX",
                },
                {
                  icon: CreditCard,
                  title: "Service Stripe",
                  description: "Clé secrète pour les paiements",
                  placeholder: "sk_live_...",
                  type: "password",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`py-4 ${
                    index !== 0 ? "border-t border-gray-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <service.icon className="h-4 w-4 text-[#25D366]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-[#212121] text-sm">
                            {service.title}
                          </h3>
                          <p className="text-[#757575] text-xs">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <Input
                        type={service.type || "text"}
                        placeholder={service.placeholder}
                        className="bg-white border-gray-200 h-9 text-sm focus:border-[#25D366] focus:ring-[#25D366]/10"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6">
                <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white h-10 text-sm font-medium">
                  Terminer la configuration
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
