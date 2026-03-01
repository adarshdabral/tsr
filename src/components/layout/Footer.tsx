import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-deep-brown text-ivory py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-light mb-4">
              <span className="text-gold">The</span> Silk Route
            </h2>
            <span className="text-refined text-ivory/60 tracking-[0.3em] block mb-6">
              UAE
            </span>
            <p className="text-ivory/70 font-light leading-relaxed">
              A curated journey through heritage, craftsmanship, 
              and the timeless art of luxury living.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:text-center">
            <h3 className="text-refined text-gold tracking-[0.3em] mb-8">
              Explore
            </h3>
            <ul className="space-y-4">
              {["Collections", "Our Story", "Craftsmanship", "Journal"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-ivory/70 hover:text-gold transition-colors duration-500 font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:text-right">
            <h3 className="text-refined text-gold tracking-[0.3em] mb-8">
              Connect
            </h3>
            <div className="space-y-4 text-ivory/70 font-light">
              <p>The Dubai Mall</p>
              <p>Downtown Dubai, UAE</p>
              <p className="pt-4">
                <a href="mailto:hello@thesilkrouteuae.com" className="hover:text-gold transition-colors duration-500">
                  hello@thesilkrouteuae.com
                </a>
              </p>
              <p>
                <a href="tel:+97145551234" className="hover:text-gold transition-colors duration-500">
                  +971 4 555 1234
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-ivory/40 text-sm font-light">
            © 2024 The Silk Route UAE. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-8">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-refined text-ivory/50 hover:text-gold transition-colors duration-500 tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <span className="font-serif text-6xl lg:text-8xl text-ivory/5">
            ۞
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
