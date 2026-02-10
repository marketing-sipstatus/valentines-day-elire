import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PromoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-16 mx-auto max-w-3xl"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-lavender/60 via-secondary/50 to-blush/60 border border-white/30 px-6 py-8 md:px-12 md:py-10 text-center">
        {/* Subtle gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[hsl(40_40%_70%/0.5)] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[hsl(40_40%_70%/0.5)] to-transparent" />

        {/* Decorative sparkle */}
        <Sparkles className="mx-auto mb-3 text-[hsl(40_40%_70%/0.5)]" size={18} />

        <h3 className="font-serif text-xl md:text-2xl text-plum font-medium mb-2">
          Reduceri de până la 50% la toate cărțile
        </h3>
        <p className="text-sm md:text-base text-plum/70 font-light mb-4">
          în perioada 13–15 Februarie
        </p>
        <p className="text-[10px] md:text-xs text-muted-foreground/60">
          în limita stocului disponibil
        </p>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
