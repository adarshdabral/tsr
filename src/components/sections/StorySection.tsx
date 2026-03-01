import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="max-w-5xl mx-auto text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="divider-ornate mb-12"
          >
            <span className="text-script text-4xl text-gold tracking-[0.3em]">Our Story</span>
          </motion.div>

          {/* Main Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-12"
          >
            Born from the whispers
            <br />
            <span className="text-script text-gold">of ancient trade routes</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8 text-lg md:text-3xl text-muted-foreground font-light leading-relaxed text-script"
          >
            <p>
              Centuries ago intrepid travellers traded the finest textiles across the silk route.
Luxurious silk fabric was percieved to be a symbol of royalty.
Drawing inspiration from this ancient trade passage, rooted in its rich cultural heritage, The Silk Route strikes a quintessential harmony between history and contemporary.
Art, Luxury, Heritage and Functionality are interwoven together in our bespoke merchandise to offer consummate value. 
In our passionate quest to curate the finest merchandise for your keepsakes, we are eternal wanderers criss crossing latitudes and longitudes to bring back the beauty of artisanal handicraft and age old skills adapted to today’s modern times.
 The Silk Route fashion curation celebrates the rich tapestry of cultures, craftsmanship, tales of folklore and aesthetics that once flowed along the ancient trade routes linking East and West. 

            </p>
            <p>
             Crafts to showcase how centuries of exchange shaped global style. Our bespoke collections through the season are one of a kind which highlight not only our timeless pieces but also the stories behind them—artisanship passed through generations, motifs influenced by migration, and techniques refined through cultural encounters.
By blending historical authenticity with modern design, our curation becomes a living narrative of creativity, trade and cultural harmony reminding us how fashion has always been a bridge between worlds.
A pilgrim by heart and an arduous soul we welcome you to experience our journey at our atelier. 
            </p>
          </motion.div>

          {/* Decorative Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <blockquote className="font-serif text-2xl md:text-3xl text-script text-foreground/80 max-w-3xl mx-auto">
              "True luxury is not found in excess, but in the quiet confidence 
              of impeccable craft and enduring beauty."
            </blockquote>
            <cite className="text-script text-gold mt-6 block not-italic">
              — The Silk Route Philosophy
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
