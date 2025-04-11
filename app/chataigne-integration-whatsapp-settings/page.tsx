"use client";

import { useState } from "react";
import { Store, ShoppingCart, Settings, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";
import WhatsAppProfileTab from "./WhatsAppProfileTab";
import OrderFlowTab from "./OrderFlowTab";
import AdvancedSettingsTab from "./AdvancedSettingsTab";

// Interface pour les onglets
interface TabDefinition {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

export default function ChataigneIntegrationWhatsappSettings() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  // Définition des onglets
  const tabs: TabDefinition[] = [
    {
      id: "profile",
      label: "Profil WhatsApp",
      icon: <Store className="h-4 w-4" />,
      component: <WhatsAppProfileTab />,
    },
    {
      id: "orderflow",
      label: "Flux de commandes",
      icon: <ShoppingCart className="h-4 w-4" />,
      component: <OrderFlowTab />,
    },
    {
      id: "advanced",
      label: "Paramètres avancés",
      icon: <Settings className="h-4 w-4" />,
      component: <AdvancedSettingsTab />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Paramètres WhatsApp
                </h1>
                <p className="text-gray-500">
                  Gérez votre intégration WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Retour aux intégrations</span>
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="px-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-[#25D366] border-b-2 border-[#25D366]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-8 py-6">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </main>
    </div>
  );
}
