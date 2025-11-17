import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import laptopImage from "@/assets/gaming-laptop.jpg";

const LenovoIndex = () => {
  const lenovoProducts = [
    {
      model: "Legion 7i Gen 8",
      keywords: ["lenovo legion 7i", "legion 7 gen 8", "notebook gamer lenovo legion", "legion rtx 4080"],
      title: "Lenovo Legion 7i Gen 8 Intel Core i9 13ª Gen RTX 4080 32GB 1TB SSD",
      image: laptopImage,
      price: "R$ 14.999",
      rating: 4.9,
      reviews: 520,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "PREMIUM"
    },
    {
      model: "Legion 5 Pro",
      keywords: ["lenovo legion 5 pro", "legion 5 rtx 4060", "notebook lenovo gaming", "legion 5 brasil"],
      title: "Lenovo Legion 5 Pro Ryzen 7 RTX 4060 16GB 512GB SSD",
      image: laptopImage,
      price: "R$ 7.499",
      rating: 4.8,
      reviews: 1670,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO"
    },
    {
      model: "IdeaPad Gaming 3i",
      keywords: ["ideapad gaming 3", "lenovo ideapad gaming", "notebook lenovo barato", "ideapad rtx 3050"],
      title: "Lenovo IdeaPad Gaming 3i Intel i5 12ª Gen RTX 3050 8GB 512GB",
      image: laptopImage,
      price: "R$ 4.299",
      rating: 4.5,
      reviews: 2180,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CUSTO-BENEFÍCIO"
    }
  ];

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Lenovo",
    "description": "Notebooks gamers Lenovo Legion e IdeaPad Gaming - Análises completas Legion 7i, Legion 5 Pro e IdeaPad Gaming 3",
    "logo": "https://melhor-reviews.lovable.app/assets/gaming-laptop.jpg",
    "url": "https://melhor-reviews.lovable.app/marcas/lenovo"
  };

  return (
    <>
      <Helmet>
        <title>Notebooks Lenovo Gaming - Legion e IdeaPad 2025 | Games Reviews</title>
        <meta name="description" content="Análise completa notebooks gamers Lenovo: Legion 7i, Legion 5 Pro, IdeaPad Gaming 3. Comparativo preços specs reviews Brasil." />
        <meta name="keywords" content="lenovo legion, ideapad gaming, notebook gamer lenovo, legion 7i brasil, legion 5 pro review" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/lenovo" />
        <script type="application/ld+json">{JSON.stringify(brandSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "Notebooks", href: "/notebooks" },
            { label: "Lenovo" }
          ]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Índice de Marca</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Notebooks Gamers Lenovo</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Legion e IdeaPad Gaming: análises completas de todos os modelos Lenovo disponíveis no Brasil.
            </p>
          </div>

          <section className="mb-12 bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Modelos e Variações Mais Buscadas</h2>
            <div className="flex flex-wrap gap-2">
              {lenovoProducts.flatMap(p => p.keywords).map((keyword, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Modelos Lenovo Gaming</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lenovoProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </section>

          <article className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Escolher Notebooks Lenovo Gaming?</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              A <strong>Lenovo</strong> revolucionou o mercado gaming com a linha <strong>Legion</strong>, oferecendo design minimalista, 
              excelente sistema de refrigeração e telas de alta qualidade. A série <strong>IdeaPad Gaming</strong> democratiza o acesso 
              a notebooks gamers com ótimo custo-benefício.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Linha Legion: Design e Performance</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Os <strong>Legion 7i</strong> e <strong>Legion 5 Pro</strong> combinam design sóbrio com especificações top. Telas 16:10, 
              teclado RGB por tecla e refrigeração Legion Coldfront tornam estes modelos favoritos entre gamers profissionais.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">IdeaPad Gaming: Entrada Premium</h3>
            <p className="text-foreground leading-relaxed mb-4">
              A linha <strong>IdeaPad Gaming 3</strong> oferece specs gaming essenciais a preços competitivos. Ideal para gamers iniciantes 
              ou estudantes que precisam de performance sem gastar muito.
            </p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LenovoIndex;
