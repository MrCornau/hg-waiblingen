import { MapPin } from "lucide-react"

export default function ServiceArea() {
  const locations = ["WAIBLINGEN", "WINNENDEN", "SCHORNDORF", "SCHWAIKHEIM", "WEINSTADT", "DAS GESAMTE REMSTAL"]

  return (
    <section className="py-12 bg-warm-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 border border-gray-200 rounded-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-dark-blue-gray flex items-center justify-center mx-auto mb-4 rounded-sm">
              <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-medium text-dark-blue-gray mb-4">Hier bin ich unterwegs</h2>
            <p className="text-lg text-gray-700">Mein Tätigkeitsfeld im Rems-Murr-Kreis</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {locations.map((location, index) => (
              <span
                key={index}
                className="inline-block bg-accent-green text-white px-4 py-2 text-sm font-medium hover:bg-dark-blue-gray transition-colors rounded-sm"
              >
                {location}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Auch in angrenzenden Gemeinden bin ich gerne für Sie da.
              <br className="hidden sm:block" />
              Fragen Sie einfach nach!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
