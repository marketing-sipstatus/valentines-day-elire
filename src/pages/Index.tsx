import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import QuizSection from "@/components/QuizSection";
import ResultsSection from "@/components/ResultsSection";

export type QuizResult = "INT" | "EMO" | "PWR";

type View = "hero" | "quiz" | "results";

// Each question's options map to a category by index
const answerCategoryMap: QuizResult[][] = [
  ["PWR", "INT", "EMO", "INT"], // Q1
  ["INT", "EMO", "PWR", "INT"], // Q2
  ["EMO", "INT", "PWR", "INT"], // Q3
  ["INT", "EMO", "PWR", "INT"], // Q4
];

function computeQuizResult(answers: number[]): QuizResult {
  const counts: Record<QuizResult, number> = { INT: 0, EMO: 0, PWR: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    counts[answerCategoryMap[questionIndex][answerIndex]]++;
  });

  const sorted: QuizResult[] = (["INT", "EMO", "PWR"] as QuizResult[]).sort(
    (a, b) => counts[b] - counts[a]
  );

  // Clear winner
  if (counts[sorted[0]] > counts[sorted[1]]) return sorted[0];

  // Tie — use Q4 as tiebreaker
  const q4Category = answerCategoryMap[3][answers[3]];
  if (sorted.slice(0, sorted.filter(c => counts[c] === counts[sorted[0]]).length).includes(q4Category)) {
    return q4Category;
  }

  // Still tied, default INT
  return "INT";
}

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("hero");
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult>("INT");

  const handleStartQuiz = () => {
    setCurrentView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuizComplete = (answers: number[]) => {
    setQuizAnswers(answers);
    setQuizResult(computeQuizResult(answers));
    setCurrentView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRestart = () => {
    setQuizAnswers([]);
    setQuizResult("INT");
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
