import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import monitorImage from "@/assets/category-monitors.jpg";

const SamsungIndex = () => {
  const samsungProducts = [
    {
      model: "Odyssey Neo G9",
      keywords: ["samsung odyssey neo g9", "monitor gamer samsung", "odyssey 49 polegadas", "monitor curvo 240hz"],
      title: "Monitor Gamer Samsung Odyssey Neo G9 49\" Curvo 240Hz 1ms QLED",
      image: monitorImage,
      price: "R$ 9.999",
      rating: 4.9,
      reviews: 450,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "PREMIUM"
    },
    {
      model: "Odyssey G7",
      keywords: ["samsung odyssey g7", "odyssey g7 32 polegadas", "monitor samsung 240hz", "odyssey curvo"],
      title: "Monitor Gamer Samsung Odyssey G7 32\" Curvo 240Hz 1ms QLED",
      image: monitorImage,
      price: "R$ 2.899",
      rating: 4.8,
      reviews: 1820,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO"
    },
    {
      model: "Odyssey G5",
      keywords: ["samsung odyssey g5", "monitor samsung barato", "odyssey g5 144hz", "monitor curvo gaming"],
      title: "Monitor Gamer Samsung Odyssey G5 27\" Curvo 144Hz 1ms VA",
      image: monitorImage,
      price: "R$ 1.399",
      rating: 4.6,
      reviews: 3240,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CUSTO-BENEFÍCIO"
    }
  ];

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Samsung",
    "description": "Monitores gamers Samsung Odyssey - Análises completas Neo G9, Odyssey G7 e G5",
    "logo": "https://melhor-reviews.lovable.app/assets/category-monitors.jpg",
    "url": "https://melhor-reviews.lovable.app/marcas/samsung"
  };

  return (
    <>
      <Helmet>
        <title>Monitores Samsung Odyssey Gaming 2025 | Games Reviews</title>
        <meta name="description" content="Análise completa monitores gamers Samsung: Odyssey Neo G9, G7, G5. Comparativo preços specs reviews Brasil." />
        <meta name="keywords" content="samsung odyssey, monitor gamer samsung, odyssey g9 brasil, odyssey g7 review, samsung gaming monitor" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/samsung" />
        <script type="application/ld+json">{JSON.stringify(brandSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "Monitores", href: "/monitores" },
            { label: "Samsung" }
          ]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Índice de Marca</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Monitores Gamers Samsung</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Linha Odyssey: análises completas de todos os monitores Samsung gaming disponíveis no Brasil.
            </p>
          </div>

          <section className="mb-12 bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Modelos e Variações Mais Buscadas</h2>
            <div className="flex flex-wrap gap-2">
              {samsungProducts.flatMap(p => p.keywords).map((keyword, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Modelos Samsung Odyssey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samsungProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </section>

          <article className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Escolher Monitores Samsung Odyssey?</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              A linha <strong>Samsung Odyssey</strong> redefiniu monitores gaming com design curvo agressivo, painéis QLED de alta qualidade 
              e taxas de atualização superiores. Do extremo <strong>Neo G9 49"</strong> ao acessível <strong>G5</strong>, Samsung domina 
              o mercado de monitores curvos.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Odyssey Neo G9: O Monitor Definitivo</h3>
            <p className="text-foreground leading-relaxed mb-4">
              O <strong>Neo G9 49 polegadas</strong> com MiniLED oferece imersão incomparável. Resolução 5120x1440, 240Hz e curvatura 1000R 
              criam experiência cinematográfica para simuladores e jogos competitivos.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Odyssey G7/G5: Best-Sellers</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Os <strong>G7 32"</strong> e <strong>G5 27"</strong> trazem curva 1000R, QLED e 240Hz/144Hz respectivamente para o mercado mainstream. 
              São os monitores curvos mais vendidos no Brasil.
            </p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SamsungIndex;
