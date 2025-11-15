import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Joystick } from "lucide-react";
import consolePs5 from "@/assets/console-ps5.jpg";
import consoleXbox from "@/assets/console-xbox.jpg";
import consoleSwitch from "@/assets/console-switch.jpg";

const Consoles = () => {
  const consoles = [
    {
      title: "PlayStation 5 Sony Console - Edição Standard com 1TB",
      image: consolePs5,
      price: "Consultar",
      rating: 4.9,
      reviews: 5421,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MAIS VENDIDO",
    },
    {
      title: "PlayStation 5 Digital Edition - 825GB SSD",
      image: consolePs5,
      price: "Consultar",
      rating: 4.8,
      reviews: 3234,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "SEM LEITOR",
    },
    {
      title: "Xbox Series X Microsoft - 1TB 4K 120fps",
      image: consoleXbox,
      price: "Consultar",
      rating: 4.8,
      reviews: 4123,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "GAME PASS",
    },
    {
      title: "Xbox Series S - 512GB Branco com Game Pass",
      image: consoleXbox,
      rating: 4.7,
      reviews: 2987,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "MELHOR CUSTO",
    },
    {
      title: "Nintendo Switch OLED - Edição Neon Red/Blue",
      image: consoleSwitch,
      price: "Consultar",
      rating: 4.9,
      reviews: 3654,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "PORTÁTIL",
    },
    {
      title: "Nintendo Switch Lite - Azul Turquesa",
      image: consoleSwitch,
      rating: 4.7,
      reviews: 2341,
      affiliateLink: "https://mercadolivre.com/sec/14GQgfK",
      badge: "COMPACTO",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Joystick className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Consoles de Última Geração</h1>
            <p className="text-xl max-w-3xl mx-auto">
              PlayStation 5, Xbox Series X|S e Nintendo Switch. Compare especificações, 
              preços e escolha o console perfeito para você.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Guia Completo de Consoles 2025</h2>
              
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">PlayStation 5: O Poder da Nova Geração</h3>
                  <p className="leading-relaxed mb-4">
                    O PlayStation 5 da Sony revolucionou o mercado com seu SSD ultra-rápido, eliminando praticamente 
                    todos os tempos de carregamento. Com suporte a 4K a 120fps, ray tracing em tempo real e o 
                    inovador controle DualSense com feedback háptico, o PS5 oferece experiências imersivas incomparáveis.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>GPU:</strong> 10.28 TFLOPS, 36 CUs @ 2.23GHz (variável)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>CPU:</strong> AMD Zen 2, 8 núcleos @ 3.5GHz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>RAM:</strong> 16GB GDDR6</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Armazenamento:</strong> SSD 825GB (expansível)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Exclusivos:</strong> Spider-Man 2, God of War Ragnarök, Horizon Forbidden West</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Xbox Series X|S: Game Pass e Retrocompatibilidade</h3>
                  <p className="leading-relaxed mb-4">
                    A Microsoft aposta no ecossistema com o Game Pass, oferecendo acesso a centenas de jogos por 
                    assinatura. O Series X é a versão mais potente, enquanto o Series S oferece excelente custo-benefício 
                    para jogos digitais em Full HD.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Series X GPU:</strong> 12 TFLOPS, 52 CUs @ 1.825GHz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Series S GPU:</strong> 4 TFLOPS, 20 CUs @ 1.565GHz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Diferencial:</strong> Game Pass Ultimate com EA Play incluso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Retrocompatibilidade:</strong> Joga títulos de Xbox, Xbox 360 e Xbox One</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nintendo Switch: Portabilidade e Exclusivos</h3>
                  <p className="leading-relaxed mb-4">
                    O Switch conquistou o mercado com sua versatilidade única: console de mesa e portátil em um só. 
                    A biblioteca de exclusivos Nintendo (Zelda, Mario, Pokémon) é imbatível para quem busca 
                    experiências familiares e criativas.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>OLED:</strong> Tela de 7 polegadas com cores vibrantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Lite:</strong> Versão compacta e mais acessível, apenas portátil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span><strong>Exclusivos:</strong> Zelda, Mario, Splatoon, Animal Crossing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Comparativo: Qual Console Escolher?</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4">Característica</th>
                          <th className="text-left py-3 px-4">PlayStation 5</th>
                          <th className="text-left py-3 px-4">Xbox Series X</th>
                          <th className="text-left py-3 px-4">Nintendo Switch</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-semibold">Potência</td>
                          <td className="py-3 px-4">10.28 TFLOPS</td>
                          <td className="py-3 px-4">12 TFLOPS</td>
                          <td className="py-3 px-4">1 TFLOPS</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-semibold">Resolução</td>
                          <td className="py-3 px-4">4K 120fps</td>
                          <td className="py-3 px-4">4K 120fps</td>
                          <td className="py-3 px-4">1080p 60fps</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-semibold">Portabilidade</td>
                          <td className="py-3 px-4">Não</td>
                          <td className="py-3 px-4">Não</td>
                          <td className="py-3 px-4">Sim</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-semibold">Serviço Online</td>
                          <td className="py-3 px-4">PS Plus</td>
                          <td className="py-3 px-4">Game Pass</td>
                          <td className="py-3 px-4">Nintendo Online</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Consoles Disponíveis</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {consoles.map((product, index) => (
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

export default Consoles;
