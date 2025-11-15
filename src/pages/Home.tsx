import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Gamepad2, Monitor, Headphones, Laptop, Joystick, Boxes } from "lucide-react";
import consolePs5 from "@/assets/console-ps5.jpg";
import consoleXbox from "@/assets/console-xbox.jpg";
import consoleSwitch from "@/assets/console-switch.jpg";
import gamingLaptop from "@/assets/gaming-laptop.jpg";
import gamingAccessories from "@/assets/gaming-accessories.jpg";

const Home = () => {
  const categories = [
    {
      title: "Games",
      description: "Os melhores jogos para todas as plataformas",
      icon: Gamepad2,
      link: "/games",
      gradient: "bg-gradient-primary",
    },
    {
      title: "Consoles",
      description: "PlayStation, Xbox, Nintendo e muito mais",
      icon: Joystick,
      link: "/consoles",
      gradient: "bg-gradient-to-br from-accent to-accent/80",
    },
    {
      title: "Acessórios",
      description: "Headsets, controles, teclados e periféricos",
      icon: Headphones,
      link: "/acessorios",
      gradient: "bg-gradient-accent",
    },
    {
      title: "Notebooks Gamer",
      description: "Potência e performance para jogar em qualquer lugar",
      icon: Laptop,
      link: "/notebooks",
      gradient: "bg-gradient-to-br from-primary to-primary/70",
    },
    {
      title: "Monitores",
      description: "Alta taxa de atualização e baixa latência",
      icon: Monitor,
      link: "/monitores",
      gradient: "bg-gradient-to-br from-accent/80 to-primary",
    },
    {
      title: "Setup Completo",
      description: "Monte seu setup gamer dos sonhos",
      icon: Boxes,
      link: "/setup",
      gradient: "bg-gradient-to-br from-secondary to-accent",
    },
  ];

  const featuredProducts = [
    {
      title: "Notebook Gamer Acer Nitro ANV15-51-51UZ Intel Ci5 13ªGen 16GB RAM 512GB SSD RTX4050 15.6\"",
      image: gamingLaptop,
      price: "Consultar",
      rating: 4.8,
      reviews: 1247,
      affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
      badge: "DESTAQUE",
    },
    {
      title: "Console PlayStation 5 Sony + 2 Jogos",
      image: consolePs5,
      rating: 4.9,
      reviews: 3521,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO",
    },
    {
      title: "Console Xbox Series X Microsoft 1TB",
      image: consoleXbox,
      rating: 4.7,
      reviews: 2134,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Nintendo Switch OLED - Vermelho e Azul Neon",
      image: consoleSwitch,
      rating: 4.8,
      reviews: 1876,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Kit Gamer Completo: Teclado Mecânico RGB + Mouse + Headset",
      image: gamingAccessories,
      rating: 4.6,
      reviews: 892,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "OFERTA",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Explore por Categoria</h2>
              <p className="text-xl text-muted-foreground">
                Encontre exatamente o que você procura
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
              <p className="text-xl text-muted-foreground">
                As melhores ofertas selecionadas para você
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Por que confiar na Melhores Reviews?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <p className="text-lg">Produtos Analisados</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50k+</div>
                <p className="text-lg">Leitores Mensais</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.9★</div>
                <p className="text-lg">Avaliação dos Usuários</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
