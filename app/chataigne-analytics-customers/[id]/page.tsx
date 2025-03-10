"use client";

import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../../components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Données simulées pour l'exemple
const customerDetails = {
  id: 1,
  name: "Martina Pagnamenta",
  email: "martina.p@gmail.com",
  phone: "+41797961927",
  address: "4 Route Du Camp, 1145, Bière",
  joinedDate: "15/09/2023",
  totalOrders: 15,
  totalSpent: 1250,
  averageOrderValue: 83.33,
  lastOrders: [
    {
      id: "ORD-2024-001",
      date: "30/01/2024 - 21:19:25",
      total: 93,
      status: "Acceptée",
      type: "Livraison",
    },
    {
      id: "ORD-2024-002",
      date: "25/01/2024 - 19:45:12",
      total: 76,
      status: "Terminée",
      type: "Sur place",
    },
  ],
};

export default function CustomerDetails({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-[#FAFBF6] flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="px-8 py-6">
            <div className="flex items-center gap-4">
              <Link href="/chataigne-analytics-customers">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Customer Profile Section */}
        <div className="bg-white border-b border-gray-100">
          <div className="px-8 py-8">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/5 flex items-center justify-center shrink-0">
                <span className="text-xl font-semibold text-[#25D366]">
                  {customerDetails.name.charAt(0)}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-900">
                      {customerDetails.name}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                      Client depuis le {customerDetails.joinedDate}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {customerDetails.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {customerDetails.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {customerDetails.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-8 py-6">
          <div className="grid grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Commandes</p>
                  <Badge
                    variant="outline"
                    className="bg-[#25D366]/5 text-[#25D366] border-[#25D366]/20"
                  >
                    +15% ce mois
                  </Badge>
                </div>
                <p className="text-2xl font-semibold mt-2">
                  {customerDetails.totalOrders}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Panier moyen</p>
                  <Badge
                    variant="outline"
                    className="bg-[#25D366]/5 text-[#25D366] border-[#25D366]/20"
                  >
                    +8% ce mois
                  </Badge>
                </div>
                <p className="text-2xl font-semibold mt-2">
                  {customerDetails.averageOrderValue} CHF
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Total dépensé</p>
                  <Badge
                    variant="outline"
                    className="bg-[#25D366]/5 text-[#25D366] border-[#25D366]/20"
                  >
                    Tous temps
                  </Badge>
                </div>
                <p className="text-2xl font-semibold mt-2">
                  {customerDetails.totalSpent} CHF
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Orders Table Section */}
        <div className="px-8 py-6">
          <div className="bg-white rounded-xl border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-medium">
                    Historique des commandes
                  </h2>
                  <div className="h-6 w-[1px] bg-gray-200"></div>
                  <span className="text-sm text-gray-500">
                    {customerDetails.totalOrders} commandes au total
                  </span>
                </div>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-medium">Numéro</TableHead>
                  <TableHead className="font-medium">Date</TableHead>
                  <TableHead className="font-medium">Type</TableHead>
                  <TableHead className="font-medium text-right">
                    Total
                  </TableHead>
                  <TableHead className="font-medium">Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customerDetails.lastOrders.map((order) => (
                  <TableRow
                    key={order.id}
                    className="cursor-pointer hover:bg-gray-50/50"
                    onClick={() =>
                      (window.location.href = `/orders/${order.id}`)
                    }
                  >
                    <TableCell>{order.id}</TableCell>
                    <TableCell className="text-gray-600">
                      {order.date}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {order.type}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {order.total} CHF
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20"
                      >
                        {order.status}
                      </Badge>
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
