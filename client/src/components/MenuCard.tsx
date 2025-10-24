import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      data-testid={`card-menu-${item.id}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03, translateY: -6 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer"
      >
        <Card className="p-6 relative overflow-visible hover-elevate active-elevate-2 transition-shadow duration-300 hover:shadow-lg">
          {/* Decorative icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
            className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md"
          >
            <Coffee className="w-5 h-5 text-primary-foreground" />
          </motion.div>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="font-bold text-lg text-primary whitespace-nowrap"
              >
                {item.price}
              </motion.span>
            </div>
            
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground leading-relaxed"
            >
              {item.description}
            </motion.p>
          </div>

          {/* Hover flourish */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
}
