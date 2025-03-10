"use client";

import {
  ChevronDown,
  Download,
  Search,
  User,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Données simulées pour l'exemple
const customers = [
  {
    id: 1,
    name: "Martina Pagnamenta",
    phone: "+41797961927",
    address: "4 Route Du Camp, 1145, Bière",
    totalSpent: 1250.5,
    lastOrder: "Il y a 2 heures",
    status: "active",
  },
  {
    id: 2,
    name: "Jean Dupont",
    phone: "+41791234567",
    address: "10 Rue de la Gare, 1003, Lausanne",
    totalSpent: 720.8,
    lastOrder: "Hier",
    status: "inactive",
  },
  // ... autres clients
];

export default function ChataigneAnalyticsCustomers() {
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
                  Clients
                </h1>
                <p className="text-gray-500">Gérez votre base de clients</p>
              </div>

              {/* Active Users Count */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/5 rounded-lg border border-[#25D366]/10">
                <User className="h-4 w-4 text-[#25D366]" />
                <div>
                  <span className="text-sm font-medium text-gray-900">342</span>
                  <span className="text-xs text-gray-500 ml-1">
                    clients actifs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-8">
          <div className="bg-white rounded-xl border border-gray-100">
            {/* Search and Actions */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher un client..."
                    className="pl-10 bg-gray-50/50"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 gap-2 text-gray-500"
                >
                  30 derniers jours
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-medium">Client</TableHead>
                  <TableHead className="font-medium">Contact</TableHead>
                  <TableHead className="font-medium">
                    Dernière commande
                  </TableHead>
                  <TableHead className="font-medium text-right">
                    Total dépensé
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    className="cursor-pointer hover:bg-gray-50/50"
                    onClick={() =>
                      (window.location.href = `/chataigne-analytics-customers/${customer.id}`)
                    }
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#25D366]/5 flex items-center justify-center">
                          <User className="h-5 w-5 text-[#25D366]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {customer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {customer.address}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{customer.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {customer.lastOrder}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="font-medium text-[#25D366]">
                          {customer.totalSpent.toFixed(2)} CHF
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}
