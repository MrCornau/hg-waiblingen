import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AGBPage() {
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
            <h1 className="text-4xl font-medium text-dark-blue-gray mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 1 Geltungsbereich</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen
                    Klaus Cornau, Haus & Gartenservice Waiblingen, Krautlandweg 3, 71336 Waiblingen (nachfolgend
                    "Auftragnehmer") und seinen Auftraggebern (nachfolgend "Auftraggeber").
                  </p>
                  <p>
                    1.2 Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers
                    werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich
                    zugestimmt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 2 Vertragsschluss</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    2.1 Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich
                    als verbindlich bezeichnet werden.
                  </p>
                  <p>
                    2.2 Ein Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn
                    der Arbeiten zustande.
                  </p>
                  <p>2.3 Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 3 Leistungsumfang</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    3.1 Der Umfang der zu erbringenden Leistungen ergibt sich aus der Auftragsbestätigung bzw. dem
                    schriftlichen Vertrag.
                  </p>
                  <p>3.2 Der Auftragnehmer erbringt folgende Dienstleistungen:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Bodenverlegung (Laminat, Vinyl, Fertigparkett)</li>
                    <li>Fugenarbeiten</li>
                    <li>Montage von Bauelementen</li>
                    <li>Trockenbau</li>
                    <li>Hausmeisterservice</li>
                    <li>Gartenpflege</li>
                    <li>Transport & Umzugshilfe</li>
                    <li>Kleinreparaturen</li>
                  </ul>
                  <p>3.3 Elektro- und Wasseranschlüsse sowie Fassadenarbeiten werden nicht durchgeführt.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
                <div className="text-gray-700 space-y-4">
                  <p>4.1 Es gelten die zum Zeitpunkt der Auftragserteilung gültigen Preise.</p>
                  <p>4.2 Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</p>
                  <p>
                    4.3 Die Rechnung ist innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
                  </p>
                  <p>
                    4.4 Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz
                    berechnet.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 5 Ausführung der Arbeiten</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    5.1 Der Auftragnehmer führt die Arbeiten nach den anerkannten Regeln der Technik und mit der
                    erforderlichen Sorgfalt aus.
                  </p>
                  <p>
                    5.2 Termine sind nur dann verbindlich, wenn sie ausdrücklich schriftlich als verbindlich vereinbart
                    wurden.
                  </p>
                  <p>
                    5.3 Der Auftraggeber hat dafür zu sorgen, dass die Arbeitsstelle rechtzeitig zugänglich und
                    arbeitsfähig ist.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 6 Material</h2>
                <div className="text-gray-700 space-y-4">
                  <p>6.1 Sofern nicht anders vereinbart, wird das Material vom Auftragnehmer gestellt.</p>
                  <p>
                    6.2 Vom Auftraggeber gestelltes Material wird nur nach vorheriger Prüfung verarbeitet. Für Mängel an
                    vom Auftraggeber gestelltem Material übernimmt der Auftragnehmer keine Haftung.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 7 Gewährleistung</h2>
                <div className="text-gray-700 space-y-4">
                  <p>7.1 Der Auftragnehmer leistet Gewähr für die vertragsgemäße Ausführung der Arbeiten.</p>
                  <p>7.2 Die Gewährleistungsfrist beträgt 2 Jahre ab Abnahme der Arbeiten.</p>
                  <p>7.3 Mängel sind unverzüglich schriftlich anzuzeigen.</p>
                  <p>
                    7.4 Der Auftragnehmer hat das Recht zur Nachbesserung. Erst nach erfolgloser Nachbesserung kann der
                    Auftraggeber andere Rechte geltend machen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 8 Haftung</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    8.1 Der Auftragnehmer haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.
                  </p>
                  <p>
                    8.2 Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht Schäden aus der
                    Verletzung des Lebens, des Körpers oder der Gesundheit oder aus der Verletzung wesentlicher
                    Vertragspflichten resultieren.
                  </p>
                  <p>8.3 Eine Haftung für mittelbare Schäden und Folgeschäden ist ausgeschlossen.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 9 Kündigung</h2>
                <div className="text-gray-700 space-y-4">
                  <p>9.1 Der Vertrag kann von beiden Parteien aus wichtigem Grund gekündigt werden.</p>
                  <p>
                    9.2 Bei Kündigung durch den Auftraggeber ohne wichtigen Grund sind die bis dahin erbrachten
                    Leistungen zu vergüten.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">§ 10 Schlussbestimmungen</h2>
                <div className="text-gray-700 space-y-4">
                  <p>10.1 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
                  <p>10.2 Gerichtsstand ist Waiblingen, sofern der Auftraggeber Kaufmann ist.</p>
                  <p>
                    10.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen
                    Bestimmungen unberührt.
                  </p>
                </div>
              </section>

              <section className="bg-warm-light-gray p-4 border-l-4 border-accent-green">
                <p className="text-sm text-gray-600">
                  <strong>Stand:</strong> Januar 2024
                  <br />
                  Klaus Cornau - Haus & Gartenservice Waiblingen
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
