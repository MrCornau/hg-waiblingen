"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Service {
  title: string
  description: string
  href: string
  image: string
  alt: string
}

interface ServiceNavigationProps {
  currentService: string
}

export default function ServiceNavigation({ currentService }: ServiceNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const services: Service[] = [
    {
      title: "Bodenverlegung",
      description: "Laminat, Vinyl, Fertigparkett",
      href: "/dienstleistungen/bodenverlegung",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
      alt: "Professionelle Bodenverlegung in Waiblingen",
    },
    {
      title: "Fugenarbeiten",
      description: "Silikonfugen für Bad und Küche",
      href: "/dienstleistungen/fugenarbeiten",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
      alt: "Fugenarbeiten und Silikonfugen",
    },
    {
      title: "Montage von Bauelementen",
      description: "Türen, Fenster, Regale, Möbel",
      href: "/dienstleistungen/montage-bauelemente",
      image:
        "https://images.unsplash.com/photo-1567711601167-cd0efb1f8a99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
      alt: "Montage von Türen, Fenstern und Möbeln",
    },
    {
      title: "Hausmeisterservice",
      description: "Fensterreinigung, Pflege, Kleinreparaturen",
      href: "/dienstleistungen/hausmeisterservice",
      image:
        "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
      alt: "Hausmeisterservice in Waiblingen",
    },
    {
      title: "Gartenpflege",
      description: "Rasenmähen, Laubentfernung",
      href: "/dienstleistungen/gartenpflege",
      image:
        "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
      alt: "Gartenpflege in Waiblingen",
    },
    {
      title: "Transport & Umzugshilfe",
      description: "Umzüge, Lieferungen",
      href: "/dienstleistungen/transport-umzug",
      image:
        "https://images.unsplash.com/photo-1614976523626-d598aafd4fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80",
      alt: "Transport und Umzugshilfe",
    },
  ]

  // Filter out current service
  const otherServices = services.filter((service) => !service.href.includes(currentService))

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateScrollButtons = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", updateScrollButtons)
      updateScrollButtons()
      return () => carousel.removeEventListener("scroll", updateScrollButtons)
    }
  }, [])

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 320
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 320
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      window.location.href = href
    }
  }

  if (otherServices.length === 0) return null

  return (
    <section
      className={`py-16 bg-warm-light-gray transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      aria-labelledby="other-services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="other-services-heading" className="text-3xl font-medium text-dark-blue-gray mb-4">
            Weitere Dienstleistungen
          </h2>
          <p className="text-lg text-gray-700">Entdecken Sie meine anderen Services</p>
        </div>

        <div className="relative pb-4">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <Button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
              aria-label="Vorherige Dienstleistungen anzeigen"
            >
              <ChevronLeft className="w-6 h-6 text-dark-blue-gray" strokeWidth={2} />
            </Button>
          )}

          {canScrollRight && (
            <Button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-105"
              aria-label="Nächste Dienstleistungen anzeigen"
            >
              <ChevronRight className="w-6 h-6 text-dark-blue-gray" strokeWidth={2} />
            </Button>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="region"
            aria-label="Weitere Dienstleistungen Karussell"
          >
            {otherServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 rounded-sm flex-shrink-0"
                onKeyDown={(e) => handleKeyDown(e, service.href)}
                aria-label={`Mehr erfahren über ${service.title}`}
                tabIndex={0}
              >
                <Card className="w-80 hover:shadow-xl transition-all duration-300 bg-white rounded-sm overflow-hidden cursor-pointer group-hover:-translate-y-2 border-0 shadow-md flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="w-full h-48 overflow-hidden rounded-t-sm relative flex-shrink-0">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-gray/40 to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-medium mb-2 text-dark-blue-gray group-hover:text-accent-green transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4 flex-grow">{service.description}</p>
                      <div className="flex items-center text-accent-green font-medium">
                        <span className="text-sm">Mehr erfahren</span>
                        <ArrowRight
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Karussell Navigation">
            {Array.from({ length: Math.ceil(otherServices.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 ${
                  Math.floor(currentIndex / 3) === index ? "bg-accent-green scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Zu Gruppe ${index + 1} der Dienstleistungen springen`}
                role="tab"
                aria-selected={Math.floor(currentIndex / 3) === index}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link href="/#services">
            <Button
              className="bg-dark-blue-gray hover:bg-accent-green text-white font-medium px-6 py-3 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
              aria-label="Alle Dienstleistungen auf der Startseite ansehen"
            >
              Alle Dienstleistungen ansehen
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
