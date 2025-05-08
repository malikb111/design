"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[0.5px] w-20 bg-gradient-to-r from-[#CC1B23] to-[#FF232F] rounded-full"></div>
          <span className="text-sm font-medium text-[#FF232F] uppercase tracking-wider">
            Nos Services
          </span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-neutral-900 font-sans max-w-3xl">
          Les services que nous proposons
        </h2>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Transport Routier",
    title: "Nous transportons vos marchandises partout en Europe",
    src: "/1.png",
    content: <DummyContent />,
    description:
      "Groupage, Lots complets et partiels, Formalités import, Formalités export",
  },
  {
    category: "Transport Aérien",
    title: "Nous transportons vos marchandises partout dans le monde",
    src: "/3.png",
    content: <DummyContent />,
    description:
      "Groupage ou envois individuels, Envois triangulaires (crosstrade), Envois spéciaux (fret périssable, autres,...), Formalités import, Formalités export",
  },
  {
    category: "Transport Maritime",
    title: "Embarquez vos marchandises partout.",
    src: "/2.png",
    content: <DummyContent />,
    description:
      "Conteneurs complets (FCL), Envois groupage (LCL), Transports de voitures, Formalités import, Formalités export",
  },
  {
    category: "Services douaniers",
    title: "Nous vous accompagnons dans vos formalités douanières",
    src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
    content: <DummyContent />,
    description:
      "Expertise complète en dédouanement et conformité réglementaire pour faciliter vos échanges internationaux.",
  },
  {
    category: "Services spéciaux",
    title: "Nous vous accompagnons dans différentes situations.",
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    content: <DummyContent />,
    description:
      "Courses spéciales de transports routiers, Gestion des marchandises réglementées, Emballage, Assurance de transport, Interventions spéciales au service voyageurs de l'aéroport (mise en hold), Produits dangereux",
  },
  {
    category: "Entreposage",
    title: "Nous stockons vos marchandises.",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    content: <DummyContent />,
    description: "Entreposage sous-douane, Entreposage libre",
  },
];
