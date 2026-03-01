import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import editorialImage from "@/assets/editorial-1.jpg";
import collectionTextiles from "@/assets/collection-textiles.jpg";

const EditorialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-48 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="divider-ornate mb-8">
            <span className="text-refined text-gold tracking-[0.3em]">Editorial</span>
          </div>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Living with <span className="text-elegant text-gold">beauty</span>
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden image-reveal">
              <img
                src={editorialImage}
                alt="Luxury silk cushions in warm tones"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="mt-6">
              <span className="text-refined text-gold block mb-2">The Edit</span>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-gold transition-colors duration-500">
                The Art of Serene Interiors
              </h3>
              <p className="text-muted-foreground font-light mt-2">
                Creating spaces that breathe tranquility and timeless sophistication
              </p>
            </div>
          </motion.div>

          {/* Stacked Smaller Images */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden image-reveal">
                <img
                  src={collectionTextiles}
                  alt="Heritage silk textile detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="text-refined text-gold block mb-2">Spotlight</span>
                <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors duration-500">
                  The Golden Thread Collection
                </h3>
              </div>
            </motion.div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-background p-8 lg:p-12 border-l-2 border-gold"
            >
              <blockquote className="font-serif text-xl lg:text-2xl text-elegant text-foreground/80 mb-4">
                "Surrounding yourself with beauty is not vanity—it is a daily
                practice of honoring the sacred in the ordinary."
              </blockquote>
              <cite className="text-refined text-gold not-italic">
                — Journal Entry, Dubai 2024
              </cite>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
