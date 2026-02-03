import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  shopLink: string;
  delay?: number;
}

const BookCard = ({ title, author, coverImage, shopLink, delay = 0 }: BookCardProps) => {
  return (
    <motion.a
      href={shopLink}
      target="_blank"
      rel="noopener noreferrer"
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

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 text-primary-foreground text-sm font-medium">
            <ExternalLink size={16} />
            <span>Vezi în magazin</span>
          </div>
        </div>

        {/* Heart icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          <Heart size={14} className="text-rose" fill="currentColor" />
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
