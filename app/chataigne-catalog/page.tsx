import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ChevronRight,
  FileStack,
  LogOut,
  MapPin,
  Settings,
  ShoppingBag,
  Store,
  BarChart3,
  Plug,
  User,
  Search,
  Plus,
  ChevronDown,
  Filter,
  Grid,
  List,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Avvvatars from "avvvatars-react";
import {
  mockCatalogs,
  mockCategories,
  mockProducts,
  mockOptionLists,
  mockOptions,
  mockDiscounts,
  DiscountType,
} from "./mock-data";
import Sidebar from "../components/Sidebar";

export default function ChataigneCatalog() {
  return (
    <div className="min-h-screen bg-[#FAFBF6] flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Catalogue
                </h1>
                <p className="text-gray-500">
                  Gérez vos menus, produits et options
                </p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 gap-3 w-[300px] justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <FileStack className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-medium text-gray-900">
                          {mockCatalogs[0].name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {mockCatalogs[0].productCount} produits •{" "}
                          {mockCatalogs[0].categoryCount} catégories
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px]">
                  {mockCatalogs.slice(1).map((catalog) => (
                    <DropdownMenuItem
                      key={catalog.id}
                      className="flex items-center gap-3 p-3"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-${catalog.color}-500/10 flex items-center justify-center`}
                      >
                        <FileStack
                          className={`h-5 w-5 text-${catalog.color}-600`}
                        />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-medium text-gray-900">
                          {catalog.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {catalog.productCount} produits •{" "}
                          {catalog.categoryCount} catégories
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-3 p-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <Plus className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-medium text-[#25D366]">
                        Créer un nouveau catalogue
                      </span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="products" className="w-full">
            <div className="px-8">
              <TabsList className="h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="products"
                  className="px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  Produits
                </TabsTrigger>
                <TabsTrigger
                  value="options"
                  className="px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  Options
                </TabsTrigger>
                <TabsTrigger
                  value="discounts"
                  className="px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  Réductions
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Products Tab Content */}
            <TabsContent value="products" className="m-0">
              <div className="p-8">
                {/* Categories Section */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        Catégories
                      </h2>
                      <p className="text-sm text-gray-500">
                        {mockCategories.length} catégories
                      </p>
                    </div>
                  </div>

                  {/* Categories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Add Category Card */}
                    <button className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-2 group">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                        <Plus className="h-5 w-5 text-gray-400 group-hover:text-[#25D366]" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                        Ajouter une catégorie
                      </span>
                    </button>

                    {/* Category Cards */}
                    {mockCategories.map((category) => (
                      <Sheet key={category.id}>
                        <SheetTrigger asChild>
                          <div className="aspect-[4/3] rounded-xl border border-gray-100 bg-white overflow-hidden group relative cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
                            <Image
                              src={category.image}
                              alt={category.name}
                              layout="fill"
                              objectFit="cover"
                              className="group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                              <h3 className="text-lg font-semibold text-white">
                                {category.name}
                              </h3>
                              <p className="text-sm text-white/80">
                                {category.productCount} produits
                              </p>
                            </div>
                          </div>
                        </SheetTrigger>
                        <SheetContent
                          side="right"
                          className="w-[400px] sm:w-[540px] p-0"
                        >
                          <SheetHeader className="p-6 border-b border-gray-100">
                            <SheetTitle>Modifier la catégorie</SheetTitle>
                            <p className="text-sm text-gray-500">
                              Modifiez les informations de votre catégorie
                            </p>
                          </SheetHeader>
                          <div className="p-6 space-y-6">
                            {/* Image Upload */}
                            <div>
                              <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                                {category.image ? (
                                  <>
                                    <Image
                                      src={category.image}
                                      alt={category.name}
                                      layout="fill"
                                      objectFit="cover"
                                      className="group-hover:opacity-50 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Button
                                        variant="outline"
                                        className="bg-white"
                                      >
                                        Changer l'image
                                      </Button>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                      <Plus className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="text-center">
                                      <p className="text-sm font-medium text-gray-600">
                                        Aucun fichier choisi
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        Format recommandé: JPG, PNG. Taille
                                        maximale: 5MB
                                      </p>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-4">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Nom*
                                </label>
                                <Input id="name" defaultValue={category.name} />
                              </div>
                              <div>
                                <label
                                  htmlFor="description"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Description
                                </label>
                                <Input
                                  id="description"
                                  defaultValue={category.description || ""}
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="reference"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Référence
                                </label>
                                <Input
                                  id="reference"
                                  defaultValue={category.id}
                                />
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-6">
                              <div className="flex items-center gap-4">
                                <Button
                                  variant="outline"
                                  className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                                >
                                  Supprimer
                                </Button>
                                <Button className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-colors">
                                  Valider
                                </Button>
                              </div>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    ))}
                  </div>
                </div>

                {/* Products Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        Produits
                      </h2>
                      <p className="text-sm text-gray-500">
                        {mockProducts.length} produits
                      </p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Add Product Card */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <button className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-2 group">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                            <Plus className="h-5 w-5 text-gray-400 group-hover:text-[#25D366]" />
                          </div>
                          <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                            Ajouter un produit
                          </span>
                        </button>
                      </SheetTrigger>
                      <SheetContent
                        side="right"
                        className="w-[400px] sm:w-[540px] p-0"
                      >
                        <SheetHeader className="p-6 border-b border-gray-100">
                          <SheetTitle>Ajouter un produit</SheetTitle>
                          <p className="text-sm text-gray-500">
                            Ajoutez un nouveau produit à votre catalogue
                          </p>
                        </SheetHeader>

                        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-120px)]">
                          {/* Image Upload */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Image
                            </label>
                            <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                <Plus className="h-5 w-5 text-gray-400" />
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-medium text-gray-600">
                                  Aucun fichier choisi
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Format recommandé: JPG, PNG. Taille maximale:
                                  5MB
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Basic Information */}
                          <div className="space-y-4">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Nom*
                              </label>
                              <Input id="name" placeholder="Nom du produit" />
                            </div>

                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Description
                              </label>
                              <Input
                                id="description"
                                placeholder="Description du produit"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Catégorie*
                              </label>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-between"
                                  >
                                    Sélectionner une catégorie
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[calc(100%-2rem)]">
                                  {mockCategories.map((category) => (
                                    <DropdownMenuItem key={category.id}>
                                      {category.name}
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>

                            <div>
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Prix
                              </label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900">
                                  CHF
                                </span>
                                <Input
                                  id="price"
                                  type="number"
                                  step="0.01"
                                  className="pl-12"
                                  placeholder="0.00"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="pt-6">
                            <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-colors">
                              Créer le produit
                            </Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>

                    {/* Product Cards */}
                    {mockProducts.map((product) => (
                      <Sheet key={product.id}>
                        <SheetTrigger asChild>
                          <div className="aspect-square rounded-xl border border-gray-100 bg-white overflow-hidden group cursor-pointer">
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
                              <p className="text-sm text-gray-500 mt-1">
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
                                    {product.optionListCount === 1
                                      ? "liste d'options"
                                      : "listes d'options"}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </SheetTrigger>
                        <SheetContent
                          side="right"
                          className="w-[400px] sm:w-[540px] p-0"
                        >
                          <SheetHeader className="p-6 border-b border-gray-100">
                            <SheetTitle>Modifier le produit</SheetTitle>
                            <p className="text-sm text-gray-500">
                              Modifiez les informations de votre produit
                            </p>
                          </SheetHeader>

                          <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-120px)]">
                            {/* Image Upload */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preview
                              </label>
                              <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                                {product.image ? (
                                  <>
                                    <Image
                                      src={product.image}
                                      alt={product.name}
                                      layout="fill"
                                      objectFit="cover"
                                      className="group-hover:opacity-50 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Button
                                        variant="outline"
                                        className="bg-white"
                                      >
                                        Changer l'image
                                      </Button>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                      <Plus className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="text-center">
                                      <p className="text-sm font-medium text-gray-600">
                                        Aucun fichier choisi
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        Format recommandé: JPG, PNG. Taille
                                        maximale: 5MB
                                      </p>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Basic Information */}
                            <div className="space-y-4">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Nom*
                                </label>
                                <Input id="name" defaultValue={product.name} />
                              </div>

                              <div>
                                <label
                                  htmlFor="description"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Description
                                </label>
                                <Input
                                  id="description"
                                  defaultValue={product.description}
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="reference"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Référence
                                </label>
                                <Input
                                  id="reference"
                                  defaultValue={product.id}
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="category"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Catégorie*
                                </label>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="w-full justify-between"
                                    >
                                      {mockCategories.find(
                                        (cat) => cat.id === product.categoryId
                                      )?.name || "Sélectionner une catégorie"}
                                      <ChevronDown className="h-4 w-4 opacity-50" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="w-[calc(100%-2rem)]">
                                    {mockCategories.map((category) => (
                                      <DropdownMenuItem key={category.id}>
                                        {category.name}
                                      </DropdownMenuItem>
                                    ))}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>

                              <div>
                                <label
                                  htmlFor="price"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Prix
                                </label>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900">
                                    CHF
                                  </span>
                                  <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    defaultValue={product.price}
                                    className="pl-12"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Option Lists Section */}
                            <div className="space-y-4">
                              <label className="block text-sm font-medium text-gray-700">
                                Listes d'options
                              </label>
                              {mockOptionLists.map((list) => (
                                <div
                                  key={list.id}
                                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg"
                                >
                                  <div
                                    className={`w-10 h-10 rounded-lg bg-${list.color}-500/10 flex items-center justify-center`}
                                  >
                                    <FileStack
                                      className={`h-5 w-5 text-${list.color}-600`}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900">
                                      {list.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                      {list.optionCount} options •{" "}
                                      {list.maxChoices
                                        ? `Max. ${list.maxChoices} choix`
                                        : "Illimité"}
                                    </p>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-4 w-4 text-gray-400" />
                                  </Button>
                                </div>
                              ))}
                            </div>

                            {/* Actions */}
                            <div className="pt-6">
                              <div className="flex items-center gap-4">
                                <Button
                                  variant="outline"
                                  className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                                >
                                  Supprimer
                                </Button>
                                <Button className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-colors">
                                  Valider
                                </Button>
                              </div>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Options Tab Content */}
            <TabsContent value="options" className="m-0">
              <div className="p-8">
                {/* Option Lists Section */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        Listes d'options
                      </h2>
                      <p className="text-sm text-gray-500">
                        {mockOptionLists.length} listes d'options
                      </p>
                    </div>
                  </div>

                  {/* Option Lists Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Add Option List Card */}
                    <button className="aspect-[3/1.2] rounded-xl border border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex items-center justify-center gap-2 group">
                      <Plus className="h-4 w-4 text-gray-400 group-hover:text-[#25D366]" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                        Nouvelle liste
                      </span>
                    </button>

                    {/* Option Lists Cards */}
                    {mockOptionLists.map((list) => (
                      <Sheet key={list.id}>
                        <SheetTrigger asChild>
                          <div className="group cursor-pointer">
                            <div
                              className={`aspect-[3/1.2] rounded-xl bg-${list.color}-50 border-0 hover:bg-${list.color}-100 transition-all p-3 flex flex-col justify-between`}
                            >
                              <div>
                                <h3 className="text-base font-medium text-gray-900">
                                  {list.name}
                                </h3>
                                <p
                                  className={`text-sm text-${list.color}-600 mt-1`}
                                >
                                  {list.optionCount} options
                                </p>
                              </div>
                            </div>
                          </div>
                        </SheetTrigger>
                        <SheetContent
                          side="right"
                          className="w-[400px] sm:w-[540px] p-0"
                        >
                          <SheetHeader className="p-6 border-b border-gray-100">
                            <SheetTitle>Modifier la liste d'options</SheetTitle>
                            <p className="text-sm text-gray-500">
                              Modifiez les informations de votre liste d'options
                            </p>
                          </SheetHeader>

                          <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-120px)]">
                            {/* Basic Information */}
                            <div className="space-y-4">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Nom*
                                </label>
                                <Input id="name" defaultValue={list.name} />
                              </div>

                              <div>
                                <label
                                  htmlFor="reference"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Référence
                                </label>
                                <Input id="reference" defaultValue={list.id} />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                  Nombre d'options sélectionnables
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label
                                      htmlFor="min"
                                      className="block text-sm text-gray-600 mb-1"
                                    >
                                      Minimum
                                    </label>
                                    <Input
                                      id="min"
                                      type="number"
                                      min="0"
                                      placeholder="Optionnel"
                                      defaultValue={list.maxChoices || ""}
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="max"
                                      className="block text-sm text-gray-600 mb-1"
                                    >
                                      Maximum
                                    </label>
                                    <Input
                                      id="max"
                                      type="number"
                                      min="1"
                                      defaultValue={list.maxChoices || ""}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-6">
                              <div className="flex items-center gap-4">
                                <Button
                                  variant="outline"
                                  className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                                >
                                  Supprimer
                                </Button>
                                <Button className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-colors">
                                  Valider
                                </Button>
                              </div>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    ))}
                  </div>
                </div>

                {/* Individual Options Section */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        Options
                      </h2>
                      <p className="text-sm text-gray-500">
                        {mockOptions.length} options
                      </p>
                    </div>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Add Option Card */}
                    <button className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-2 group">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                        <Plus className="h-5 w-5 text-gray-400 group-hover:text-[#25D366]" />
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                        Ajouter une option
                      </span>
                    </button>

                    {/* Option Cards */}
                    {mockOptions.map((option) => {
                      const optionList = mockOptionLists.find(
                        (list) => list.id === option.optionListId
                      );
                      return (
                        <Sheet key={option.id}>
                          <SheetTrigger asChild>
                            <div className="aspect-square rounded-xl border border-gray-100 bg-white overflow-hidden group cursor-pointer">
                              <div className="relative h-3/5 overflow-hidden">
                                <Image
                                  src={option.image}
                                  alt={option.name}
                                  layout="fill"
                                  objectFit="cover"
                                  className="group-hover:scale-105 transition-transform duration-300"
                                />
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="absolute top-2 right-2 h-8 w-8 p-0 bg-black/20 hover:bg-black/40 backdrop-blur-md"
                                >
                                  <MoreHorizontal className="h-4 w-4 text-white" />
                                </Button>
                              </div>
                              <div className="p-4">
                                <h3 className="font-medium text-gray-900">
                                  {option.name}
                                </h3>
                                <div className="flex items-center justify-between mt-3">
                                  <Badge
                                    variant="outline"
                                    className={`bg-${optionList?.color}-500/10 text-${optionList?.color}-600 border-${optionList?.color}-200`}
                                  >
                                    {optionList?.name}
                                  </Badge>
                                  <span className="font-medium text-gray-900">
                                    + {option.price.toFixed(2)} €
                                  </span>
                                </div>
                              </div>
                            </div>
                          </SheetTrigger>
                          <SheetContent
                            side="right"
                            className="w-[400px] sm:w-[540px] p-0"
                          >
                            <SheetHeader className="p-6 border-b border-gray-100">
                              <SheetTitle>Modifier l'option</SheetTitle>
                              <p className="text-sm text-gray-500">
                                Modifiez les informations de votre option
                              </p>
                            </SheetHeader>
                            <div className="p-6 space-y-6">
                              {/* Image Upload */}
                              <div>
                                <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                                  {option.image ? (
                                    <>
                                      <Image
                                        src={option.image}
                                        alt={option.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:opacity-50 transition-opacity"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button
                                          variant="outline"
                                          className="bg-white"
                                        >
                                          Changer l'image
                                        </Button>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Plus className="h-5 w-5 text-gray-400" />
                                      </div>
                                      <div className="text-center">
                                        <p className="text-sm font-medium text-gray-600">
                                          Aucun fichier choisi
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                          Format recommandé: JPG, PNG. Taille
                                          maximale: 5MB
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>

                              {/* Form Fields */}
                              <div className="space-y-4">
                                <div>
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                  >
                                    Nom*
                                  </label>
                                  <Input id="name" defaultValue={option.name} />
                                </div>
                                <div>
                                  <label
                                    htmlFor="reference"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                  >
                                    Référence
                                  </label>
                                  <Input
                                    id="reference"
                                    defaultValue={option.id}
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="optionList"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                  >
                                    Liste d'options*
                                  </label>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        variant="outline"
                                        className="w-full justify-between"
                                      >
                                        {optionList?.name ||
                                          "Sélectionner une liste d'options"}
                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full">
                                      {mockOptionLists.map((list) => (
                                        <DropdownMenuItem key={list.id}>
                                          {list.name}
                                        </DropdownMenuItem>
                                      ))}
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                                <div>
                                  <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                  >
                                    Prix
                                  </label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900">
                                      CHF
                                    </span>
                                    <Input
                                      id="price"
                                      type="number"
                                      step="0.01"
                                      defaultValue={option.price}
                                      className="pl-12"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="pt-6">
                                <div className="flex items-center gap-4">
                                  <Button
                                    variant="outline"
                                    className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                                  >
                                    Supprimer
                                  </Button>
                                  <Button className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-colors">
                                    Valider
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </SheetContent>
                        </Sheet>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Discounts Tab Content */}
            <TabsContent value="discounts" className="m-0">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Réductions
                    </h2>
                    <p className="text-sm text-gray-500">
                      Gérez vos réductions et promotions
                    </p>
                  </div>
                </div>

                {/* Discounts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {/* Add Discount Card */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className="aspect-[3/2] rounded-xl border-2 border-dashed border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors flex flex-col items-center justify-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-colors">
                          <Plus className="h-5 w-5 text-gray-400 group-hover:text-[#25D366]" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-[#25D366]">
                          Nouvelle réduction
                        </span>
                      </button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[400px] sm:w-[540px] p-0"
                    >
                      <SheetHeader className="p-6 border-b border-gray-100">
                        <SheetTitle>Créer une nouvelle réduction</SheetTitle>
                        <p className="text-sm text-gray-500">
                          Ajoutez une nouvelle réduction à votre catalogue
                        </p>
                      </SheetHeader>

                      <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-120px)]">
                        {/* Basic Information */}
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Nom*
                            </label>
                            <Input
                              id="name"
                              placeholder="Nom de la réduction"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Description
                            </label>
                            <Input
                              id="description"
                              placeholder="Description de la réduction"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="discountType"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Type de réduction*
                            </label>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-between"
                                >
                                  Sélectionner un type
                                  <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-[calc(100%-2rem)]">
                                <DropdownMenuItem className="flex items-center justify-between">
                                  Pourcentage
                                  <Badge className="bg-blue-50 text-blue-600 border-blue-200">
                                    %
                                  </Badge>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center justify-between">
                                  Montant fixe
                                  <Badge className="bg-green-50 text-green-600 border-green-200">
                                    CHF
                                  </Badge>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center justify-between">
                                  Produit gratuit
                                  <Badge className="bg-purple-50 text-purple-600 border-purple-200">
                                    Gratuit
                                  </Badge>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center justify-between">
                                  Achetez-en un, obtenez-en un
                                  <Badge className="bg-orange-50 text-orange-600 border-orange-200">
                                    1+1
                                  </Badge>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center justify-between">
                                  Livraison gratuite
                                  <Badge className="bg-rose-50 text-rose-600 border-rose-200">
                                    Livraison
                                  </Badge>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          {/* Dynamic Discount Data Fields */}
                          <div className="space-y-4 border-t border-gray-100 pt-4">
                            <h3 className="text-sm font-medium text-gray-900">
                              Configuration de la réduction
                            </h3>

                            {/* Example: Percentage fields (we'll make this dynamic based on selection) */}
                            <div>
                              <label
                                htmlFor="percentage"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Pourcentage*
                              </label>
                              <div className="relative">
                                <Input
                                  id="percentage"
                                  type="number"
                                  min="0"
                                  max="100"
                                  placeholder="0"
                                  className="pr-8"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                  %
                                </span>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="maxAmount"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Montant maximum de réduction
                              </label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900">
                                  CHF
                                </span>
                                <Input
                                  id="maxAmount"
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  className="pl-12"
                                  placeholder="0.00"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Conditions */}
                          <div className="space-y-4 border-t border-gray-100 pt-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-500">
                                Conditions
                              </h3>
                              <span className="text-xs text-gray-400">
                                Optionnel
                              </span>
                            </div>

                            <div className="space-y-6">
                              <div className="space-y-4">
                                <h4 className="text-xs font-medium text-gray-500">
                                  Période de validité
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label
                                      htmlFor="startDate"
                                      className="block text-sm text-gray-600 mb-1"
                                    >
                                      Date de début
                                    </label>
                                    <Input
                                      id="startDate"
                                      type="date"
                                      className="text-gray-500"
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="endDate"
                                      className="block text-sm text-gray-600 mb-1"
                                    >
                                      Date de fin
                                    </label>
                                    <Input
                                      id="endDate"
                                      type="date"
                                      className="text-gray-500"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="minOrderAmount"
                                  className="block text-sm text-gray-600 mb-1"
                                >
                                  Montant minimum de commande
                                </label>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    CHF
                                  </span>
                                  <Input
                                    id="minOrderAmount"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    className="pl-12 text-gray-500"
                                    placeholder="Aucun minimum"
                                  />
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="maxOrders"
                                  className="block text-sm text-gray-600 mb-1"
                                >
                                  Nombre maximum de commandes par client
                                </label>
                                <Input
                                  id="maxOrders"
                                  type="number"
                                  min="1"
                                  className="text-gray-500"
                                  placeholder="Illimité"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="promoCode"
                                  className="block text-sm text-gray-600 mb-1"
                                >
                                  Code promotionnel
                                </label>
                                <Input
                                  id="promoCode"
                                  className="text-gray-500"
                                  placeholder="Ex: SUMMER2024"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-6">
                          <div className="flex items-center gap-4">
                            <Button variant="outline" className="flex-1">
                              Annuler
                            </Button>
                            <Button className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-colors">
                              Créer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Example Discount Cards */}
                  {mockDiscounts.map((discount) => (
                    <div
                      key={discount.id}
                      className="aspect-[3/2] rounded-xl border border-gray-200 bg-white p-4 flex flex-col"
                    >
                      {/* Header with badge and actions */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="outline"
                          className={cn("px-2.5 py-0.5 font-medium", {
                            "bg-blue-50 text-blue-600 border-blue-200":
                              discount.type === "percentage",
                            "bg-green-50 text-green-600 border-green-200":
                              discount.type === "fixed",
                            "bg-purple-50 text-purple-600 border-purple-200":
                              discount.type === "free_product",
                            "bg-orange-50 text-orange-600 border-orange-200":
                              discount.type === "bogo",
                            "bg-rose-50 text-rose-600 border-rose-200":
                              discount.type === "free_shipping",
                          })}
                        >
                          {discount.type === "percentage" && "%"}
                          {discount.type === "fixed" && "CHF"}
                          {discount.type === "free_product" && "Gratuit"}
                          {discount.type === "bogo" && "1+1"}
                          {discount.type === "free_shipping" && "Livraison"}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-100"
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </Button>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-gray-900 line-clamp-1">
                          {discount.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {discount.description}
                        </p>
                      </div>

                      {/* Footer with dynamic info based on type */}
                      <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                        {/* Percentage discount */}
                        {discount.type === "percentage" && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Réduction</span>
                            <span className="font-medium text-gray-900">
                              {discount.data.percentage}%
                              {discount.data.maxAmount &&
                                ` (max. ${discount.data.maxAmount} CHF)`}
                            </span>
                          </div>
                        )}

                        {/* Fixed amount discount */}
                        {discount.type === "fixed" && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Montant</span>
                            <span className="font-medium text-gray-900">
                              {discount.data.amount} CHF
                            </span>
                          </div>
                        )}

                        {/* Free product or BOGO */}
                        {(discount.type === "free_product" ||
                          discount.type === "bogo") && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Produit</span>
                            <span className="font-medium text-gray-900">
                              {mockProducts.find(
                                (p) => p.id === discount.data.productId
                              )?.name || "Non spécifié"}
                            </span>
                          </div>
                        )}

                        {/* Common conditions */}
                        {discount.conditions?.minOrderAmount && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Minimum</span>
                            <span className="font-medium text-gray-900">
                              {discount.conditions.minOrderAmount} CHF
                            </span>
                          </div>
                        )}

                        {discount.conditions?.endDate && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Expire le</span>
                            <span className="font-medium text-gray-900">
                              {new Date(
                                discount.conditions.endDate
                              ).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long",
                              })}
                            </span>
                          </div>
                        )}

                        {discount.conditions?.promoCode && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Code</span>
                            <code className="px-2 py-0.5 rounded font-mono text-xs bg-[#25D366]/10 text-[#25D366]">
                              {discount.conditions.promoCode}
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
