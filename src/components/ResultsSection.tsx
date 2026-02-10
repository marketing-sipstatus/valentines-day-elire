import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowRight } from "lucide-react";
import elireLogo from "@/assets/elire-logo.png";
import BookCard from "./BookCard";
import PromoBanner from "./PromoBanner";
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
import legatiPrinOnoareCover from "@/assets/legati-prin-onoare-cover.webp";
import datorieItalianaCover from "@/assets/datorie-italiana-cover.webp";
import theWordsCover from "@/assets/the-words-cover.webp";
import dorinteAscunseCover from "@/assets/dorinte-ascunse-cover.webp";
import subjugareCover from "@/assets/subjugare-cover.webp";
import theNeverKingCover from "@/assets/the-never-king-cover.webp";
import buttonsAndLaceCover from "@/assets/buttons-and-lace-cover.webp";
import capitanulCoverNew from "@/assets/capitanul-cover-new.webp";
import cei13MagnificiCover from "@/assets/cei-13-magnifici-cover.webp";
import duMaSpreNoiCover from "@/assets/du-ma-spre-noi-cover.webp";
interface Category {
  id: "INT" | "EMO" | "PWR";
  title: string;
  description: string;
  books: {
    title: string;
    author: string;
    coverImage: string;
    shopLink: string;
    originalPrice: string;
    salePrice: string;
  }[];
}
const allCategories: Category[] = [{
  id: "INT",
  title: "Povești dominate de intensitate și intrigă",
  description: "Intrigi construite atent, dinamici tensionate, relații complicate și răsturnări de situații care te țin captivă până la ultima pagină.",
  books: [{
    title: "Chasing the Wild",
    author: "Elliott Rose",
    coverImage: chasingTheWildCover,
    shopLink: "https://elirebooks.ro/chasing-the-wild-elliott-rose/",
    originalPrice: "75 lei",
    salePrice: "56,25 lei"
  }, {
    title: "Legați prin ură",
    author: "Cora Reilly",
    coverImage: legatiPrinUraCover,
    shopLink: "https://elirebooks.ro/legati-prin-ura-cora-reilly-elire/",
    originalPrice: "70 lei",
    salePrice: "52,50 lei"
  }, {
    title: "Subjugare",
    author: "Hanna Lee",
    coverImage: subjugareCover,
    shopLink: "https://elirebooks.ro/taboo-billionaires-03-subjugare-hanna-lee-elire/",
    originalPrice: "60 lei",
    salePrice: "45,00 lei"
  }, {
    title: "The Never King",
    author: "Nikkie St. Crowe",
    coverImage: theNeverKingCover,
    shopLink: "https://elirebooks.ro/the-never-king-nikkie-st-crowe/",
    originalPrice: "60 lei",
    salePrice: "45,00 lei"
  }]
}, {
  id: "EMO",
  title: "Povești despre conexiuni reale",
  description: "Cărți în care emoțiile se construiesc firesc, iar relațiile capătă sens în timp.",
  books: [{
    title: "Buttons & Lace",
    author: "Penelope Sky",
    coverImage: buttonsAndLaceCover,
    shopLink: "https://elirebooks.ro/buttons-and-lace-penelope-sky/",
    originalPrice: "70 lei",
    salePrice: "52,50 lei"
  }, {
    title: "Made Men Vol. 2: Căpitanul",
    author: "Ivo Dima",
    coverImage: capitanulCoverNew,
    shopLink: "https://elirebooks.ro/made-men-vol-2-capitanul-ivo-dima/",
    originalPrice: "60 lei",
    salePrice: "45,00 lei"
  }, {
    title: "Cei 13 magnifici",
    author: "Hanna Lee",
    coverImage: cei13MagnificiCover,
    shopLink: "https://elirebooks.ro/cei-13-magnifici-hanna-lee-elire/",
    originalPrice: "55 lei",
    salePrice: "41,25 lei"
  }, {
    title: "Du-mă spre noi",
    author: "Byanca Elysa",
    coverImage: duMaSpreNoiCover,
    shopLink: "https://elirebooks.ro/du-ma-spre-noi-byanca-elysa/",
    originalPrice: "60 lei",
    salePrice: "45,00 lei"
  }]
}, {
  id: "PWR",
  title: "Povești despre putere și decizie",
  description: "Povești bazate pe personaje puternice și fire narative bine construite, în care dorința vine din asumare, nu din impuls.",
  books: [{
    title: "Legați prin onoare",
    author: "Cora Reilly",
    coverImage: legatiPrinOnoareCover,
    shopLink: "https://elirebooks.ro/legati-prin-onoare-cora-reilly-elire/",
    originalPrice: "70 lei",
    salePrice: "52,50 lei"
  }, {
    title: "Datorie Italiană I",
    author: "Ivo Dima",
    coverImage: datorieItalianaCover,
    shopLink: "https://elirebooks.ro/seria-italieni-vol-1-datorie-italiana-partea-i-ivo-dima-elire/",
    originalPrice: "55 lei",
    salePrice: "41,25 lei"
  }, {
    title: "The Words",
    author: "Ashley Jade",
    coverImage: theWordsCover,
    shopLink: "https://elirebooks.ro/the-words-ashley-jade-elire/",
    originalPrice: "90 lei",
    salePrice: "67,50 lei"
  }, {
    title: "Vecini Vol. 8: Dorințe ascunse",
    author: "Hanna Lee",
    coverImage: dorinteAscunseCover,
    shopLink: "https://elirebooks.ro/vecini-vol-8-dorinte-ascunse-hanna-lee-elire/",
    originalPrice: "55 lei",
    salePrice: "41,25 lei"
  }]
}];
const categoryOrder: Record<string, string[]> = {
  INT: ["INT", "EMO", "PWR"],
  EMO: ["EMO", "INT", "PWR"],
  PWR: ["PWR", "INT", "EMO"]
};
const getOrderedCategories = (quizResult?: string): Category[] => {
  const order = categoryOrder[quizResult || ""] || ["INT", "EMO", "PWR"];
  return order.map(id => allCategories.find(c => c.id === id)!);
};
interface ResultsSectionProps {
  onRestart: () => void;
  quizResult?: string;
}
const ResultsSection = ({
  onRestart,
  quizResult
}: ResultsSectionProps) => {
  const categories = getOrderedCategories(quizResult);
  return <section className="min-h-screen py-20 px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-lavender/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blush/30 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Result Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          {/* Decorative divider */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-plum to-transparent" />
            <img src={elireLogo} alt="Elire" className="mx-4 h-14 w-auto" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-plum to-transparent" />
          </div>

          <h2 className="results-mobile-title font-serif text-3xl md:text-5xl text-plum font-semibold mb-6">
            Recomandări literare cu care ai făcut match de Valentine's Day
          </h2>
          {quizResult === "INT" && <p className="results-mobile-description text-lg text-muted-foreground max-w-2xl mx-auto font-light italic">
              Pentru tine, lectura nu e un refugiu, ci mai degrabă o ocazie de a descoperi și explora noi provocări. Nu te mulțumești cu povești cuminți. Te atrag firele narative pline de intrigă și ai tendința să alegi povești care cer implicare și care nu îți oferă răspunsuri simple.
              <br /><br />
              Când citești, cauți senzația că lucrurile pot lua o nouă întorsătură la fiecare pas. Tocmai această lipsă de siguranță te ține acolo, pagină după pagină.
            </p>}
          {quizResult === "EMO" && <p className="results-mobile-description text-lg text-muted-foreground max-w-2xl mx-auto font-light italic">
              Pentru tine, lectura este un spațiu sigur. Rezonezi cu lumi echilibrate, în care lucrurile se construiesc firesc, iar emoțiile au timp să se clarifice. Nu cauți intensitate gratuită, ci profunzime.
              <br /><br />
              Alegi cărți care te însoțesc discret, care te lasă să simți și să înțelegi, fără să te copleșească. La final, nu rămâi cu întrebări apăsătoare, ci cu sentimentul că ai ajuns mai aproape de răspunsurile pe care le căutai și că te-ai regăsit în paginile cărții care pare a fi scrisă pentru tine.
            </p>}
          {quizResult === "PWR" && <p className="results-mobile-description text-lg text-muted-foreground max-w-2xl mx-auto font-light italic">
              Ești atrasă de povești în care nimic nu este lăsat la voia întâmplării. Lumea ideală pentru tine are structură, cu direcție și un ritm bine controlat, iar dorința nu este impulsivă, ci asumată. Îți place să simți că fiecare pagină întoarsă mai pune o cărămidă la întregirea finalului pe care îl aștepți încrezătoare.
              <br /><br />
              Lecturile care te reprezintă sunt cele în care alegerile contează și nu sunt luate ușor. Sunt cărți care îți confirmă intuiția, îți dau energie și te fac să vrei să rămâi în același univers și să continui mai departe pe linia deja trasată.
            </p>}
        </motion.div>

        {/* Book Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => <motion.div key={categoryIndex} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: categoryIndex * 0.1
        }} className="relative">
              {/* Category Header */}
              <div className="mb-8 md:mb-10">
                {categoryIndex < 2 && <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-rose" size={18} />
                    <span className="text-sm font-medium text-rose uppercase tracking-widest">
                      {categoryIndex === 0 ? "Recomandare" : "Descoperă alte titluri"}
                    </span>
                  </div>}
                <h3 className="font-serif text-2xl md:text-3xl text-plum font-semibold mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground max-w-xl">{category.description}</p>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {category.books.map((book, bookIndex) => <BookCard key={bookIndex} {...book} delay={bookIndex * 0.1} />)}
              </div>

              {/* Promo Banner after 1st and 2nd categories, Divider after others */}
              {categoryIndex < 2 ? <PromoBanner /> : null}
            </motion.div>)}
        </div>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-10 md:p-14 max-w-2xl mx-auto">
            <Heart className="mx-auto mb-6 text-rose animate-float" size={40} fill="currentColor" />
            <h3 className="font-serif text-2xl md:text-3xl text-plum font-semibold mb-4"><a href="https://elirebooks.ro/">www.elirebooks.ro</a></h3>
            <p className="text-muted-foreground mb-8">
              Explorează colecția completă Elire și găsește povestea perfectă pentru tine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onRestart} variant="outline" size="lg" className="border-rose text-rose hover:bg-rose/10 rounded-full px-8">
                Reia quiz-ul
              </Button>
              <Button size="lg" className="bg-gradient-button text-primary-foreground hover:opacity-90 shadow-romantic hover:shadow-glow rounded-full px-8">
                Vezi toate cărțile
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="mt-20 text-center text-sm text-muted-foreground">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart size={14} className="text-rose" fill="currentColor" />
            <span className="font-serif text-lg text-plum">Elire</span>
            <Heart size={14} className="text-rose" fill="currentColor" />
          </div>
          <p>Editura Elire</p>
        </motion.footer>
      </div>
    </section>;
};
export default ResultsSection;