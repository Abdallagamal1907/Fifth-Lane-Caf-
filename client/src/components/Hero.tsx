import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

interface HeroProps {
  showCTAs?: boolean;
}

export function Hero({ showCTAs = true }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const words = "Welcome to Fifth Lane Café".split(" ");

  return (
    <div ref={ref} className="relative h-screen overflow-hidden" data-testid="section-hero">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=2560&h=1440&fit=crop')`,
          }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Split text animation */}
          <div className="mb-6 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Crafting warmth in every cup — specialty coffee, handcrafted drinks, and a cozy place to connect in 10th of Ramadan.
          </motion.p>

          {/* CTAs */}
          {showCTAs && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground border border-primary-border shadow-lg text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                  data-testid="button-view-menu"
                  onClick={() => window.location.href = '/menu'}
                >
                  View Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                  data-testid="button-book-table"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Book a Table
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                  data-testid="button-get-directions"
                  onClick={() => window.location.href = '/contact'}
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  Get Directions
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Decorative coffee steam animation */}
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-30"
            animate={{
              y: [-20, -60, -20],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Coffee className="w-16 h-16 md:w-24 md:h-24 text-white" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
