import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload } from "lucide-react";
import WhatsAppPreview from "./WhatsAppPreview";

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step2({ onNext, onPrevious }: Step2Props) {
  const [profileData, setProfileData] = useState({
    profileImage: "",
    businessName: "Nom de l'entreprise",
    phoneNumber: "+33 6 12 34 56 78",
    about: "À propos de votre entreprise",
    description: "Description détaillée de vos produits et services",
    address: "Votre adresse",
    website: "votre-site.com",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setProfileData((prev) => ({
          ...prev,
          profileImage: result,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1.5 mb-6">
        <h1 className="text-2xl text-[#212121]">
          Configuration du profil WhatsApp
        </h1>
        <p className="text-[#757575] text-base">
          Personnalisez votre profil WhatsApp Business pour vos clients
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        {/* WhatsApp Preview - Côté gauche */}
        <div className="flex-1 flex justify-center md:justify-end">
          <WhatsAppPreview {...profileData} />
        </div>

        {/* Formulaire - Côté droit */}
        <div className="flex-1 space-y-6">
          {/* Photo de profil */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#212121]">
              Photo de profil
            </label>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#25D366]/10 flex items-center justify-center">
                {profileData.profileImage ? (
                  <img
                    src={profileData.profileImage}
                    alt="Profil"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Camera className="h-6 w-6 text-[#25D366]" />
                )}
              </div>
              <div>
                <label
                  htmlFor="profile-upload"
                  className="flex items-center gap-2 text-[#25D366] cursor-pointer text-sm hover:text-[#25D366]/90"
                >
                  <Upload className="h-4 w-4" />
                  Choisir une image
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          {/* Nom de l'entreprise */}
          <div className="space-y-2">
            <label
              htmlFor="businessName"
              className="text-sm font-medium text-[#212121]"
            >
              Nom de l'entreprise
            </label>
            <Input
              id="businessName"
              name="businessName"
              value={profileData.businessName}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10"
              placeholder="Nom de votre entreprise"
            />
          </div>

          {/* Numéro de téléphone */}
          <div className="space-y-2">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-[#212121]"
            >
              Numéro de téléphone
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10"
              placeholder="+33 6 XX XX XX XX"
            />
          </div>

          {/* À propos */}
          <div className="space-y-2">
            <label
              htmlFor="about"
              className="text-sm font-medium text-[#212121]"
            >
              À propos
            </label>
            <Textarea
              id="about"
              name="about"
              value={profileData.about}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10 resize-none min-h-[80px]"
              placeholder="Description courte de votre entreprise"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-[#212121]"
            >
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={profileData.description}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10 resize-none min-h-[80px]"
              placeholder="Description détaillée de vos produits et services"
            />
          </div>

          {/* Adresse */}
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="text-sm font-medium text-[#212121]"
            >
              Adresse
            </label>
            <Input
              id="address"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10"
              placeholder="Adresse de votre entreprise"
            />
          </div>

          {/* Site web */}
          <div className="space-y-2">
            <label
              htmlFor="website"
              className="text-sm font-medium text-[#212121]"
            >
              Site web
            </label>
            <Input
              id="website"
              name="website"
              value={profileData.website}
              onChange={handleChange}
              className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]/10"
              placeholder="votre-site.com"
            />
          </div>

          {/* Boutons d'action */}
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
              Continuer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
