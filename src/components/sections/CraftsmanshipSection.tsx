
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const values = [
  {
    title: "Handcrafted",
    description: "Each piece shaped by the hands of master artisans",
  },
  {
    title: "Authentic",
    description: "True to centuries-old techniques and traditions",
  },
  {
    title: "Timeless",
    description: "Designed to transcend trends and generations",
  },
  {
    title: "Ethical",
    description: "Fair practices honoring makers and materials",
  },
];

const CraftsmanshipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="craftsmanship" className="py-32 lg:py-48 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={craftsmanshipImage}
                alt="Artisan crafting silk textile"
                className="w-full h-full object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-8">
              <span className="text-refined text-gold tracking-[0.3em] block mb-4">
                The Art of Making
              </span>
              <h2 className="text-display text-4xl md:text-5xl text-foreground mb-6">
                Craftsmanship that
                <br />
                <span className="text-elegant text-gold">speaks silently</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                In a world of mass production, we choose a different path. Our artisans
                work in quiet studios, where time moves slowly and every stitch, every
                curve, every finish receives the attention it deserves.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-500">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import craftsmanshipImage from "@/assets/craftsmanship.jpg";

// const values = [
//   {
//     title: "Handcrafted",
//     description: "Each piece shaped by the hands of master artisans",
//   },
//   {
//     title: "Authentic",
//     description: "True to centuries-old techniques and traditions",
//   },
//   {
//     title: "Timeless",
//     description: "Designed to transcend trends and generations",
//   },
//   {
//     title: "Ethical",
//     description: "Fair practices honoring makers and materials",
//   },
// ];

// const CraftsmanshipSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="craftsmanship" className="py-32 lg:py-48 bg-background overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="relative"
//           >
//             <div className="relative aspect-square overflow-hidden">
//               <img
//                 src={craftsmanshipImage}
//                 alt="Artisan crafting silk textile"
//                 className="w-full h-full object-cover"
//               />
//               {/* Decorative Frame */}
//               <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
//             </div>
//             {/* Floating Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="absolute -bottom-8 -right-8 lg:bottom-12 lg:-right-12 bg-gold text-ivory p-8 shadow-luxury"
//             >
//               <span className="text-display text-4xl lg:text-5xl block"></span>
//               <span className="text-refined tracking-widest">Years of Craft</span>
//             </motion.div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//           >
//             <div className="mb-8">
//               <span className="text-refined text-gold tracking-[0.3em] block mb-4">
//                 The Art of Making
//               </span>
//               <h2 className="text-display text-4xl md:text-5xl text-foreground mb-6">
//                 Craftsmanship that
//                 <br />
//                 <span className="text-elegant text-gold">speaks silently</span>
//               </h2>
//               <p className="text-lg text-muted-foreground font-light leading-relaxed">
//                 In a world of mass production, we choose a different path. Our artisans 
//                 work in quiet studios, where time moves slowly and every stitch, every 
//                 curve, every finish receives the attention it deserves.
//               </p>
//             </div>

//             {/* Values Grid */}
//             <div className="grid grid-cols-2 gap-8 mt-12">
//               {values.map((value, index) => (
//                 <motion.div
//                   key={value.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   className="group"
//                 >
//                   <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-500">
//                     {value.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground font-light">
//                     {value.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CraftsmanshipSection;

