"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Building,
  Clock,
  Truck,
  CreditCard,
  Save,
  User,
  Upload,
  Phone,
  Globe,
  MapPin,
  Mail,
  Package,
  CalendarDays,
  Search,
  HelpCircle,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function ChataigneSettings() {
  const [activeSection, setActiveSection] = useState("informations");

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
                  Paramètres
                </h1>
                <p className="text-gray-500">
                  Configurez les paramètres de votre établissement
                </p>
              </div>

              <Button className="bg-[#25D366] hover:bg-[#20c05c] text-white gap-2">
                <Save className="h-4 w-4" />
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar de navigation paramètres */}
            <nav className="col-span-3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="divide-y divide-gray-100">
                  {/* Section établissement */}
                  <div>
                    <div className="px-4 py-3">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Établissement
                      </h3>
                    </div>

                    <div className="px-2 pb-2">
                      <button
                        onClick={() => setActiveSection("informations")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "informations"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Building className="h-5 w-5" />
                        <div>
                          <span className="font-medium">
                            Informations générales
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveSection("adresse")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "adresse"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <MapPin className="h-5 w-5" />
                        <div>
                          <span className="font-medium">
                            Localisation & Adresse
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveSection("horaires")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "horaires"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Clock className="h-5 w-5" />
                        <div>
                          <span className="font-medium">
                            Horaires d'ouverture
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Section commandes */}
                  <div>
                    <div className="px-4 py-3">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Commandes
                      </h3>
                    </div>

                    <div className="px-2 pb-2">
                      <button
                        onClick={() => setActiveSection("livraison")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "livraison"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Truck className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Livraison</span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveSection("commande")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "commande"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Package className="h-5 w-5" />
                        <div>
                          <span className="font-medium">
                            Options de commande
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveSection("paiement")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "paiement"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <CreditCard className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Paiement</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Section compte */}
                  <div>
                    <div className="px-4 py-3">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Compte
                      </h3>
                    </div>

                    <div className="px-2 pb-2">
                      <button
                        onClick={() => setActiveSection("profil")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "profil"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <User className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Mon profil</span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveSection("notifications")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "notifications"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Mail className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Notifications</span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveSection("support")}
                        className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          activeSection === "support"
                            ? "bg-[#25D366]/10 text-[#25D366]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <HelpCircle className="h-5 w-5" />
                        <div>
                          <span className="font-medium">Aide & Support</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barre de recherche */}
              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un paramètre..."
                    className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                  />
                </div>
              </div>
            </nav>

            {/* Section principale de contenu */}
            <div className="col-span-9">
              {/* Section Informations générales */}
              {activeSection === "informations" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <Building className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          Informations générales
                        </h2>
                        <p className="text-gray-500 text-sm">
                          Personnalisez les informations de base de votre
                          établissement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Photo et nom */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-10 pb-10 border-b border-gray-100">
                      <div className="flex-shrink-0">
                        <div className="relative group">
                          <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                            <User className="h-10 w-10 text-gray-400" />
                          </div>
                          <button className="absolute inset-0 bg-black/50 rounded-xl text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Upload className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-grow space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Nom de l'établissement
                          </label>
                          <input
                            type="text"
                            id="name"
                            defaultValue="Le Châtaigne"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          />
                          <p className="mt-1 text-sm text-gray-500">
                            Ce nom sera visible sur tous les canaux de vente.
                          </p>
                        </div>

                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Description courte
                          </label>
                          <textarea
                            id="description"
                            rows={2}
                            placeholder="Décrivez votre établissement en quelques mots..."
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Informations de base */}
                    <div className="space-y-6 mb-10 pb-10 border-b border-gray-100">
                      <h3 className="text-lg font-medium text-gray-900">
                        Informations de base
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Téléphone
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              id="phone"
                              defaultValue="+41789668845"
                              className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email de contact
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              defaultValue="contact@chataigne.ch"
                              className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="currency"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Devise
                          </label>
                          <select
                            id="currency"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          >
                            <option value="chf">CHF - Franc suisse</option>
                            <option value="eur">EUR - Euro</option>
                            <option value="usd">USD - Dollar américain</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="timezone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Fuseau horaire
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <select
                              id="timezone"
                              className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                            >
                              <option value="europe-zurich">
                                Europe/Zurich (GMT+1)
                              </option>
                              <option value="europe-paris">
                                Europe/Paris (GMT+1)
                              </option>
                              <option value="europe-london">
                                Europe/London (GMT+0)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Paramètres de commande */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Paramètres de commande
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#FAFBF6] rounded-xl p-5">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                              <Clock className="h-5 w-5 text-[#25D366]" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                Temps de préparation
                              </h4>
                              <p className="text-sm text-gray-500">
                                Temps nécessaire pour préparer une commande
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center mt-2">
                            <input
                              type="number"
                              id="prep-time"
                              defaultValue="20"
                              min="5"
                              max="120"
                              className="w-20 px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent text-center"
                            />
                            <span className="ml-3 text-gray-700">minutes</span>
                          </div>
                        </div>

                        <div className="bg-[#FAFBF6] rounded-xl p-5">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                              <Package className="h-5 w-5 text-[#25D366]" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                Montant minimum
                              </h4>
                              <p className="text-sm text-gray-500">
                                Commande minimum requise
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center mt-2">
                            <div className="relative">
                              <input
                                type="number"
                                id="min-order"
                                defaultValue="20"
                                min="0"
                                className="w-24 pl-8 pr-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                              />
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700">
                                CHF
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Section Adresse */}
              {activeSection === "adresse" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-8 py-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          Localisation & Adresse
                        </h2>
                        <p className="text-gray-500 text-sm">
                          Configurez l'adresse de votre établissement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Adresse
                          </label>
                          <input
                            type="text"
                            id="address"
                            defaultValue="Chemin de Budron F3"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="address-complement"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Complément d'adresse
                          </label>
                          <input
                            type="text"
                            id="address-complement"
                            placeholder="Appartement, suite, etc."
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Ville
                          </label>
                          <input
                            type="text"
                            id="city"
                            defaultValue="Le Mont-sur-Lausanne"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Code postal
                          </label>
                          <input
                            type="text"
                            id="postal-code"
                            defaultValue="1052"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Pays
                          </label>
                          <select
                            id="country"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                          >
                            <option value="ch">Suisse</option>
                            <option value="fr">France</option>
                            <option value="be">Belgique</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Section Horaires */}
              {activeSection === "horaires" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Horaires d'ouvertures
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Configurez les heures d'ouverture de votre établissement
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Aperçu des horaires pour chaque jour */}
                    {[
                      "Lundi",
                      "Mardi",
                      "Mercredi",
                      "Jeudi",
                      "Vendredi",
                      "Samedi",
                      "Dimanche",
                    ].map((day, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="font-medium">{day}</div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent">
                              {[...Array(24)].map((_, i) => (
                                <option
                                  key={i}
                                  value={`${i < 10 ? "0" + i : i}:00`}
                                >
                                  {`${i < 10 ? "0" + i : i}:00`}
                                </option>
                              ))}
                            </select>
                            <span>-</span>
                            <select className="px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent">
                              {[...Array(24)].map((_, i) => (
                                <option
                                  key={i}
                                  value={`${i < 10 ? "0" + i : i}:00`}
                                >
                                  {`${i < 10 ? "0" + i : i}:00`}
                                </option>
                              ))}
                            </select>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#25D366]"
                          >
                            + Ajouter une plage
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section Livraison */}
              {activeSection === "livraison" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Livraison
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Configurez les zones et options de livraison
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Mode de livraison
                      </label>
                      <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent">
                        <option value="postal-code">Par code postal</option>
                        <option value="distance">Par distance</option>
                        <option value="zones">Par zones</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-base font-medium">
                          Zones de livraison
                        </h4>
                        <Button className="bg-[#25D366] hover:bg-[#20c05c] text-white">
                          + Ajouter un code postal
                        </Button>
                      </div>

                      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        {[
                          { code: 1052, min: 20, fees: 5 },
                          { code: 1053, min: 20, fees: 5 },
                          { code: 1010, min: 25, fees: 8 },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="px-4 py-3 flex items-center justify-between border-b border-gray-100 last:border-0 hover:bg-gray-50"
                          >
                            <div>
                              <span className="font-medium">
                                Code postal {item.code}
                              </span>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-4">
                                <div className="text-sm">
                                  <span className="text-gray-500">Min:</span>{" "}
                                  {item.min} CHF
                                </div>
                                <div className="text-sm">
                                  <span className="text-gray-500">Frais:</span>{" "}
                                  {item.fees} CHF
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-500 hover:text-[#25D366]"
                              >
                                Modifier
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Section Paiement */}
              {activeSection === "paiement" && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#25D366]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Paiement
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Configurez les méthodes de paiement acceptées
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Mode de paiement principal
                      </label>
                      <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent">
                        <option value="in-store">En magasin</option>
                        <option value="online">En ligne</option>
                        <option value="mixed">Mixte</option>
                      </select>
                    </div>

                    <div className="border-t border-gray-100 pt-6 mt-6">
                      <h4 className="text-base font-medium mb-4">
                        Méthodes de paiement en livraison
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="cash"
                            defaultChecked
                            className="w-4 h-4 text-[#25D366] border-gray-300 rounded focus:ring-[#25D366]"
                          />
                          <label htmlFor="cash" className="text-gray-700">
                            Espèces
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="card"
                            defaultChecked
                            className="w-4 h-4 text-[#25D366] border-gray-300 rounded focus:ring-[#25D366]"
                          />
                          <label htmlFor="card" className="text-gray-700">
                            Carte bancaire
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="twint"
                            defaultChecked
                            className="w-4 h-4 text-[#25D366] border-gray-300 rounded focus:ring-[#25D366]"
                          />
                          <label htmlFor="twint" className="text-gray-700">
                            Twint
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
