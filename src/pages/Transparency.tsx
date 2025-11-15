import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, DollarSign, TrendingUp, Shield } from "lucide-react";

const Transparency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Transparência e Isenção de Responsabilidade</h1>
            
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Programa de Afiliados</h2>
                    <p className="text-muted-foreground mb-4">
                      A Melhores Reviews participa do programa de afiliados do Mercado Livre Brasil. 
                      Isso significa que quando você clica em nossos links e realiza uma compra, 
                      podemos receber uma comissão sem custo adicional para você.
                    </p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">
                        ⚠️ Importante: As comissões de afiliados nunca influenciam nossas análises ou recomendações. 
                        Mantemos nossa independência editorial em todos os conteúdos publicados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Como Monetizamos</h2>
                    <p className="text-muted-foreground mb-4">
                      Nosso site é mantido através de:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Comissões de afiliados quando você compra através de nossos links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Publicidade de parceiros selecionados (quando aplicável)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Nenhuma taxa é cobrada dos leitores para acessar nosso conteúdo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Nosso Compromisso</h2>
                    <p className="text-muted-foreground mb-4">
                      Comprometemo-nos a:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Analisar produtos de forma honesta e imparcial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Divulgar claramente quando um link é de afiliado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Recomendar apenas produtos que consideramos de qualidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Atualizar análises quando novas informações estão disponíveis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Manter transparência total sobre como o site é financiado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <ExternalLink className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Responsabilidades do Usuário</h2>
                    <p className="text-muted-foreground mb-4">
                      Ao usar nossos links de afiliados, você deve estar ciente de que:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Você será redirecionado para o site do Mercado Livre ou outros parceiros
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          A transação será processada diretamente pelo vendedor/marketplace
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Preços e disponibilidade podem mudar sem aviso prévio
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          Não somos responsáveis por questões relacionadas à compra, entrega ou pós-venda
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Parceiros Oficiais</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Mercado Livre Brasil:</span>
                    <a 
                      href="https://mercadolivre.com/sec/14GQgfK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Link de Afiliado Principal
                    </a>
                  </p>
                  <p className="text-sm">
                    Todos os links de produtos deste site redirecionam para o Mercado Livre, 
                    onde as transações são processadas com total segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Transparency;
