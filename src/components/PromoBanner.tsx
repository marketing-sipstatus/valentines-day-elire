import { motion } from "framer-motion";
import promoBannerBg from "@/assets/promo-banner-bg.png";
import promoBannerHeart from "@/assets/promo-banner-heart.png";

const PromoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-8 mx-auto w-full"
    >
      {/* Desktop layout — overlay text on background */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none rounded-l-2xl" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[hsl(var(--lavender)/0.3)] to-transparent pointer-events-none rounded-r-2xl" />

        <a
          href="https://elirebooks.ro/carti/"
          className="relative block overflow-hidden rounded-2xl min-h-[480px] flex items-center"
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
        </a>
      </div>

      {/* Mobile & Tablet layout — heart image on top, text below */}
      <a
        href="https://elirebooks.ro/carti/"
        className="lg:hidden relative block rounded-2xl overflow-hidden"
      >
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-[hsl(var(--lavender)/0.2)] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-[hsl(var(--lavender)/0.2)] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-8 z-10 bg-gradient-to-b from-[hsl(var(--lavender)/0.2)] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-8 z-10 bg-gradient-to-t from-[hsl(var(--lavender)/0.2)] to-transparent pointer-events-none" />

        {/* Background image fills container */}
        <img
          src={promoBannerHeart}
          alt=""
          className="w-full h-auto block object-cover"
        />

        {/* Text positioned in the lower portion of the image */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center text-center px-6 pb-8 md:pb-12 pt-4">
          <h3 className="font-serif text-2xl md:text-3xl text-plum font-semibold mb-2 leading-snug drop-shadow-sm">
            Reduceri de până la 50% la toate cărțile
          </h3>
          <p className="text-sm md:text-base text-plum/80 font-light mb-2 leading-relaxed">
            în perioada 13–15 Februarie
          </p>
          <p className="text-[10px] md:text-xs text-plum/50">
            *în limita stocului disponibil
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default PromoBanner;
