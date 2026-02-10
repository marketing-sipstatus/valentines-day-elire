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
      <div
        className="relative overflow-hidden rounded-2xl px-6 py-14 md:px-12 md:py-20 text-center shadow-[0_4px_30px_hsl(280_30%_50%/0.1)]"
        style={{
          backgroundImage: `url(${promoBannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="font-serif text-2xl md:text-4xl text-plum font-semibold mb-3 drop-shadow-sm">
          Reduceri de până la 50% la toate cărțile
        </h3>
        <p className="text-base md:text-lg text-plum/80 font-light mb-6">
          în perioada 13–15 Februarie
        </p>
        <p className="text-[10px] md:text-xs text-plum/50">
          *în limita stocului disponibil
        </p>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
