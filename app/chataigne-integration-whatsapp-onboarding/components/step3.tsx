import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Step3Props {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step3({ onNext, onPrevious }: Step3Props) {
  const [selectedCatalog, setSelectedCatalog] = useState("");

  // Exemples de catalogues disponibles - peut être vide
  const availableCatalogs = [
    { id: "cat_1", name: "Menu Principal" },
    { id: "cat_2", name: "Menu du Soir" },
    { id: "cat_3", name: "Menu Brunch Weekend" },
    { id: "cat_4", name: "Carte des Boissons" },
  ];

  const hasCatalogs = availableCatalogs.length > 0;

  const handleCatalogChange = (value: string) => {
    setSelectedCatalog(value);
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#212121] mb-3">
          Sélection du catalogue
        </h1>
        <p className="text-[#757575] text-base">
          Choisissez le catalogue de produits à utiliser pour votre intégration
          WhatsApp
        </p>
      </div>

      <div className="space-y-8 mt-10">
        {hasCatalogs ? (
          <div className="space-y-4">
            <label className="text-sm font-medium text-[#212121] block">
              Catalogue WhatsApp
            </label>
            <Select value={selectedCatalog} onValueChange={handleCatalogChange}>
              <SelectTrigger className="w-full bg-white border-gray-200 focus:ring-0 focus:border-[#25D366]">
                <SelectValue placeholder="Sélectionner un catalogue" />
              </SelectTrigger>
              <SelectContent>
                {availableCatalogs.map((catalog) => (
                  <SelectItem key={catalog.id} value={catalog.id}>
                    {catalog.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium mb-1">
                Aucun catalogue disponible
              </p>
              <p className="text-sm text-amber-700">
                Vous n'avez pas encore créé de catalogue. Vous pouvez continuer,
                mais pensez à créer un catalogue et à le configurer dans les
                paramètres WhatsApp plus tard, sinon le bot ne fonctionnera pas.
              </p>
            </div>
          </div>
        )}

        {selectedCatalog && (
          <div className="bg-[#25D366]/5 rounded-md p-4">
            <p className="text-sm text-[#212121]">
              {availableCatalogs.find((c) => c.id === selectedCatalog)?.name}{" "}
              sera utilisé pour les commandes WhatsApp
            </p>
          </div>
        )}

        <div className="pt-4 flex justify-end gap-3">
          <Button
            variant="outline"
            className="border-gray-200 text-[#757575]"
            onClick={onPrevious}
          >
            Retour
          </Button>
          <Button
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            onClick={onNext}
            disabled={hasCatalogs && !selectedCatalog}
          >
            {hasCatalogs && !selectedCatalog
              ? "Continuer"
              : "Passer cette étape"}
          </Button>
        </div>
      </div>
    </div>
  );
}
