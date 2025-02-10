import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Bell,
  Filter,
  Settings,
  User,
  ChevronDown,
  Sparkles,
  Target,
  Users,
  Building2,
  Globe2,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Tags,
  MessageSquare,
  BadgePercent,
  LineChart,
  ArrowRight,
  Sliders,
  Wand2,
} from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
        <nav className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm border border-slate-200/60 p-2.5">
          <div className="flex items-center justify-between">
            {/* Logo & Main Nav */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2.5 group cursor-pointer px-2">
                <div className="relative">
                  <Sparkles className="h-7 w-7 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  LeadPulse
                </span>
              </div>

              <div className="flex bg-slate-50/80 rounded-xl p-1.5">
                <Button
                  variant="ghost"
                  className="text-slate-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-white hover:shadow-sm"
                >
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-600 rounded-lg px-4 py-2 text-sm font-medium bg-white shadow-sm"
                >
                  Recherche
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-white hover:shadow-sm"
                >
                  Campagnes
                </Button>
                <Button
                  variant="ghost"
                  className="text-slate-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-white hover:shadow-sm"
                >
                  Analytics
                </Button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-50/80 rounded-xl p-1.5 flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-9 w-9 rounded-lg hover:bg-white hover:shadow-sm"
                >
                  <Bell className="h-4.5 w-4.5 text-slate-600" />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-orange-500 rounded-full ring-2 ring-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg hover:bg-white hover:shadow-sm"
                >
                  <Settings className="h-4.5 w-4.5 text-slate-600" />
                </Button>
              </div>

              <div className="pl-1 flex items-center">
                <Button
                  variant="ghost"
                  className="h-[38px] rounded-xl hover:bg-slate-50 pl-2 pr-3 flex items-center gap-2"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=orange&color=fff"
                    className="h-7 w-7 rounded-lg ring-2 ring-white"
                  />
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-28 px-8 pb-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Quick Filters */}
            <div className="col-span-3">
              <div className="sticky top-28 space-y-6">
                {/* Quick Filters Card */}
                <Card className="p-6 border-slate-200 bg-white rounded-2xl overflow-hidden group hover:border-orange-200/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 rounded-lg">
                          <Filter className="h-5 w-5 text-orange-500" />
                        </div>
                        <h2 className="font-semibold text-slate-800">
                          Filtres rapides
                        </h2>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-500 hover:text-orange-600 font-medium"
                      >
                        Réinitialiser
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
                          <Building2 className="h-4 w-4 text-orange-500" />
                          Secteur d'activité
                        </label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
                          >
                            <Building2 className="h-3.5 w-3.5 mr-1.5" />
                            Tech
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-slate-200 text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            Finance
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-slate-200 text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            Santé
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full text-orange-500 hover:bg-orange-50 hover:text-orange-600"
                          >
                            + Plus
                          </Button>
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
                          <Users className="h-4 w-4 text-orange-500" />
                          Taille d'entreprise
                        </label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
                          >
                            1-50
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-slate-200 text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            51-200
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-slate-200 text-slate-600 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            201-1000
                          </Button>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <Button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 justify-start font-medium">
                          <Sliders className="h-4 w-4 mr-2" />
                          Plus de filtres
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Results Stats Card */}
                <Card className="relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 transition-transform group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
                  <div className="relative p-6 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Target className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-orange-100">
                          Prospects trouvés
                        </p>
                        <p className="text-3xl font-bold">2,451</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-orange-100">Correspondance</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-white rounded-full" />
                      </div>
                    </div>
                    <Button className="w-full bg-white hover:bg-orange-50 text-orange-600 mt-6 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/30 transition-all">
                      Voir les résultats
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-9 space-y-6">
              {/* Search Header & Box */}
              <div className="mb-8">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 p-4 hover:border-orange-200/60 transition-all">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        {/* Main Search Input */}
                        <div className="relative flex-1">
                          <div className="absolute left-4 top-3.5 flex items-center gap-2 text-slate-400">
                            <Search className="h-5 w-5" />
                            <span className="text-sm font-medium">
                              Rechercher
                            </span>
                          </div>
                          <Input
                            placeholder="ex: Startups Tech en France..."
                            className="pl-32 h-12 text-base rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:border-orange-500"
                          />
                        </div>

                        {/* Magic Search Button */}
                        <Button
                          size="lg"
                          className="h-12 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <div className="relative flex items-center">
                            <Wand2 className="h-5 w-5 mr-2" />
                            <div className="absolute inset-0 blur-sm bg-white/20 group-hover:blur-md transition-all" />
                          </div>
                          Recherche magique
                        </Button>
                      </div>

                      {/* Quick Suggestions */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-3 rounded-lg text-xs text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                        >
                          Startups SaaS
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-3 rounded-lg text-xs text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                        >
                          E-commerce Paris
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-3 rounded-lg text-xs text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                        >
                          Fintech +100
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50/80 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-slate-500">
                    <strong className="text-slate-700">2.4M</strong> entreprises
                    indexées
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50/80 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-slate-500">
                    <strong className="text-slate-700">98%</strong> de précision
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50/80 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-slate-500">
                    Mise à jour en{" "}
                    <strong className="text-slate-700">temps réel</strong>
                  </span>
                </div>
              </div>

              {/* Filter Cards */}
              <div className="grid grid-cols-3 gap-6">
                <Card className="group relative overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 border-2 border-orange-100 rounded-[inherit] group-hover:border-orange-200 transition-colors">
                    <div className="p-3 bg-orange-50 rounded-xl w-fit group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                      Par persona
                    </h3>
                    <p className="text-slate-500 mb-4">
                      Ciblez les décideurs, managers et autres rôles clés
                    </p>
                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Configurer
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </div>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-lg transition-all cursor-pointer border-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 border-2 border-slate-100 rounded-2xl group-hover:border-orange-200 transition-colors h-full">
                    <div className="p-3 bg-slate-100 rounded-xl w-fit group-hover:bg-orange-50 group-hover:scale-110 transition-all">
                      <MapPin className="h-6 w-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                      Par localisation
                    </h3>
                    <p className="text-slate-500 mb-4">
                      Filtrez par pays, région ou ville
                    </p>
                    <Button
                      variant="ghost"
                      className="text-slate-500 hover:text-orange-600 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Configurer
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </div>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-lg transition-all cursor-pointer border-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 border-2 border-slate-100 rounded-2xl group-hover:border-orange-200 transition-colors h-full">
                    <div className="p-3 bg-slate-100 rounded-xl w-fit group-hover:bg-orange-50 group-hover:scale-110 transition-all">
                      <Tags className="h-6 w-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                      Par technologie
                    </h3>
                    <p className="text-slate-500 mb-4">
                      Recherchez par stack technique
                    </p>
                    <Button
                      variant="ghost"
                      className="text-slate-500 hover:text-orange-600 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Configurer
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Advanced Criteria Card */}
              <Card className="relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-orange-50 rounded-lg">
                        <Sliders className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-slate-800">
                          Critères avancés
                        </h2>
                        <p className="text-sm text-slate-500">
                          Affinez votre recherche
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-200 text-orange-500 hover:bg-orange-50 font-medium"
                    >
                      <Filter className="h-3.5 w-3.5 mr-1.5" />
                      Tous les filtres
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60">
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          {/* Top Section */}
          <div className="grid grid-cols-5 gap-16 mb-16">
            {/* Brand Section */}
            <div className="col-span-2 pr-8">
              <div className="flex items-center gap-2.5 mb-6">
                <Sparkles className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  LeadPulse
                </span>
              </div>
              <p className="text-slate-500 mb-8">
                Propulsez votre prospection B2B avec notre plateforme alimentée
                par l'IA. Trouvez vos clients idéaux en quelques clics.
              </p>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 text-slate-600 hover:text-orange-600 hover:bg-orange-50"
                >
                  Twitter
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 text-slate-600 hover:text-orange-600 hover:bg-orange-50"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 text-slate-600 hover:text-orange-600 hover:bg-orange-50"
                >
                  GitHub
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Produit</h4>
              <ul className="space-y-3">
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Fonctionnalités
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Tarifs
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Cas d'usage
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Guide
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Ressources</h4>
              <ul className="space-y-3">
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Blog
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Communauté
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Documentation
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    API
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Entreprise</h4>
              <ul className="space-y-3">
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    À propos
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Carrières
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Contact
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-500 hover:text-orange-500"
                  >
                    Partenaires
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-200/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-sm text-slate-500">
                  © 2024 LeadPulse. Tous droits réservés.
                </span>
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-slate-500 hover:text-orange-500"
                >
                  Confidentialité
                </Button>
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-slate-500 hover:text-orange-500"
                >
                  CGU
                </Button>
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-slate-500 hover:text-orange-500"
                >
                  Cookies
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 text-slate-500 hover:text-orange-500 hover:bg-orange-50"
                >
                  <Globe2 className="h-4 w-4 mr-1.5" />
                  Français
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
