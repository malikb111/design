import Image from "next/image";
import { ChevronLeft, User } from "lucide-react";

interface WhatsAppPreviewProps {
  profileImage?: string;
  businessName?: string;
  phoneNumber?: string;
  about?: string;
  address?: string;
  website?: string;
}

export default function WhatsAppPreview({
  profileImage = "",
  businessName = "Nom de l'entreprise",
  phoneNumber = "+33 6 12 34 56 78",
  about = "À propos de votre entreprise",
  address = "Votre adresse",
  website = "votre-site.com",
}: WhatsAppPreviewProps) {
  // Fonction pour tronquer le texte s'il est trop long
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="w-full max-w-[320px] border border-gray-700 rounded-xl overflow-hidden bg-[#111B21] shadow-sm">
      {/* Header avec le statut et les icônes */}
      <div className="bg-[#202C33] text-white py-2 px-4">
        <div className="flex items-center">
          <ChevronLeft className="h-6 w-6" />
          <div className="ml-6">Business info</div>
        </div>
      </div>

      {/* Section photo de profil et nom */}
      <div className="bg-[#111B21] flex flex-col items-center py-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 bg-[#2A3942]">
          {profileImage ? (
            <Image
              src={profileImage}
              alt={businessName || "Profil WhatsApp"}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#233138] to-[#18252D]">
              <User className="h-12 w-12 text-[#8696A0]" strokeWidth={1.5} />
            </div>
          )}
        </div>
        <h3 className="text-lg font-medium text-white px-4 text-center">
          {truncateText(businessName, 30)}
        </h3>
        <p className="text-sm text-[#8696A0] mt-1">{phoneNumber}</p>
      </div>

      {/* Informations du profil */}
      <div className="bg-[#111B21] mt-2">
        {/* À propos */}
        <div className="py-3 px-4 border-b border-[#202C33]">
          <p className="text-xs text-[#8696A0] mb-1">À propos</p>
          <p className="text-sm text-white break-words">
            {truncateText(about, 100)}
          </p>
        </div>

        {/* Adresse */}
        <div className="py-3 px-4 border-b border-[#202C33]">
          <p className="text-xs text-[#8696A0] mb-1">Adresse</p>
          <p className="text-sm text-white break-words">
            {truncateText(address, 60)}
          </p>
        </div>

        {/* Site web */}
        <div className="py-3 px-4">
          <p className="text-xs text-[#8696A0] mb-1">Site web</p>
          <p className="text-sm text-[#00A884] underline break-words">
            {truncateText(website, 40)}
          </p>
        </div>
      </div>
    </div>
  );
}
