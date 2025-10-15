"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import DetailedServices from "./detailed-services"
import ServiceArea from "./service-area"
import ContactForm from "./contact-form"

export default function LandingPage() {
  const [showStickyButton, setShowStickyButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isContactVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        setShowStickyButton(!isContactVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm"
              aria-label="Haus & Gartenservice Waiblingen - Zur Startseite"
            >
              <img
                src="/logo-website.svg"
                alt="Haus & Gartenservice Waiblingen Logo"
                className="h-10 w-auto sm:h-12 hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-dark-blue-gray hover:text-accent-green transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm"
              >
                Über mich
              </button>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="text-dark-blue-gray hover:text-accent-green transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm"
              >
                Dienstleistungen
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-dark-blue-gray hover:text-accent-green transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm"
              >
                Kontakt
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button
                className="bg-dark-blue-gray hover:bg-accent-green text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Jetzt anfragen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-dark-blue-gray text-dark-blue-gray hover:bg-dark-blue-gray hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] bg-gradient-to-br from-dark-blue-gray to-gray-800 flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-gray/90 via-dark-blue-gray/80 to-accent-green/80"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <img
              src="/logo-single.svg"
              alt="Haus & Gartenservice Waiblingen Logo"
              className="h-16 w-auto sm:h-20 lg:h-24 mx-auto mb-6 sm:mb-8 hover:scale-105 transition-transform duration-200"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 sm:mb-6 tracking-wide leading-tight">
            HAUS &amp; GARTEN WAIBLINGEN
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
            Ihr zuverlässiger Partner für Arbeiten am Haus, Gartenpflege und Hausmeisterservice im Rems-Murr-Kreis
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent-green hover:bg-wood-beige text-white hover:text-dark-blue-gray font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jetzt anfragen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark-blue-gray font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-transparent"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Dienstleistungen ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-warm-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
                  {/* Background decorative circles */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 to-wood-beige/20 rounded-full transform rotate-6"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-wood-beige/30 to-accent-green/30 rounded-full transform -rotate-3"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-dark-blue-gray/10 to-accent-green/10 rounded-full transform rotate-12"></div>

                  {/* Main image */}
                  <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="/images/design-mode/Auto.jpg"
                      alt="HG waiblingen - Fahrzeug"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Award badge - static */}
                  <div className="absolute top-4 right-4 bg-accent-green text-white p-3 rounded-full shadow-lg">
                    <Award className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  {/* Stats cards */}
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green">20+</div>
                      <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-green">100+</div>
                      <div className="text-sm text-gray-600">Zufriedene Kunden</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-medium text-dark-blue-gray mb-4 sm:mb-6">
                    Ihre Haus und Gartenservice aus Waiblingen
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    Mit über 20 Jahren Erfahrung bin ich Ihr zuverlässiger Partner für alle Arbeiten rund um Haus und Garten. Von der professionellen Bodenverlegung über Fugenarbeiten bis hin zur regelmäßigen Gartenpflege - ich erledige jeden Auftrag mit höchster Sorgfalt und Qualität.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-medium text-dark-blue-gray text-sm sm:text-base">Qualitätsarbeit</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">Perfektion in jedem Detail</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-medium text-dark-blue-gray text-sm sm:text-base">Zuverlässigkeit</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">Pünktlich und verlässlich zu jedem Termin</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-medium text-dark-blue-gray text-sm sm:text-base">Faire Preise</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Transparente Kostenaufstellung ohne Überraschungen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-medium text-dark-blue-gray text-sm sm:text-base">Persönlicher Service</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Individuelle Beratung und maßgeschneiderte Lösungen
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-accent-green hover:bg-dark-blue-gray text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Mail className="w-4 h-4 mr-2" strokeWidth={1.5} />
                    Jetzt Kontakt aufnehmen
                  </Button>
                  <Button
                    variant="outline"
                    className="border-dark-blue-gray text-dark-blue-gray hover:bg-dark-blue-gray hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 bg-transparent"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Dienstleistungen ansehen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <DetailedServices />
      </section>

      {/* Service Area Section */}
      <ServiceArea />

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-dark-blue-gray text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 sm:mb-6">Kontakt aufnehmen</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Haben Sie Fragen oder benötigen Sie ein unverbindliches Angebot? Kontaktieren Sie mich gerne - ich berate
              Sie kostenlos und erstelle Ihnen ein maßgeschneidertes Angebot.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white rounded-sm">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-accent-green" strokeWidth={1.5} />
                <h3 className="font-medium mb-2">Telefon</h3>
                <p className="text-sm opacity-90">0163 744 5844 </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white rounded-sm">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-accent-green" strokeWidth={1.5} />
                <h3 className="font-medium mb-2">E-Mail</h3>
                <p className="text-sm opacity-90">info@hg-waiblingen.de</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white rounded-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-accent-green" strokeWidth={1.5} />
                <h3 className="font-medium mb-2">Service-Gebiet</h3>
                <p className="text-sm opacity-90">Rems-Murr-Kreis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Button - Mobile Only */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
          <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
            <Button
              className="w-full bg-dark-blue-gray hover:bg-accent-green text-white transition-colors rounded-sm py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label="Jetzt Kontakt aufnehmen - Zum Kontaktformular"
            >
              <Mail className="w-5 h-5 mr-2" strokeWidth={1.5} aria-hidden="true" />
              Jetzt anfragen
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-6">
              &copy; 2024 Haus & Gartenservice Waiblingen - Klaus Cornau. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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
