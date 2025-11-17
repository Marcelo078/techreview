import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Blog = () => {
  const articles = [
    {
      id: "melhores-notebooks-gamers-2025",
      title: "Top 10 Melhores Notebooks Gamers de 2025",
      excerpt: "Descubra quais são os notebooks gamers que dominam o mercado brasileiro em 2025. Análise completa de custo-benefício, performance e durabilidade.",
      category: "Guias de Compra",
      date: "2025-01-15",
      readTime: "12 min",
      image: heroImage,
      trending: true,
    },
    {
      id: "rtx-4050-vale-pena",
      title: "RTX 4050 vs RTX 3060: Qual Vale Mais a Pena em 2025?",
      excerpt: "Comparativo detalhado entre as placas de vídeo mais populares para notebooks gamers. Benchmarks, preços e análise de custo-benefício.",
      category: "Comparativos",
      date: "2025-01-12",
      readTime: "8 min",
      image: heroImage,
      trending: true,
    },
    {
      id: "como-escolher-console-2025",
      title: "Como Escolher o Console Perfeito em 2025: PS5, Xbox ou Switch?",
      excerpt: "Guia completo para ajudar você a decidir qual console comprar. Análise de exclusivos, serviços online, hardware e ecossistema.",
      category: "Guias de Compra",
      date: "2025-01-10",
      readTime: "15 min",
      image: heroImage,
      trending: false,
    },
    {
      id: "acessorios-essenciais-setup-gamer",
      title: "10 Acessórios Essenciais Para Montar Seu Setup Gamer",
      excerpt: "Do mouse ao mousepad RGB, descubra quais acessórios realmente fazem diferença no seu setup gamer e quais são dispensáveis.",
      category: "Setup Gaming",
      date: "2025-01-08",
      readTime: "10 min",
      image: heroImage,
      trending: false,
    },
    {
      id: "games-mais-esperados-2025",
      title: "Os 20 Games Mais Esperados de 2025",
      excerpt: "Lista completa dos lançamentos mais aguardados do ano, com datas, plataformas e por que você deveria ficar de olho neles.",
      category: "Notícias",
      date: "2025-01-05",
      readTime: "18 min",
      image: heroImage,
      trending: true,
    },
    {
      id: "otimizar-pc-para-jogos",
      title: "Como Otimizar Seu PC/Notebook Para Jogos: Guia Definitivo",
      excerpt: "Aprenda a extrair o máximo de performance do seu hardware com configurações do Windows, drivers e tweaks de BIOS.",
      category: "Tutoriais",
      date: "2025-01-03",
      readTime: "20 min",
      image: heroImage,
      trending: false,
    },
  ];

  const categories = ["Todos", "Guias de Compra", "Comparativos", "Notícias", "Setup Gaming", "Tutoriais"];

  return (
    <>
      <Helmet>
        <title>Blog Gaming - Notícias, Guias e Reviews | Melhores Reviews</title>
        <meta name="description" content="Fique por dentro das últimas notícias do mundo gamer, guias de compra detalhados, comparativos de produtos e tutoriais para otimizar seu setup gaming." />
        <meta name="keywords" content="blog gaming, noticias games, guias compra gamer, reviews produtos gaming, tutoriais setup, comparativo hardware" />
        
        <meta property="og:title" content="Blog Gaming - As Melhores Análises e Notícias do Universo Gamer" />
        <meta property="og:description" content="Artigos exclusivos sobre gaming, hardware, reviews de produtos e guias completos para gamers brasileiros." />
        <meta property="og:type" content="website" />
        
        <link rel="canonical" href="https://melhor-reviews.lovable.app/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Gamepad2 className="w-4 h-4 mr-2 inline" />
              Blog Gaming
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              Notícias, Guias e Reviews
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro das últimas tendências do mundo gamer com análises profundas, 
              comparativos detalhados e guias de compra atualizados.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "gaming" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Articles */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Em Alta Agora</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter(a => a.trending).map((article) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-card"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-xl line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <Button variant="gaming" className="w-full">
                      Ler Artigo Completo
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* All Articles */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Todos os Artigos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-card"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img 
                      src={article.image} 
                      alt={`${article.title} - guia completo gaming melhores reviews`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-xl line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Ler Artigo
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mt-16 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-2xl p-8 border-2 border-primary/50 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Não Perca Nenhuma Novidade!
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Receba as melhores análises, lançamentos e ofertas exclusivas direto no seu email. 
              Sem spam, apenas conteúdo de qualidade.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              />
              <Button variant="gaming" size="lg">
                Inscrever-se
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;