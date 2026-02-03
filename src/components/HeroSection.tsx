import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingHearts from "./FloatingHearts";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Hearts */}
      <FloatingHearts />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
            <Sparkles className="mx-4 text-rose animate-pulse-soft" size={24} />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
          </motion.div>

          {/* Logo/Brand */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium tracking-widest text-lavender-deep mb-6 uppercase"
          >
            Elire
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-plum leading-tight mb-6"
          >
            Ce carte Elire e pentru tine de{" "}
            <span className="text-gradient italic">Valentine's</span>?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light"
          >
            Răspunde la 4 întrebări și descoperă ce poveste ți se potrivește acum.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              onClick={onStartQuiz}
              size="lg"
              className="bg-gradient-button text-primary-foreground hover:opacity-90 transition-all duration-300 px-10 py-6 text-lg font-medium shadow-romantic hover:shadow-glow rounded-full"
            >
              <Sparkles className="mr-2" size={18} />
              Începe quiz-ul
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-lavender-deep/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-lavender-deep/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
