import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Sparkles, X, Check, ArrowRight, Loader2, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';

interface AIVisualizerProps {
  productImage: string;
  productName: string;
}

export const AIVisualizer: React.FC<AIVisualizerProps> = ({ productImage, productName }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const mockups = [
    "https://images.unsplash.com/photo-1658760046471-896cbc719c9d?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1765767056681-9583b29007cf?auto=format&fit=crop&q=80&w=1080"
  ];

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size too large. Please use an image under 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setGeneratedImage(null);
        toast.success("Space uploaded! Click Generate to see it transformed.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    if (!uploadedImage) {
      toast.error("Please upload a photo of your space first.");
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      const randomMockup = mockups[Math.floor(Math.random() * mockups.length)];
      setGeneratedImage(randomMockup);
      setIsGenerating(false);
      toast.success("AI Generation complete!", {
        description: `Visualized ${productName} in your space.`
      });
    }, 3000);
  };

  const reset = () => {
    setUploadedImage(null);
    setGeneratedImage(null);
  };

  return (
    <section className="bg-[#FAF9F6] rounded-[3rem] p-8 lg:p-16 border border-neutral-100 mt-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-neutral-900">
          <circle cx="100" cy="0" r="80" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="space-y-10">
          <header className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] tracking-widest uppercase font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Advanced AI Tool
            </motion.div>
            <h2 className="text-5xl font-serif text-neutral-900 leading-[1.15] tracking-tight">
              Visualize this material <br />
              <span className="text-neutral-500 italic">in your own space</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-md">
              Our AI analyzes the geometry and lighting of your uploaded photo to seamlessly apply <span className="text-neutral-900 font-medium">{productName}</span> to your floors or walls.
            </p>
          </header>

          <div className="flex items-center gap-6 p-5 rounded-3xl bg-white/50 backdrop-blur-sm border border-neutral-100 shadow-sm">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-neutral-100 flex-shrink-0 shadow-inner">
              <ImageWithFallback src={productImage} alt={productName} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold">Selected Texture</p>
              <p className="text-xl font-serif text-neutral-900">{productName}</p>
            </div>
          </div>

          {!uploadedImage ? (
            <div
              className={`group relative border-2 border-dashed rounded-[2rem] p-16 transition-all duration-500 text-center flex flex-col items-center justify-center gap-6 ${
                isDragging ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 bg-white/30 hover:bg-white hover:border-neutral-400'
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const file = e.dataTransfer.files[0];
                if (file) handleUpload({ target: { files: [file] } } as any);
              }}
            >
              <input type="file" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
              <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Upload className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-medium text-neutral-900 font-serif">Upload Your Space</p>
                <p className="text-sm text-neutral-400">Drag & drop your photo or click to browse</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Preparation Complete</span>
                <button onClick={reset} className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5 text-xs font-medium">
                  <X className="w-3.5 h-3.5" /> Replace Photo
                </button>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !!generatedImage}
                className="w-full py-5 px-10 rounded-2xl bg-neutral-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Analyzing Room Geometry...</span>
                  </>
                ) : generatedImage ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Visualized Successfully</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Preview</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-100 shadow-2xl group border-8 border-white/50">
          <AnimatePresence mode="wait">
            {!uploadedImage ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm">
                  <ImageIcon className="w-10 h-10 text-neutral-200" />
                </div>
                <h3 className="text-2xl font-serif text-neutral-400 mb-3">Live Preview</h3>
                <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
                  Upload an image of your space to unlock the architectural visualizer.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={generatedImage || uploadedImage}
                  alt="Preview"
                  className={`w-full h-full object-cover transition-all duration-[1500ms] ${isGenerating ? 'blur-2xl scale-110' : 'blur-0 scale-100'}`}
                />

                {isGenerating && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 bg-black/40 backdrop-blur-[2px]">
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Sparkles className="w-20 h-20 mb-6" />
                    </motion.div>
                    <div className="space-y-2 text-center">
                      <p className="text-xl font-serif italic tracking-wide">Synthesizing Lighting...</p>
                      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
                        <motion.div 
                          className="h-full bg-white"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {generatedImage && !isGenerating && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col sm:flex-row justify-between items-end gap-6"
                  >
                    <div className="text-white space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-bold">Concept Rendered</p>
                      <p className="font-serif text-3xl italic">{productName} applied</p>
                    </div>
                    <div className="flex gap-4 w-full sm:w-auto">
                      <button className="flex-1 sm:flex-none bg-white text-black px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all">
                        Save Look
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
