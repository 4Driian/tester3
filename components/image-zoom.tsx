'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageZoomProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ImageZoom({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxZoom, setLightboxZoom] = useState(1)
  const [lightboxPan, setLightboxPan] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const lightboxImageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isZoomed) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setZoomPosition({ x, y })
  }

  const handleLightboxWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1
    const newZoom = Math.max(1, Math.min(3, lightboxZoom + zoomDelta))
    setLightboxZoom(newZoom)
  }

  const handleLightboxMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (lightboxZoom <= 1) return

    const rect = lightboxImageRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const maxX = (rect.width * (lightboxZoom - 1)) / 2
    const maxY = (rect.height * (lightboxZoom - 1)) / 2

    const panX = -(x / rect.width - 0.5) * 2 * maxX
    const panY = -(y / rect.height - 0.5) * 2 * maxY

    setLightboxPan({ x: panX, y: panY })
  }

  return (
    <>
      {/* Main image container with hover zoom */}
      <div
        ref={containerRef}
        className={cn(
          'relative overflow-hidden rounded-2xl cursor-zoom-in group',
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsZoomed(false)}
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            'object-cover transition-transform duration-300',
            isZoomed && 'cursor-zoom-out'
          )}
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transform: isZoomed ? 'scale(2)' : 'scale(1)',
          }}
          priority={priority}
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />

        {/* Zoom icon */}
        <button
          className="absolute top-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
          onMouseEnter={() => setIsZoomed(true)}
        >
          <ZoomIn className="w-5 h-5 text-foreground" />
        </button>

        {/* Zoom indicator text */}
        {isZoomed && (
          <div className="absolute bottom-4 left-4 text-xs font-medium text-warm-white bg-charcoal/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
            Click to expand
          </div>
        )}
      </div>

      {/* Premium lightbox viewer */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => {
              setIsLightboxOpen(false)
              setLightboxZoom(1)
              setLightboxPan({ x: 0, y: 0 })
            }}
            className="absolute top-6 right-6 p-3 text-warm-white hover:bg-warm-white/10 rounded-full transition-all duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Zoom info */}
          <div className="absolute bottom-6 left-6 text-xs text-warm-white/60 space-y-1">
            <p>Scroll to zoom</p>
            <p>Move to pan</p>
          </div>

          {/* Zoom level indicator */}
          <div className="absolute bottom-6 right-6 text-xs text-warm-white/60">
            {(lightboxZoom * 100).toFixed(0)}%
          </div>

          {/* Image container */}
          <div
            ref={lightboxImageRef}
            className="relative w-[90vw] h-[90vh] overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
            onWheel={handleLightboxWheel}
            onMouseMove={handleLightboxMouseMove}
          >
            <div
              style={{
                transform: `scale(${lightboxZoom}) translate(${lightboxPan.x}px, ${lightboxPan.y}px)`,
                transformOrigin: 'center',
                transition: 'none',
              }}
              className="w-full h-full"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
