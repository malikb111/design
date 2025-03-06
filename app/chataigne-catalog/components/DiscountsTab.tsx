"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Tag, Users, MoreHorizontal } from "lucide-react";
import { mockDiscounts } from "../mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import CreateDiscountModal from "./CreateDiscountModal";

export default function DiscountsTab() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const getDiscountTypeLabel = (type: string) => {
    switch (type) {
      case "percentage":
        return "Pourcentage";
      case "fixed":
        return "Montant fixe";
      case "free_product":
        return "Produit offert";
      case "bogo":
        return "1 acheté = 1 offert";
      case "free_shipping":
        return "Livraison gratuite";
      default:
        return "";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Réductions</h2>
          <p className="text-sm text-gray-500">
            {mockDiscounts.length} réductions actives
          </p>
        </div>

        <Button
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Nouvelle réduction
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Discounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDiscounts.map((discount) => (
          <div
            key={discount.id}
            className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#25D366] transition-colors"
          >
            {/* Card Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium text-gray-900 truncate flex-1">
                    {discount.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className={
                      discount.isActive
                        ? "bg-emerald-50 text-emerald-600 border-emerald-200 shrink-0"
                        : "bg-gray-50 text-gray-600 border-gray-200 shrink-0"
                    }
                  >
                    {discount.isActive ? "Actif" : "Inactif"}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-gray-50 text-gray-600 border-gray-200"
                  >
                    {getDiscountTypeLabel(discount.type)}
                  </Badge>
                  {discount.type === "percentage" && (
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 border-blue-200"
                    >
                      {discount.data.percentage}%
                    </Badge>
                  )}
                  {discount.type === "fixed" && (
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-600 border-green-200"
                    >
                      {discount.data.amount}€
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {discount.description}
                </p>
              </div>

              {/* Conditions */}
              <div className="space-y-3 text-sm">
                {discount.conditions?.startDate && (
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-400 flex-none" />
                    <span className="truncate">
                      Du {formatDate(discount.conditions.startDate)}
                      {discount.conditions.endDate &&
                        ` au ${formatDate(discount.conditions.endDate)}`}
                    </span>
                  </div>
                )}

                {discount.conditions?.minOrderAmount && (
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <Tag className="h-4 w-4 text-gray-400 flex-none" />
                    <span className="truncate">
                      Minimum {discount.conditions.minOrderAmount}€ d'achat
                    </span>
                  </div>
                )}

                {discount.conditions?.maxOrdersPerCustomer && (
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <Users className="h-4 w-4 text-gray-400 flex-none" />
                    <span className="truncate">
                      {discount.conditions.maxOrdersPerCustomer} utilisations
                      max
                    </span>
                  </div>
                )}

                {discount.conditions?.promoCode && (
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <Tag className="h-4 w-4 text-gray-400 flex-none" />
                    <span className="truncate font-medium">
                      Code: {discount.conditions.promoCode}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Modifier</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Supprimer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Discount Modal */}
      <CreateDiscountModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}
