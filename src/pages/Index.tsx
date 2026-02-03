import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import QuizSection from "@/components/QuizSection";
import ResultsSection from "@/components/ResultsSection";

type View = "hero" | "quiz" | "results";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("hero");
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const handleStartQuiz = () => {
    setCurrentView("quiz");
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuizComplete = (answers: number[]) => {
    setQuizAnswers(answers);
    setCurrentView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRestart = () => {
    setQuizAnswers([]);
    setCurrentView("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentView === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection onStartQuiz={handleStartQuiz} />
          </motion.div>
        )}

        {currentView === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentView === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultsSection onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
