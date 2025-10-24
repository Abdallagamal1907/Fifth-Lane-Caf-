import { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { TestimonialForm } from '@/components/TestimonialForm';
import { Card } from '@/components/ui/card';
import type { InsertTestimonial } from '@shared/schema';

// Sample testimonials for display
const sampleTestimonials = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    rating: '5',
    comment: 'The best coffee in 10th of Ramadan! The Rose Latte is absolutely divine, and the atmosphere is so cozy and welcoming. Fifth Lane has become my go-to spot for work and relaxation.'
  },
  {
    id: '2',
    name: 'Mohamed Hassan',
    rating: '5',
    comment: 'Exceptional quality and service. The baristas really know their craft, and you can taste the difference. The Spiced Cardamom Cappuccino is a must-try!'
  },
  {
    id: '3',
    name: 'Layla Ibrahim',
    rating: '5',
    comment: 'A hidden gem in our neighborhood! The interior is beautiful, the coffee is fantastic, and the pastries are always fresh. Highly recommend the croissants!'
  },
];

export default function Reviews() {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);

  const handleSubmitTestimonial = async (data: InsertTestimonial) => {
    // This will be connected to the backend in Task 3
    const newTestimonial = {
      id: Date.now().toString(),
      ...data,
    };
    setTestimonials([...testimonials, newTestimonial]);
  };

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
            Customer Reviews
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hear what our community has to say about their Fifth Lane Café experience.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Carousel */}
      <section className="max-w-5xl mx-auto px-4 mb-20" data-testid="section-testimonials">
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Submit Review Form */}
      <section className="max-w-3xl mx-auto px-4" data-testid="section-submit-review">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">
              Share Your Experience
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              We'd love to hear about your visit! Your feedback helps us continue to improve and serve you better.
            </p>
            <TestimonialForm onSubmit={handleSubmitTestimonial} />
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
