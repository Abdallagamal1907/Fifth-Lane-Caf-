import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Coffee, Heart, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
            About Fifth Lane Café
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We believe that great coffee is more than just a drink — it's an experience, a moment of connection, and a daily ritual that brings warmth to your day.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20" data-testid="section-story">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop"
              alt="Fifth Lane Café interior"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in the heart of 10th of Ramadan City's Fifth District, Fifth Lane Café was born from a simple passion: to create a welcoming space where exceptional coffee meets genuine hospitality.
              </p>
              <p>
                Every cup we serve tells a story — from the carefully selected beans roasted to perfection, to the skilled hands of our baristas who craft each drink with precision and care. We've built more than just a café; we've created a community gathering place where friends meet, ideas flow, and memories are made.
              </p>
              <p>
                Our commitment to quality extends beyond our beverages. We source sustainable ingredients, support local suppliers, and continuously refine our craft to bring you the best coffee experience in the region.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 mb-20" data-testid="section-mission-vision">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full hover-elevate">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To craft exceptional coffee experiences that brighten every customer's day, foster meaningful connections, and set the standard for quality and service in our community.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 h-full hover-elevate">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most beloved café in 10th of Ramadan, known not just for our outstanding coffee, but for the warmth, comfort, and sense of belonging we provide to everyone who walks through our doors.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4" data-testid="section-values">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Coffee,
              title: 'Quality First',
              description: 'We never compromise on the quality of our ingredients or the care we put into every drink.'
            },
            {
              icon: Users,
              title: 'Community Focus',
              description: 'We're committed to creating a space where everyone feels welcome and valued.'
            },
            {
              icon: Heart,
              title: 'Passion & Care',
              description: 'Every cup is made with genuine passion and attention to detail by our dedicated team.'
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
