"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Star,
  TrendingUp,
  ArrowRight,
  Hash,
  DollarSign,
  Sparkles,
  Clock,
  Users,
  BarChart,
  LayoutGrid,
  List,
  Shield,
  BarChart3,
  Workflow,
  Boxes,
  Cpu,
  Zap,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
  rating?: number;
  sales?: number;
  image?: string;
  lastUpdated?: string;
  activeUsers?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "API Authentication Service",
    description:
      "Complete authentication solution with JWT, OAuth, and 2FA support",
    price: "49€/month",
    category: "Security",
    tags: ["API", "Authentication", "Security"],
    rating: 4.8,
    sales: 1234,
    image: "/images/auth-service.png",
    lastUpdated: "2024-02-15",
    activeUsers: 12500,
  },
  {
    id: 3,
    title: "Cloud Storage Solution",
    description: "Scalable cloud storage with high availability and security",
    price: "79€/month",
    category: "Infrastructure",
    tags: ["Cloud", "Storage", "Scalable"],
    rating: 4.7,
    sales: 980,
    image: "/images/cloud-storage.png",
    lastUpdated: "2024-01-20",
    activeUsers: 10200,
  },
  {
    id: 4,
    title: "Marketing Automation Tool",
    description: "Automate your marketing campaigns with advanced analytics",
    price: "59€/month",
    category: "Automation",
    tags: ["Marketing", "Automation", "Analytics"],
    rating: 4.6,
    sales: 1120,
    image: "/images/marketing-automation.png",
    lastUpdated: "2024-01-25",
    activeUsers: 9400,
  },
  {
    id: 5,
    title: "Customer Support Chatbot",
    description: "AI-powered chatbot for 24/7 customer support",
    price: "39€/month",
    category: "Customer Service",
    tags: ["AI", "Chatbot", "Support"],
    rating: 4.5,
    sales: 750,
    image: "/images/chatbot.png",
    lastUpdated: "2024-02-05",
    activeUsers: 8700,
  },
  {
    id: 6,
    title: "Project Management Software",
    description:
      "Collaborative project management with task tracking and reporting",
    price: "69€/month",
    category: "Productivity",
    tags: ["Project Management", "Collaboration", "Task Tracking"],
    rating: 4.9,
    sales: 1340,
    image: "/images/project-management.png",
    lastUpdated: "2024-01-30",
    activeUsers: 11000,
  },
  {
    id: 7,
    title: "E-commerce Platform",
    description: "Comprehensive e-commerce platform with payment integration",
    price: "99€/month",
    category: "E-commerce",
    tags: ["E-commerce", "Payment Integration", "Platform"],
    rating: 4.8,
    sales: 1450,
    image: "/images/e-commerce.png",
    lastUpdated: "2024-02-12",
    activeUsers: 12000,
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets",
    price: "99€/month",
    category: "Analytics",
    tags: ["Dashboard", "Analytics", "Real-time"],
    rating: 4.9,
    sales: 856,
    image: "/images/analytics-dashboard.png",
    lastUpdated: "2024-02-10",
    activeUsers: 8900,
  },
  // Add more projects as needed
];

const categories = [
  { id: "all", name: "All Projects", count: 156 },
  { id: "security", name: "Security", count: 45 },
  { id: "analytics", name: "Analytics", count: 32 },
  { id: "infrastructure", name: "Infrastructure", count: 28 },
  { id: "automation", name: "Automation", count: 51 },
];

