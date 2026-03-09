"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products, getProductById, getRelatedProducts, Product } from "@/lib/products"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Download, 
  Mail, 
  MapPin, 
  Maximize2,
  X,
  ArrowUpRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }))
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [relatedProductsData, setRelatedProductsData] = useState<Product[]>([])

  useEffect(() => {
    const foundProduct = getProductById(parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
      setRelatedProductsData(getRelatedProducts(foundProduct.relatedProducts))
    }
    setIsVisible(true)
  }, [id])

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-foreground mb-4">Product Not Found</h1>
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Return to Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.gallery.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-28 lg:pt-32 pb-4">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}>
              {/* Main Image */}
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 cursor-zoom-in group"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={product.gallery[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
                <button className="absolute top-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-xl transition-all duration-300",
                      selectedImageIndex === index 
                        ? "ring-2 ring-foreground ring-offset-2" 
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className={cn(
              "transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <div className="lg:sticky lg:top-32">
                <Link 
                  href={`/products?collection=${encodeURIComponent(product.collection)}`}
                  className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-4 block"
                >
                  {product.collection}
                </Link>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  {product.name}
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-secondary rounded-2xl">
                  <div>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">Material</span>
                    <p className="text-foreground font-medium mt-1">{product.material}</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">Finish</span>
                    <p className="text-foreground font-medium mt-1">{product.finish}</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">Dimensions</span>
                    <p className="text-foreground font-medium mt-1">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">Application</span>
                    <p className="text-foreground font-medium mt-1">{product.application}</p>
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-8">
                  <span className="text-xs tracking-wider uppercase text-muted-foreground mb-3 block">Available Colors</span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 bg-secondary text-foreground text-sm rounded-lg"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/showrooms"
                    className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>See in Showroom</span>
                  </Link>
                  <button
                    className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
                  >
                    <Download className="w-4 h-4" />
                    <span>Request Sample</span>
                  </button>
                </div>

                {/* Contact */}
                <a
                  href="mailto:sales@ramstack.com?subject=Product%20Inquiry"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Have questions? Contact our specialists</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Features */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-1 bg-foreground rounded-full mt-1">
                      <Check className="w-3 h-3 text-background" />
                    </div>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-4 border-b border-border">
                  <span className="text-muted-foreground">Thickness</span>
                  <span className="text-foreground font-medium">{product.specifications.thickness}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-border">
                  <span className="text-muted-foreground">Weight</span>
                  <span className="text-foreground font-medium">{product.specifications.weight}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-border">
                  <span className="text-muted-foreground">Water Absorption</span>
                  <span className="text-foreground font-medium">{product.specifications.waterAbsorption}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-border">
                  <span className="text-muted-foreground">Slip Resistance</span>
                  <span className="text-foreground font-medium">{product.specifications.slipResistance}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-border">
                  <span className="text-muted-foreground">Frost Resistant</span>
                  <span className="text-foreground font-medium">{product.specifications.frostResistant ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-border">
                  <span className="text-muted-foreground">Rectified</span>
                  <span className="text-foreground font-medium">{product.specifications.rectified ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProductsData.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                  You May Also Like
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                  Related Products
                </h2>
              </div>
              <Link 
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 text-foreground text-sm tracking-wider uppercase hover:gap-4 transition-all duration-300"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProductsData.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                    
                    {/* Hover arrow */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-4 bg-warm-white rounded-full shadow-xl">
                        <ArrowUpRight className="w-5 h-5 text-charcoal" />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs tracking-wider text-muted-foreground uppercase">
                    {relatedProduct.collection}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mt-1 group-hover:text-muted-foreground transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {relatedProduct.material} / {relatedProduct.finish}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-warm-white/10 hover:bg-warm-white/20 rounded-full transition-colors"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="w-6 h-6 text-warm-white" />
          </button>

          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-warm-white/10 hover:bg-warm-white/20 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ArrowLeft className="w-6 h-6 text-warm-white" />
          </button>

          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-warm-white/10 hover:bg-warm-white/20 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ArrowRight className="w-6 h-6 text-warm-white" />
          </button>

          <div 
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={product.gallery[selectedImageIndex]}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Lightbox indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {product.gallery.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(index); }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedImageIndex === index ? "bg-warm-white w-6" : "bg-warm-white/40"
                )}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
