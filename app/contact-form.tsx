"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "./actions"

interface ContactFormProps {
  preselectedService?: string
}

export default function ContactForm({ preselectedService }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setMessage("Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden bei Ihnen.")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus("error")
        setMessage(result.message || "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white text-dark-blue-gray shadow-2xl border border-gray-200 rounded-sm">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-dark-blue-gray flex items-center justify-center mx-auto mb-4 rounded-sm">
            <Mail className="w-8 h-8 text-white" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-medium text-dark-blue-gray">Kontaktformular</h3>
          <p className="text-gray-700">Senden Sie uns Ihre Anfrage</p>
        </div>

        {submitStatus !== "idle" && (
          <div
            className={`mb-6 p-4 flex items-center space-x-3 rounded-sm ${
              submitStatus === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
            role="alert"
          >
            {submitStatus === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-600" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600" strokeWidth={1.5} aria-hidden="true" />
            )}
            <p className="text-sm">{message}</p>
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-dark-blue-gray">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="mt-1 border-gray-300 focus:border-accent-green focus:ring-accent-green rounded-sm"
                placeholder="Ihr vollständiger Name"
                disabled={isSubmitting}
                aria-describedby="name-help"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-dark-blue-gray">
                E-Mail-Adresse *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 border-gray-300 focus:border-accent-green focus:ring-accent-green rounded-sm"
                placeholder="ihre.email@beispiel.de"
                disabled={isSubmitting}
                aria-describedby="email-help"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-dark-blue-gray">
                Telefonnummer *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 border-gray-300 focus:border-accent-green focus:ring-accent-green rounded-sm"
                placeholder="Ihre Telefonnummer"
                disabled={isSubmitting}
                aria-describedby="phone-help"
              />
            </div>
            <div>
              <Label htmlFor="location" className="text-sm font-medium text-dark-blue-gray">
                Einsatzort *
              </Label>
              <Input
                id="location"
                name="location"
                required
                className="mt-1 border-gray-300 focus:border-accent-green focus:ring-accent-green rounded-sm"
                placeholder="Wo soll die Arbeit durchgeführt werden?"
                disabled={isSubmitting}
                aria-describedby="location-help"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="subject" className="text-sm font-medium text-dark-blue-gray">
              Betreff *
            </Label>
            <Input
              id="subject"
              name="subject"
              required
              className="mt-1 border-gray-300 focus:border-accent-green focus:ring-accent-green rounded-sm"
              placeholder="Worum geht es in Ihrer Anfrage?"
              disabled={isSubmitting}
              aria-describedby="subject-help"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-sm font-medium text-dark-blue-gray">
              Gewünschte Tätigkeit *
            </Label>
            <select
              id="service"
              name="service"
              required
              defaultValue={preselectedService || ""}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-accent-green focus:border-accent-green rounded-sm"
              disabled={isSubmitting}
              aria-describedby="service-help"
            >
              <option value="">Bitte wählen Sie eine Tätigkeit</option>
              <option value="bodenverlegung">Bodenverlegung</option>
              <option value="fugenarbeiten">Fugenarbeiten</option>
              <option value="montage-bauelemente">Montage von Bauelementen</option>
              <option value="trockenbau">Trockenbau</option>
              <option value="hausmeisterservice">Hausmeisterservice</option>
              <option value="gartenpflege">Gartenpflege</option>
              <option value="transport-umzug">Transport & Umzugshilfe</option>
              <option value="sonstiges">Sonstiges</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-dark-blue-gray">
              Ihre Nachricht *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={8}
              className="mt-1 border-gray-300 focus:border-accent-green focus:ring-accent-green rounded-sm"
              placeholder="Beschreiben Sie bitte ausführlich, welche Dienstleistungen Sie benötigen. Geben Sie auch die Adresse des Objekts und gewünschte Termine an."
              disabled={isSubmitting}
              aria-describedby="message-help"
            />
          </div>

          <div className="text-sm text-gray-700 bg-warm-light-gray p-4 rounded-sm">
            <p className="mb-2">
              <strong>Datenschutz:</strong> Mit dem Absenden dieser Nachricht stimmen Sie der Verarbeitung Ihrer
              personenbezogenen Daten gemäß unserer Datenschutzerklärung zu.
            </p>
            <p>
              <strong>Antwortzeit:</strong> Wir antworten in der Regel innerhalb von 24 Stunden. Für dringende Anfragen
              nutzen Sie bitte das Kontaktformular mit entsprechendem Hinweis im Betreff.
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent-green hover:bg-dark-blue-gray text-white disabled:opacity-50 transition-colors rounded-sm"
            disabled={isSubmitting}
            aria-label="Kontaktformular absenden"
          >
            {isSubmitting ? (
              <>
                <div
                  className="w-5 h-5 mr-2 border-2 border-white border-t-transparent animate-spin rounded-full"
                  aria-hidden="true"
                ></div>
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" strokeWidth={1.5} aria-hidden="true" />
                Jetzt unverbindlich anfragen
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Alternativ erreichen Sie uns per E-Mail: <strong>info@hg-waiblingen.de</strong>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
