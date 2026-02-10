import { motion } from "framer-motion";
import promoBannerBg from "@/assets/promo-banner-bg.png";
import promoBannerMobile from "@/assets/promo-banner-mobile.png";

const PromoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-8 mx-auto w-full"
    >
      {/* Desktop layout — overlay text on background */}
      <div className="hidden md:block relative">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none rounded-l-2xl" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none rounded-r-2xl" />

        <div
          className="relative overflow-hidden rounded-2xl min-h-[480px] flex items-center"
          style={{
            backgroundImage: `url(${promoBannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          <div className="relative z-20 w-full py-16 pl-[45%] pr-10 text-left">
            <h3 className="font-serif text-5xl text-plum font-semibold mb-3 leading-snug drop-shadow-sm">
              Reduceri de până la 50% la toate cărțile
            </h3>
            <p className="text-lg text-plum/80 font-light mb-6 leading-relaxed">
              în perioada 13–15 Februarie
            </p>
            <p className="text-xs text-plum/50">
              *în limita stocului disponibil
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout — text overlaid on mobile-specific background */}
      <div
        className="md:hidden relative rounded-2xl overflow-hidden flex flex-col items-center"
        style={{
          backgroundImage: `url(${promoBannerMobile})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          aspectRatio: "3 / 4",
        }}
      >
        <div className="absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none" />
        <div className="relative z-20 w-full px-6 pt-[42%] text-center">
          <h3 className="font-serif text-3xl text-plum font-semibold mb-2 leading-snug drop-shadow-sm">
            Reduceri de până la 50% la toate cărțile
          </h3>
          <p className="text-base text-plum/80 font-light mb-3 leading-relaxed">
            în perioada 13–15 Februarie
          </p>
          <p className="text-[10px] text-plum/50">
            *în limita stocului disponibil
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
