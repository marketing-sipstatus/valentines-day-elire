import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

interface QuizSectionProps {
  onComplete: (answers: number[]) => void;
}

const questions = [
  {
    question: "Ce stare de spirit te caracterizează în perioada aceasta?",
    options: [
      "Știu ce vreau și nu fac compromisuri",
      "Plină de emoții contradictorii",
      "Caut liniște, emoție și conexiune reală",
      "Curioasă și pregătită să îmi asum riscuri",
    ],
  },
  {
    question: "Care e ingredientul principal al unei lecturi cu care rezonezi 100%?",
    options: [
      "Intensitate, conflicte și dorințe greu de controlat",
      "Sensibilitate, emoție și vindecare",
      "Putere, asumare și personaje memorabile",
      "Imprevizibilul împletit cu o doză de risc",
    ],
  },
  {
    question: "Când vrei să evadezi într-un univers paralel, îți dorești…",
    options: [
      "…un loc calm, unde timpul curge fără presiune și toate întrebările capătă sens",
      "…un loc unde totul pare temporar, iar apropierea vine la pachet cu pericolul",
      "…un loc în care direcția e limpede, iar pașii vin natural",
      "…un loc misterios care te provoacă să rămâi",
    ],
  },
  {
    question: "Imaginează-ți că date-ul s-a încheiat. Cu ce sentiment vrei să rămâi după citirea cărții?",
    options: [
      "Cu dorința de a descoperi mai mult",
      "Cu impresia că m-am regăsit",
      "Cu încrederea că aș repeta experiența",
      "Cu sentimentul că acesta a fost doar începutul",
    ],
  },
];

const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-rose/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-lavender/20 blur-3xl" />

      <div className="container mx-auto max-w-2xl">
        {/* Quiz intro text */}

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Întrebarea {currentQuestion + 1} din {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-button"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 shadow-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question */}
              <h2 className="font-serif text-2xl md:text-3xl text-plum text-center mb-10">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                      selectedOption === index
                        ? "border-rose bg-rose/10 shadow-romantic"
                        : "border-border bg-card/50 hover:border-rose/50 hover:bg-rose/5"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedOption === index
                            ? "border-rose bg-rose"
                            : "border-muted-foreground"
                        }`}
                      >
                        {selectedOption === index && (
                          <Heart size={10} className="text-primary-foreground" fill="currentColor" />
                        )}
                      </div>
                      <span className="text-foreground font-medium">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedOption !== null ? 1 : 0.5 }}
          >
            <Button
              onClick={handleNext}
              disabled={selectedOption === null}
              size="lg"
              className="bg-gradient-button text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 font-medium shadow-romantic hover:shadow-glow rounded-full disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1 ? (
                <>
                  <Sparkles className="mr-2" size={18} />
                  Vezi rezultatul
                </>
              ) : (
                <>
                  Continuă
                  <ArrowRight className="ml-2" size={18} />
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
