import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Coffee, Heart, Clock, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/lib/menu-data';
import { MenuCard } from '@/components/MenuCard';

export default function Home() {
  const signatureItems = menuItems.filter(item => item.category === 'Signature Creations');
  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'We source the finest beans and ingredients for exceptional taste in every cup.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every drink is handcrafted by our passionate baristas who care about your experience.'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'From morning espressos to evening treats, we serve fresh beverages all day long.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee crafting and customer satisfaction.'
    },
  ];

  return (
    <div>
      <Hero />

      {/* Signature Creations Section */}
      <section className="py-20 px-4" data-testid="section-signature">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Signature Creations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our exclusive specialty drinks, crafted with unique flavors and artisanal techniques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => window.location.href = '/menu'}
              data-testid="button-view-full-menu"
            >
              View Full Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-card" data-testid="section-why-us">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Why Choose Fifth Lane Café?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a coffee shop — we're a community hub where quality meets comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-elevate active-elevate-2 transition-shadow h-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" data-testid="section-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the warmth of Fifth Lane Café. Whether you're here for a quick espresso or a leisurely afternoon, we're ready to serve you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
                data-testid="button-cta-contact"
              >
                Get Directions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/menu'}
                data-testid="button-cta-menu"
              >
                Explore Menu
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
