import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Laptop } from "lucide-react";
import gamingLaptop from "@/assets/gaming-laptop.jpg";

const Notebooks = () => {
  const notebooks = [
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
      title: "Notebook Gamer Lenovo LOQ Intel Core i7 12ªGen 16GB 512GB SSD RTX3050 15.6\" FHD",
      image: gamingLaptop,
      rating: 4.7,
      reviews: 876,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
    },
    {
      title: "Notebook Gamer Dell G15 Intel i5 12ªGen 16GB 512GB SSD RTX3050Ti 15.6\" 120Hz",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
      rating: 4.6,
      reviews: 654,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "120HZ",
    },
    {
      title: "Notebook Gamer ASUS TUF A15 Ryzen 7 16GB 512GB RTX4060 15.6\" 144Hz",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
      rating: 4.9,
      reviews: 1432,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "TOP",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Laptop className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Notebooks Gamer de Alta Performance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Potência, portabilidade e performance. Descubra notebooks gamers com 
              placas de vídeo dedicadas, telas de alta taxa de atualização e processadores de última geração.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Guia Completo: Como Escolher um Notebook Gamer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notebooks gamers combinam desempenho de desktop com mobilidade. São ideais para quem 
                  precisa de potência gráfica em movimento, seja para jogos, edição de vídeo ou 
                  modelagem 3D. Saiba o que considerar na hora da compra.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">1. Placa de Vídeo (GPU)</h3>
                <p className="text-muted-foreground mb-4">
                  O componente mais importante para gaming. Define a capacidade de rodar jogos 
                  em altas configurações e resoluções.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="text-success font-bold">✓ RTX 4060/4050:</span>
                    <span>Joga em Full HD/QHD com ray tracing. Ótimo custo-benefício 2024/2025.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-success font-bold">✓ RTX 3050/3050Ti:</span>
                    <span>Entrada gamer sólida. Full HD médio/alto em maioria dos jogos.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-success font-bold">✓ RTX 4070+:</span>
                    <span>Alta performance. QHD/4K com ray tracing em jogos AAA.</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">2. Processador (CPU)</h3>
                <p className="text-muted-foreground mb-4">
                  Fundamental para jogos modernos e multitarefas. Intel Core i5/i7 de 12ª/13ª geração 
                  ou AMD Ryzen 5/7 série 7000 são ideais.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Intel Core i5 12ª/13ª Gen:</strong> Bom para jogos e produtividade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Intel Core i7:</strong> Melhor para streaming e edição simultânea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>AMD Ryzen 7:</strong> Excelente multicore, ótimo para produção</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">3. Memória RAM</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Mínimo recomendado:</strong> 16GB DDR4/DDR5
                  <br />
                  <strong className="text-foreground">Ideal:</strong> 32GB para multitarefas pesadas e jogos futuros
                  <br />
                  <span className="text-sm">💡 Verifique se o modelo permite expansão futura de RAM</span>
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">4. Armazenamento (SSD)</h3>
                <p className="text-muted-foreground mb-4">
                  SSDs NVMe são essenciais para tempos de carregamento rápidos. 
                  Jogos modernos ocupam 50-100GB cada.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>512GB:</strong> Mínimo viável. Comporta sistema + 4-6 jogos AAA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>1TB:</strong> Recomendado. Espaço confortável para biblioteca maior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Expansível:</strong> Verifique slot M.2 adicional para upgrade</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">5. Tela: Taxa de Atualização</h3>
                <p className="text-muted-foreground mb-4">
                  A taxa de atualização (Hz) define quantos quadros por segundo a tela exibe. 
                  Crucial para jogos competitivos.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">60Hz:</strong> Padrão básico. Adequado para jogos casuais.
                  </div>
                  <div>
                    <strong className="text-foreground">120Hz:</strong> Bom meio-termo. Melhora fluidez notavelmente.
                  </div>
                  <div>
                    <strong className="text-foreground">144Hz+:</strong> Ideal para FPS competitivos. Vantagem em jogos rápidos.
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">6. Sistema de Resfriamento</h3>
                <p className="text-muted-foreground">
                  Notebooks potentes geram calor. Bons sistemas de resfriamento previnem throttling 
                  (redução de desempenho por temperatura). Marcas como ASUS TUF, Acer Nitro e 
                  Lenovo LOQ investem em ventilação eficiente.
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">📊 Configuração Ideal 2025</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ GPU: RTX 4050 ou superior</li>
                  <li>✓ CPU: Intel i5 13ª Gen / Ryzen 7 7000</li>
                  <li>✓ RAM: 16GB DDR5</li>
                  <li>✓ SSD: 512GB NVMe (expansível)</li>
                  <li>✓ Tela: 15.6" Full HD 144Hz</li>
                  <li>✓ Bateria: 4-6 horas uso moderado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Notebooks Gamers Recomendados</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {notebooks.map((product, index) => (
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

export default Notebooks;
