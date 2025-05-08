import Navbar from "./components/navbar";
import { AppleCardsCarouselDemo } from "./components/services-carousel";
import WhyChooseUs from "./components/why-section";
import Form from "./components/form";
export default function SatiLp() {
  return (
    <main className="bg-[#f2f2f2]">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen relative">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-x-[-1]"
          >
            <source src="/237249_small.mp4" type="video/mp4" />
          </video>
          {/* Overlay pour assombrir légèrement la vidéo */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-bold text-white mb-4 cal-sans">
                SATI
              </h1>
              <h2 className="text-2xl font-medium text-white/90 mb-2 cal-sans">
                Société anonyme de transport Internationaux
              </h2>
              <h3 className="text-xl text-white/80 mb-8">
                Exerce depuis 1963, Basée à Genève
                <br />
                Votre partenaire logistique depuis plus de 50 ans
              </h3>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="text-white px-6 py-3 rounded-md text-sm font-medium bg-gradient-to-r from-[#CC1B23] via-[#CA161F] to-[#FF232F] hover:opacity-90 transition-opacity">
                  Demander un devis
                </button>
                <button className="text-white px-6 py-3 rounded-md text-sm font-medium bg-[#202A2D]">
                  Nos services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="pb-0">
        <AppleCardsCarouselDemo />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      <Form />
    </main>
  );
}
