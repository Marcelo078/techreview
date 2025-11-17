import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import consoleImage from "@/assets/console-ps5.jpg";

const SonyIndex = () => {
  const sonyProducts = [
    {
      model: "PlayStation 5 Standard",
      keywords: ["playstation 5", "ps5 brasil", "console sony ps5", "playstation 5 disco"],
      title: "Console Sony PlayStation 5 Standard Edition 825GB + 2 Jogos",
      image: consoleImage,
      price: "R$ 3.999",
      rating: 4.9,
      reviews: 5420,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO"
    },
    {
      model: "PlayStation 5 Digital",
      keywords: ["ps5 digital", "playstation 5 digital edition", "ps5 sem disco", "ps5 digital brasil"],
      title: "Console Sony PlayStation 5 Digital Edition 825GB",
      image: consoleImage,
      price: "R$ 3.499",
      rating: 4.8,
      reviews: 3180,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CUSTO-BENEFÍCIO"
    },
    {
      model: "PlayStation 5 Slim",
      keywords: ["ps5 slim", "playstation 5 slim brasil", "ps5 2024", "novo ps5"],
      title: "Console Sony PlayStation 5 Slim 1TB + Controle DualSense",
      image: consoleImage,
      price: "R$ 4.199",
      rating: 4.9,
      reviews: 1890,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "LANÇAMENTO"
    }
  ];

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Sony",
    "description": "Consoles Sony PlayStation 5 - Análises completas PS5 Standard, Digital e Slim",
    "logo": "https://melhor-reviews.lovable.app/assets/console-ps5.jpg",
    "url": "https://melhor-reviews.lovable.app/marcas/sony"
  };

  return (
    <>
      <Helmet>
        <title>PlayStation 5 Sony - Todos os Modelos PS5 2025 | Games Reviews</title>
        <meta name="description" content="Análise completa PlayStation 5: PS5 Standard, Digital, Slim. Comparativo preços specs reviews Brasil." />
        <meta name="keywords" content="playstation 5, ps5 brasil, sony ps5, console ps5, ps5 digital, ps5 slim" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/sony" />
        <script type="application/ld+json">{JSON.stringify(brandSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "Consoles", href: "/consoles" },
            { label: "Sony PlayStation" }
          ]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Índice de Marca</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">PlayStation 5 Sony</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Análises completas de todos os modelos PlayStation 5 disponíveis no Brasil.
            </p>
          </div>

          <section className="mb-12 bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Modelos e Variações Mais Buscadas</h2>
            <div className="flex flex-wrap gap-2">
              {sonyProducts.flatMap(p => p.keywords).map((keyword, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Modelos PlayStation 5</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sonyProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </section>

          <article className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Escolher PlayStation 5?</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              O <strong>PlayStation 5</strong> revolucionou o gaming com SSD ultra-rápido, ray tracing em tempo real e controle DualSense 
              com feedback háptico. Com exclusivos como God of War Ragnarök, Spider-Man 2 e Horizon Forbidden West, o PS5 domina 
              o mercado de consoles no Brasil.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">PS5 Standard vs Digital</h3>
            <p className="text-foreground leading-relaxed mb-4">
              O <strong>PS5 Standard</strong> possui leitor de disco 4K Blu-ray, permitindo jogos físicos e mídia. O <strong>PS5 Digital</strong> 
              é R$ 500 mais barato mas aceita apenas jogos digitais da PSN. Escolha baseada em sua biblioteca e preferências.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">PS5 Slim 2024: Novo Design</h3>
            <p className="text-foreground leading-relaxed mb-4">
              O <strong>PS5 Slim</strong> reduz 30% do volume, mantém performance idêntica e aumenta armazenamento para 1TB. Drive de disco 
              vendido separadamente oferece flexibilidade entre versões.
            </p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SonyIndex;
