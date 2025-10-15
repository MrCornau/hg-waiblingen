import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DetailedServices() {
  const services = [
    {
      title: "Bodenverlegung",
      description: "Laminat, Vinyl, Fertigparkett mit Sockelleisten",
      alt: "Professionelle Bodenverlegung in Waiblingen - Laminat, Vinyl und Fertigparkett",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
      href: "/dienstleistungen/bodenverlegung",
    },
    {
      title: "Fugenarbeiten",
      description: "Silikonfugen für Bad und Küche",
      alt: "Fugenarbeiten und Silikonfugen für Bad und Küche in Waiblingen",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
      href: "/dienstleistungen/fugenarbeiten",
    },
    {
      title: "Montage von Bauelementen",
      description: "Türen, Fenster, Regale, Möbel",
      alt: "Montage von Türen, Fenstern, Regalen und Möbeln im Rems-Murr-Kreis",
      image:
        "https://images.unsplash.com/photo-1567711601167-cd0efb1f8a99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
      href: "/dienstleistungen/montage-bauelemente",
    },
    {
      title: "Hausmeisterservice",
      description: "Fensterreinigung, Pflege, Kleinreparaturen",
      alt: "Hausmeisterservice in Waiblingen - Fensterreinigung und Kleinreparaturen",
      image:
        "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
      href: "/dienstleistungen/hausmeisterservice",
    },
    {
      title: "Gartenpflege",
      description: "Rasenmähen, Laubentfernung",
      alt: "Gartenpflege in Waiblingen - Rasenmähen und Laubentfernung",
      image:
        "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
      href: "/dienstleistungen/gartenpflege",
    },
    {
      title: "Transport & Umzugshilfe",
      description: "Umzüge, Lieferungen",
      alt: "Transport und Umzugshilfe im Rems-Murr-Kreis",
      image:
        "https://images.unsplash.com/photo-1614976523626-d598aafd4fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
      href: "/dienstleistungen/transport-umzug",
    },
  ]

  return (
    <section className="py-16 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-medium text-dark-blue-gray mb-4">
            Meine Leistungen
          </h2>
          <p className="text-lg text-gray-700">Professionelle Dienstleistungen für Haus und Garten im Rems-Murr-Kreis</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => {
            return (
              <Link
                key={index}
                href={service.href}
                className="group focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm"
                aria-label={`Mehr erfahren über ${service.title}`}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-white rounded-sm overflow-hidden cursor-pointer group-hover:scale-105 group-focus:scale-105 border-2 border-transparent group-hover:border-accent-green group-focus:border-accent-green h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full leading-none">
                    <div className="w-full aspect-video overflow-hidden relative m-0">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-dark-blue-gray/0 group-hover:bg-dark-blue-gray/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-dark-blue-gray" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-medium mb-2 text-center text-dark-blue-gray group-hover:text-accent-green transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-700 text-center">{service.description}</p>
                      <div className="mt-4 flex items-center justify-center text-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Mehr erfahren</span>
                        <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-warm-light-gray border border-gray-200 p-6 max-w-2xl mx-auto rounded-sm">
            <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Ihr Projekt ist nicht dabei?</h3>
            <p className="text-gray-700 mb-4">
              Kein Problem! Ich übernehme gerne auch andere Tätigkeiten. Fragen Sie einfach unverbindlich an – gemeinsam
              finden wir eine Lösung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
