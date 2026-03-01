import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


import collectionTextiles from "@/assets/textile1.png";
import collectionDecor from "@/assets/textile2.png";
import collectionLifestyle from "@/assets/tsr-cards.jpeg";


const collections = [
  {
    title: "Heritage Textiles",
    subtitle: "Silk & Woven Arts",
    description: "Hand-loomed fabrics carrying the soul of ancient traditions",
    image: collectionTextiles,
  },
  {
    title: "Artisan Décor",
    subtitle: "Brass & Metalwork",
    description: "Luminous pieces that dance with light and shadow",
    image: collectionDecor,
  },
  {
    title: "Living Treasures",
    subtitle: "Ceramics & Vessels",
    description: "Functional art for the discerning home",
    image: collectionLifestyle,
  },
];

const CollectionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-32 lg:py-48 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="divider-ornate mb-8">
            <span className="text-refined text-gold tracking-[0.3em]">Collections</span>
          </div>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Curated with <span className="text-elegant text-gold">intention</span>
          </h2>
        </motion.div>

        {/* Collection Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-deep-brown/0 group-hover:bg-deep-brown/20 transition-all duration-700" />

                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-refined text-ivory bg-deep-brown/60 px-6 py-3 backdrop-blur-sm tracking-[0.2em]">
                    Explore
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <span className="text-refined text-gold block mb-2">
                  {collection.subtitle}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors duration-500">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground font-light">
                  {collection.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
