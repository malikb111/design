import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface IntegrationCardProps {
  integration: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    isConnected: boolean;
    modale?: React.ReactNode;
  };
}

export function IntegrationCard({ integration }: IntegrationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-100 flex flex-col h-[220px]">
        {/* En-tête avec badge */}
        <div className="px-6 pt-6 pb-3 flex justify-between items-start">
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
            {integration.icon}
          </div>
          <span
            className={cn(
              "shrink-0 px-2.5 py-0.5 h-5 text-xs rounded-full",
              integration.isConnected
                ? "bg-[#25D366]/10 text-[#25D366]"
                : "bg-gray-100 text-gray-600"
            )}
          >
            {integration.isConnected ? "Connecté" : "Non connecté"}
          </span>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 px-6 pb-3">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-900">{integration.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
              {integration.description}
            </p>
          </div>
        </div>

        {/* Bouton */}
        <div className="px-4 pt-3 pb-4 border-t border-gray-100">
          <button
            onClick={() => integration.modale && setIsOpen(true)}
            className={cn(
              "w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              integration.isConnected
                ? "bg-gray-50 text-gray-700 hover:bg-gray-100"
                : "bg-[#25D366] text-white hover:bg-[#25D366]/90"
            )}
          >
            {integration.isConnected ? "Gérer" : "Connecter"}
          </button>
        </div>
      </div>

      {/* Modale */}
      {integration.modale && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Configuration {integration.name}</DialogTitle>
            </DialogHeader>
            {integration.modale}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
