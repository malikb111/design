"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Info,
  Phone,
  CheckCircle2,
  BarChart4,
  ShieldCheck,
  Building2,
  Smartphone,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function AdvancedSettingsTab() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Colonne de gauche */}
      <div className="col-span-1 space-y-6">
        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Statut du canal</h3>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 border border-green-100 mb-2">
                <p className="text-sm font-medium text-[#25D366]">ready</p>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">Limite actuelle</Label>
                <p className="text-sm font-medium">TIER_1K</p>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">Note de qualité</Label>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">High</p>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">
                  Official Business Account
                </Label>
                <p className="text-sm font-medium">Non</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Colonne principale */}
      <div className="col-span-2 space-y-6">
        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Informations du canal</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Informations techniques sur votre canal WhatsApp
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-1">
                <Label className="text-xs text-gray-500">ID du canal</Label>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium font-mono">TzSudDCH</p>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">Nom</Label>
                <p className="text-sm font-medium">Giga Tacos</p>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">
                  Numéro de téléphone
                </Label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <p className="text-sm font-medium">+41 78 966 88 45</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Compte WABA</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Informations sur votre compte WhatsApp Business
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-1">
                <Label className="text-xs text-gray-500">ID du compte</Label>
                <p className="text-sm font-medium font-mono">AtqzgOWA</p>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">
                  Statut du compte Facebook
                </Label>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#25D366]" />
                  <p className="text-sm font-medium">verified</p>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-gray-500">
                  ID Business Facebook
                </Label>
                <p className="text-sm font-medium font-mono">
                  2810656122421054
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
