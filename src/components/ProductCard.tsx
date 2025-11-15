import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  price?: string;
  rating: number;
  reviews: number;
  affiliateLink: string;
  badge?: string;
}

const ProductCard = ({ title, image, price, rating, reviews, affiliateLink, badge }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground font-bold">
            {badge}
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold line-clamp-2 min-h-[3rem] text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({reviews})</span>
        </div>
        
        {price && (
          <div className="text-2xl font-bold text-primary">{price}</div>
        )}
        
        <Button 
          className="w-full group/btn" 
          variant="gaming"
          asChild
        >
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            Ver Oferta
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
