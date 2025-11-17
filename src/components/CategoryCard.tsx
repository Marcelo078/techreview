import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
  image?: string;
  imageAlt?: string;
}

const CategoryCard = ({ title, description, icon: Icon, link, gradient, image, imageAlt }: CategoryCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="relative overflow-hidden rounded-xl h-full transition-all hover:scale-105 hover:shadow-gaming">
        {image ? (
          <>
            <img 
              src={image} 
              alt={imageAlt || `${title} - Reviews e análises completas`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className={`absolute inset-0 ${gradient} opacity-90`} />
          </>
        ) : (
          <div className={`absolute inset-0 ${gradient}`} />
        )}
        
        <div className="relative p-6 flex flex-col h-full min-h-[200px]">
          <div className="mb-4">
            <div className="inline-flex p-3 rounded-lg bg-background/20 backdrop-blur">
              <Icon className="h-8 w-8 text-background" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-background mb-2">{title}</h3>
          <p className="text-background/90 mb-4 flex-grow">{description}</p>
          
          <div className="flex items-center text-background font-medium group-hover:gap-2 transition-all">
            Explorar <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
