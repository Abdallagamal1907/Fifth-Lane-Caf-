import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '@/components/Gallery';
import { galleryImages } from '@/lib/gallery-images';
import { Button } from '@/components/ui/button';

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'interior', label: 'Interior' },
    { value: 'coffee', label: 'Coffee' },
    { value: 'food', label: 'Food' },
    { value: 'lifestyle', label: 'Lifestyle' },
  ];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4" data-testid="text-page-title">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through Fifth Lane Café — our space, our drinks, and the moments we create together.
          </p>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? 'default' : 'outline'}
              onClick={() => setFilter(category.value)}
              data-testid={`button-filter-${category.value}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4">
        <Gallery images={filteredImages} />
      </div>
    </div>
  );
}
