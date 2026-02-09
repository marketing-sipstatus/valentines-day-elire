import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowRight } from "lucide-react";
import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";

// Import book covers
import capitanulCover from "@/assets/capitanul-cover.png";
import legatiPrinUraCover from "@/assets/legati-prin-ura-cover.png";
import chasingTheWildCover from "@/assets/chasing-the-wild-cover.png";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";
import bookCover7 from "@/assets/book-cover-7.jpg";
import bookCover8 from "@/assets/book-cover-8.jpg";
import bookCover9 from "@/assets/book-cover-9.jpg";

interface Category {
  title: string;
  description: string;
  books: {
    title: string;
    author: string;
    coverImage: string;
    shopLink: string;
  }[];
}

const categories: Category[] = [
  {
    title: "Pentru vindecare, nu iluzii",
    description: "Povești intense, relații complicate și emoții care nu cer permisiune.",
    books: [
      {
        title: "Căpitanul",
        author: "Ivo Dima",
        coverImage: capitanulCover,
        shopLink: "https://elirebooks.ro/made-men-vol-2-capitanul-ivo-dima/",
      },
      {
        title: "Legați prin ură",
        author: "Cora Reilly",
        coverImage: legatiPrinUraCover,
        shopLink: "https://elirebooks.ro/legati-prin-ura-cora-reilly-elire/",
      },
      {
        title: "Chasing the Wild",
        author: "Elliott Rose",
        coverImage: chasingTheWildCover,
        shopLink: "https://elirebooks.ro/chasing-the-wild-elliott-rose/",
      },
    ],
  },
  {
    title: "Pentru când vrei să simți totul",
    description: "Emoții profunde, conexiuni care te transformă și povești care rămân cu tine.",
    books: [
      {
        title: "The Notebook",
        author: "Nicholas Sparks",
        coverImage: bookCover4,
        shopLink: "#",
      },
      {
        title: "Me Before You",
        author: "Jojo Moyes",
        coverImage: bookCover5,
        shopLink: "#",
      },
      {
        title: "The Fault in Our Stars",
        author: "John Green",
        coverImage: bookCover6,
        shopLink: "#",
      },
    ],
  },
  {
    title: "Pentru când vrei putere, nu lacrimi",
    description: "Eroine puternice, alegeri dificile și iubiri care nu te slăbesc.",
    books: [
      {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        coverImage: bookCover7,
        shopLink: "#",
      },
      {
        title: "The Cruel Prince",
        author: "Holly Black",
        coverImage: bookCover9,
        shopLink: "#",
      },
      {
        title: "Kingdom of the Wicked",
        author: "Kerri Maniscalco",
        coverImage: bookCover8,
        shopLink: "#",
      },
    ],
  },
];

interface ResultsSectionProps {
  onRestart: () => void;
  quizResult?: string;
}

const ResultsSection = ({ onRestart, quizResult }: ResultsSectionProps) => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-lavender/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blush/30 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Decorative divider */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
            <Heart className="mx-4 text-rose animate-pulse-soft" size={20} fill="currentColor" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-plum font-semibold mb-6">
            Poveștile care ți se potrivesc acum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light italic">
            „În perioada asta, te atrag poveștile care spun adevărul, nu promisiuni goale."
          </p>
        </motion.div>

        {/* Book Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="mb-8 md:mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-rose" size={18} />
                  <span className="text-sm font-medium text-rose uppercase tracking-widest">
                    Recomandare
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-plum font-semibold mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground max-w-xl">{category.description}</p>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {category.books.map((book, bookIndex) => (
                  <BookCard
                    key={bookIndex}
                    {...book}
                    delay={bookIndex * 0.1}
                  />
                ))}
              </div>

              {/* Divider */}
              {categoryIndex < categories.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-3xl p-10 md:p-14 max-w-2xl mx-auto">
            <Heart className="mx-auto mb-6 text-rose animate-float" size={40} fill="currentColor" />
            <h3 className="font-serif text-2xl md:text-3xl text-plum font-semibold mb-4">
              Vrei mai multe recomandări?
            </h3>
            <p className="text-muted-foreground mb-8">
              Explorează colecția completă Elire și găsește povestea perfectă pentru tine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onRestart}
                variant="outline"
                size="lg"
                className="border-rose text-rose hover:bg-rose/10 rounded-full px-8"
              >
                Reia quiz-ul
              </Button>
              <Button
                size="lg"
                className="bg-gradient-button text-primary-foreground hover:opacity-90 shadow-romantic hover:shadow-glow rounded-full px-8"
              >
                Vezi toate cărțile
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-sm text-muted-foreground"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart size={14} className="text-rose" fill="currentColor" />
            <span className="font-serif text-lg text-plum">Elire</span>
            <Heart size={14} className="text-rose" fill="currentColor" />
          </div>
          <p>Cu dragoste, de Valentine's Day 2025</p>
          <p className="mt-4 text-xs text-muted-foreground">Debug: quizResult = {quizResult}</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ResultsSection;
