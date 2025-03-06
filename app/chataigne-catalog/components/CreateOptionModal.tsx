import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import { mockOptionLists } from "../mock-data";
import { useState, useEffect } from "react";

interface CreateOptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialListId?: string | null;
  isCreatingList?: boolean;
}

export default function CreateOptionModal({
  isOpen,
  onClose,
  initialListId = null,
  isCreatingList: initialIsCreatingList = false,
}: CreateOptionModalProps) {
  const [isCreatingList, setIsCreatingList] = useState(initialIsCreatingList);
  const [selectedList, setSelectedList] = useState<string | null>(
    initialListId
  );

  useEffect(() => {
    setIsCreatingList(initialIsCreatingList);
  }, [initialIsCreatingList]);

  const handleCreateList = () => {
    setIsCreatingList(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {isCreatingList && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsCreatingList(false)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <DialogTitle>
              {isCreatingList ? "Nouvelle liste" : "Nouvelle option"}
            </DialogTitle>
          </div>
        </DialogHeader>

        {!isCreatingList ? (
          // Formulaire Option
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                placeholder="ex: Supplément fromage"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="list">Liste</Label>
              <Select
                value={selectedList || undefined}
                onValueChange={setSelectedList}
              >
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="Sélectionner une liste" />
                </SelectTrigger>
                <SelectContent className="w-full min-w-[var(--radix-select-trigger-width)]">
                  {mockOptionLists.map((list) => (
                    <SelectItem
                      key={list.id}
                      value={list.id}
                      className="py-2.5"
                    >
                      {list.name}
                    </SelectItem>
                  ))}
                  <Separator className="my-2" />
                  <button
                    className="w-full flex items-center gap-2 px-2 py-2.5 text-[#25D366] hover:bg-[#25D366]/5 transition-colors rounded-sm text-sm"
                    onClick={handleCreateList}
                  >
                    <Plus className="h-4 w-4" />
                    Créer une nouvelle liste
                  </button>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="price">Prix supplémentaire</Label>
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
          // Formulaire Liste
          <div className="space-y-4">
            <div>
              <Label htmlFor="listName">Nom de la liste</Label>
              <Input
                id="listName"
                placeholder="ex: Suppléments, Sauces, Tailles..."
                className="mt-1.5"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setIsCreatingList(false)}
              >
                Annuler
              </Button>
              <Button
                className="bg-[#25D366] hover:bg-[#25D366]/90"
                onClick={() => {
                  // TODO: Sauvegarder la liste
                  // Sélectionner automatiquement la nouvelle liste
                  setIsCreatingList(false);
                }}
              >
                Créer la liste
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
