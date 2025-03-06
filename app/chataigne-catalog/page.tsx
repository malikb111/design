import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileStack, Plus, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCatalogs } from "./mock-data";
import Sidebar from "../components/Sidebar";
import ProductsTab from "./components/ProductsTab";
import OptionsTab from "./components/OptionsTab";
import DiscountsTab from "./components/DiscountsTab";

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
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <FileStack className="h-5 w-5 text-orange-600" />
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

            <TabsContent value="products" className="m-0">
              <ProductsTab />
            </TabsContent>

            <TabsContent value="options" className="m-0">
              <OptionsTab />
            </TabsContent>

            <TabsContent value="discounts" className="m-0">
              <DiscountsTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
