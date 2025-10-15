"use client"

import { CheckCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm"
              aria-label="Haus & Gartenservice Waiblingen - Zur Startseite"
            >
              <img
                src="/logo-website.svg"
                alt="Haus & Gartenservice Waiblingen Logo"
                className="h-12 w-auto hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <Link href="/">
              <Button className="bg-cool-blue hover:bg-dark-blue-gray text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2">
                <Home className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <main className="py-16 bg-warm-light-gray min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 border border-gray-200 rounded-sm shadow-lg">
              {/* Success Icon */}
              <div className="w-24 h-24 bg-green-100 flex items-center justify-center mx-auto mb-8 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={1.5} />
              </div>

              {/* Success Message */}
              <h1 className="text-4xl font-medium text-dark-blue-gray mb-6">Vielen Dank!</h1>
              <h2 className="text-xl text-gray-700 mb-8">Ihre Anfrage wurde erfolgreich gesendet</h2>

              <div className="bg-warm-light-gray p-6 rounded-sm mb-8">
                <p className="text-lg text-dark-blue-gray mb-4">
                  <strong>Wir melden uns schnell bei Ihnen!</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Ihre Anfrage ist bei uns eingegangen und wird umgehend bearbeitet. Sie erhalten innerhalb der nächsten
                  24 Stunden eine persönliche Antwort von mir.
                </p>
                <p className="text-gray-700">
                  Bei dringenden Anfragen können Sie mich auch direkt telefonisch erreichen.
                </p>
              </div>

              {/* Contact Info */}
              

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href="/">
                  <Button
                    size="lg"
                    className="w-full bg-dark-blue-gray hover:bg-accent-green text-white font-medium px-8 py-4 text-lg transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 my-4"
                  >
                    <Home className="w-5 h-5 mr-2" strokeWidth={1.5} />
                    Zurück zur Startseite
                  </Button>
                </Link>

                <Link href="/#services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-dark-blue-gray text-dark-blue-gray hover:bg-dark-blue-gray hover:text-white font-medium px-8 py-4 text-lg transition-colors rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-dark-blue-gray focus:ring-offset-2"
                  >
                    Weitere Dienstleistungen ansehen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Haus & Gartenservice Waiblingen - Klaus Cornau. Alle Rechte vorbehalten.
            </p>
            <div className="mt-4 space-x-4 text-sm">
              <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
