import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Target, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre a Melhores Reviews</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Sua fonte confiável para análises detalhadas e honestas de produtos gaming
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Na Melhores Reviews, nossa missão é simples: ajudar gamers brasileiros a tomarem decisões informadas 
                  sobre suas compras. Analisamos produtos com rigor técnico, avaliamos a procedência das marcas e 
                  compilamos avaliações reais de usuários para oferecer o panorama mais completo possível.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Transparência Total</h3>
                  <p className="text-muted-foreground">
                    Divulgamos claramente nossa relação de afiliados e nunca comprometemos nossas análises por comissões.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Foco em Qualidade</h3>
                  <p className="text-muted-foreground">
                    Priorizamos produtos de marcas reconhecidas e com histórico comprovado de qualidade e suporte.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Análises Profundas</h3>
                  <p className="text-muted-foreground">
                    Cada produto é avaliado em múltiplos aspectos: desempenho, custo-benefício, durabilidade e suporte.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Comunidade Ativa</h3>
                  <p className="text-muted-foreground">
                    Valorizamos o feedback de nossa comunidade e atualizamos constantemente nossas análises.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Como Trabalhamos</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Nosso processo de análise é rigoroso e transparente:
                </p>
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span>
                    <span>Pesquisamos e selecionamos produtos com base em demanda do mercado e tendências</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span>
                    <span>Analisamos especificações técnicas, histórico da marca e avaliações de outros usuários</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span>
                    <span>Comparamos preços em diferentes plataformas para garantir as melhores ofertas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</span>
                    <span>Publicamos análises detalhadas com prós, contras e nossa recomendação final</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
