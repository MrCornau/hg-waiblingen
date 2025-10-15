import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DatenschutzPage() {
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
            <h1 className="text-4xl font-medium text-dark-blue-gray mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Allgemeine Hinweise</h3>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                    Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                    Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
                    entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Datenerfassung auf dieser Website</h3>
                <div className="text-gray-700 space-y-4">
                  <p>
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  </p>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                    können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung
                    entnehmen.
                  </p>

                  <p>
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                  </p>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.
                    B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                    IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                    Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                    betreten.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">2. Hosting</h2>
                <div className="text-gray-700 space-y-4">
                  <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                  <p>
                    <strong>Strato</strong>
                  </p>
                  <p>www.strato.de</p>
                  <p>Details entnehmen Sie der Datenschutzerklärung des Anbieters: <a href="https://www.strato.de/datenschutz/">https://www.strato.de/datenschutz/</a>></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Datenschutz</h3>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                    Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen
                    sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
                    vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
                    erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <div className="text-gray-700 space-y-2">
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p>
                    <strong>Klaus Cornau</strong>
                  </p>
                  <p>Krautlandweg 3</p>
                  <p>71336 Waiblingen</p>
                  <p>
                    <strong>Telefon:</strong> 0163 7445844
                  </p>
                  <p>
                    <strong>E-Mail:</strong> info@hg-waiblingen.de
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">Einsatz des E-Mail-Versanddienstleisters Resend</h2>
                <h3 className="text-xl font-medium text-dark-blue-gray mb-3">Kontaktformular</h3>
                <div className="text-gray-700 space-y-4">
                  <p>
                  Wir nutzen den E-Mail-Versanddienst Resend, betrieben von Resend, Inc., 2261 Market Street #4378, San Francisco, CA 94114, USA, um automatisierte E-Mails wie Formularbestätigungen oder Systemnachrichten zu versenden. Wenn Sie ein Formular auf unserer Website ausfüllen, werden die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) zum Zwecke der Zustellung einer Eingangsbestätigung oder zur Weiterleitung Ihrer Anfrage durch Resend verarbeitet. Die Daten werden auf Servern von Resend verarbeitet.

Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem effizienten und zuverlässigen E-Mail-Versand). Die Übermittlung Ihrer Daten an Resend erfolgt in die USA. Zur Sicherstellung eines angemessenen Datenschutzniveaus stützt sich Resend auf die von der EU-Kommission genehmigten Standardvertragsklauseln (Standard Contractual Clauses – SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen zur Datenverarbeitung durch Resend finden Sie unter: https://resend.com/privacy
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">5. Ihre Rechte</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                    oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                    haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
                    Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                    zu verlangen.
                  </p>
                  <p>Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                  <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-dark-blue-gray mb-4">6. Speicherdauer</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                    verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                    Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
                    widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die
                    Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
                    Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>
                </div>
              </section>

              <section className="bg-warm-light-gray p-4 border-l-4 border-accent-green">
                <p className="text-sm text-gray-600">
                  <strong>Stand:</strong> Januar 2024
                  <br />
                  Diese Datenschutzerklärung wurde mit Hilfe von Vorlagen erstellt und an unsere spezifischen
                  Bedürfnisse angepasst.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
