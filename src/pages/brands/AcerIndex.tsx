import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import laptopImage from "@/assets/gaming-laptop.jpg";

const AcerIndex = () => {
  const acerProducts = [
    {
      model: "Acer Nitro ANV15-51-51UZ",
      keywords: [
        "acer nitro anv15",
        "notebook gamer acer nitro",
        "acer nitro i5 13 geracao",
        "acer nitro rtx 4050",
        "notebook acer gaming",
        "acer nitro 15 polegadas",
        "laptop gamer acer",
        "acer nitro 16gb ram",
        "notebook acer intel core i5",
        "acer gaming laptop brasil"
      ],
      title: "Notebook Gamer Acer Nitro ANV15-51-51UZ Intel Ci5 13ªGen 16GB RAM 512GB SSD RTX4050",
      image: laptopImage,
      price: "R$ 4.999",
      rating: 4.8,
      reviews: 2847,
      affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
      badge: "MAIS VENDIDO"
    },
    {
      model: "Acer Nitro 5 AN515",
      keywords: [
        "acer nitro 5",
        "acer an515",
        "notebook gamer acer nitro 5",
        "acer nitro ryzen",
        "acer gaming ryzen 5",
        "notebook acer gtx 1650",
        "acer nitro barato",
        "laptop gamer entrada acer"
      ],
      title: "Notebook Acer Nitro 5 AN515 Ryzen 5 GTX 1650 8GB 256GB SSD",
      image: laptopImage,
      price: "R$ 3.499",
      rating: 4.5,
      reviews: 1520,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CUSTO-BENEFÍCIO"
    },
    {
      model: "Acer Predator Helios 300",
      keywords: [
        "acer predator helios 300",
        "predator helios",
        "acer predator gaming",
        "notebook acer rtx 3060",
        "acer predator i7",
        "laptop gamer premium acer",
        "acer gaming high end",
        "predator notebook brasil"
      ],
      title: "Notebook Acer Predator Helios 300 Intel Core i7 RTX 3060 16GB 512GB",
      image: laptopImage,
      price: "R$ 7.499",
      rating: 4.9,
      reviews: 890,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "PREMIUM"
    }
  ];

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Acer",
    "description": "Notebooks gamers Acer Nitro e Predator - Análises completas de todos os modelos disponíveis no Brasil",
    "logo": "https://melhor-reviews.lovable.app/assets/gaming-laptop.jpg",
    "url": "https://melhor-reviews.lovable.app/marcas/acer"
  };

  return (
    <>
      <Helmet>
        <title>Notebooks Acer Gaming - Todos os Modelos Nitro e Predator 2025 | Melhores Reviews</title>
        <meta name="description" content="Análise completa de todos notebooks gamers Acer: Nitro 5, Nitro ANV15, Predator Helios. Comparativo de preços, specs e reviews de usuários brasileiros." />
        <meta name="keywords" content="acer notebook gamer, acer nitro modelos, acer predator brasil, notebook acer gaming, acer nitro 5, acer nitro anv15, predator helios 300, laptop gamer acer" />
        
        <meta property="og:title" content="Guia Completo: Notebooks Gamers Acer no Brasil" />
        <meta property="og:description" content="Descubra qual modelo Acer Nitro ou Predator é ideal para você. Análises detalhadas, benchmarks e melhores ofertas." />
        
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas/acer" />
        
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a> / 
            <a href="/notebooks" className="hover:text-primary"> Notebooks</a> / 
            <span className="text-foreground"> Acer</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              Índice de Marca
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              Notebooks Gamers Acer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Análise completa de todos os modelos Acer Nitro e Predator disponíveis no Brasil. 
              Comparativos detalhados, especificações técnicas e reviews de usuários reais.
            </p>
          </div>

          {/* Keyword Cloud */}
          <section className="mb-12 bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Modelos e Variações Mais Buscadas</h2>
            <div className="flex flex-wrap gap-2">
              {acerProducts.flatMap(p => p.keywords).map((keyword, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              💡 <strong>Dica SEO:</strong> Essas são as palavras-chave de cauda longa mais buscadas para notebooks Acer gaming no Brasil.
            </p>
          </section>

          {/* Products Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Modelos Acer Gaming</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acerProducts.map((product, index) => (
                <div key={index}>
                  <ProductCard {...product} />
                  
                  {/* Keyword section for each product */}
                  <div className="mt-3 p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Palavras-chave:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.keywords.slice(0, 4).map((kw, i) => (
                        <span key={i} className="text-xs bg-background px-2 py-1 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Comparativo de Modelos Acer</h2>
            <div className="overflow-x-auto bg-card rounded-xl border border-border shadow-card">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Modelo</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Processador</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">GPU</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">RAM</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Preço</th>
                    <th className="px-6 py-4 text-left font-bold text-foreground">Avaliação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-semibold text-foreground">Nitro ANV15</td>
                    <td className="px-6 py-4 text-muted-foreground">i5 13ª Gen</td>
                    <td className="px-6 py-4 text-muted-foreground">RTX 4050</td>
                    <td className="px-6 py-4 text-muted-foreground">16GB DDR5</td>
                    <td className="px-6 py-4 text-primary font-bold">R$ 4.999</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">4.8/5</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-semibold text-foreground">Nitro 5 AN515</td>
                    <td className="px-6 py-4 text-muted-foreground">Ryzen 5</td>
                    <td className="px-6 py-4 text-muted-foreground">GTX 1650</td>
                    <td className="px-6 py-4 text-muted-foreground">8GB DDR4</td>
                    <td className="px-6 py-4 text-primary font-bold">R$ 3.499</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">4.5/5</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="px-6 py-4 font-semibold text-foreground">Predator Helios 300</td>
                    <td className="px-6 py-4 text-muted-foreground">i7 12ª Gen</td>
                    <td className="px-6 py-4 text-muted-foreground">RTX 3060</td>
                    <td className="px-6 py-4 text-muted-foreground">16GB DDR4</td>
                    <td className="px-6 py-4 text-primary font-bold">R$ 7.499</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">4.9/5</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SEO Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Por Que Escolher Notebooks Gamers Acer?
            </h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              A <strong>Acer</strong> consolidou-se como uma das principais fabricantes de notebooks gamers no mercado brasileiro, 
              especialmente com suas linhas <strong>Nitro</strong> (entrada/intermediário) e <strong>Predator</strong> (premium). 
              Com modelos que atendem desde gamers iniciantes até profissionais, a marca taiwanesa oferece excelente custo-benefício 
              e componentes de qualidade.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Linha Acer Nitro: Melhor Custo-Benefício
            </h3>
            
            <p className="text-foreground leading-relaxed mb-4">
              Os notebooks <strong>Acer Nitro</strong> são ideais para quem busca performance gaming sem comprometer o orçamento. 
              Modelos como o <strong>Nitro ANV15-51-51UZ</strong> com RTX 4050 e o clássico <strong>Nitro 5 AN515</strong> oferecem 
              especificações robustas para rodar jogos AAA modernos em configurações médias-altas.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Linha Acer Predator: Performance Extrema
            </h3>
            
            <p className="text-foreground leading-relaxed mb-4">
              Para gamers entusiastas e criadores de conteúdo, a linha <strong>Predator</strong> representa o topo da engenharia Acer. 
              Com processadores Intel Core i7/i9, placas RTX série 30 e 40, sistemas de refrigeração avançados e telas de alta taxa 
              de atualização, os Predator competem diretamente com Alienware e ROG.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Palavras-Chave de Cauda Longa Para Acer
            </h3>
            
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li><strong>acer nitro anv15 vale a pena</strong> - Dúvida comum de compradores</li>
              <li><strong>notebook acer gamer barato mercado livre</strong> - Intenção de compra direta</li>
              <li><strong>acer nitro 5 vs acer predator helios</strong> - Comparativo entre linhas</li>
              <li><strong>notebook acer i5 13 geração rtx 4050 preço</strong> - Busca específica técnica</li>
              <li><strong>melhor notebook gamer acer 2025</strong> - Seasonal/temporal</li>
              <li><strong>acer gaming laptop brasil onde comprar</strong> - Intenção local</li>
            </ul>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AcerIndex;