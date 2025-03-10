"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle,
  Truck,
  CreditCard,
  MapPin,
  Phone,
  User,
  Package,
  ChevronRight,
  Clipboard,
  ShoppingBag,
} from "lucide-react";
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

type Platform = "whatsapp" | "deliveroo" | "ubereats";
type DeliveryType = "delivery" | "clickandcollect" | "restaurant";

// Données simulées pour l'exemple
const orderDetails = {
  id: "ORD-2024-001",
  platform: "whatsapp" as Platform,
  status: "Acceptée",
  createdAt: "30/01/2024 - 21:19:25",
  customer: {
    name: "Martina Pagnamenta",
    phone: "+41797961927",
    address: {
      street: "4 Route Du Camp",
      city: "Bière",
      postalCode: "1145",
    },
  },
  items: [
    {
      name: "Croissant",
      quantity: 2,
      price: 3.5,
    },
    {
      name: "Pain au chocolat",
      quantity: 3,
      price: 4.0,
    },
    {
      name: "Baguette tradition",
      quantity: 1,
      price: 4.5,
    },
  ],
  delivery: "5.00",
  deliveryType: "delivery" as DeliveryType,
  total: 28.5,
  paymentMethod: "Carte bancaire",
  estimatedDeliveryTime: "30-45 minutes",
};

// Calculer le sous-total
const subtotal = orderDetails.items.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

// Fonction pour obtenir la couleur du badge en fonction du statut
const getStatusColor = (status: string) => {
  switch (status) {
    case "Acceptée":
      return "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20";
    case "En préparation":
      return "bg-[#FF9800]/10 text-[#FF9800] border-[#FF9800]/20";
    case "En livraison":
      return "bg-[#2196F3]/10 text-[#2196F3] border-[#2196F3]/20";
    case "Livrée":
      return "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20";
    case "Annulée":
      return "bg-[#F44336]/10 text-[#F44336] border-[#F44336]/20";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

// Fonction pour obtenir l'icône de la plateforme
const getPlatformIcon = (platform: Platform) => {
  switch (platform) {
    case "whatsapp":
      return (
        <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xs">
          W
        </div>
      );
    case "deliveroo":
      return (
        <div className="w-5 h-5 rounded-full bg-[#00CCBC] flex items-center justify-center text-white font-bold text-xs">
          D
        </div>
      );
    case "ubereats":
      return (
        <div className="w-5 h-5 rounded-full bg-[#142328] flex items-center justify-center text-white font-bold text-xs">
          U
        </div>
      );
    default:
      return null;
  }
};

// Fonction pour obtenir le libellé du type de livraison
const getDeliveryTypeLabel = (type: DeliveryType) => {
  switch (type) {
    case "delivery":
      return "Livraison";
    case "clickandcollect":
      return "Click & Collect";
    case "restaurant":
      return "Sur place";
    default:
      return type;
  }
};

export default function OrderDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#FAFBF6] flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/chataigne-analytics-customers">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Retour
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                    Commande #{orderDetails.id}
                    <Badge
                      variant="outline"
                      className={getStatusColor(orderDetails.status)}
                    >
                      {orderDetails.status}
                    </Badge>
                  </h1>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{orderDetails.createdAt.split(" - ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{orderDetails.createdAt.split(" - ")[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content with order information */}
        <div className="p-8 grid grid-cols-3 gap-6">
          {/* Center Column - Order Items */}
          <div className="col-span-2">
            <Card className="overflow-hidden">
              <div className="bg-[#FAFBF6] border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <h2 className="font-medium text-gray-900">
                  Articles commandés
                </h2>
                <Badge
                  variant="outline"
                  className="bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20"
                >
                  {orderDetails.items.length}{" "}
                  {orderDetails.items.length > 1 ? "articles" : "article"}
                </Badge>
              </div>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-gray-50">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="font-medium">Produit</TableHead>
                      <TableHead className="font-medium text-center">
                        Quantité
                      </TableHead>
                      <TableHead className="font-medium text-right">
                        Prix unitaire
                      </TableHead>
                      <TableHead className="font-medium text-right">
                        Total
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderDetails.items.map((item, index) => (
                      <TableRow
                        key={index}
                        className="hover:bg-gray-50/50 border-b border-gray-100"
                      >
                        <TableCell className="font-medium py-4">
                          {item.name}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          <Badge
                            variant="outline"
                            className="bg-gray-100/70 border-gray-200"
                          >
                            {item.quantity}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right py-4">
                          {item.price.toFixed(2)} CHF
                        </TableCell>
                        <TableCell className="text-right font-medium py-4">
                          {(item.price * item.quantity).toFixed(2)} CHF
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <div className="mt-6 bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)} CHF</span>
                </div>
                {orderDetails.deliveryType === "delivery" && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Frais de livraison</span>
                    <span className="font-medium">
                      {orderDetails.delivery} CHF
                    </span>
                  </div>
                )}
                <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-[#25D366]">
                      {orderDetails.total.toFixed(2)} CHF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Details & Delivery */}
          <div className="col-span-1 space-y-6">
            {/* Order Summary Card */}
            <Card className="overflow-hidden">
              <div className="bg-[#FAFBF6] border-b border-gray-100 px-6 py-4">
                <h2 className="font-medium text-gray-900">Récapitulatif</h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Type de commande</span>
                  </div>
                  <Badge variant="outline">
                    {getDeliveryTypeLabel(orderDetails.deliveryType)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Méthode de paiement</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    {orderDetails.paymentMethod}
                  </span>
                </div>
                {orderDetails.deliveryType === "delivery" && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">Délai estimé</span>
                    </div>
                    <span className="text-gray-900 font-medium">
                      {orderDetails.estimatedDeliveryTime}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Customer Information Card */}
            <Card className="overflow-hidden">
              <div className="bg-[#FAFBF6] border-b border-gray-100 px-6 py-4">
                <h2 className="font-medium text-gray-900">
                  Informations client
                </h2>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {orderDetails.customer.name}
                    </p>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
                <div className="pt-2 space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="font-medium text-gray-900">
                        {orderDetails.customer.phone}
                      </p>
                    </div>
                  </div>
                  {orderDetails.deliveryType === "delivery" && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Adresse de livraison
                        </p>
                        <p className="font-medium text-gray-900">
                          {orderDetails.customer.address?.street},{" "}
                          {orderDetails.customer.address?.postalCode}{" "}
                          {orderDetails.customer.address?.city}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
