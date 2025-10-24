import { motion } from 'framer-motion';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { TestimonialForm } from '@/components/TestimonialForm';
import { Card } from '@/components/ui/card';
import type { InsertTestimonial, Testimonial } from '@shared/schema';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function Reviews() {
  const { toast } = useToast();

  // Fetch testimonials from backend
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Mutation for submitting testimonials
  const submitMutation = useMutation({
    mutationFn: async (data: InsertTestimonial) => {
      return await apiRequest('/api/testimonials', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      toast({
        title: 'Success!',
        description: 'Your review has been submitted. Thank you for your feedback!',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to submit your review. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmitTestimonial = async (data: InsertTestimonial) => {
    await submitMutation.mutateAsync(data);
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
        {isLoading ? (
          <Card className="p-12 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"
            />
            <p className="mt-4 text-muted-foreground">Loading testimonials...</p>
          </Card>
        ) : (
          <TestimonialCarousel testimonials={testimonials} />
        )}
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
