import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-1.5">
        <h1 className="text-2xl text-[#212121]">
          Configurons votre compte WhatsApp
        </h1>
      </div>

      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="mb-7">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center">
              <MessageSquare className="h-7 w-7 text-[#25D366]" />
            </div>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-[#212121] mb-2">
              Intégration WhatsApp Business
            </h3>
            <p className="text-[#757575] text-base max-w-sm">
              Connectez votre compte WhatsApp Business pour permettre à vos
              clients de passer commande directement sur WhatsApp
            </p>
          </div>
          <Button
            className="max-w-xs bg-[#25D366] hover:bg-[#25D366]/90 text-white h-11 text-base font-medium mb-3"
            onClick={onNext}
          >
            Commencer la configuration
          </Button>
        </div>
      </div>
    </div>
  );
}
