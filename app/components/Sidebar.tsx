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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
import Avvvatars from "avvvatars-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-100 flex flex-col fixed h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="mb-4">
          <Image
            src="/chataigne.svg"
            alt="Chataigne"
            width={120}
            height={30}
            className="h-7 w-auto"
          />
        </div>

        {/* Restaurant Info */}
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <button className="w-full p-4 bg-white border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-all duration-200 group relative">
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <h2 className="font-medium text-sm">
                      McDonald's Lafayette
                    </h2>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span className="truncate">Paris, France</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Building2 className="h-3 w-3 shrink-0" />
                    <span className="truncate">McDonald's France</span>
                  </div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[400px] p-0">
              <SheetHeader className="p-6 border-b border-gray-100">
                <SheetTitle>Select a restaurant</SheetTitle>
                <div className="relative mt-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    placeholder="Search for an organization, a restaurant..."
                    className="pl-9 bg-gray-50/50"
                  />
                </div>
              </SheetHeader>
              <div className="overflow-y-auto">
                {/* McDonald's */}
                <div className="border-b border-gray-100">
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-[#25D366]" />
                    </div>
                    <div>
                      <span className="font-medium">McDonald's France</span>
                      <span className="text-xs text-gray-500 block">
                        12 restaurants
                      </span>
                    </div>
                  </div>
                  <div className="pl-6">
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                          <Store className="h-4 w-4 text-[#25D366]" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <span className="block font-medium truncate">
                            McDonald's Champs-Élysées
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> Paris, France
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className="ml-2 bg-green-500/10 text-green-600 border-green-200"
                        >
                          Active
                        </Badge>
                      </div>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                          <Store className="h-4 w-4 text-[#25D366]" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <span className="block font-medium truncate">
                            McDonald's La Défense
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> Paris, France
                          </span>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* KFC */}
                <div className="border-b border-gray-100">
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <span className="font-medium">KFC France</span>
                      <span className="text-xs text-gray-500 block">
                        8 restaurants
                      </span>
                    </div>
                  </div>
                  <div className="pl-6">
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <Store className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <span className="block font-medium truncate">
                            KFC Opéra
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> Paris, France
                          </span>
                        </div>
                      </div>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                          <Store className="h-4 w-4 text-orange-600" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <span className="block font-medium truncate">
                            KFC Bellecour
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> Lyon, France
                          </span>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <div className="space-y-1">
          {/* Commandes */}
          <Button
            variant="ghost"
            className="w-full justify-start relative group hover:bg-[#25D366]/5 h-auto py-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
              <ShoppingBag className="h-4.5 w-4.5 text-[#25D366]" />
            </div>
            <div className="ml-3 text-left">
              <span className="block font-medium text-sm">Orders</span>
              <span className="text-[11px] text-gray-500">12 pending</span>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Badge className="bg-[#25D366] h-5 text-[11px]">12</Badge>
            </div>
          </Button>

          {/* Catalogue */}
          <Button
            variant="ghost"
            className="w-full justify-start relative group hover:bg-orange-500/5 h-auto py-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <FileStack className="h-4.5 w-4.5 text-orange-600" />
            </div>
            <div className="ml-3 text-left">
              <span className="block font-medium text-sm">Catalog</span>
              <span className="text-[11px] text-gray-500">86 products</span>
            </div>
          </Button>

          {/* Customers */}
          <Button
            variant="ghost"
            className="w-full justify-start relative group hover:bg-blue-500/5 h-auto py-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <User className="h-4.5 w-4.5 text-blue-600" />
            </div>
            <div className="ml-3 text-left">
              <span className="block font-medium text-sm">Customers</span>
              <span className="text-[11px] text-gray-500">342 customers</span>
            </div>
          </Button>

          {/* Analytics */}
          <Button
            variant="ghost"
            className="w-full justify-start relative group hover:bg-purple-500/5 h-auto py-2.5"
          >
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <BarChart3 className="h-4.5 w-4.5 text-purple-600" />
            </div>
            <div className="ml-3 text-left">
              <span className="block font-medium text-sm">Analytics</span>
              <span className="text-[11px] text-gray-500">Overview</span>
            </div>
          </Button>
        </div>
      </nav>

      {/* Bottom section */}
      <div>
        {/* Settings */}
        <div className="px-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-500 hover:text-gray-900 hover:bg-gray-50/50 h-8 text-xs gap-2"
              >
                <Settings className="h-3.5 w-3.5" />
                Restaurant settings
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="flex items-center gap-2">
                <Settings className="h-4 w-4" /> General
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Plug className="h-4 w-4" /> Integrations
                <Badge
                  variant="outline"
                  className="ml-auto text-[10px] h-4 px-1.5"
                >
                  2
                </Badge>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-100 mt-2"></div>

        {/* User Profile */}
        <div className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full flex items-center gap-2.5 px-2 hover:bg-gray-500/5 h-10 justify-start"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <Avvvatars
                    value="Thomas Durant"
                    style="shape"
                    size={28}
                    shadow={true}
                    border={true}
                    borderSize={1}
                    borderColor="#ffffff"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-medium text-gray-700">
                    Thomas Durant
                  </span>
                  <span className="text-[11px] text-[#25D366] font-medium">
                    Owner
                  </span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="flex items-center gap-2">
                <User className="h-4 w-4" /> My profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Settings className="h-4 w-4" /> Preferences
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                <LogOut className="h-4 w-4" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
}
