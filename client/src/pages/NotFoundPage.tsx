import { motion } from 'framer-motion';
import { Coffee, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <Coffee className="w-16 h-16 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="font-serif text-8xl md:text-9xl font-bold mb-4 text-primary" data-testid="text-404">
            404
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md mx-auto">
            Oops! Looks like this page took a coffee break. Let's get you back to familiar grounds.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => window.history.back()}
                variant="outline"
                data-testid="button-go-back"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => window.location.href = '/'}
                data-testid="button-home"
              >
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          Need help? Visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a>
        </motion.p>
      </div>
    </div>
  );
}
