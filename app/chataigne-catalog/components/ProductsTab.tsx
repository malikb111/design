"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { mockCategories, mockProducts } from "../mock-data";
import CreateProductModal from "./CreateProductModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProductsTab() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const handleOpenCreateModal = (
    categoryId: string | null = null,
    isCategory: boolean = false
  ) => {
    setSelectedCategoryId(categoryId);
    setIsCreatingCategory(isCategory);
    setIsCreateModalOpen(true);
  };

  return (
    <div className="p-8">
      {/* Categories Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Catégories & Produits
            </h2>
            <p className="text-sm text-gray-500">
              {mockProducts.length} produits • {mockCategories.length}{" "}
              catégories
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2">
                Nouveau
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                className="py-2.5 cursor-pointer"
                onClick={() => handleOpenCreateModal(null)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouveau produit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="py-2.5 cursor-pointer"
                onClick={() => handleOpenCreateModal(null, true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle catégorie
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="relative">
          <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
            <Button
              variant="ghost"
              className="flex-none h-9 px-4 text-sm font-medium bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 rounded-lg"
            >
              Tout
            </Button>
            {mockCategories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className="flex-none h-9 px-4 text-sm font-medium text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/10 rounded-lg"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="space-y-12">
        {mockCategories.map((category) => {
          const categoryProducts = mockProducts.filter(
            (product) => product.categoryId === category.id
          );

          return (
            <div key={category.id}>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {categoryProducts.length} produits
                    </p>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Product Cards */}
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="aspect-square rounded-xl border border-gray-100 bg-white overflow-hidden group cursor-pointer hover:border-[#25D366] transition-colors"
                  >
                    <div className="relative h-3/5 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-medium text-gray-900">
                          {product.price.toFixed(2)} €
                        </span>
                        {product.optionListCount > 0 && (
                          <Badge
                            variant="outline"
                            className="bg-blue-500/10 text-blue-600 border-blue-200"
                          >
                            {product.optionListCount}{" "}
                            {product.optionListCount === 1 ? "liste" : "listes"}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Product Card */}
                <button
                  onClick={() => handleOpenCreateModal(category.id)}
                  className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-[#25D366]" />
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-medium text-gray-900 group-hover:text-[#25D366]">
                      Nouveau produit
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-[#25D366]/80">
                      dans {category.name}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Product Modal */}
      <CreateProductModal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          setSelectedCategoryId(null);
          setIsCreatingCategory(false);
        }}
        initialCategoryId={selectedCategoryId}
        isCreatingCategory={isCreatingCategory}
      />
    </div>
  );
}
