import { motion } from "framer-motion";
import promoBannerBg from "@/assets/promo-banner-bg.png";

const PromoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-16 mx-auto w-full"
    >
      {/* Wrapper with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-20 z-10 bg-gradient-to-r from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none rounded-l-2xl" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-12 md:w-20 z-10 bg-gradient-to-l from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none rounded-r-2xl" />

        <div
          className="relative overflow-hidden rounded-2xl min-h-[200px] md:min-h-[240px] flex items-center"
          style={{
            backgroundImage: `url(${promoBannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          {/* Text overlay — positioned right on desktop, centered on mobile */}
          <div className="relative z-20 w-full px-6 py-12 md:py-16 md:pl-[45%] md:pr-10 text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-4xl text-plum font-semibold mb-2 md:mb-3 leading-tight drop-shadow-sm">
              Reduceri de până la 50% la toate cărțile
            </h3>
            <p className="text-base md:text-lg text-plum/80 font-light mb-4 md:mb-6 leading-relaxed">
              în perioada 13–15 Februarie
            </p>
            <p className="text-[10px] md:text-xs text-plum/50">
              *în limita stocului disponibil
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
