import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CallToEmotionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold/5 via-champagne/10 to-gold/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ornamental Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 flex justify-center"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="text-gold"
            >
              <path
                d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z"
                fill="currentColor"
                fillOpacity="0.3"
              />
              <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
          >
            Experience the essence
            <br />
            <span className="text-elegant text-gold">of refined living</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Every piece we offer is an invitation—to slow down, to appreciate,
            to surround yourself with objects that carry meaning and history.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="luxury" size="xl">
              Begin Your Journey
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-border"
          >
            {/*<div className="flex flex-wrap justify-center gap-12 lg:gap-20">
              {[
                // { number: "1000+", label: "Artisan Piec" },
                // { number: "15", label: "Countries Sourced" },
                // { number: "25", label: "Years of Heritage" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-display text-3xl lg:text-4xl text-gold block">
                    {stat.number}
                  </span>
                  <span className="text-refined text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToEmotionSection;
