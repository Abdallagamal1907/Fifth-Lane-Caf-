import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <>
      <footer className="bg-card border-t border-card-border mt-20" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8 text-primary" />
                <span className="font-serif text-xl font-bold">Fifth Lane Café</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Crafting warmth in every cup since 2024. Your cozy coffee destination in 10th of Ramadan.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/menu', label: 'Menu' },
                  { path: '/about', label: 'About' },
                  { path: '/gallery', label: 'Gallery' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} data-testid={`link-footer-${link.label.toLowerCase()}`}>
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block relative group">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <div>+20 10 1234 5678</div>
                    <div>+20 10 8765 4321</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <a href="mailto:hello@fifthlanecafe.com" className="hover:text-primary transition-colors">
                    hello@fifthlanecafe.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    Fifth District (El-Mogawra El-Khamisa)<br />
                    10th of Ramadan City<br />
                    Sharqia, Egypt
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-serif text-lg font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between gap-4">
                  <span>Mon - Fri:</span>
                  <span className="font-medium">08:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sat - Sun:</span>
                  <span className="font-medium">09:00 AM - 12:00 AM</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
          >
            <p>© {new Date().getFullYear()} Fifth Lane Café. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button
                size="icon"
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full shadow-lg"
                data-testid="button-back-to-top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
