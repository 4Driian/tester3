"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, Navigation, Mail, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const showrooms = [
  {
    id: 1,
    name: "New York",
    city: "New York City",
    address: "123 Design District, SoHo",
    fullAddress: "123 Design District, SoHo, New York, NY 10012",
    phone: "+1 (212) 555-0101",
    email: "nyc@ramstack.com",
    hours: {
      weekday: "Mon-Fri: 10:00 AM - 7:00 PM",
      weekend: "Sat: 10:00 AM - 6:00 PM, Sun: 12:00 PM - 5:00 PM",
    },
    description: "Our flagship showroom in the heart of SoHo, featuring three floors of premium surfaces and an exclusive designer consultation lounge.",
    mapCoords: { lat: 40.7233, lng: -73.9982 },
    features: ["Designer Consultations", "Material Library", "Sample Service"],
  },
  {
    id: 2,
    name: "Los Angeles",
    city: "West Hollywood",
    address: "456 Melrose Avenue",
    fullAddress: "456 Melrose Avenue, West Hollywood, CA 90069",
    phone: "+1 (310) 555-0102",
    email: "la@ramstack.com",
    hours: {
      weekday: "Mon-Fri: 10:00 AM - 6:00 PM",
      weekend: "Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    },
    description: "A sun-filled California showroom showcasing our collections in natural light, with dedicated outdoor living displays.",
    mapCoords: { lat: 34.0830, lng: -118.3695 },
    features: ["Outdoor Collections", "Trade Program", "Installation Partners"],
  },
  {
    id: 3,
    name: "Miami",
    city: "Design District",
    address: "789 NE 40th Street",
    fullAddress: "789 NE 40th Street, Miami Design District, FL 33137",
    phone: "+1 (305) 555-0103",
    email: "miami@ramstack.com",
    hours: {
      weekday: "Mon-Fri: 10:00 AM - 7:00 PM",
      weekend: "Sat-Sun: 11:00 AM - 6:00 PM",
    },
    description: "Located in the iconic Miami Design District, featuring tropical-inspired collections and waterfront living solutions.",
    mapCoords: { lat: 25.8127, lng: -80.1926 },
    features: ["Waterproof Collections", "Luxury Stone Gallery", "Virtual Tours"],
  },
  {
    id: 4,
    name: "Chicago",
    city: "River North",
    address: "321 W Kinzie Street",
    fullAddress: "321 W Kinzie Street, River North, Chicago, IL 60654",
    phone: "+1 (312) 555-0104",
    email: "chicago@ramstack.com",
    hours: {
      weekday: "Mon-Fri: 9:00 AM - 6:00 PM",
      weekend: "Sat: 10:00 AM - 4:00 PM, Sun: Closed",
    },
    description: "An industrial-chic space in River North, showcasing our complete collection in a restored warehouse setting.",
    mapCoords: { lat: 41.8893, lng: -87.6369 },
    features: ["Architect Services", "Commercial Projects", "Warehouse Stock"],
  },
  {
    id: 5,
    name: "Dallas",
    city: "Knox-Henderson",
    address: "555 Knox Street",
    fullAddress: "555 Knox Street, Knox-Henderson, Dallas, TX 75205",
    phone: "+1 (214) 555-0105",
    email: "dallas@ramstack.com",
    hours: {
      weekday: "Mon-Fri: 10:00 AM - 6:00 PM",
      weekend: "Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    },
    description: "Our Texas flagship featuring expansive displays and a dedicated commercial projects center for large-scale installations.",
    mapCoords: { lat: 32.8208, lng: -96.7979 },
    features: ["Large Format Displays", "Commercial Center", "Builder Program"],
  },
]

export default function ShowroomsPage() {
  const [selectedShowroom, setSelectedShowroom] = useState(showrooms[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSelectShowroom = (showroom: typeof showrooms[0]) => {
    if (showroom.id === selectedShowroom.id) return
    
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedShowroom(showroom)
      setIsAnimating(false)
    }, 300)
  }

  const getGoogleMapsEmbedUrl = (showroom: typeof showrooms[0]) => {
    const { lat, lng } = showroom.mapCoords
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${lat}%C2%B0!5e0!3m2!1sen!2sus!4v1234567890`
  }

  const getGoogleMapsDirectionsUrl = (showroom: typeof showrooms[0]) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(showroom.fullAddress)}`
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Visit Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our Showrooms
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Experience our materials in person. Touch the textures, see the finishes, 
            and let our specialists guide you through our collections.
          </p>
        </div>
      </section>

      {/* Showroom Selector */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Showroom Tabs - Left Side */}
            <div className="lg:col-span-4">
              <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Select Location
              </h2>
              <div className="space-y-3">
                {showrooms.map((showroom) => (
                  <button
                    key={showroom.id}
                    onClick={() => handleSelectShowroom(showroom)}
                    className={cn(
                      "w-full text-left p-5 border transition-all duration-300 group rounded-xl",
                      selectedShowroom.id === showroom.id
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border hover:border-foreground"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-xl mb-1">{showroom.name}</h3>
                        <p className={cn(
                          "text-sm",
                          selectedShowroom.id === showroom.id
                            ? "text-background/70"
                            : "text-muted-foreground"
                        )}>
                          {showroom.city}
                        </p>
                      </div>
                      <ChevronRight className={cn(
                        "w-5 h-5 transition-transform duration-300",
                        selectedShowroom.id === showroom.id && "translate-x-1"
                      )} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Showroom Details - Right Side */}
            <div className="lg:col-span-8">
              <div className={cn(
                "transition-all duration-300",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                {/* Map - Full width */}
                <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-2xl bg-secondary">
                  <iframe
                    src={getGoogleMapsEmbedUrl(selectedShowroom)}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${selectedShowroom.name} Showroom Location`}
                    className="absolute inset-0"
                  />
                  <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                    <h3 className="font-serif text-xl text-foreground">
                      {selectedShowroom.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{selectedShowroom.city}</p>
                  </div>
                </div>

                {/* Showroom Info - Clean, organized layout */}
                <div className="bg-secondary rounded-2xl p-8 lg:p-10">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
                    {selectedShowroom.name} Showroom
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Location & Contact */}
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-lg">
                          <MapPin className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Address</p>
                          <p className="text-foreground">{selectedShowroom.fullAddress}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-lg">
                          <Phone className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Phone</p>
                          <a 
                            href={`tel:${selectedShowroom.phone}`}
                            className="text-foreground hover:text-muted-foreground transition-colors"
                          >
                            {selectedShowroom.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-lg">
                          <Mail className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Email</p>
                          <a 
                            href={`mailto:${selectedShowroom.email}`}
                            className="text-foreground hover:text-muted-foreground transition-colors"
                          >
                            {selectedShowroom.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-lg">
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Opening Hours</p>
                          <p className="text-foreground mb-1">{selectedShowroom.hours.weekday}</p>
                          <p className="text-muted-foreground">{selectedShowroom.hours.weekend}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {selectedShowroom.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {selectedShowroom.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-background text-sm text-foreground rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={getGoogleMapsDirectionsUrl(selectedShowroom)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={`mailto:${selectedShowroom.email}?subject=Showroom%20Visit%20Request`}
                      className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
                    >
                      <span>Book Appointment</span>
                    </a>
                    <a
                      href={`tel:${selectedShowroom.phone}`}
                      className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
