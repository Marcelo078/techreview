import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  links: RelatedLink[];
}

const RelatedContent = ({ title = "Conteúdo Relacionado", links }: RelatedContentProps) => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-foreground">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <Link key={index} to={link.href} className="group">
            <Card className="p-4 h-full hover:shadow-gaming transition-all hover:scale-105">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {link.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;
