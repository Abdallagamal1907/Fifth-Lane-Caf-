import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Clock, Phone } from 'lucide-react';

export default function OnlineOrder() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4" data-testid="text-page-title">
            Online Ordering
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get your favorite drinks and treats delivered or ready for pickup.
          </p>
        </motion.div>
      </div>

      {/* Coming Soon Content */}
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="p-12 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <Package className="w-12 h-12 text-primary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-serif text-3xl font-bold mb-4"
            >
              Coming Soon!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              We're working hard to bring you the convenience of online ordering. Soon you'll be able to order your favorite Fifth Lane beverages and treats for delivery or pickup with just a few clicks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-4 p-4 bg-card rounded-md border border-border">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Quick Pickup</h3>
                    <p className="text-sm text-muted-foreground">
                      Order ahead and skip the line. Your drinks will be ready when you arrive.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-md border border-border">
                  <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Delivery Service</h3>
                    <p className="text-sm text-muted-foreground">
                      Get your favorites delivered right to your door anywhere in 10th of Ramadan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  In the meantime, you can call us to place an order for pickup:
                </p>
                <Button
                  size="lg"
                  onClick={() => window.location.href = 'tel:+201012345678'}
                  data-testid="button-call-order"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call to Order: +20 10 1234 5678
                </Button>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
