import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import laptopImage from "@/assets/gaming-laptop.jpg";

const AsusIndex = () => {
  const asusProducts = [
    {
      model: "ROG Strix G16",
      keywords: ["asus rog strix g16", "notebook gamer asus rog", "asus strix rtx 4060", "rog laptop brasil"],
      title: "Notebook Gamer ASUS ROG Strix G16 Intel Core i7 14ª Gen RTX 4060 16GB 1TB SSD",
      image: laptopImage,
      price: "R$ 8.999",
      rating: 4.9,
      reviews: 1450,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "PREMIUM"
    },
    {
      model: "TUF Gaming A15",
      keywords: ["asus tuf gaming a15", "asus tuf ryzen 7", "tuf gaming rtx 4050", "notebook gamer asus tuf"],
      title: "Notebook ASUS TUF Gaming A15 Ryzen 7 RTX 4050 16GB 512GB SSD",
      image: laptopImage,
      price: "R$ 5.499",
      rating: 4.7,
      reviews: 2340,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO"
    },
    {
      model: "Vivobook 15",
      keywords: ["asus vivobook gaming", "vivobook 15 gamer", "asus vivobook rtx", "notebook asus entrada"],
      title: "ASUS Vivobook 15 Gaming Intel i5 13ª Gen RTX 3050 8GB 512GB",
      image: laptopImage,
      price: "R$ 3.999",
      rating: 4.5,
      reviews: 980,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CUSTO-BENEFÍCIO"
    }
  ];

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "ASUS",
    "description": "Notebooks gamers ASUS ROG e TUF Gaming - Análises completas ROG Strix, TUF A15 e Vivobook Gaming",
    "logo": "https://melhor-reviews.lovable.app/assets/gaming-laptop.jpg",
    "url": "https://melhor-reviews.lovable.app/marcas/asus"
  };

  return (
    <>
      <Helmet>
        <title>Notebooks ASUS Gaming - ROG Strix, TUF Gaming 2025 | Games Reviews</title>
        <meta name="description" content="Análise completa notebooks gamers ASUS: ROG Strix G16, TUF Gaming A15, Vivobook Gaming. Comparativo preços specs reviews Brasil." />
        <meta name="keywords" content="asus rog, asus tuf gaming, notebook gamer asus, rog strix brasil, tuf a15 review, asus gaming laptop" />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/asus" />
        <script type="application/ld+json">{JSON.stringify(brandSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "Notebooks", href: "/notebooks" },
            { label: "ASUS" }
          ]} />

          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Índice de Marca</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Notebooks Gamers ASUS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ROG, TUF Gaming e Vivobook: análises completas de todos os modelos ASUS disponíveis no Brasil.
            </p>
          </div>

          <section className="mb-12 bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Modelos e Variações Mais Buscadas</h2>
            <div className="flex flex-wrap gap-2">
              {asusProducts.flatMap(p => p.keywords).map((keyword, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {keyword}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Modelos ASUS Gaming</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {asusProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Comparativo de Modelos ASUS</h2>
            <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-card">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Modelo</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Processador</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">GPU</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">RAM</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Preço</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-semibold text-foreground">ROG Strix G16</td>
                    <td className="px-6 py-4 text-muted-foreground">i7 14ª Gen</td>
                    <td className="px-6 py-4 text-muted-foreground">RTX 4060</td>
                    <td className="px-6 py-4 text-muted-foreground">16GB DDR5</td>
                    <td className="px-6 py-4 text-primary font-bold">R$ 8.999</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-semibold text-foreground">TUF Gaming A15</td>
                    <td className="px-6 py-4 text-muted-foreground">Ryzen 7</td>
                    <td className="px-6 py-4 text-muted-foreground">RTX 4050</td>
                    <td className="px-6 py-4 text-muted-foreground">16GB DDR5</td>
                    <td className="px-6 py-4 text-primary font-bold">R$ 5.499</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-semibold text-foreground">Vivobook 15</td>
                    <td className="px-6 py-4 text-muted-foreground">i5 13ª Gen</td>
                    <td className="px-6 py-4 text-muted-foreground">RTX 3050</td>
                    <td className="px-6 py-4 text-muted-foreground">8GB DDR4</td>
                    <td className="px-6 py-4 text-primary font-bold">R$ 3.999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <article className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Por Que Escolher Notebooks ASUS?</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              A <strong>ASUS</strong> é líder mundial em notebooks gamers, oferecendo desde a linha premium <strong>ROG (Republic of Gamers)</strong> 
              até opções mais acessíveis como <strong>TUF Gaming</strong>. Com excelente sistema de refrigeração, telas de alta taxa de atualização 
              e build quality superior, ASUS domina o mercado gaming.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Linha ROG: Performance Extrema</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Os <strong>ASUS ROG Strix</strong> e <strong>ROG Zephyrus</strong> são referência em notebooks gamers high-end. Com RTX 4060/4070, 
              processadores Intel i7/i9 e AMD Ryzen 9, telas 240Hz+ e RGB customizável, competem diretamente com Alienware e MSI Raider.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Linha TUF Gaming: Melhor Custo-Benefício</h3>
            <p className="text-foreground leading-relaxed mb-4">
              A série <strong>TUF Gaming</strong> oferece durabilidade militar e specs competitivas a preços acessíveis. O <strong>TUF A15</strong> 
              com Ryzen 7 e RTX 4050 é um dos mais vendidos no Brasil, ideal para gamers intermediários.
            </p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AsusIndex;
