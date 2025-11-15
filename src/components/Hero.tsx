import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gaming Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl space-y-6 animate-slide-in">
          <div className="inline-block">
            <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
              🎮 Reviews Confiáveis
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            As Melhores
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Análises </span>
            de Produtos Gaming
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Descubra produtos de qualidade com avaliações detalhadas, análises técnicas e as melhores ofertas do mercado.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" variant="gaming" className="group">
              Ver Produtos em Destaque
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Sobre Nós
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
