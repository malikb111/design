"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings,
  Store,
  ShoppingCart,
  Info,
  Globe,
  MapPin,
  Upload,
  Image,
  Check,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function WhatsAppProfileTab() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Colonne de gauche */}
      <div className="col-span-1 space-y-6">
        <Card className="border border-gray-100 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Image className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Photo de profil</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Cette photo sera visible par vos clients sur WhatsApp
            </p>

            <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden relative group mb-4">
              <Image className="w-10 h-10 text-gray-400 absolute transform transition-opacity group-hover:opacity-50" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="sm" className="text-white">
                  <Upload className="h-4 w-4 mr-2" />
                  Changer
                </Button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <h4 className="text-sm font-medium">Recommandations</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#25D366]" />
                  Format carré, de préférence 1024×1024 pixels
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#25D366]" />
                  Logo centré pour une meilleure visibilité
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#25D366]" />
                  Formats acceptés : JPG et PNG
                </li>
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" size="sm">
                Supprimer
              </Button>
              <Button
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                size="sm"
              >
                Enregistrer
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Catalogue WhatsApp</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Sélectionnez le catalogue qui sera synchronisé avec WhatsApp
            </p>

            <div className="relative mb-4">
              <div className="bg-[#f8f8f8] rounded-lg p-4 border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <h4 className="text-sm font-medium">
                      Le Mont sur Lausanne - Uber Eats Pull
                    </h4>
                  </div>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <select className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                  <option value="le-mont-uber-eats">
                    Le Mont sur Lausanne - Uber Eats Pull
                  </option>
                  <option value="lausanne-central">
                    Lausanne Central - Menu Principal
                  </option>
                  <option value="le-mont-standard">
                    Le Mont sur Lausanne - Standard
                  </option>
                  <option value="menu-special">Menu Spécial Weekend</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                Synchroniser maintenant
              </Button>
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
              <h3 className="font-medium">À propos et contact</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Ces informations seront visibles sur votre profil WhatsApp
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <Label htmlFor="about" className="text-sm font-medium">
                  À propos
                </Label>
                <Input
                  id="about"
                  defaultValue="Commander votre tacos directement depuis Whatsapp !"
                  className="h-10"
                />
                <p className="text-xs text-gray-500">Maximum 139 caractères</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium">
                  Site web
                </Label>
                <Input
                  id="website"
                  defaultValue="https://gigatacos.ch/"
                  className="h-10"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Description détaillée de votre établissement"
                  className="resize-none h-24"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  Adresse
                </Label>
                <Input
                  id="address"
                  defaultValue="Chemin de Budron F3, 1052 Le Mont-sur-Lausanne"
                  className="h-10"
                />
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="h-3 w-3" />
                  Cette adresse sera affichée avec une carte dans votre profil
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-6">
                Enregistrer
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Informations du restaurant</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Ces informations seront utilisées pour donner des informations
              supplémentaires au chatbot WhatsApp
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="restaurant-info"
                  className="text-sm font-medium"
                >
                  Informations générales
                </Label>
                <Textarea
                  id="restaurant-info"
                  className="min-h-[150px] resize-none"
                  defaultValue="Lors des commandes en livraison, précise bien que le paiement ne se fait qu'en cash ! Le cash en question doit être des CHF. Pour toute demande spéciale, contacter le restaurant."
                />
                <p className="text-xs text-gray-500">
                  Ces informations aideront le chatbot à répondre aux questions
                  fréquentes des clients
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-6">
                Enregistrer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
