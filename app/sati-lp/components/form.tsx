"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  return (
    <section className="bg-white py-20">
      {/* En-tête de la section et Images */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Côté gauche - Titre et Formulaire */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[0.5px] w-20 bg-gradient-to-r from-[#CC1B23] to-[#FF232F] rounded-full"></div>
                <span className="text-sm font-medium text-[#FF232F] uppercase tracking-wider">
                  Contact
                </span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-neutral-900 max-w-3xl">
                Discutons de votre projet de transport
              </h2>
            </div>

            <form className="space-y-6">
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-neutral-700 mb-1 block">
                    Nom complet
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-neutral-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700 mb-1 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@exemple.com"
                    className="w-full border-neutral-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700 mb-1 block">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+41 XX XXX XX XX"
                    className="w-full border-neutral-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700 mb-1 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Décrivez votre projet..."
                    className="w-full border-neutral-200 min-h-[150px]"
                  />
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-[#CC1B23] via-[#CA161F] to-[#FF232F] text-white hover:opacity-90 transition-opacity py-6 text-base">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Côté droit - Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-900">
                  SATI Genève
                </h3>
                <img
                  src="/maps1.png"
                  alt="SATI Genève"
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-900">
                  SATI Aéroport
                </h3>
                <img
                  src="/maps2.png"
                  alt="SATI Aéroport"
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
