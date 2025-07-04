import { Card, CardContent } from "@/components/ui/card"

export default function DetailedServices() {
  const services = [
    {
      title: "Bodenverlegung",
      description: "Laminat, Vinyl, Fertigparkett mit Sockelleisten",
      alt: "Professionelle Bodenverlegung in Waiblingen - Laminat, Vinyl und Fertigparkett",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Fugenarbeiten",
      description: "Silikonfugen für Bad und Küche",
      alt: "Fugenarbeiten und Silikonfugen für Bad und Küche in Waiblingen",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Montage von Bauelementen",
      description: "Türen, Fenster, Regale, Möbel",
      alt: "Montage von Türen, Fenstern, Regalen und Möbeln im Rems-Murr-Kreis",
      image:
        "https://images.unsplash.com/photo-1567711601167-cd0efb1f8a99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Trockenbau",
      description: "Leichte Trennwände",
      alt: "Trockenbau und leichte Trennwände in Waiblingen und Umgebung",
      image:
        "https://images.unsplash.com/photo-1733431772808-82d878e59000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Hausmeisterservice",
      description: "Fensterreinigung, Pflege, Kleinreparaturen",
      alt: "Hausmeisterservice in Waiblingen - Fensterreinigung und Kleinreparaturen",
      image:
        "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Gartenpflege",
      description: "Rasenmähen, Laubentfernung",
      alt: "Gartenpflege in Waiblingen - Rasenmähen und Laubentfernung",
      image:
        "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Transport & Umzugshilfe",
      description: "Umzüge, Lieferungen",
      alt: "Transport und Umzugshilfe im Rems-Murr-Kreis",
      image:
        "https://images.unsplash.com/photo-1614976523626-d598aafd4fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
    {
      title: "Kleinreparaturen",
      description: "Schnelle Hilfe im Haushalt",
      alt: "Kleinreparaturen und schnelle Hilfe im Haushalt in Waiblingen",
      image:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=562&q=80",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-dark-blue-gray mb-4">Meine Leistungen</h2>
          <p className="text-lg text-gray-700">Professionelle Handwerksleistungen im Rems-Murr-Kreis</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white rounded-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full aspect-video overflow-hidden rounded-t-sm">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-center text-dark-blue-gray">{service.title}</h3>
                    <p className="text-sm text-gray-700 text-center">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-warm-light-gray border border-gray-200 p-6 max-w-2xl mx-auto rounded-sm">
            <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Ihr Projekt ist nicht dabei?</h3>
            <p className="text-gray-700 mb-4">
              Kein Problem! Ich übernehme gerne auch andere handwerkliche Tätigkeiten. Fragen Sie einfach unverbindlich
              an – gemeinsam finden wir eine Lösung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
