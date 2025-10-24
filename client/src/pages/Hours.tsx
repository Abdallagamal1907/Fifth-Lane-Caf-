import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Clock, Coffee, Sun, Moon } from 'lucide-react';

export default function Hours() {
  const schedule = [
    { day: 'Monday', hours: '08:00 AM - 10:00 PM', icon: Coffee },
    { day: 'Tuesday', hours: '08:00 AM - 10:00 PM', icon: Coffee },
    { day: 'Wednesday', hours: '08:00 AM - 10:00 PM', icon: Coffee },
    { day: 'Thursday', hours: '08:00 AM - 10:00 PM', icon: Coffee },
    { day: 'Friday', hours: '08:00 AM - 10:00 PM', icon: Coffee },
    { day: 'Saturday', hours: '09:00 AM - 12:00 AM', icon: Sun },
    { day: 'Sunday', hours: '09:00 AM - 12:00 AM', icon: Moon },
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
            Opening Hours
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Visit us any day of the week for great coffee and good vibes.
          </p>
        </motion.div>
      </div>

      {/* Schedule */}
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 md:p-12">
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between py-4 border-b border-border last:border-0"
                  data-testid={`hours-${item.day.toLowerCase()}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">{item.day}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{item.hours}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-primary/5 rounded-md border border-primary/20"
            >
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Special Hours Notice</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our hours may vary during holidays and special events. Please call ahead or check our social media for any updates. We look forward to serving you!
                  </p>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
