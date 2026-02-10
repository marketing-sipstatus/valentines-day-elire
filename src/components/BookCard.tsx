import { motion } from "framer-motion";

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  shopLink: string;
  originalPrice: string;
  salePrice: string;
  delay?: number;
}

const BookCard = ({ title, author, coverImage, shopLink, originalPrice, salePrice, delay = 0 }: BookCardProps) => {
  return (
    <motion.a
      href={shopLink}
      className="group block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
        {/* Book Cover */}
        <div className="aspect-[2/3] overflow-hidden bg-gradient-card">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Price overlay - always visible */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/90 via-plum/50 to-transparent p-4 pt-10 flex items-end justify-start">
          <div className="flex items-center gap-2">
            <span className="text-primary-foreground/70 text-[10px] md:text-xs line-through">{originalPrice}</span>
            <span className="text-primary-foreground text-base md:text-lg font-bold">{salePrice}</span>
          </div>
        </div>

        {/* SALE badge */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-md">
          <span className="text-rose text-[9px] font-bold uppercase leading-none">SALE</span>
        </div>
      </div>

      {/* Book Info */}
      <div className="mt-4 text-center">
        <h4 className="font-serif text-lg text-plum font-semibold line-clamp-2 group-hover:text-rose-deep transition-colors">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mt-1">{author}</p>
      </div>
    </motion.a>
  );
};

export default BookCard;
