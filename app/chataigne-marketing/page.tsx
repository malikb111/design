"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  FileStack,
  MessageSquare,
  Plug,
  Search,
  Settings,
  ShoppingBag,
  Store,
  User,
  LogOut,
  Building2,
  MapPin,
  BarChart3,
  Plus,
  Save,
  Trash2,
  Copy,
  Image as ImageIcon,
  FileText,
  Video,
  Link,
  AlertCircle,
  Info,
  Phone,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Avvvatars from "avvvatars-react";
import { useState } from "react";

export default function ChataigneMarketing() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);
  const [headerType, setHeaderType] = useState<
    "text" | "image" | "video" | "document" | "location"
  >("text");
  const [buttons, setButtons] = useState<
    Array<{
      type: "URL" | "PHONE_NUMBER" | "QUICK_REPLY" | "COPY_CODE" | "FLOW";
      id: string;
      values?: Record<string, string>;
    }>
  >([]);
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  const [selectedButtonType, setSelectedButtonType] = useState<
    "URL" | "PHONE_NUMBER" | "QUICK_REPLY" | "COPY_CODE" | "FLOW" | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FAFBF6] flex">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Messages WhatsApp
                </h1>
                <p className="text-gray-500">
                  Créez et personnalisez vos modèles de messages
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button className="h-9 px-3 text-xs font-medium bg-[#25D366] hover:bg-[#20B554] text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Enregistrer le modèle
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(100vh-85px)]">
          {/* Left Panel - Template Editor */}
          <div className="w-[600px] border-r border-gray-100 bg-white overflow-y-auto">
            <div className="p-8">
              {/* Info Banner */}
              <div className="mb-6 bg-[#25D366]/5 border border-[#25D366]/10 rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                    <Info className="h-4 w-4 text-[#25D366]" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">
                      À propos des modèles de message
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      • Nécessaire pour initier une conversation après 24h
                      <br />
                      • Doit être approuvé par Meta avant utilisation
                      <br />• Limité à 250 modèles par compte WhatsApp Business
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Basic Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nom du modèle
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent side="right" className="p-3 max-w-xs">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-[#25D366]" />
                                <span className="text-sm font-medium text-gray-900">
                                  Format du nom
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                Le nom doit être unique et ne peut pas contenir
                                d'espaces. Utilisez des underscores (_) à la
                                place.
                              </p>
                              <div className="mt-2 flex items-center gap-1.5 bg-[#25D366]/5 text-[#25D366] px-2 py-1 rounded-md text-xs">
                                <AlertCircle className="h-3.5 w-3.5" />
                                Maximum 512 caractères
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Input
                      placeholder="Ex: confirmation_commande"
                      className="font-mono text-sm h-9"
                    />
                    <div className="mt-1.5 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-[10px] text-gray-500 font-normal"
                      >
                        confirmation_commande
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[10px] text-gray-500 font-normal"
                      >
                        rappel_reservation
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[10px] text-gray-500 font-normal"
                      >
                        bienvenue_client
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Catégorie
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent side="right" className="p-3 max-w-xs">
                            <div className="space-y-4">
                              <div className="space-y-3">
                                <div className="flex items-center gap-3 p-2 rounded-lg bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors cursor-pointer group">
                                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20">
                                    <MessageSquare className="h-4 w-4 text-[#25D366]" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">
                                      Utilitaire
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Messages automatiques
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg bg-orange-500/5 hover:bg-orange-500/10 transition-colors cursor-pointer group">
                                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20">
                                    <MessageSquare className="h-4 w-4 text-orange-600" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">
                                      Marketing
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Promotions et offres
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 transition-colors cursor-pointer group">
                                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20">
                                    <MessageSquare className="h-4 w-4 text-blue-600" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">
                                      Authentification
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Codes de sécurité
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="text-xs text-gray-500 flex items-center gap-1.5 bg-gray-50 p-2 rounded-md">
                                <Info className="h-3.5 w-3.5" />
                                La catégorie détermine le type de contenu et les
                                règles applicables
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="min-h-[52px] text-sm font-normal bg-gray-50/50 hover:bg-gray-100/80 w-full justify-between px-4"
                        >
                          Utilitaire
                          <ChevronDown className="h-4 w-4 text-gray-400 ml-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[576px]">
                        <div className="p-3 grid grid-cols-3 gap-2">
                          <button className="flex flex-col items-center gap-3 p-4 rounded-lg bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20">
                              <MessageSquare className="h-5 w-5 text-[#25D366]" />
                            </div>
                            <div className="text-center">
                              <div className="font-medium text-sm text-gray-900">
                                Utilitaire
                              </div>
                              <div className="text-xs text-gray-600">
                                Messages automatiques
                              </div>
                            </div>
                          </button>

                          <button className="flex flex-col items-center gap-3 p-4 rounded-lg bg-order border-gray-100 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors text-left">
                            <div className="font-medium text-sm mb-1">
                              MARKETING
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-2">
                              Messages promotionnels et campagnes
                            </div>
                          </button>
                          <button className="p-3 rounded-lg border border-gray-100 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors text-left">
                            <div className="font-medium text-sm mb-1">
                              AUTHENTICATION
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-2">
                              Codes de vérification et authentification
                            </div>
                          </button>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Langue
                      </label>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between h-9 text-sm font-normal"
                        >
                          Français (fr_FR)
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[200px]">
                        <div className="p-1">
                          <DropdownMenuItem className="gap-2">
                            <div className="flex-1">
                              <div className="text-sm">Français</div>
                              <div className="text-xs text-gray-500">fr_FR</div>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <div className="flex-1">
                              <div className="text-sm">English</div>
                              <div className="text-xs text-gray-500">en_US</div>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <div className="flex-1">
                              <div className="text-sm">Español</div>
                              <div className="text-xs text-gray-500">es_ES</div>
                            </div>
                          </DropdownMenuItem>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Message Components */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      Structure du message
                    </h3>
                  </div>

                  {/* Header - Optional */}
                  <div className="relative">
                    <div
                      className={cn(
                        "rounded-lg border border-gray-200 bg-white overflow-hidden group",
                        isHeaderActive && "border-[#25D366]/20"
                      )}
                    >
                      <div
                        className={cn(
                          "px-4 py-3 border-b flex items-center justify-between",
                          isHeaderActive
                            ? "bg-[#25D366]/5 border-[#25D366]/20"
                            : "bg-gray-50/50 border-gray-200"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <ImageIcon
                            className={cn(
                              "h-4 w-4",
                              isHeaderActive
                                ? "text-[#25D366]"
                                : "text-gray-400"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-900">
                            En-tête
                          </span>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px]",
                              isHeaderActive
                                ? "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20"
                                : "text-gray-500"
                            )}
                          >
                            Unique
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-[10px] text-gray-500"
                          >
                            Optionnel
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "h-8 text-xs gap-1.5 text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/5",
                              isHeaderActive && "hidden"
                            )}
                            onClick={() => setIsHeaderActive(true)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Activer l'en-tête
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "h-8 text-xs gap-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80",
                              !isHeaderActive && "hidden"
                            )}
                            onClick={() => setIsHeaderActive(false)}
                          >
                            Désactiver
                          </Button>
                        </div>
                      </div>
                      <div className={cn("hidden", isHeaderActive && "block")}>
                        <div className="p-4">
                          {/* Type Selector */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <label className="text-sm font-medium text-gray-700">
                                Type d'en-tête
                              </label>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Info className="h-4 w-4 text-gray-400" />
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="right"
                                    className="p-3 max-w-xs"
                                  >
                                    <p className="text-xs text-gray-600">
                                      Choisissez le type de contenu qui
                                      apparaîtra en haut de votre message
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="min-h-[52px] text-sm font-normal bg-gray-50/50 hover:bg-gray-100/80 w-full justify-between px-4"
                                >
                                  <div className="flex items-center gap-3 py-1.5">
                                    {headerType === "text" && (
                                      <>
                                        <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center shrink-0">
                                          <FileText className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <div className="text-left">
                                          <div className="text-sm font-medium text-gray-700">
                                            Texte
                                          </div>
                                          <div className="text-xs text-gray-500">
                                            Titre en gras au début du message
                                          </div>
                                        </div>
                                      </>
                                    )}
                                    {headerType === "image" && (
                                      <>
                                        <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center shrink-0">
                                          <ImageIcon className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <div className="text-left">
                                          <div className="text-sm font-medium text-gray-700">
                                            Image
                                          </div>
                                          <div className="text-xs text-gray-500">
                                            Format 16:9, JPG ou PNG
                                          </div>
                                        </div>
                                      </>
                                    )}
                                    {headerType === "video" && (
                                      <>
                                        <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center shrink-0">
                                          <Video className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <div className="text-left">
                                          <div className="text-sm font-medium text-gray-700">
                                            Vidéo
                                          </div>
                                          <div className="text-xs text-gray-500">
                                            Format 16:9, MP4 ou MOV
                                          </div>
                                        </div>
                                      </>
                                    )}
                                    {headerType === "document" && (
                                      <>
                                        <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center shrink-0">
                                          <FileText className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <div className="text-left">
                                          <div className="text-sm font-medium text-gray-700">
                                            Document
                                          </div>
                                          <div className="text-xs text-gray-500">
                                            PDF, DOCX, XLSX (max 100MB)
                                          </div>
                                        </div>
                                      </>
                                    )}
                                    {headerType === "location" && (
                                      <>
                                        <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center shrink-0">
                                          <MapPin className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <div className="text-left">
                                          <div className="text-sm font-medium text-gray-700">
                                            Localisation
                                          </div>
                                          <div className="text-xs text-gray-500">
                                            Coordonnées GPS et adresse
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  <ChevronDown className="h-4 w-4 text-gray-400 ml-3" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-[400px]"
                              >
                                <div className="p-1">
                                  <DropdownMenuItem
                                    className="flex items-center gap-2.5 p-2 cursor-pointer data-[highlighted]:bg-[#25D366]/5"
                                    onClick={() => setHeaderType("text")}
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center">
                                      <FileText className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm text-gray-700">
                                        Texte
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Titre en gras au début du message
                                      </div>
                                    </div>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center gap-2.5 p-2 cursor-pointer data-[highlighted]:bg-[#25D366]/5"
                                    onClick={() => setHeaderType("image")}
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-gray-100/80 flex items-center justify-center">
                                      <ImageIcon className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm text-gray-700">
                                        Image
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Format 16:9, JPG ou PNG
                                      </div>
                                    </div>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center gap-2.5 p-2 cursor-pointer data-[highlighted]:bg-[#25D366]/5"
                                    onClick={() => setHeaderType("video")}
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-gray-100/80 flex items-center justify-center">
                                      <Video className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm text-gray-700">
                                        Vidéo
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Format 16:9, MP4 ou MOV
                                      </div>
                                    </div>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center gap-3 p-3 cursor-pointer data-[highlighted]:bg-[#25D366]/5"
                                    onClick={() => setHeaderType("document")}
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-gray-100/80 flex items-center justify-center">
                                      <FileText className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm text-gray-700">
                                        Document
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        PDF, DOCX, XLSX (max 100MB)
                                      </div>
                                    </div>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center gap-3 p-3 cursor-pointer data-[highlighted]:bg-[#25D366]/5"
                                    onClick={() => setHeaderType("location")}
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-gray-100/80 flex items-center justify-center">
                                      <MapPin className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm text-gray-700">
                                        Localisation
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        Coordonnées GPS et adresse
                                      </div>
                                    </div>
                                  </DropdownMenuItem>
                                </div>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          {/* Content based on type */}
                          <div className="mt-4">
                            {headerType === "text" && (
                              <div>
                                <Input
                                  placeholder="Ex: Confirmation de commande"
                                  className="h-9 text-sm bg-gray-50/50"
                                />
                                <div className="mt-1.5 text-xs text-gray-500">
                                  Le titre apparaîtra en gras au début de votre
                                  message
                                </div>
                              </div>
                            )}

                            {headerType === "image" && (
                              <div className="p-6 bg-gray-50/50 rounded-lg border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                                <ImageIcon className="h-10 w-10 text-gray-400" />
                                <div className="text-sm text-gray-600">
                                  Glissez une image ici ou
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 px-4 text-xs font-medium"
                                >
                                  Parcourir
                                </Button>
                                <div className="text-xs text-gray-500">
                                  JPG, PNG • Max 5MB • Format 16:9
                                </div>
                              </div>
                            )}

                            {headerType === "video" && (
                              <div className="p-6 bg-gray-50/50 rounded-lg border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                                <Video className="h-10 w-10 text-gray-400" />
                                <div className="text-sm text-gray-600">
                                  Glissez une vidéo ici ou
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 px-4 text-xs font-medium"
                                >
                                  Parcourir
                                </Button>
                                <div className="text-xs text-gray-500">
                                  MP4, MOV • Max 16MB • Format 16:9 • Max 30s
                                </div>
                              </div>
                            )}

                            {headerType === "document" && (
                              <div className="p-6 bg-gray-50/50 rounded-lg border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                                <FileText className="h-10 w-10 text-gray-400" />
                                <div className="text-sm text-gray-600">
                                  Glissez un document ici ou
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-9 px-4 text-xs font-medium"
                                >
                                  Parcourir
                                </Button>
                                <div className="text-xs text-gray-500">
                                  PDF, DOCX, XLSX • Max 100MB
                                </div>
                              </div>
                            )}

                            {headerType === "location" && (
                              <div className="space-y-3">
                                <Input
                                  placeholder="Nom du lieu"
                                  className="h-9 text-sm bg-gray-50/50"
                                />
                                <Input
                                  placeholder="Adresse"
                                  className="h-9 text-sm bg-gray-50/50"
                                />
                                <div className="grid grid-cols-2 gap-2">
                                  <Input
                                    placeholder="Latitude"
                                    className="h-9 text-sm bg-gray-50/50"
                                  />
                                  <Input
                                    placeholder="Longitude"
                                    className="h-9 text-sm bg-gray-50/50"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body - Required */}
                  <div className="rounded-lg border border-[#25D366]/20 bg-white overflow-hidden">
                    <div className="px-4 py-3 bg-[#25D366]/5 border-b border-[#25D366]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-[#25D366]" />
                        <span className="text-sm font-medium text-gray-900">
                          Corps du message
                        </span>
                        <Badge className="bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20">
                          Requis
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <textarea
                        className="w-full h-32 px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent text-sm"
                        placeholder="Écrivez votre message ici. Utilisez {{1}}, {{2}}, etc. pour les variables."
                      />
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-[#25D366]/5 hover:text-[#25D366] hover:border-[#25D366]/20 transition-colors"
                        >
                          {"{{1}}"} Nom du client
                        </Badge>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-[#25D366]/5 hover:text-[#25D366] hover:border-[#25D366]/20 transition-colors"
                        >
                          {"{{2}}"} Numéro de commande
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Footer - Optional */}
                  <div className="relative">
                    <div
                      className={cn(
                        "rounded-lg border border-gray-200 bg-white overflow-hidden group",
                        isFooterActive && "border-[#25D366]/20"
                      )}
                    >
                      <div
                        className={cn(
                          "px-4 py-3 border-b flex items-center justify-between",
                          isFooterActive
                            ? "bg-[#25D366]/5 border-[#25D366]/20"
                            : "bg-gray-50/50 border-gray-200"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <FileText
                            className={cn(
                              "h-4 w-4",
                              isFooterActive
                                ? "text-[#25D366]"
                                : "text-gray-400"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-900">
                            Pied de message
                          </span>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px]",
                              isFooterActive
                                ? "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20"
                                : "text-gray-500"
                            )}
                          >
                            Unique
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-[10px] text-gray-500"
                          >
                            Optionnel
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "h-8 text-xs gap-1.5 text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/5",
                              isFooterActive && "hidden"
                            )}
                            onClick={() => setIsFooterActive(true)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Activer le pied de message
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "h-8 text-xs gap-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80",
                              !isFooterActive && "hidden"
                            )}
                            onClick={() => setIsFooterActive(false)}
                          >
                            Désactiver
                          </Button>
                        </div>
                      </div>
                      <div className={cn("hidden", isFooterActive && "block")}>
                        <div className="p-4">
                          <Input
                            placeholder="Ex: Merci d'avoir choisi McDonald's Lafayette"
                            className="h-9 text-sm bg-gray-50/50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons - Optional */}
                  <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50/50 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Link className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">
                          Boutons
                        </span>
                        <Badge
                          variant="outline"
                          className="text-[10px] text-gray-500"
                        >
                          Optionnel
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-xs gap-1.5 text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/5"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          Ajouter un bouton
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50/80 px-3 py-2 rounded-md">
                    <Info className="h-4 w-4" />
                    <span>
                      L'en-tête et le pied de message sont uniques et peuvent
                      être activés ou désactivés. Les boutons peuvent être
                      ajoutés selon vos besoins (maximum 3).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex-1 bg-[#FAFBF6] p-8">
            <div className="max-w-sm mx-auto sticky top-8">
              {/* Preview Section */}
              <div className="bg-[#25D366]/5 border border-[#25D366]/10 rounded-lg overflow-hidden mb-4">
                <div className="px-4 py-3 border-b border-[#25D366]/10 bg-[#25D366]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Aperçu en temps réel
                      </div>
                      <div className="text-xs text-gray-600">
                        Visualisez votre message tel qu'il apparaîtra sur
                        WhatsApp
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-xs text-gray-600">
                      Les variables seront remplacées automatiquement
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-mono bg-[#25D366]/10 text-[#25D366] px-1.5 py-0.5 rounded">
                        {"{{1}}"}
                      </span>
                      <span>→ Nom du client</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono bg-[#25D366]/10 text-[#25D366] px-1.5 py-0.5 rounded">
                        {"{{2}}"}
                      </span>
                      <span>→ Numéro de commande</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Frame */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Phone Header */}
                <div className="bg-[#075E54] text-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Store className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        McDonald's Lafayette
                      </div>
                      <div className="text-xs opacity-80">Entreprise</div>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="bg-[#ECE5DD] p-4 min-h-[400px]">
                  {/* Message Bubble */}
                  <div className="bg-white rounded-lg shadow-sm p-4 space-y-3 max-w-[85%] ml-auto relative">
                    {/* Header Preview - Image */}
                    <div className="aspect-video rounded-lg bg-gray-50/80 flex items-center justify-center border border-gray-100">
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                    </div>

                    {/* Body Preview */}
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900">
                        Confirmation de commande
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        Bonjour {"{{{1}}}"}, <br />
                        Votre commande #{"{{{2}}}"} a bien été confirmée. Nous
                        vous tiendrons informé de sa préparation.
                      </div>
                    </div>

                    {/* Footer Preview */}
                    <div className="text-xs text-gray-500">
                      McDonald's Lafayette - Paris
                    </div>

                    {/* Button Preview */}
                    <div className="pt-3 border-t border-gray-100">
                      <button className="w-full py-2.5 bg-[#25D366] text-white rounded text-sm font-medium hover:bg-[#20B554] transition-colors">
                        Voir ma commande
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="text-xs text-gray-500">
                  Les variables (ex: {"{{{1}}}"}) seront remplacées par les
                  vraies valeurs
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
