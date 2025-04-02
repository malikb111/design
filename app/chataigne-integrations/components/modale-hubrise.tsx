import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ModaleHubrise() {
  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Configuration Hubrise</DialogTitle>
      </DialogHeader>

      <div className="space-y-6">
        {/* État de la connexion */}
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label className="text-sm text-gray-500">Point de vente</Label>
            <div className="bg-gray-50 px-3 py-2 rounded-lg text-sm">
              Giga-Tacos - Le Mont-sur-Lausanne - 1brq3-0
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-gray-500">Liste de clients</Label>
            <div className="bg-gray-50 px-3 py-2 rounded-lg text-sm">
              Giga-Tacos - zm8nk
            </div>
          </div>
        </div>

        {/* Configuration des services */}
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="whatsapp-delivery">
                Service WhatsApp (Livraison)
              </Label>
              <Input
                id="whatsapp-delivery"
                placeholder="Référence de service WhatsApp pour la livraison"
                className="bg-gray-50 border-0"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="whatsapp-pickup">
                Service WhatsApp (À emporter)
              </Label>
              <Input
                id="whatsapp-pickup"
                placeholder="Référence de service WhatsApp pour la collecte"
                className="bg-gray-50 border-0"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="stripe-ref">Service de paiement Stripe</Label>
              <Input
                id="stripe-ref"
                placeholder="Référence du service Stripe pour la caisse"
                className="bg-gray-50 border-0"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#25D366]/90"
          >
            Mettre à jour les services
          </Button>
        </form>

        {/* Actions supplémentaires */}
        <div className="space-y-2">
          <Button type="button" variant="outline" className="w-full">
            Synchroniser les commandes
          </Button>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="ghost"
              className="flex-1 text-gray-500 hover:text-gray-700"
              onClick={() =>
                window.open("https://manager.hubrise.com", "_blank")
              }
            >
              Ouvrir Hubrise
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="flex-1 text-gray-500 hover:text-gray-700"
            >
              Déconnecter
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
