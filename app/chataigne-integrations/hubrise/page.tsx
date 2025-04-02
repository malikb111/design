"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Sidebar from "../../components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Settings,
  Store,
  RefreshCw,
  Link,
  ChevronRight,
  Building2,
  Users,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function HubrisePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="ml-72">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Paramètres Hubrise
            </h1>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="px-8 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Retour aux intégrations</span>
          </button>
        </div>

        {/* Contenu principal en grid */}
        <div className="px-8 pb-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Colonne de gauche */}
            <div className="col-span-1 space-y-6">
              <Card className="border border-gray-100">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="w-5 h-5 text-gray-400" />
                        <h3 className="font-medium">Point de vente</h3>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Giga-Tacos</div>
                        <div className="text-sm text-gray-500">
                          Le Mont-sur-Lausanne
                        </div>
                        <div className="text-xs text-gray-400">ID: 1brq3-0</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-gray-400" />
                        <h3 className="font-medium">Liste clients</h3>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">
                          Liste principale
                        </div>
                        <div className="text-xs text-gray-400">ID: zm8nk</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-100">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    <button
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      onClick={() =>
                        window.open("https://manager.hubrise.com", "_blank")
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Link className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">
                          Ouvrir Hubrise
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <LogOut className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-red-500">
                          Déconnecter
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Colonne principale */}
            <div className="col-span-2">
              <Card className="border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <h2 className="text-lg font-medium">
                    Configuration des services
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-4">
                      WhatsApp Business
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Service Livraison</Label>
                        <Input placeholder="ID du service" />
                      </div>
                      <div className="space-y-2">
                        <Label>Service À emporter</Label>
                        <Input placeholder="ID du service" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-4">
                      Paiement
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Service Stripe</Label>
                        <Input placeholder="ID du service de paiement" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white min-w-[200px]">
                      Synchroniser le catalogue
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
