"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import Step4 from "./components/step4";
import Step5 from "./components/step5";
import Step6 from "./components/step6";
import Step7 from "./components/step7";
import Step8 from "./components/step8";

export default function ChataigneIntegrationWhatsappOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [flowConfig, setFlowConfig] = useState({
    enableInfoPage: true,
  });
  const totalSteps = 8; // Mis à jour à 8 étapes pour inclure la configuration des catégories

  const handleNextStep = () => {
    // Si on est à l'étape 6 et que la page d'information n'est pas activée, on saute l'étape 7
    if (currentStep === 6) {
      // Vérifier si la page d'information est activée dans le composant Step6
      const flowPages = document.querySelectorAll("[data-flow-page]");
      const infoPageEnabled = Array.from(flowPages).some(
        (page) =>
          page.getAttribute("data-flow-page") === "information" &&
          page.getAttribute("data-enabled") === "true"
      );

      setFlowConfig((prev) => ({ ...prev, enableInfoPage: infoPageEnabled }));

      if (!infoPageEnabled) {
        setCurrentStep(Math.min(currentStep + 2, totalSteps));
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevStep = () => {
    // Si on est à l'étape 7 et que la page d'information n'est pas activée, on revient à l'étape 5
    if (currentStep === 7 && !flowConfig.enableInfoPage) {
      setCurrentStep(5);
      return;
    }

    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <main className="flex-1 ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Intégration WhatsApp
                </h1>
                <p className="text-gray-500">
                  Configurez votre intégration pour permettre a vos clients de
                  passer commande directement sur WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stepper Content */}
        <div className="container max-w-5xl mx-auto px-4 py-12">
          {/* Step content */}
          {currentStep === 1 && <Step1 onNext={handleNextStep} />}
          {currentStep === 2 && (
            <Step2 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
          {currentStep === 3 && (
            <Step3 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
          {currentStep === 4 && (
            <Step4 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
          {currentStep === 5 && (
            <Step5 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
          {currentStep === 6 && (
            <Step6 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
          {currentStep === 7 && (
            <Step7 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
          {currentStep === 8 && (
            <Step8 onNext={handleNextStep} onPrevious={handlePrevStep} />
          )}
        </div>
      </main>
    </div>
  );
}
