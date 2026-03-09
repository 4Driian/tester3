'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Upload, Loader2, ArrowRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AIVisualizationProps {
  productName: string
  productImage: string
  productMaterial: string
  productFinish: string
  productCollection: string
}

export function AIVisualization({
  productName,
  productImage,
  productMaterial,
  productFinish,
  productCollection,
}: AIVisualizationProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files[0])
    }
  }

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setGeneratedImage(null)
        setShowBeforeAfter(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!uploadedImage) return

    setIsGenerating(true)
    try {
      // TODO: Replace with actual AI API call
      // This is a placeholder that simulates the API call
      // You can integrate with Replicate, OpenAI, or your custom backend
      
      // Example implementation:
      // const response = await fetch('/api/visualize', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     uploadedImage,
      //     productImage,
      //     productName,
      //     productMaterial,
      //   }),
      // })
      // const data = await response.json()
      // setGeneratedImage(data.result)

      // Simulated delay (remove this when integrating real API)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock generated image - replace with actual API response
      setGeneratedImage(uploadedImage)
      setShowBeforeAfter(true)
    } catch (error) {
      console.error('Generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleReset = () => {
    setUploadedImage(null)
    setGeneratedImage(null)
    setShowBeforeAfter(false)
    setSliderPosition(50)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            AI-Powered Visualization
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            See It In Your Space
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Upload a photo of your space and visualize how {productName} will look. Our AI will apply this material to your room in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Upload & Material Info */}
          <div className="space-y-6">
            {/* Material Preview Card */}
            <div className="rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-border transition-colors duration-300">
              <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
                <Image
                  src={productImage}
                  alt={productName}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  {productCollection}
                </p>
                <h3 className="font-serif text-2xl text-foreground mb-4">{productName}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Material</span>
                    <span className="text-sm font-medium text-foreground">{productMaterial}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/50 pt-3">
                    <span className="text-sm text-muted-foreground">Finish</span>
                    <span className="text-sm font-medium text-foreground">{productFinish}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                'relative rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden',
                isDragging
                  ? 'border-foreground bg-foreground/5'
                  : 'border-border/50 hover:border-border bg-secondary/50 hover:bg-secondary'
              )}
            >
              <div className="p-8 lg:p-12 text-center">
                {uploadedImage ? (
                  <div className="space-y-4">
                    <div className="relative w-20 h-20 mx-auto rounded-xl overflow-hidden border border-border">
                      <Image
                        src={uploadedImage}
                        alt="Uploaded space"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Image Ready</p>
                      <p className="text-xs text-muted-foreground mb-4">
                        Click to upload a different image
                      </p>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-xs tracking-wider uppercase text-foreground hover:text-muted-foreground transition-colors"
                      >
                        Change Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/10">
                      <Upload className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Upload Your Space
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Drag and drop or click to select
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 cursor-pointer"
              />
            </div>

            {/* Generate Button */}
            {uploadedImage && (
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className={cn(
                  'w-full py-4 rounded-lg font-medium tracking-wider uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2',
                  isGenerating
                    ? 'bg-foreground/50 text-background cursor-not-allowed'
                    : 'bg-foreground text-background hover:bg-foreground/90 active:scale-95'
                )}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span>Visualize This Material</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Right Column - Result Preview */}
          <div className="space-y-6">
            {!uploadedImage ? (
              <div className="rounded-2xl h-96 md:h-[500px] bg-secondary border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="text-center px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/10 mb-4">
                    <Image
                      src={productImage}
                      alt="Preview"
                      width={64}
                      height={64}
                      className="w-8 h-8 opacity-40"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Upload an image to see the preview
                  </p>
                </div>
              </div>
            ) : showBeforeAfter && generatedImage ? (
              <div className="space-y-4">
                {/* Before/After Comparison */}
                <div className="relative rounded-2xl overflow-hidden h-96 md:h-[500px] bg-secondary border border-border/50 group">
                  {/* After Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={generatedImage}
                      alt="Visualization result"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Before Image (Left side) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${100 - sliderPosition}%` }}
                  >
                    <Image
                      src={uploadedImage}
                      alt="Original space"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-warm-white cursor-col-resize transition-all"
                    style={{ left: `${100 - sliderPosition}%` }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      const start = e.clientX
                      const startPos = sliderPosition

                      const handleMouseMove = (moveEvent: MouseEvent) => {
                        const container = e.currentTarget?.parentElement
                        if (!container) return
                        const rect = container.getBoundingClientRect()
                        const newPos = ((moveEvent.clientX - rect.left) / rect.width) * 100
                        setSliderPosition(Math.max(0, Math.min(100, newPos)))
                      }

                      const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove)
                        document.removeEventListener('mouseup', handleMouseUp)
                      }

                      document.addEventListener('mousemove', handleMouseMove)
                      document.addEventListener('mouseup', handleMouseUp)
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-warm-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-charcoal" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute bottom-4 left-4 text-xs font-medium text-warm-white bg-charcoal/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    Original
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs font-medium text-warm-white bg-charcoal/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    With {productName}
                  </div>
                </div>

                {/* Result Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 rounded-lg border border-border text-foreground font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:bg-foreground hover:text-background"
                  >
                    Try Another Image
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-foreground text-background font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:bg-foreground/90 active:scale-95">
                    Contact Sales
                  </button>
                </div>
              </div>
            ) : isGenerating ? (
              <div className="rounded-2xl h-96 md:h-[500px] bg-secondary border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 mb-4">
                    <Loader2 className="w-6 h-6 text-foreground animate-spin" />
                  </div>
                  <p className="text-foreground font-medium">Generating visualization...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our AI is applying {productName} to your space
                  </p>
                </div>
              </div>
            ) : uploadedImage ? (
              <div className="rounded-2xl overflow-hidden h-96 md:h-[500px] bg-secondary border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="text-center px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/10 mb-4">
                    <Loader2 className="w-8 h-8 text-foreground/50" />
                  </div>
                  <p className="text-muted-foreground">
                    Ready to generate
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
