import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { InfoIcon } from "lucide-react";

interface Step4Props {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step4({ onNext, onPrevious }: Step4Props) {
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalInfo(e.target.value);
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#212121] mb-3">
          Informations supplémentaires
        </h1>
        <p className="text-[#757575] text-base">
          Ajoutez des détails qui aideront votre chatbot WhatsApp
        </p>
      </div>

      <div className="space-y-6 mt-10">
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#212121] block">
            Informations pour le chatbot
          </label>

          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex gap-3 mb-4">
            <InfoIcon className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700">
              Ces informations seront utilisées pour donner des informations
              supplémentaires au chatbot WhatsApp. Vous pouvez y donner des
              informations sur votre restaurant, comme les spécialités par
              exemple.
            </p>
          </div>

          <Textarea
            value={additionalInfo}
            onChange={handleChange}
            placeholder="Exemple: Notre restaurant est spécialisé dans les pizzas napolitaines cuites au feu de bois. Notre chef recommande particulièrement la Margherita et la Quattro Formaggi."
            className="min-h-[180px] border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10 resize-none"
          />
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button
            variant="outline"
            className="border-gray-200 text-[#757575]"
            onClick={onPrevious}
          >
            Retour
          </Button>
          <Button
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            onClick={onNext}
          >
            Terminer
          </Button>
        </div>
      </div>
    </div>
  );
}
