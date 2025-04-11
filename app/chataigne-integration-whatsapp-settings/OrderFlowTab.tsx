"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ShoppingCart,
  Truck,
  ShoppingBag,
  Clock,
  Info,
  ArrowUp,
  ArrowDown,
  Trash2,
  Plus,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function OrderFlowTab() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Colonne de gauche */}
      <div className="col-span-1 space-y-6">
        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">État du flux</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Informations sur l'état de votre flux de commande
            </p>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">ID du flux</p>
                <div className="flex items-center">
                  <p className="text-sm font-medium">1370319614160473</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500">Statut</p>
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#25D366]"></div>
                    <p className="text-sm font-medium">Published</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                Mettre à jour le flux
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Page d'information</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Configurez la page d'information qui sera affichée au début du
              flux de commande
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Titre
                </Label>
                <Input
                  id="title"
                  defaultValue="Paiement lors de la livraison"
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  className="resize-none h-24"
                  defaultValue="Nous n'acceptons que les paiements en espèces pour les commandes en livraison, souhaitez-vous continuer ?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="buttonText" className="text-sm font-medium">
                  Texte du bouton
                </Label>
                <Input
                  id="buttonText"
                  defaultValue="J'accepte"
                  className="h-10"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                Enregistrer
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
              <ShoppingBag className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Catégories</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Configurez les catégories principales et leur ordre d'affichage
              dans le flux de commande
            </p>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-64">
                <Select>
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue placeholder="Sélectionnez une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="burgers">Burgers</SelectItem>
                    <SelectItem value="pizza">Pizzas</SelectItem>
                    <SelectItem value="salads">Salades</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Ordre des catégories
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium bg-gray-200 h-6 w-6 rounded-full flex items-center justify-center">
                    4
                  </span>
                  <span className="text-sm font-medium">Tacos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ArrowUp className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ArrowDown className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium bg-gray-200 h-6 w-6 rounded-full flex items-center justify-center">
                    5
                  </span>
                  <span className="text-sm font-medium">Snacks</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ArrowUp className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ArrowDown className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium bg-gray-200 h-6 w-6 rounded-full flex items-center justify-center">
                    6
                  </span>
                  <span className="text-sm font-medium">Boissons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ArrowUp className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ArrowDown className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <Label htmlFor="upsell" className="text-sm font-medium">
                Catégorie de vente additionnelle
              </Label>
              <div className="w-64">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Aucune" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucune</SelectItem>
                    <SelectItem value="desserts">Desserts</SelectItem>
                    <SelectItem value="boissons">Boissons</SelectItem>
                  </SelectContent>
                </Select>
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
              <CheckCircle2 className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium">Pages du flux</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Configurez les pages qui seront affichées dans le flux de commande
            </p>

            <div className="space-y-5">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">
                    Page d'information
                  </Label>
                  <p className="text-xs text-gray-500">
                    Affiche une page d'information au début du flux de commande
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">
                    Page de saisie du nom
                  </Label>
                  <p className="text-xs text-gray-500">
                    Demande au client de saisir son nom
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">
                    Page de saisie de l'adresse
                  </Label>
                  <p className="text-xs text-gray-500">
                    Demande au client de saisir son adresse
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">
                    Page de saisie de l'heure
                  </Label>
                  <p className="text-xs text-gray-500">
                    Demande au client de choisir une heure de livraison
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="pt-6 flex justify-end">
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
