import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
}

const CategoryCard = ({ title, description, icon: Icon, link, gradient }: CategoryCardProps) => {
  return (
    <Link to={link} className="group">
      <div className={`relative overflow-hidden rounded-xl p-6 h-full ${gradient} transition-all hover:scale-105 hover:shadow-gaming`}>
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="inline-flex p-3 rounded-lg bg-background/10 backdrop-blur">
              <Icon className="h-8 w-8 text-background" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-background mb-2">{title}</h3>
          <p className="text-background/80 mb-4 flex-grow">{description}</p>
          
          <div className="flex items-center text-background font-medium group-hover:gap-2 transition-all">
            Explorar <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
