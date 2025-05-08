import Link from "next/link";
import Image from "next/image";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Navigation",
      items: [
        {
          title: "Accueil",
          href: "/",
        },
        {
          title: "À propos",
          href: "/about",
        },
        {
          title: "Services",
          href: "/services",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "Services",
      items: [
        {
          title: "Transport routier",
          href: "/transport-routier",
        },
        {
          title: "Transport maritime",
          href: "/transport-maritime",
        },
        {
          title: "Transport aérien",
          href: "/transport-aerien",
        },
        {
          title: "Logistique",
          href: "/logistique",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-24 bg-[#f2f2f2]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Section Logo et Description */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <Image
                src="/logo_sati.svg"
                alt="SATI Logo"
                width={165}
                height={62}
                className="mb-6"
              />
              <p className="text-lg text-gray-600 leading-relaxed">
                S.A. de Transports Internationaux
              </p>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Spécialisée dans le transport par route, par air (export) et par
                mer.
              </p>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="lg:col-span-3 grid gap-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Section SATI Genève */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-medium text-gray-900">SATI Genève</h3>
            <div className="text-sm text-gray-600 flex flex-col gap-2">
              <p>Rue Antoine-Jolivet 2</p>
              <p>Case postale 1772</p>
              <p>1211 Genève 26 - Suisse</p>
              <div className="mt-2">
                <p>Tél: +41 22 827 01 60</p>
                <p>Fax: +41 22 827 01 80</p>
              </div>
            </div>
          </div>

          {/* Section SATI Aéroport */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-medium text-gray-900">SATI Aéroport</h3>
            <div className="text-sm text-gray-600 flex flex-col gap-2">
              <p>Voie des Traz 20</p>
              <p>Aérogare de Fret, Entrée 4</p>
              <p>Case postale 1077</p>
              <p>1211 Genève 5 Aéroport - Suisse</p>
              <div className="mt-2">
                <p>Tél: +41 22 798 18 38</p>
                <p>Fax: +41 22 798 61 14</p>
              </div>
              <p className="mt-2 text-sm italic">
                Spécialisée dans le transport par air
              </p>
            </div>
          </div>
        </div>

        {/* Section du bas avec copyright et liens légaux */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SATI - S.A. de Transports
            Internationaux
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              href="/mentions-legales"
              className="hover:text-gray-900 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-gray-900 transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cookies"
              className="hover:text-gray-900 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
