

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/s1n.mp4"; // <-- your video
import heroPoster from "@/assets/hero_bg.jpeg"; // fallback poster

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 ">
        <video
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0  " />
        {/* bg-gradient-to-b from-deep-brown/40 via-deep-brown/30 to-deep-brown/60 */}
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 left-10 w-32 h-32 border border-champagne/30 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-32 right-20 w-48 h-48 border border-champagne/20 rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-display text-ivory text-5xl md:text-7xl lg:text-8xl mb-8 font-elegant tracking-wide leading-tight text-gold-light">
            {/* The Silk Route */}
            <br />
            <span className="text-elegant text-gold-light">
              {/* Curating Artful Handmade */}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-xl md:text-2xl text-ivory/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {/* A curated collection of timeless treasures, handcrafted with
            centuries of tradition along the ancient silk roads. */}
            <br /><br /><br /><br /><br /><br /><br /><br />
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center"
>
  <Button className="text-ivory transition-colors duration-300 hover:bg-deep-brown hover:text-ivory" variant="hero" size="xl">
    Discover Us
  </Button>

  <Button className="text-ivory transition-colors duration-300 hover:bg-deep-brown hover:text-ivory" variant="hero" size="xl">
    Collection
  </Button>

  <Button className="text-ivory transition-colors duration-300 hover:bg-deep-brown hover:text-ivory" variant="hero" size="xl">
    Craftsmanship
  </Button>

  <Button className="text-ivory transition-colors duration-300 hover:bg-deep-brown hover:text-ivory" variant="hero" size="xl">
    Expression of Interest
  </Button>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


