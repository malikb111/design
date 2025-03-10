"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  ShoppingBag,
  Users,
  CreditCard,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  Filter,
  MessageSquare,
  Bike,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Composants d'analytics
import ChannelsAnalytics from "./components/ChannelsAnalytics";
import CustomersAnalytics from "./components/CustomersAnalytics";
import RevenueAnalytics from "./components/RevenueAnalytics";
import ItemsAnalytics from "./components/ItemsAnalytics";

export default function ChataigneAnalytics() {
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
                  Analytics
                </h1>
                <p className="text-gray-500">
                  Suivez les performances de votre restaurant
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" className="h-10 gap-2">
                  <Filter className="h-4 w-4" />
                  Filtres
                </Button>
                <Button variant="outline" className="h-10 gap-2">
                  <Calendar className="h-4 w-4" />
                  Last 30 days
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-10 gap-2">
                  <Download className="h-4 w-4" />
                  Exporter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <Tabs defaultValue="channels" className="w-full">
          {/* Analytics Navigation */}
          <div className="bg-white border-b border-gray-100">
            <div className="px-8">
              <TabsList className="h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="channels"
                  className="flex items-center gap-2 px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  <Bike className="h-4 w-4" />
                  Canaux de vente
                </TabsTrigger>
                <TabsTrigger
                  value="customers"
                  className="flex items-center gap-2 px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  <Users className="h-4 w-4" />
                  Clients
                </TabsTrigger>
                <TabsTrigger
                  value="revenue"
                  className="flex items-center gap-2 px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  <CreditCard className="h-4 w-4" />
                  Revenus
                </TabsTrigger>
                <TabsTrigger
                  value="items"
                  className="flex items-center gap-2 px-6 py-4 data-[state=active]:text-[#25D366] data-[state=active]:border-b-2 data-[state=active]:border-[#25D366] data-[state=active]:shadow-none rounded-none"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Produits
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="p-8">
            <TabsContent value="channels" className="m-0">
              <ChannelsAnalytics />
            </TabsContent>

            <TabsContent value="customers" className="m-0">
              <CustomersAnalytics />
            </TabsContent>

            <TabsContent value="revenue" className="m-0">
              <RevenueAnalytics />
            </TabsContent>

            <TabsContent value="items" className="m-0">
              <ItemsAnalytics />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
