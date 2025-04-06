"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Clock,
  Truck,
  CreditCard,
  Save,
  User,
  Upload,
  Phone,
  Globe,
  MapPin,
  Mail,
  Package,
  CalendarDays,
  Search,
  HelpCircle,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { IntegrationCard } from "./components/Card-integration";
import ModaleHubrise from "./components/modale-hubrise";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function IntegrationsPage() {
  const integrations = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      description: "Communiquez avec vos clients via WhatsApp Business API",
      icon: (
        <svg
          className="w-6 h-6 text-[#25D366]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      isConnected: false,
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "Gérez vos paiements en ligne de manière sécurisée",
      icon: (
        <svg
          className="w-6 h-6 text-[#635BFF]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.126 1.431-1.72 0-4.516-.891-6.387-2.031L4.3 21.727c1.901 1.142 5.147 2.273 8.698 2.273 2.585 0 4.727-.68 6.09-1.963 1.483-1.305 2.254-3.236 2.254-5.494-.036-4.128-2.518-5.845-6.476-7.219l-.89-.173z" />
        </svg>
      ),
      isConnected: false,
    },
    {
      id: "hubrise",
      name: "Hubrise",
      description: "Synchronisez vos commandes avec votre système de gestion",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF4F00]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.977 0 7.2 3.223 7.2 7.2s-3.223 7.2-7.2 7.2-7.2-3.223-7.2-7.2 3.223-7.2 7.2-7.2z" />
        </svg>
      ),
      isConnected: true,
      href: "/chataigne-integrations/hubrise",
    },
    {
      id: "printer",
      name: "Imprimante à reçu",
      description: "Imprimez automatiquement vos tickets de commande",
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
      ),
      isConnected: false,
    },
  ];

  const [authCode] = useState(() => {
    const uuid = crypto.randomUUID(); // Génère un UUID v4
    const date = new Date();
    const expDate = date.setFullYear(date.getFullYear() + 1); // Date d'expiration dans 1 an
    const expDateStr = new Date(expDate)
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "");

    return `${uuid}-${expDateStr}`;
  });

  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 p-8">
        {/* Header */}
        <div className="pb-6 mb-6 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-[#212121]">
            Intégrations
          </h1>
          <p className="text-[#757575] mt-1">
            Connectez vos services essentiels pour optimiser votre workflow
          </p>
        </div>

        {/* Grid d'intégrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) =>
            integration.id === "hubrise" ? (
              <Dialog key={integration.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <IntegrationCard integration={integration} />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
                  <div className="bg-[#25D366]/10 p-6 flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full">
                      <svg
                        className="w-8 h-8 text-[#25D366]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.977 0 7.2 3.223 7.2 7.2s-3.223 7.2-7.2 7.2-7.2-3.223-7.2-7.2 3.223-7.2 7.2-7.2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#212121]">
                        Finaliser l'intégration
                      </h3>
                      <p className="text-[#757575] text-sm">
                        Une dernière étape pour connecter Hubrise
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-sm font-medium text-gray-600">
                            Code d'autorisation généré
                          </p>
                        </div>
                        <p className="font-mono text-sm tracking-wide text-[#212121] select-all whitespace-nowrap overflow-x-auto">
                          {authCode}
                        </p>
                      </div>

                      <p className="text-sm text-[#757575] leading-relaxed">
                        En confirmant, vous permettez la synchronisation
                        automatique de vos commandes et la gestion centralisée
                        de votre établissement.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-[#757575]">
                        Annuler
                      </Button>
                    </DialogTrigger>
                    <Button
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8"
                      onClick={() => {
                        /* Logique de confirmation */
                      }}
                    >
                      Connecter
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <IntegrationCard key={integration.id} integration={integration} />
            )
          )}
        </div>
      </main>
    </div>
  );
}
