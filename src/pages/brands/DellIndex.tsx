import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import laptopImage from "@/assets/gaming-laptop.jpg";

const DellIndex = () => {
  const dellProducts = [
    {
      model: "Alienware m16 R2",
      keywords: ["alienware m16", "notebook gamer dell alienware", "alienware rtx 4070", "dell gaming premium"],
      title: "Dell Alienware m16 R2 Intel Core i9 14ª Gen RTX 4070 32GB 1TB SSD",
      image: laptopImage,
      price: "R$ 12.999",
      rating: 4.9,
      reviews: 780,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "PREMIUM"
    },
    {
      model: "G15 5530",
      keywords: ["dell g15", "dell g15 5530", "notebook gamer dell g15", "dell g15 rtx 4060"],
      title: "Dell G15 5530 Intel Core i7 13ª Gen RTX 4060 16GB 512GB SSD",
      image: laptopImage,
      price: "R$ 6.999",
      rating: 4.7,
      reviews: 1920,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO"
    },
    {
      model: "G16 7630",
      keywords: ["dell g16", "dell g16 7630", "notebook dell gaming", "dell g16 review"],
      title: "Dell G16 7630 Intel Core i7 13ª Gen RTX 4050 16GB 1TB SSD",
      image: laptopImage,
      price: "R$ 5.799",
      rating: 4.6,
      reviews: 1240,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CUSTO-BENEFÍCIO"
    }
  ];

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Dell",
    "description": "Notebooks gamers Dell Alienware e G Series - Análises completas Alienware m16, Dell G15 e G16",
    "logo": "https://melhor-reviews.lovable.app/assets/gaming-laptop.jpg",
    "url": "https://melhor-reviews.lovable.app/marcas/dell"
  };

  return (
    <>
      <Helmet>
        <title>Notebooks Dell Gaming - Alienware e Série G 2025 | Games Reviews</title>
        <meta name="description" content="Análise completa notebooks gamers Dell: Alienware m16, Dell G15, G16. Comparativo preços specs reviews Brasil." />
        <meta name="keywords" content="dell alienware, dell g15, notebook gamer dell, alienware brasil, dell g16 review, dell gaming laptop" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/dell" />
        <script type="application/ld+json">{JSON.stringify(brandSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "Notebooks", href: "/notebooks" },
            { label: "Dell" }
          ]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Índice de Marca</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Notebooks Gamers Dell</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alienware e Série G: análises completas de todos os modelos Dell gaming disponíveis no Brasil.
            </p>
          </div>

          <section className="mb-12 bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Modelos e Variações Mais Buscadas</h2>
            <div className="flex flex-wrap gap-2">
              {dellProducts.flatMap(p => p.keywords).map((keyword, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Modelos Dell Gaming</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dellProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </section>

          <article className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Escolher Notebooks Dell Gaming?</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              A <strong>Dell</strong> oferece desde a icônica linha <strong>Alienware</strong> (premium) até a série <strong>G</strong> 
              (intermediária). Com excelente suporte técnico, design arrojado e especificações competitivas, Dell é escolha confiável 
              para gamers brasileiros.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Alienware: Ícone do Gaming</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Os notebooks <strong>Alienware m16</strong> e <strong>x17</strong> são referência absoluta em gaming. Com design futurista, 
              iluminação AlienFX RGB, telas 360Hz e componentes top de linha, competem com ROG e Razer Blade.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Série G: Qualidade Dell com Preço Justo</h3>
            <p className="text-foreground leading-relaxed mb-4">
              A linha <strong>Dell G15</strong> e <strong>G16</strong> traz a qualidade de construção Dell para o segmento intermediário. 
              RTX 4050/4060, Intel i7 e telas 165Hz tornam estes modelos best-sellers no Brasil.
            </p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DellIndex;
