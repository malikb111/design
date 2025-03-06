import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { mockProducts } from "../mock-data";
import { DiscountTypeDTO } from "../types";

// Données simulées pour les produits
const mockProductsData = [
  {
    id: "1",
    name: "Croissant",
    price: 1.2,
    category: "Viennoiseries",
  },
  {
    id: "2",
    name: "Pain au chocolat",
    price: 1.3,
    category: "Viennoiseries",
  },
  {
    id: "3",
    name: "Baguette Tradition",
    price: 1.4,
    category: "Pains",
  },
  {
    id: "4",
    name: "Pain aux céréales",
    price: 2.1,
    category: "Pains",
  },
  {
    id: "5",
    name: "Éclair au chocolat",
    price: 3.5,
    category: "Pâtisseries",
  },
  {
    id: "6",
    name: "Tarte aux pommes",
    price: 15.9,
    category: "Pâtisseries",
  },
];

interface CreateDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "info" | "conditions";

export default function CreateDiscountModal({
  isOpen,
  onClose,
}: CreateDiscountModalProps) {
  const [step, setStep] = useState<Step>("info");
  const [discountType, setDiscountType] =
    useState<DiscountTypeDTO>("percentage");

  // Conditions states
  const [hasDateRange, setHasDateRange] = useState(false);
  const [hasMinAmount, setHasMinAmount] = useState(false);
  const [hasMaxOrders, setHasMaxOrders] = useState(false);
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const [hasMaxUsage, setHasMaxUsage] = useState(false);
  const [hasCategories, setHasCategories] = useState(false);
  const [hasProducts, setHasProducts] = useState(false);
  const [hasTimeRange, setHasTimeRange] = useState(false);
  const [hasDaysOfWeek, setHasDaysOfWeek] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const renderDiscountDataFields = () => {
    switch (discountType) {
      case "percentage":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="percentage">Pourcentage de réduction</Label>
              <div className="relative mt-1.5">
                <Input
                  id="percentage"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="ex: 20"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="maxAmount">Montant maximum (optionnel)</Label>
              <div className="relative mt-1.5">
                <Input
                  id="maxAmount"
                  type="number"
                  min="0"
                  placeholder="ex: 50"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">€</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "fixed":
        return (
          <div>
            <Label htmlFor="amount">Montant de la réduction</Label>
            <div className="relative mt-1.5">
              <Input id="amount" type="number" min="0" placeholder="ex: 10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500">€</span>
              </div>
            </div>
          </div>
        );

      case "free_product":
      case "bogo":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="product">
                {discountType === "free_product"
                  ? "Produit offert"
                  : "Produit concerné"}
              </Label>
              <Select>
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="Sélectionner un produit" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(
                    mockProductsData.reduce((acc, product) => {
                      if (!acc[product.category]) {
                        acc[product.category] = [];
                      }
                      acc[product.category].push(product);
                      return acc;
                    }, {} as Record<string, typeof mockProductsData>)
                  ).map(([category, products]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-medium text-gray-500 bg-gray-50">
                        {category}
                      </div>
                      {products.map((product) => (
                        <SelectItem
                          key={product.id}
                          value={product.id}
                          className="pl-4"
                        >
                          <div className="flex items-center justify-between w-full">
                            <span>{product.name}</span>
                            <span className="text-gray-500">
                              {product.price.toFixed(2)} €
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {discountType === "bogo" && (
              <div>
                <Label htmlFor="quantity">Quantité minimum d'achat</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  placeholder="ex: 1"
                  className="mt-1.5"
                />
              </div>
            )}
          </div>
        );

      case "free_shipping":
        return null;

      default:
        return null;
    }
  };

  const renderInfoStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" placeholder="Nom de la réduction" className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Description de la réduction"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="type">Type de réduction</Label>
        <Select
          value={discountType}
          onValueChange={(value) => setDiscountType(value as DiscountTypeDTO)}
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Sélectionner un type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="percentage">Pourcentage</SelectItem>
            <SelectItem value="fixed">Montant fixe</SelectItem>
            <SelectItem value="free_product">Produit offert</SelectItem>
            <SelectItem value="bogo">Un acheté = un offert</SelectItem>
            <SelectItem value="free_shipping">Livraison gratuite</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {discountType === "percentage" && (
        <>
          <div>
            <Label htmlFor="percentage">Pourcentage</Label>
            <div className="relative mt-1.5">
              <Input
                id="percentage"
                type="number"
                min="0"
                max="100"
                placeholder="Pourcentage de réduction"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500">%</span>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="maxAmount">Montant maximum de réduction</Label>
            <div className="relative mt-1.5">
              <Input
                id="maxAmount"
                type="number"
                min="0"
                placeholder="Montant maximum"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500">€</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const renderConditionsStep = () => (
    <div className="space-y-4 divide-y">
      {/* Période de validité */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="hasDateRange" className="cursor-pointer">
            Période de validité
          </Label>
          <Switch
            id="hasDateRange"
            checked={hasDateRange}
            onCheckedChange={setHasDateRange}
          />
        </div>
        {hasDateRange && (
          <div className="flex gap-4 mt-3">
            <div className="flex-1">
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Montant minimum */}
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="hasMinAmount" className="cursor-pointer">
            Montant minimum de commande
          </Label>
          <Switch
            id="hasMinAmount"
            checked={hasMinAmount}
            onCheckedChange={setHasMinAmount}
          />
        </div>
        {hasMinAmount && (
          <div className="relative mt-3">
            <Input
              id="minAmount"
              type="number"
              min="0"
              placeholder="Montant minimum"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500">€</span>
            </div>
          </div>
        )}
      </div>

      {/* Nombre maximum de commandes */}
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="hasMaxOrders" className="cursor-pointer">
            Limite par client
          </Label>
          <Switch
            id="hasMaxOrders"
            checked={hasMaxOrders}
            onCheckedChange={setHasMaxOrders}
          />
        </div>
        {hasMaxOrders && (
          <Input
            id="maxOrders"
            type="number"
            min="1"
            placeholder="Nombre maximum de commandes"
            className="mt-3"
          />
        )}
      </div>

      {/* Code promo */}
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="hasPromoCode" className="cursor-pointer">
            Code promotionnel
          </Label>
          <Switch
            id="hasPromoCode"
            checked={hasPromoCode}
            onCheckedChange={setHasPromoCode}
          />
        </div>
        {hasPromoCode && (
          <Input
            id="promoCode"
            placeholder="ex: SUMMER2024"
            className="mt-3 uppercase"
          />
        )}
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>
            {step === "info" ? "Nouvelle réduction" : "Conditions"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {step === "info" ? renderInfoStep() : renderConditionsStep()}

          {/* Navigation */}
          <div className="flex justify-between pt-2">
            {step === "conditions" ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setStep("info")}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Retour
                </Button>
                <Button
                  className="bg-[#25D366] hover:bg-[#25D366]/90"
                  onClick={onClose}
                >
                  Créer
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={onClose}>
                  Annuler
                </Button>
                <Button
                  className="bg-[#25D366] hover:bg-[#25D366]/90 gap-2"
                  onClick={() => setStep("conditions")}
                >
                  Suivant
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
