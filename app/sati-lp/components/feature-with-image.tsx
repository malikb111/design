import { Badge } from "../../../components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="h-[0.5px] w-16 sm:w-20 bg-gradient-to-r from-[#CC1B23] to-[#FF232F] rounded-full"></div>
          <span className="text-xs sm:text-sm font-medium text-[#FF232F] uppercase tracking-wider">
            Notre Histoire
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-8 sm:mb-12 font-sans max-w-3xl">
          Pourquoi choisir SATI ?
        </h2>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-10 lg:items-center">
            <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop"
                alt="Transport international"
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
            </div>
            <div className="flex gap-4 pl-0 lg:pl-12 xl:pl-20 flex-col flex-1">
              <div>
                <Badge className="bg-[#CC1B23] text-white text-xs sm:text-sm">
                  Depuis 1963
                </Badge>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tighter lg:max-w-xl font-regular text-left text-neutral-900">
                  Plus de 50 ans d'expertise en transport international
                </h3>
                <p className="text-base sm:text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-neutral-700 text-justify">
                  Avec plus de 50 ans d'expérience dans le transport
                  international, SATI s'est imposé comme un partenaire
                  logistique de confiance. Notre expertise, notre réseau mondial
                  et notre engagement envers l'excellence font de nous le choix
                  idéal pour vos besoins en transport et logistique.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row-reverse gap-6 sm:gap-8 lg:gap-10 lg:items-center">
            <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2340&auto=format&fit=crop"
                alt="Associations professionnelles"
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
            </div>
            <div className="flex gap-4 pr-0 lg:pr-12 xl:pr-20 flex-col flex-1">
              <div>
                <Badge className="bg-[#CC1B23] text-white text-xs sm:text-sm">
                  Accréditations
                </Badge>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tighter lg:max-w-xl font-regular text-left text-neutral-900">
                  Membre d'associations prestigieuses
                </h3>
                <p className="text-base sm:text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-neutral-700 text-justify">
                  Notre expertise est reconnue par les plus grandes associations
                  du secteur :
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-2 pl-4 text-base sm:text-lg text-justify">
                  <li>
                    Association suisse des maisons d'expédition (SPEDLOGSWISS)
                  </li>
                  <li>Association des transitaires de Genève (ATG)</li>
                  <li>Association internationale du transport aérien (IATA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
