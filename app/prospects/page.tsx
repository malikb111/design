import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Search,
  Bell,
  Filter,
  Settings,
  User,
  ChevronDown,
  Sparkles,
  Building2,
  Globe2,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  ArrowUpDown,
  MoreHorizontal,
  Download,
  Share2,
  Trash2,
} from "lucide-react";

export default function ProspectsPage() {
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
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">
                Prospects
              </h1>
              <p className="text-slate-500">
                2,451 prospects trouvés correspondant à vos critères
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
              <Button
                variant="outline"
                className="border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            </div>
          </div>

          {/* Table */}
          <Card className="border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="py-3 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-slate-300"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-slate-600 font-medium hover:bg-slate-100"
                        >
                          Entreprise
                          <ArrowUpDown className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-slate-600 font-medium hover:bg-slate-100"
                      >
                        Contact
                        <ArrowUpDown className="h-4 w-4 ml-2" />
                      </Button>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-slate-600 font-medium hover:bg-slate-100"
                      >
                        Localisation
                        <ArrowUpDown className="h-4 w-4 ml-2" />
                      </Button>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-slate-600 font-medium hover:bg-slate-100"
                      >
                        Secteur
                        <ArrowUpDown className="h-4 w-4 ml-2" />
                      </Button>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-slate-600 font-medium hover:bg-slate-100"
                      >
                        Taille
                        <ArrowUpDown className="h-4 w-4 ml-2" />
                      </Button>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-slate-600 font-medium hover:bg-slate-100"
                      >
                        CA
                        <ArrowUpDown className="h-4 w-4 ml-2" />
                      </Button>
                    </th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-200 hover:bg-slate-50/80"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="rounded border-slate-300"
                          />
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                              <Building2 className="h-5 w-5 text-slate-400" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-800">
                                TechCorp Solutions
                              </p>
                              <p className="text-sm text-slate-500">
                                techcorp.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-slate-800">
                            John Smith
                          </p>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Mail className="h-3.5 w-3.5" />
                              john@techcorp.com
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-3.5 w-3.5" />
                              +33 6 12 34 56 78
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          Paris, France
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-md text-sm">
                            Tech
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <User className="h-4 w-4 text-slate-400" />
                          50-200
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <DollarSign className="h-4 w-4 text-slate-400" />
                          5-10M€
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-slate-600"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
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
