import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Gamepad2, Filter } from "lucide-react";

const Games = () => {
  const featuredGames = [
    {
      title: "PlayStation 5 + Spider-Man 2 + God of War Ragnarök",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80",
      price: "Consultar",
      rating: 4.9,
      reviews: 2341,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "BUNDLE",
    },
    {
      title: "Xbox Series S + Game Pass Ultimate 3 Meses",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&q=80",
      price: "Consultar",
      rating: 4.7,
      reviews: 1876,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "OFERTA",
    },
    {
      title: "The Legend of Zelda: Tears of the Kingdom - Nintendo Switch",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&q=80",
      rating: 5.0,
      reviews: 3421,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "TOP VENDAS",
    },
    {
      title: "EA Sports FC 24 - Edição Standard - PlayStation 5",
      image: "https://images.unsplash.com/photo-1543892677-f15b6e0d2c50?w=800&q=80",
      rating: 4.5,
      reviews: 1234,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Grand Theft Auto V Premium Edition - PS5",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80",
      rating: 4.8,
      reviews: 5678,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CLÁSSICO",
    },
    {
      title: "Hogwarts Legacy - Xbox Series X",
      image: "https://images.unsplash.com/photo-1601312540434-7fb8e4dc61de?w=800&q=80",
      rating: 4.7,
      reviews: 2134,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Red Dead Redemption 2 - PlayStation 5",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      rating: 4.9,
      reviews: 4321,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Resident Evil 4 Remake - PlayStation 5",
      image: "https://images.unsplash.com/photo-1591462937833-28f2e74a6b0b?w=800&q=80",
      rating: 4.8,
      reviews: 1987,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "NOVO",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Gamepad2 className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Games para Todas as Plataformas</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Descubra os melhores jogos para PlayStation, Xbox, Nintendo Switch e PC. 
              Análises detalhadas, preços competitivos e ofertas exclusivas.
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground">Por Que Comprar Games na Melhores Reviews?</h2>
              <p className="text-lg leading-relaxed">
                A escolha de um jogo pode transformar completamente sua experiência de entretenimento. 
                Na Melhores Reviews, analisamos cada título considerando gameplay, gráficos, história, 
                jogabilidade e custo-benefício. Nossa curadoria garante que você encontre apenas jogos 
                de qualidade comprovada.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground pt-4">Principais Categorias de Games</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Ação e Aventura:</strong> Títulos como GTA V, Red Dead Redemption 2 
                    e Hogwarts Legacy dominam esta categoria com mundos abertos expansivos e narrativas envolventes.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">RPG:</strong> Jogos de interpretação de papéis oferecem 
                    progressão de personagem, escolhas significativas e histórias épicas.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Esportes:</strong> EA Sports FC 24 e outros simuladores 
                    esportivos trazem realismo e competitividade para sua sala.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Terror:</strong> Resident Evil 4 Remake e outros títulos 
                    de survival horror proporcionam tensão e adrenalina.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground pt-4">Como Escolher o Jogo Ideal</h3>
              <p className="leading-relaxed">
                Considere seu estilo de jogo preferido, tempo disponível e orçamento. Jogos singleplayer 
                oferecem experiências narrativas profundas, enquanto multiplayer garantem diversão compartilhada. 
                Verifique sempre as especificações mínimas do sistema e avaliações de outros jogadores.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Todos os Filtros
              </Button>
              <Button variant="ghost">Plataforma</Button>
              <Button variant="ghost">Gênero</Button>
              <Button variant="ghost">Preço</Button>
              <Button variant="ghost">Classificação</Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Games em Destaque</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredGames.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* SEO Footer Content */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground text-sm">
              <h3 className="text-xl font-bold text-foreground">Perguntas Frequentes sobre Games</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Qual a diferença entre jogos físicos e digitais?</h4>
                  <p>
                    Jogos físicos podem ser revendidos e colecionados, enquanto digitais oferecem conveniência 
                    de download instantâneo e não ocupam espaço físico. Ambos têm os mesmos conteúdos e qualidade.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">Vale a pena comprar jogos em bundle?</h4>
                  <p>
                    Sim! Bundles geralmente oferecem economia significativa, especialmente quando incluem 
                    console + jogos ou múltiplos títulos de uma franquia.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-2">Como verifico se um jogo é compatível com meu console?</h4>
                  <p>
                    Sempre verifique a plataforma especificada no título do produto. Jogos de PS5 não funcionam 
                    em Xbox e vice-versa. Nintendo Switch tem biblioteca exclusiva própria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
