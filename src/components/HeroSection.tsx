import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import elireLogo from "@/assets/elire-logo.png";
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
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <img src={elireLogo} alt="Elire Books" className="w-28 md:w-36 h-auto" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-plum leading-tight mb-6"
          >
            Ești pregătită de un
            <br />
            <span className="text-gradient italic">blind date literar</span>?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light"
          >
            De Valentine's Day, te provocăm să te lași aleasă de cartea care ți se potrivește. Răspunde la câteva întrebări și noi îți facem match!
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
              Găsește-mi match-ul!
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
