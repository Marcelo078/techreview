import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Headphones } from "lucide-react";
import gamingAccessories from "@/assets/gaming-accessories.jpg";

const Accessories = () => {
  const accessories = [
    {
      title: "Headset Gamer HyperX Cloud II - 7.1 Surround - PC/PS5/Xbox",
      image: gamingAccessories,
      price: "Consultar",
      rating: 4.8,
      reviews: 3421,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "BEST SELLER",
    },
    {
      title: "Teclado Mecânico Gamer RGB Redragon Kumara K552 Switch Blue",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
      price: "Consultar",
      rating: 4.7,
      reviews: 2876,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "RGB",
    },
    {
      title: "Mouse Gamer Logitech G502 Hero 16000 DPI RGB Programável",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      rating: 4.9,
      reviews: 4532,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Controle Xbox Wireless - Edição Limitada Carbon Black",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
      rating: 4.8,
      reviews: 1987,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "OFICIAL",
    },
    {
      title: "Cadeira Gamer DT3 Sports Elise Fabric Preta e Azul",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
      rating: 4.6,
      reviews: 1234,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "CONFORTO",
    },
    {
      title: "Webcam Logitech C920 Full HD 1080p com Microfone Estéreo",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      rating: 4.7,
      reviews: 2341,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Mousepad Gamer Extra Grande 90x40cm Speed Antiderrapante",
      image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&q=80",
      rating: 4.5,
      reviews: 987,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "SSD Externo 1TB Samsung T7 Portátil USB 3.2 até 1050MB/s",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
      rating: 4.9,
      reviews: 3654,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "RÁPIDO",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Headphones className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Acessórios Gaming de Alta Performance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Headsets, teclados mecânicos, mouses, controles e tudo que você precisa 
              para elevar seu setup gamer ao próximo nível.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Guia de Acessórios Gaming Essenciais</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Um bom setup gamer vai muito além do console ou PC. Os acessórios certos podem 
                  melhorar significativamente sua performance, conforto e imersão nos jogos. 
                  Conheça os periféricos essenciais para todo gamer.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Headsets: Áudio Imersivo</h3>
                  <p className="text-muted-foreground mb-4">
                    Um headset de qualidade é crucial para jogos competitivos e experiências imersivas. 
                    O som surround permite identificar a direção dos inimigos, enquanto o microfone 
                    garante comunicação clara com o time.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Surround 7.1:</strong> Som tridimensional para jogos competitivos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Cancelamento de Ruído:</strong> Foco total no jogo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Conforto:</strong> Almofadas ergonômicas para longas sessões</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Teclados Mecânicos: Precisão e Velocidade</h3>
                  <p className="text-muted-foreground mb-4">
                    Teclados mecânicos oferecem resposta tátil superior e maior durabilidade comparado 
                    aos de membrana. Switches diferentes atendem perfis variados de jogadores.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Switch Blue:</strong> Clique audível, ideal para digitação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Switch Red:</strong> Linear e silencioso, ótimo para games</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Switch Brown:</strong> Meio-termo versátil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>RGB Personalizável:</strong> Iluminação ajustável por tecla</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Mouses Gamer: Precisão Milimétrica</h3>
                  <p className="text-muted-foreground mb-4">
                    A escolha do mouse impacta diretamente na sua mira e tempo de reação. 
                    DPI ajustável, sensor óptico de alta precisão e peso personalizável são essenciais.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>DPI Alto:</strong> 12000-16000 DPI para precisão máxima</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Botões Programáveis:</strong> Macros personalizadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Sensor Óptico:</strong> Zero aceleração ou suavização</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Controles: Conforto e Precisão</h3>
                  <p className="text-muted-foreground mb-4">
                    Controles oficiais garantem compatibilidade total e melhor experiência. 
                    Versões especiais trazem recursos premium como botões traseiros programáveis.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Cadeiras Gamer: Ergonomia e Saúde</h3>
                  <p className="text-muted-foreground mb-4">
                    Investir em uma boa cadeira previne problemas posturais e aumenta o conforto 
                    em sessões longas. Procure modelos com ajustes de altura, apoio lombar e reclinável.
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">💡 Dica Profissional</h3>
                <p className="text-muted-foreground">
                  Monte seu setup gradualmente. Priorize primeiro headset e mouse de qualidade, 
                  depois expanda com teclado mecânico, cadeira ergonômica e iluminação ambiente. 
                  Qualidade supera quantidade quando se trata de periféricos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Acessórios Recomendados</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {accessories.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Accessories;
