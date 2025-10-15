"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, CheckCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import ContactForm from "../../contact-form"
import ServiceNavigation from "../../components/service-navigation"

export default function FugenarbeitenPage() {
  const [showStickyButton, setShowStickyButton] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

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

  const services = [
    "Silikonfugen",
    "Küchenfugen",
    "Fensterfugen",
    "Badezimmerfugen",
    "Duschkabinen abdichten",
  ]

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

            <div className="hidden sm:flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-dark-blue-gray text-dark-blue-gray hover:bg-dark-blue-gray hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Zurück
                </Button>
              </Link>
              <Button
                className="bg-dark-blue-gray hover:bg-accent-green text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Jetzt anfragen
              </Button>
            </div>

            <Link href="/" className="sm:hidden">
              <Button
                variant="outline"
                size="sm"
                className="border-dark-blue-gray text-dark-blue-gray hover:bg-dark-blue-gray hover:text-white transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-to-br from-dark-blue-gray to-gray-800 flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-gray/90 via-dark-blue-gray/80 to-accent-green/80"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-wide leading-tight">
            FUGENARBEITEN
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
            Professionelle Silikonfugen für Bad, Küche und Fenster - wasserdicht und langlebig
          </h2>
          <Button
            size="lg"
            className="bg-accent-green hover:bg-wood-beige text-white hover:text-dark-blue-gray font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Fugen erneuern lassen
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-warm-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-dark-blue-gray mb-4">Meine Fugenarbeiten</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Saubere und dauerhafte Abdichtung für alle Bereiche
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0" strokeWidth={1.5} />
                    <h3 className="text-base sm:text-lg font-medium text-dark-blue-gray">{service}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-dark-blue-gray text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">Fugenarbeiten beauftragen</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Lassen Sie Ihre Fugen professionell erneuern. Kostenvoranschlag vor Ort!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm preselectedService="fugenarbeiten" />
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <ServiceNavigation currentService="fugenarbeiten" />

      {/* Sticky Bottom Button - Mobile Only */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
          <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
            <Button
              className="w-full bg-dark-blue-gray hover:bg-accent-green text-white transition-colors rounded-sm py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label="Jetzt Fugenarbeiten anfragen - Zum Kontaktformular"
            >
              <Mail className="w-5 h-5 mr-2" strokeWidth={1.5} aria-hidden="true" />
              Fugen erneuern lassen
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              &copy; 2025 Haus & Gartenservice Waiblingen - Klaus Cornau. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
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
