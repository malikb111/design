import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  X,
  Plus,
  ChevronUp,
  ChevronDown,
  Info,
  AlertCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import WhatsAppCategoryPreview from "./WhatsAppCategoryPreview";

interface Step8Props {
  onNext: () => void;
  onPrevious: () => void;
}

interface Category {
  id: string;
  name: string;
}

export default function Step8({ onNext, onPrevious }: Step8Props) {
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Burgers" },
    { id: "2", name: "Boissons" },
    { id: "3", name: "Desserts" },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [selectedAddOnCategory, setSelectedAddOnCategory] =
    useState<string>("none");
  const [hasCatalog, setHasCatalog] = useState(true);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const newId = String(categories.length + 1);
      setCategories([...categories, { id: newId, name: newCategory }]);
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newCategories = [...categories];
    [newCategories[index - 1], newCategories[index]] = [
      newCategories[index],
      newCategories[index - 1],
    ];
    setCategories(newCategories);
  };

  const handleMoveDown = (index: number) => {
    if (index === categories.length - 1) return;
    const newCategories = [...categories];
    [newCategories[index], newCategories[index + 1]] = [
      newCategories[index + 1],
      newCategories[index],
    ];
    setCategories(newCategories);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#212121] mb-3">
          Configuration des catégories
        </h1>
        <p className="text-[#757575] text-base">
          Sélectionnez les catégories à afficher dans votre flux WhatsApp et
          leur ordre
        </p>
      </div>

      {!hasCatalog ? (
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-medium text-amber-800 mb-1.5">
                  Aucun catalogue connecté
                </h3>
                <p className="text-sm text-amber-700 mb-1">
                  Vous n'avez pas encore connecté de catalogue à votre compte
                  WhatsApp Business.
                </p>
                <p className="text-sm text-amber-600">
                  Créez un catalogue et revenez configurer les catégories
                  ultérieurement.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-2">
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
            >
              Terminer la configuration
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mt-10">
          {/* Côté gauche: prévisualisation */}
          <div className="flex-1 flex justify-center md:justify-end">
            <WhatsAppCategoryPreview categories={categories} />
          </div>

          {/* Côté droit: formulaire */}
          <div className="flex-1 space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-1">
                    Mode démo
                  </p>
                  <p className="text-sm text-amber-700">
                    Cette configuration est en mode démo puisqu'aucun catalogue
                    n'est connecté. Les modifications seront effectives lorsque
                    vous connecterez un catalogue.
                  </p>
                </div>
              </div>
            </div>

            {/* Ajouter une catégorie */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#212121]">
                Catégories de produits
              </label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full border-dashed border-2 border-gray-300 bg-white hover:bg-gray-50 text-[#757575] flex items-center gap-2 h-12">
                    <Plus className="h-4 w-4" />
                    Ajouter une catégorie
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Ajouter une catégorie</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Nom de la catégorie
                      </label>
                      <Input
                        placeholder="Ex: Entrées, Plats, Desserts..."
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" className="mr-2">
                        Annuler
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button
                        className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                        onClick={handleAddCategory}
                        disabled={!newCategory.trim()}
                      >
                        Ajouter
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Liste des catégories avec ordre */}
              <div className="mt-4 border rounded-md overflow-hidden">
                {categories.length === 0 ? (
                  <div className="p-6 text-center text-[#757575]">
                    Aucune catégorie ajoutée
                  </div>
                ) : (
                  <div className="divide-y">
                    {categories.map((category, index) => (
                      <div
                        key={category.id}
                        className="p-3 flex items-center justify-between bg-white"
                      >
                        <div className="font-medium">{category.name}</div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30"
                            onClick={() => handleMoveUp(index)}
                            disabled={index === 0}
                          >
                            <ChevronUp className="h-5 w-5" />
                          </button>
                          <button
                            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30"
                            onClick={() => handleMoveDown(index)}
                            disabled={index === categories.length - 1}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </button>
                          <button
                            className="p-1 text-gray-500 hover:text-gray-700"
                            onClick={() => handleRemoveCategory(category.id)}
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Catégorie de vente additionnelle */}
            <div className="space-y-2 pt-4">
              <label className="text-sm font-medium text-[#212121]">
                Catégorie de vente additionnelle
              </label>
              <p className="text-xs text-[#757575] mb-2">
                Cette catégorie sera proposée aux clients après leur commande
                principale
              </p>
              <Select
                value={selectedAddOnCategory}
                onValueChange={setSelectedAddOnCategory}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">
                    Aucune vente additionnelle
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Boutons d'action */}
            <div className="pt-6 flex justify-end gap-3">
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
              >
                Terminer la configuration
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
