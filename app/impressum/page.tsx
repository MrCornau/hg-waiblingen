import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-dark-blue-gray flex items-center justify-center">
                <span className="text-white font-medium text-xl">HG</span>
              </div>
              <div>
                <h1 className="text-xl font-medium text-dark-blue-gray">Haus & Gartenservice Waiblingen</h1>
                <p className="text-sm text-gray-600">Rems-Murr-Kreis</p>
              </div>
            </div>
            <Link href="/">
              <Button className="bg-cool-blue hover:bg-dark-blue-gray text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 bg-warm-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white p-8 border border-gray-200">
            <h1 className="text-4xl font-medium text-dark-blue-gray mb-8">Impressum</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Klaus Cornau</strong>
                  </p>
                  <p>Krautlandweg 3</p>
                  <p>71336 Waiblingen</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Kontakt</h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Telefon:</strong> 0163 7445844
                  </p>
                  <p>
                    <strong>E-Mail:</strong> info@hg-waiblingen.de
                  </p>
                </div>
              </section>

          

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Berufsbezeichnung:</strong> Dienstleister
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Redaktionell verantwortlich</h2>
                <div className="text-gray-700">
                  <p>Klaus Cornau</p>
                  <p>Krautlandweg 3</p>
                  <p>71336 Waiblingen</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">EU-Streitschlichtung</h2>
                <div className="text-gray-700 space-y-2">
                  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                  <p>
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      className="text-accent-green hover:text-dark-blue-gray underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <div className="text-gray-700">
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Haftung für Inhalte</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                    Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                    Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Haftung für Links</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                    haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                    der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                    einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                    Links umgehend entfernen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Urheberrecht</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                    außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                    Gebrauch gestattet.
                  </p>
                  <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                    Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                    trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                    Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
