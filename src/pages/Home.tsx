import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Gamepad2, Monitor, Headphones, Laptop, Joystick, Boxes } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import consolePs5 from "@/assets/console-ps5.jpg";
import consoleXbox from "@/assets/console-xbox.jpg";
import consoleSwitch from "@/assets/console-switch.jpg";
import gamingLaptop from "@/assets/gaming-laptop.jpg";
import gamingAccessories from "@/assets/gaming-accessories.jpg";
import categoryGames from "@/assets/category-games.jpg";
import categoryConsoles from "@/assets/category-consoles.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";
import categoryNotebooks from "@/assets/category-notebooks.jpg";
import categoryMonitors from "@/assets/category-monitors.jpg";
import categorySetup from "@/assets/category-setup.jpg";

const Home = () => {
  const popularSearches = [
    "notebook gamer barato 2025",
    "melhor console custo benefício",
    "headset gamer sem fio review",
    "monitor 144hz melhor preço",
    "teclado mecânico rgb barato",
    "mouse gamer profissional",
    "cadeira gamer ergonômica",
    "placa de vídeo rtx 4060",
    "processador amd ryzen 7",
    "ssd nvme 1tb melhor",
    "memória ram ddr5 gaming",
    "cooler rgb para pc",
    "gabinete gamer mid tower",
    "fonte 750w modular",
    "webcam full hd streaming",
    "microfone condensador streaming",
    "nintendo switch oled vale a pena",
    "playstation 5 preço brasil",
    "xbox series s ou x",
    "steam deck brasil lançamento"
  ];

  const categories = [
    {
      title: "Games",
      description: "Os melhores jogos para todas as plataformas",
      icon: Gamepad2,
      link: "/games",
      gradient: "bg-gradient-primary",
      image: categoryGames,
      imageAlt: "Coleção jogos AAA games review análise Elden Ring God of War Cyberpunk controller RGB"
    },
    {
      title: "Consoles",
      description: "PlayStation, Xbox, Nintendo e muito mais",
      icon: Joystick,
      link: "/consoles",
      gradient: "bg-gradient-to-br from-accent to-accent/80",
      image: categoryConsoles,
      imageAlt: "PlayStation 5 Xbox Series X Nintendo Switch OLED consoles análise review comparativo Brasil"
    },
    {
      title: "Acessórios",
      description: "Headsets, controles, teclados e periféricos",
      icon: Headphones,
      link: "/acessorios",
      gradient: "bg-gradient-accent",
      image: categoryAccessories,
      imageAlt: "Headset gamer RGB teclado mecânico mouse gamer periféricos gaming review Brasil"
    },
    {
      title: "Notebooks Gamer",
      description: "Potência e performance para jogar em qualquer lugar",
      icon: Laptop,
      link: "/notebooks",
      gradient: "bg-gradient-to-br from-primary to-primary/70",
      image: categoryNotebooks,
      imageAlt: "Notebook gamer RGB Acer Asus Dell RTX 4050 4060 análise review specs Brasil"
    },
    {
      title: "Monitores",
      description: "Alta taxa de atualização e baixa latência",
      icon: Monitor,
      link: "/monitores",
      gradient: "bg-gradient-to-br from-accent/80 to-primary",
      image: categoryMonitors,
      imageAlt: "Monitor gamer curvo 144Hz 1ms ultra-wide análise review gaming display Brasil"
    },
    {
      title: "Setup Completo",
      description: "Monte seu setup gamer dos sonhos",
      icon: Boxes,
      link: "/setup",
      gradient: "bg-gradient-to-br from-secondary to-accent",
      image: categorySetup,
      imageAlt: "Setup gamer completo RGB dual monitor PC gaming battle station review Brasil"
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
        
        {/* Popular Searches Section */}
        <section className="py-12 bg-muted/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">🔍 Buscas Mais Populares</h2>
              <p className="text-muted-foreground">Veja o que os gamers estão procurando agora</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
              {popularSearches.map((search, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-xs py-1.5 px-3"
                >
                  {search}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        
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
            <h2 className="text-4xl font-bold mb-6">Por que confiar na Games Reviews?</h2>
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
