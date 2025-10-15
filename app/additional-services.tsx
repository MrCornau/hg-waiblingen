import { Card, CardContent } from "@/components/ui/card"

export default function AdditionalServices() {
  const additionalServices = [
    {
      title: "Gartenpflege",
      description: "Rasenmähen, Laubentfernung",
    },
    {
      title: "Transport & Umzugshilfe",
      description: "Umzüge, Lieferungen",
    },
    {
      title: "Kleinreparaturen",
      description: "Ohne Meistertitel",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Weitere Dienstleistungen</h2>
          <p className="text-lg text-gray-600">Für alle Ihre Bedürfnisse rund ums Haus</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {additionalServices.map((service, index) => {
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* 16:9 Placeholder Image */}
                  <div className="w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <div className="text-2xl mb-2">📷</div>
                      <div className="text-xs">Bild folgt</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