const priceRanges = [
  { id: "all", name: "All Prices" },
  { id: "free", name: "Free" },
  { id: "0-50", name: "0-50€/month" },
  { id: "51-100", name: "51-100€/month" },
  { id: "100+", name: "100€+/month" },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-6 z-50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative flex h-14 items-center justify-between bg-white/90 backdrop-blur-xl rounded-full border border-slate-200/50 shadow-lg px-6">
              {/* Logo + Primary Nav */}
              <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="group relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative flex items-center gap-2">
                    <Boxes className="h-6 w-6 text-violet-500" />
                    <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                      Nexus
                    </span>
                  </div>
                </div>

                {/* Primary Navigation */}
                <div className="hidden md:flex items-center">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      className="relative h-8 rounded-full px-3 text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200"
                    >
                      <Cpu className="h-4 w-4 mr-1.5" />
                      Infrastructure
                      <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-200 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-violet-100 text-[10px] font-medium text-violet-700 items-center justify-center">
                          3
                        </span>
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-8 rounded-full px-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200"
                    >
                      <Shield className="h-4 w-4 mr-1.5" />
                      Security
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-8 rounded-full px-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all duration-200"
                    >
                      <BarChart3 className="h-4 w-4 mr-1.5" />
                      Analytics
                    </Button>
                  </div>
                </div>
              </div>

              {/* Secondary Navigation */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="hidden sm:flex relative group h-8 rounded-full px-4 text-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  <Zap className="h-4 w-4 mr-1.5 text-violet-500" />
                  <span className="relative">Publier</span>
                </Button>
                <Button className="relative group h-8 rounded-full px-4 text-sm bg-slate-900 hover:bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-violet-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  <span className="relative flex items-center gap-1.5">
                    Se connecter
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero + Search Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-slate-50 h-[500px] -z-10">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]" />
          </div>

          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16 pb-20">
            <div className="max-w-3xl relative">
              {/* Effets de fond améliorés */}
              <div className="absolute -left-32 -top-32 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -right-32 top-0 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-300" />
              <div className="absolute left-0 bottom-0 w-48 h-48 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />

              <div className="relative">
                {/* Titre principal réimaginé */}
                <div className="relative mb-6">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    <span className="block mb-1">Découvrez les</span>
                    <span className="block">meilleurs services</span>
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        SaaS
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-100 to-blue-100 blur-xl opacity-50 z-0" />
                    </span>
                    <span className="block">pour votre entreprise</span>
                  </h1>
                </div>

                {/* Description améliorée */}
                <p className="text-lg text-slate-600 mb-10 leading-relaxed relative">
                  <span className="bg-gradient-to-r from-slate-600 to-slate-900 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                    Une collection soigneusement sélectionnée d'outils et de
                    services pour accélérer votre développement
                  </span>
                </p>

                {/* Tags réimaginés */}
                <div className="flex flex-wrap gap-3">
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-50 to-blue-50 rounded-2xl blur transition duration-200 group-hover:blur-xl" />
                    <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm text-sm text-slate-600">
                      <Shield className="h-4 w-4 text-violet-500" />
                      <span>Solutions vérifiées</span>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-50 to-blue-50 rounded-2xl blur transition duration-200 group-hover:blur-xl" />
                    <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm text-sm text-slate-600">
                      <Users className="h-4 w-4 text-violet-500" />
                      <span>+50k utilisateurs actifs</span>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-50 to-blue-50 rounded-2xl blur transition duration-200 group-hover:blur-xl" />
                    <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm text-sm text-slate-600">
                      <Star className="h-4 w-4 text-violet-500" />
                      <span>Support premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="mt-12 flex flex-col md:flex-row gap-6 items-end">
              <div className="flex-1 max-w-2xl">
                {/* Container principal */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-sm">
                  {/* Barre de recherche */}
                  <div className="relative flex items-center">
                    <div className="absolute left-4 flex items-center gap-3">
                      <Search className="h-5 w-5 text-slate-400" />
                      <div className="h-6 w-px bg-slate-200" />
                    </div>
                    <Input
                      placeholder="Rechercher des services..."
                      className="w-full pl-16 pr-4 h-12 text-base bg-transparent border-0 ring-0 focus:ring-0 focus:border-0 placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Filtres */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm border border-slate-200/50">
                  <Button
                    variant="ghost"
                    className="relative h-9 rounded-full px-4 text-slate-600 hover:text-slate-900 hover:bg-white transition-all duration-200"
                  >
                    <Sparkles className="h-4 w-4 mr-2 text-violet-500" />
                    Populaire
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-200 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-violet-100 text-[10px] font-medium text-violet-700 items-center justify-center">
                        12
                      </span>
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-9 rounded-full px-4 text-slate-600 hover:text-slate-900 hover:bg-white transition-all duration-200"
                  >
                    <Clock className="h-4 w-4 mr-2 text-violet-500" />
                    Récent
                  </Button>
                </div>

                <Select defaultValue="popular">
                  <SelectTrigger className="w-[160px] border-slate-200/50 bg-white/80 backdrop-blur-sm rounded-full">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Plus populaires</SelectItem>
                    <SelectItem value="newest">Plus récents</SelectItem>
                    <SelectItem value="price-low">Prix croissant</SelectItem>
                    <SelectItem value="price-high">Prix décroissant</SelectItem>
                  </SelectContent>
                </Select>

                <Tabs defaultValue="grid" className="w-auto">
                  <TabsList className="grid w-20 grid-cols-2 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full">
                    <TabsTrigger
                      value="grid"
                      className="data-[state=active]:bg-violet-50 data-[state=active]:text-violet-700 rounded-full"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </TabsTrigger>
                    <TabsTrigger
                      value="list"
                      className="data-[state=active]:bg-violet-50 data-[state=active]:text-violet-700 rounded-full"
                    >
                      <List className="h-4 w-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-none">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-sm sticky top-24">
                <div className="p-4 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 px-2 mb-3">
                      <Hash className="h-4 w-4 text-violet-500" />
                      <span className="text-sm font-medium text-slate-900">
                        Catégories
                      </span>
                    </div>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant="ghost"
                          className="w-full justify-between h-9 px-3 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-200"
                        >
                          <span>{category.name}</span>
                          <Badge
                            variant="secondary"
                            className="bg-slate-100/80 backdrop-blur-sm text-slate-600 px-2 py-0.5 rounded-full"
                          >
                            {category.count}
                          </Badge>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />

                  <div>
                    <div className="flex items-center gap-2 px-2 mb-3">
                      <DollarSign className="h-4 w-4 text-violet-500" />
                      <span className="text-sm font-medium text-slate-900">
                        Prix
                      </span>
                    </div>
                    <div className="space-y-1">
                      {priceRanges.map((range) => (
                        <Button
                          key={range.id}
                          variant="ghost"
                          className="w-full justify-start h-9 px-3 text-sm font-normal text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-200"
                        >
                          {range.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="flex-1 pt-6 lg:pt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="group relative flex flex-col overflow-hidden bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <CardHeader className="relative space-y-0 p-6 pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <CardTitle className="text-lg font-semibold text-slate-900">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-sm line-clamp-2 text-slate-500">
                            {project.description}
                          </CardDescription>
                        </div>
                        {project.rating && (
                          <div className="flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-violet-700">
                            <Star className="h-3.5 w-3.5 fill-violet-500 text-violet-500" />
                            <span className="text-sm font-medium">
                              {project.rating}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="relative px-6 pb-4 flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-slate-100/80 backdrop-blur-sm text-slate-600 px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-200/50 mt-auto">
                        <div className="text-center">
                          <div className="text-xs font-medium text-slate-500 mb-1">
                            Utilisateurs
                          </div>
                          <div className="text-sm font-semibold text-slate-700">
                            {project.activeUsers?.toLocaleString() ?? "-"}
                          </div>
                        </div>
                        <div className="text-center border-x border-slate-200/50">
                          <div className="text-xs font-medium text-slate-500 mb-1">
                            Ventes
                          </div>
                          <div className="text-sm font-semibold text-slate-700">
                            {project.sales?.toLocaleString() ?? "-"}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-medium text-slate-500 mb-1">
                            Prix
                          </div>
                          <div className="text-sm font-semibold text-slate-700">
                            {project.price}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="relative px-6 pt-0 pb-6">
                      <Button className="w-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/50 shadow-sm rounded-full group">
                        <span className="relative flex items-center gap-2">
                          Voir les détails
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-24 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/95 backdrop-blur-sm" />

        {/* Top Section */}
        <div className="relative w-full bg-white/80 backdrop-blur-xl border-t border-slate-200/50 shadow-lg rounded-t-[2.5rem]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Brand Section */}
              <div className="space-y-6">
                <div className="group relative inline-flex items-center gap-2 p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 to-blue-100/50 rounded-full blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <Boxes className="relative h-10 w-10 text-violet-500" />
                  <span className="relative text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                    Nexus
                  </span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  La place de marché de référence pour découvrir et intégrer les
                  meilleurs services SaaS pour votre entreprise.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative group h-12 w-12 rounded-full bg-white/50 hover:bg-violet-50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Twitter className="h-5 w-5 text-slate-600 group-hover:text-violet-600 transition-colors duration-300" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative group h-12 w-12 rounded-full bg-white/50 hover:bg-violet-50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Github className="h-5 w-5 text-slate-600 group-hover:text-violet-600 transition-colors duration-300" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative group h-12 w-12 rounded-full bg-white/50 hover:bg-violet-50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Linkedin className="h-5 w-5 text-slate-600 group-hover:text-violet-600 transition-colors duration-300" />
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-16">
                <div className="space-y-6">
                  <h4 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                    Produit
                  </h4>
                  <ul className="space-y-4">
                    {["Fonctionnalités", "Intégrations", "Tarifs", "FAQ"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-base text-slate-600 hover:text-violet-600 transition-colors relative group"
                          >
                            <span className="relative z-10">{item}</span>
                            <span className="absolute inset-0 bg-violet-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                    Entreprise
                  </h4>
                  <ul className="space-y-4">
                    {["À propos", "Blog", "Carrières", "Contact"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-base text-slate-600 hover:text-violet-600 transition-colors relative group"
                          >
                            <span className="relative z-10">{item}</span>
                            <span className="absolute inset-0 bg-violet-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h4 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">
                  Restez informé
                </h4>
                <p className="text-base text-slate-500">
                  Recevez les dernières actualités et mises à jour directement
                  dans votre boîte mail.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-blue-400/20 rounded-full blur-xl" />
                  <div className="relative flex gap-2">
                    <Input
                      placeholder="Votre email"
                      className="rounded-full h-12 bg-white/80 border-slate-200/50 focus:ring-2 focus:ring-violet-500 placeholder-slate-400"
                    />
                    <Button className="rounded-full h-12 bg-slate-900 hover:bg-slate-800 text-white px-8 relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">S'inscrire</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full bg-white/90 backdrop-blur-xl border-t border-slate-200/50">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="relative group rounded-full bg-gradient-to-r from-violet-50 to-blue-50 text-violet-700 hover:from-violet-100 hover:to-blue-100 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 px-3 py-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Tous les services sont opérationnels
                    </span>
                  </Badge>
                </div>
                <div className="flex items-center gap-8 text-sm">
                  <a
                    href="#"
                    className="text-slate-600 hover:text-violet-600 transition-colors relative group px-3 py-1"
                  >
                    <span className="relative z-10">Conditions</span>
                    <span className="absolute inset-0 bg-violet-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-violet-600 transition-colors relative group px-3 py-1"
                  >
                    <span className="relative z-10">Confidentialité</span>
                    <span className="absolute inset-0 bg-violet-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </a>
                  <span className="text-slate-500">
                    © 2024 Nexus. Tous droits réservés.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
