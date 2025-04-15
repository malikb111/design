"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Step1 from "./components/step1";
import Step2 from "./components/step2";

export default function ChataigneIntegrationWhatsappOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // On prévoit 4 étapes pour l'onboarding

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevStep = () => {
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
          {/* Les autres étapes seront ajoutées ultérieurement */}
        </div>
      </main>
    </div>
  );
}
