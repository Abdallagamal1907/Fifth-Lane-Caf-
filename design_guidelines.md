# Fifth Lane Café Website - Design Guidelines

## Design Approach
**Modern, Warm, and Energetic Aesthetic** - Create a vibrant, welcoming experience that reflects specialty coffee culture with sophisticated animations and interactions throughout.

## Brand Identity
- **Name**: Fifth Lane Café
- **Tone**: Modern, warm, energetic, slightly playful
- **Language**: All content in English
- **Location Context**: 10th of Ramadan City, Egypt - Fifth District

## Typography
- **Headline Hierarchy**: Large, bold hero headlines with split-text reveal animations
- **Body Text**: Clean, readable for menu descriptions and content
- **Menu Items**: Clear distinction between item names, descriptions, and prices
- **Animation Treatment**: Headlines use staggered character/word reveals with masking effects

## Layout System
- **Responsive Breakpoints**: Desktop, tablet, and mobile-optimized
- **Spacing**: Generous whitespace with warm, inviting atmosphere
- **Section Structure**: Clear visual hierarchy with scroll-triggered reveals
- **Cards**: Elevated design with subtle 3D perspective transforms on hover

## Page Structure & Sections

### Home Page
1. **Hero Section** - Full viewport height with multi-layer parallax background
   - Large headline: "Welcome to Fifth Lane Café"
   - Subheadline: "Crafting warmth in every cup — specialty coffee, handcrafted drinks, and a cozy place to connect in 10th of Ramadan"
   - CTAs: "View Menu", "Book a Table", "Get Directions" with continuous subtle pulse
   - Decorative steam animation (Lottie) above cup icon
   - Animated gradient overlays with optional light particle field

2. **Signature Creations** - Highlight unique offerings
3. **Why Choose Us** - Value propositions with animated cards
4. **Menu Highlights** - Featured items with hover interactions
5. **Call-to-Action** - Secondary conversion section

### Menu Page
Full categorized menu with animated filtering:
- Hot Coffee (7 items)
- Cold Coffee (5 items)
- Fresh Juices & Smoothies (4 items)
- Milkshakes & Desserts (4 items)
- Signature Creations (3 items)

### Additional Pages
- About (story, mission, vision)
- Gallery (24-30 images with lightbox)
- Reviews/Testimonials (carousel with submission form)
- Contact & Location (map, forms, hours)
- Opening Hours (detailed display)
- Online Order (coming soon placeholder)
- 404 + Privacy/Terms

## Component Library

### Navigation
- **Desktop**: Transparent-to-opaque transition on scroll with smooth color/height changes
- **Mobile**: Slide-in drawer from right with backdrop blur
- **Active States**: Animated SVG line-draw underline
- **Accessibility**: Keyboard navigable, semantic HTML

### Menu Cards
- **Hover State**: Scale 1.03, translateY -6px, deepened shadow, 3D tilt perspective (small rotateX/rotateY)
- **Content Reveal**: Price and description slide-in from left with fade on hover
- **Interactive Elements**: Ripple/ink effect on button clicks with scale-down animation
- **Micro-illustration**: Lottie or SVG flourish appears on hover

### Gallery Images
- **Grid Layout**: Responsive masonry or uniform grid
- **Hover Effect**: Zoom scale 1.06 with parallax sub-layer movement based on mouse position
- **Lightbox**: Zoom-in with fade, background blur, morph close button animation
- **Loading**: Blur-up placeholder with crossfade to full resolution

### Forms & Inputs
- **Focus State**: Animated underline or floating label transition
- **Submit Button**: Linear progress bar or spinner animation, success checkmark morph on completion
- **Validation**: Smooth error message animations

### Testimonial Carousel
- **Auto-advance**: With pause on hover
- **Card Animation**: Flip/slide entrance effects
- **Interaction**: Touch-optimized swipe gestures

### Buttons & CTAs
- **Primary CTAs**: Micro-bounce entrance, gentle breathing idle animation, gradient sweep on hover
- **Hover**: TranslateY -4px, shadow growth, color gradient sweep across text
- **On Images**: Blurred backgrounds, no custom hover states (inherent button styles)

## Images & Visual Assets

### Hero & Background Images (6-8 total)
- **Sizes**: 1920×1080 or 2560×1440 high-resolution
- **Format**: WebP compressed
- **Treatment**: Multi-layer parallax with slower background movement
- **Overlays**: Animated gradient shifts, optional subtle particles

### Gallery Images (18-22 total)
- **Categories**: Product shots, barista action, interior spaces, lifestyle moments
- **Sizes**: 1200×800 or 800×600
- **Naming Convention**: hero-01.jpg, interior-wide-01.jpg, barista-espresso-01.jpg, pastry-01.jpg, street-10thramadan-01.jpg
- **Loading**: Lazy-loaded with blur-up placeholders

### Decorative Elements
- **Lottie Animations**: Steam effects, icon micro-animations, social media hover states
- **SVG Flourishes**: Decorative elements on card hovers

## Animation System (Critical Requirements)

### Animation Philosophy
- **Timing**: Fast micro-interactions (80-200ms), slower reveals (300-700ms)
- **Performance**: 60fps target, hardware-accelerated transforms
- **Accessibility**: Full prefers-reduced-motion fallback, optional animation toggle
- **Character**: Warm, snappy, slightly playful

### Key Animations
1. **Parallax Effects**: Multi-layer hero background, gallery image sub-layers
2. **Text Reveals**: Split-text with stagger using mask/clip techniques
3. **Scroll Triggers**: Section fade + slide-up with 50-100ms child stagger
4. **Card Interactions**: 3D tilt perspective, scale, shadow lift
5. **Route Transitions**: Shared element animations with layoutId
6. **Map Pin**: Animated drop on load, route line reveal on address hover
7. **Micro-interactions**: Animated link underlines, icon transforms, toast notifications with progress bars

### Technology Stack
- **Primary**: Framer Motion for component animations and route transitions
- **Advanced**: GSAP for complex timeline sequencing
- **Decorative**: Lottie for micro-animations and icon effects
- **Triggers**: IntersectionObserver for scroll-based reveals

## Accessibility & Performance
- **Semantic HTML**: Proper heading hierarchy, ARIA labels where needed
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Motion Reduction**: Disable/reduce non-essential animations for users who prefer reduced motion
- **Image Optimization**: Lazy loading, blur-up placeholders, WebP format
- **Hardware Acceleration**: Use translateZ and transform instead of top/left
- **Progressive Enhancement**: Graceful degradation on lower-powered devices
- **Lighthouse Target**: ≥90 performance and accessibility scores

## Content Details
- **Opening Hours**: Mon-Fri 08:00-22:00, Sat-Sun 09:00-00:00
- **Address**: Fifth District (El-Mogawra El-Khamisa), 10th of Ramadan City, Sharqia, Egypt
- **Contact**: Placeholder phone numbers and email (hello@fifthlanecafe.com)
- **Menu**: Complete items with short descriptions and EGP XX price placeholders

## Footer Elements
- Social media icons with hover Lottie animations
- Newsletter signup form
- Quick navigation links
- Contact information
- Back-to-top floating button with pulse animation