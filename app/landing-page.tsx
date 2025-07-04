"use client"

import { useState, useEffect } from "react"
import { Mail, Home, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "./contact-form"
import DetailedServices from "./detailed-services"
import ServiceArea from "./service-area"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <img src="/logo-website.svg" alt="Haus & Gartenservice Waiblingen Logo" className="h-10 w-auto sm:h-12" />
              <div className="min-w-0"></div>
            </div>

            {/* Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              role="navigation"
              aria-label="Hauptnavigation"
            >
              <a href="#about" className="text-dark-blue-gray hover:text-accent-green font-medium transition-colors">
                ÜBER MICH
              </a>
              <a href="#services" className="text-dark-blue-gray hover:text-accent-green font-medium transition-colors">
                LEISTUNGEN
              </a>
              <a href="#contact" className="text-dark-blue-gray hover:text-accent-green font-medium transition-colors">
                KONTAKT
              </a>
            </nav>

            {/* Contact Button */}
            <div className="hidden sm:flex items-center space-x-2">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-dark-blue-gray hover:text-accent-green transition-colors"
                aria-label="Menü öffnen"
                onClick={toggleMobileMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <Button
                className="bg-dark-blue-gray hover:bg-accent-green text-white transition-colors rounded-sm text-xs sm:text-sm px-3 sm:px-4 py-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Jetzt unverbindlich anfragen - Kontaktformular öffnen"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" strokeWidth={1.5} aria-hidden="true" />
                <span className="hidden sm:inline">Jetzt unverbindlich anfragen</span>
                <span className="sm:hidden">Anfragen</span>
              </Button>
            </div>

            {/* Mobile Menu Button - Show only on mobile */}
            <button
              className="sm:hidden p-2 text-dark-blue-gray hover:text-accent-green transition-colors"
              aria-label="Menü öffnen"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-dark-blue-gray">Menü</h3>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-dark-blue-gray hover:text-accent-green transition-colors"
                aria-label="Menü schließen"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              <a
                href="#about"
                className="block text-dark-blue-gray hover:text-accent-green font-medium transition-colors py-2"
                onClick={closeMobileMenu}
              >
                ÜBER MICH
              </a>
              <a
                href="#services"
                className="block text-dark-blue-gray hover:text-accent-green font-medium transition-colors py-2"
                onClick={closeMobileMenu}
              >
                LEISTUNGEN
              </a>
              <a
                href="#contact"
                className="block text-dark-blue-gray hover:text-accent-green font-medium transition-colors py-2"
                onClick={closeMobileMenu}
              >
                KONTAKT
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-gradient-to-br from-dark-blue-gray to-gray-800 flex items-center justify-center"
        role="banner"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-wood-beige/80 to-accent-green/80 bg-slate-800"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="w-32 h-32 bg-white flex items-center justify-center mx-auto mb-8 shadow-2xl rounded-sm p-4">
            <img
              src="/logo-single.svg"
              alt="Haus & Gartenservice Waiblingen Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-5xl font-medium mb-4 tracking-wide">HAUS & GARTENSERVICE WAIBLINGEN</h1>
          <h2 className="text-lg sm:text-xl font-medium mb-6">
            Zuverlässige Hilfe bei Möbelmontage, Renovierungsarbeiten & Gartenpflege – aus einer Hand.
          </h2>
          <Button
            size="lg"
            className="bg-accent-green hover:bg-wood-beige text-white hover:text-dark-blue-gray font-medium px-8 py-4 text-lg transition-colors rounded-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Jetzt unverbindlich anfragen - Zum Kontaktformular"
          >
            Jetzt unverbindlich anfragen
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-warm-light-gray" role="main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-wood-beige p-8 flex items-center justify-center h-[400px] rounded-sm">
              <div className="text-center">
                <div className="w-24 h-24 bg-dark-blue-gray flex items-center justify-center mx-auto mb-6 rounded-sm">
                  <Home className="w-12 h-12 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium text-dark-blue-gray mb-4">Professionelle Betreuung</h3>
                <p className="text-dark-blue-gray">Ihre Immobilie in zuverlässigen Händen</p>
              </div>
            </div>
            <div className="bg-accent-green text-white p-8 h-[400px] flex flex-col justify-center rounded-sm">
              <h2 className="text-3xl font-medium mb-6">Ihr zuverlässiger Partner...</h2>
              <p className="text-lg mb-4 leading-relaxed">
                für alle Arbeiten rund um Haus und Garten im Rems-Murr-Kreis. Von der Möbelmontage bis zur Gartenpflege
                – ich erledige Ihre Aufträge schnell, sauber und zu fairen Preisen.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Mit langjähriger Erfahrung und dem richtigen Werkzeug sorge ich dafür, dass Sie sich um nichts kümmern
                müssen. Egal ob kleine Reparaturen oder größere Renovierungsprojekte – ich packe an!
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-medium">Zuverlässig • Sauber • Fair</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" role="main">
        <DetailedServices />
      </section>

      {/* Service Area */}
      <ServiceArea />

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-dark-blue-gray text-white" role="main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium mb-4">Kontakt aufnehmen</h2>
            <p className="text-xl opacity-90">
              Benötigen Sie zuverlässige Haus- und Gartendienstleistungen? Schreiben Sie mir!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Sticky Bottom Button - Mobile Only */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
          <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
            <Button
              className="w-full bg-dark-blue-gray hover:bg-accent-green text-white transition-colors rounded-sm py-3"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label="Jetzt unverbindlich anfragen - Zum Kontaktformular"
            >
              <Mail className="w-4 h-4 mr-2" strokeWidth={1.5} aria-hidden="true" />
              Jetzt unverbindlich anfragen
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div>
                  <h3 className="font-medium">Haus &amp; Gartenservice</h3>
                  <p className="text-sm text-gray-400">Waiblingen</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Zuverlässige Haus- und Gartendienstleistungen im Rems-Murr-Kreis. Von Möbelmontage bis Gartenpflege.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Dienstleistungen</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Bodenverlegung</li>
                <li>Fugenarbeiten</li>
                <li>Montage von Bauelementen</li>
                <li>Trockenbau</li>
                <li>Hausmeisterservice</li>
                <li>Gartenpflege</li>
                <li>Transport & Umzugshilfe</li>
                <li>Kleinreparaturen</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Service-Gebiet</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Waiblingen</li>
                <li>Winnenden</li>
                <li>Schorndorf</li>
                <li>Schwaikheim</li>
                <li>Weinstadt</li>
                <li>Das gesamte Remstal</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/impressum" className="hover:text-white transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="hover:text-white transition-colors">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="/agb" className="hover:text-white transition-colors">
                    AGB
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">&copy; 2024 Haus & Gartenservice Waiblingen. Alle Rechte vorbehalten.</p>
              <p className="text-xs">Professionelle Dienstleistungen rund um Haus und Garten im Rems-Murr-Kreis.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
