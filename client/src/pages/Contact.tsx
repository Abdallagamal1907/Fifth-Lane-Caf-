import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { InsertContact } from '@shared/schema';

export default function Contact() {
  const handleSubmitContact = async (data: InsertContact) => {
    // This will be connected to the backend in Task 3
    console.log('Contact form submitted:', data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +20 10 1234 5678',
        'Reservations: +20 10 8765 4321'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@fifthlanecafe.com']
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Fifth District (El-Mogawra El-Khamisa)',
        '10th of Ramadan City',
        'Sharqia Governorate, Egypt'
      ]
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: [
        'Monday - Friday: 08:00 AM - 10:00 PM',
        'Saturday - Sunday: 09:00 AM - 12:00 AM'
      ]
    },
  ];

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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have questions or want to book a table? We'd love to hear from you!
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm onSubmit={handleSubmitContact} />
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-6 hover-elevate">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <Card className="p-4 overflow-hidden">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37706890039!2d31.745!3d30.2969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9c5d5b5b5b5b5%3A0x5b5b5b5b5b5b5b5!2s10th%20of%20Ramadan%20City%2C%20Egypt!5e0!3m2!1sen!2sus!4v1234567890"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Fifth Lane Café Location"
                    data-testid="map-embed"
                  />
                  {/* Animated pin overlay */}
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10"
                  >
                    <MapPin className="w-12 h-12 text-primary drop-shadow-lg" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
