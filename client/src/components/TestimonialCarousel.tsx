import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: string;
  name: string;
  rating: string;
  comment: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">No testimonials yet. Be the first to share your experience!</p>
      </Card>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="testimonial-carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="p-8 md:p-12 bg-card">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        i < parseInt(testimonials[current].rating)
                          ? 'fill-primary text-primary'
                          : 'text-muted'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Comment */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-foreground leading-relaxed italic"
              >
                "{testimonials[current].comment}"
              </motion.p>

              {/* Name */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-xl font-semibold text-primary"
              >
                — {testimonials[current].name}
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            data-testid="button-previous-testimonial"
            className="hover-elevate active-elevate-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground'
                }`}
                data-testid={`button-testimonial-dot-${index}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            data-testid="button-next-testimonial"
            className="hover-elevate active-elevate-2"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
