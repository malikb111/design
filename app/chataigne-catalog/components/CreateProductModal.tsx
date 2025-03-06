import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ImageIcon, Plus, ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { mockCategories } from "../mock-data";
import { useState, useEffect } from "react";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string | null;
  isCreatingCategory?: boolean;
}

export default function CreateProductModal({
  isOpen,
  onClose,
  initialCategoryId = null,
  isCreatingCategory: initialIsCreatingCategory = false,
}: CreateProductModalProps) {
  const [isCreatingCategory, setIsCreatingCategory] = useState(
    initialIsCreatingCategory
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategoryId
  );

  useEffect(() => {
    setIsCreatingCategory(initialIsCreatingCategory);
  }, [initialIsCreatingCategory]);

  const handleCreateCategory = () => {
    setIsCreatingCategory(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {isCreatingCategory && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsCreatingCategory(false)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <DialogTitle>
              {isCreatingCategory ? "Nouvelle catégorie" : "Nouveau produit"}
            </DialogTitle>
          </div>
        </DialogHeader>

        {!isCreatingCategory ? (
          // Formulaire Produit
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                placeholder="ex: Pizza Margherita"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="category">Catégorie</Label>
              <Select
                value={selectedCategory || undefined}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent className="w-full min-w-[var(--radix-select-trigger-width)]">
                  {mockCategories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id}
                      className="py-2.5"
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                  <Separator className="my-2" />
                  <button
                    className="w-full flex items-center gap-2 px-2 py-2.5 text-[#25D366] hover:bg-[#25D366]/5 transition-colors rounded-sm text-sm"
                    onClick={handleCreateCategory}
                  >
                    <Plus className="h-4 w-4" />
                    Créer une nouvelle catégorie
                  </button>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="price">Prix</Label>
              <div className="relative mt-1.5">
                <Input id="price" type="number" step="0.1" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">€</span>
                </div>
              </div>
            </div>

            <div>
              <Label>Image</Label>
              <div className="mt-1.5">
                <button className="w-full h-32 rounded-lg border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                    <ImageIcon className="h-5 w-5 text-gray-400 group-hover:text-[#25D366]" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                    Ajouter une image
                  </span>
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Décrivez votre produit..."
                className="mt-1.5 h-20"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={onClose}>
                Annuler
              </Button>
              <Button
                className="bg-[#25D366] hover:bg-[#25D366]/90"
                onClick={onClose}
              >
                Créer
              </Button>
            </div>
          </div>
        ) : (
          // Formulaire Catégorie
          <div className="space-y-4">
            <div>
              <Label htmlFor="categoryName">Nom de la catégorie</Label>
              <Input
                id="categoryName"
                placeholder="ex: Pizzas, Burgers, Desserts..."
                className="mt-1.5"
              />
            </div>

            <div>
              <Label>Image de la catégorie</Label>
              <div className="mt-1.5">
                <button className="w-full h-32 rounded-lg border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                    <ImageIcon className="h-5 w-5 text-gray-400 group-hover:text-[#25D366]" />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                    Ajouter une image
                  </span>
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="categoryDescription">
                Description (optionnel)
              </Label>
              <Textarea
                id="categoryDescription"
                placeholder="Décrivez votre catégorie..."
                className="mt-1.5 h-20"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setIsCreatingCategory(false)}
              >
                Annuler
              </Button>
              <Button
                className="bg-[#25D366] hover:bg-[#25D366]/90"
                onClick={() => {
                  // TODO: Sauvegarder la catégorie
                  // Sélectionner automatiquement la nouvelle catégorie
                  setIsCreatingCategory(false);
                }}
              >
                Créer la catégorie
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
