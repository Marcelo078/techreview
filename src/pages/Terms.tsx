import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o site Melhores Reviews, você aceita e concorda em cumprir estes Termos de Uso. 
                  Se você não concorda com estes termos, por favor, não use nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Sobre o Serviço</h2>
                <p>
                  A Melhores Reviews é um site de análises e reviews de produtos gaming. Fornecemos informações, 
                  opiniões e recomendações sobre produtos disponíveis no mercado brasileiro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Programa de Afiliados</h2>
                <p>
                  Este site participa de programas de afiliados, incluindo o programa de afiliados do Mercado Livre. 
                  Isso significa que podemos receber uma comissão quando você clica em nossos links e realiza uma compra.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>As comissões não afetam o preço final que você paga</li>
                  <li>Mantemos nossa independência editorial em todas as análises</li>
                  <li>Nunca recomendamos produtos apenas pela comissão</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Isenção de Responsabilidade</h2>
                <p>
                  As informações fornecidas em nosso site são para fins informativos apenas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Não garantimos a precisão, completude ou atualidade de todas as informações</li>
                  <li>As análises refletem nossas opiniões com base em pesquisas e avaliações disponíveis</li>
                  <li>Preços e disponibilidade podem mudar sem aviso prévio</li>
                  <li>Não somos responsáveis por transações realizadas em sites de terceiros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é protegido por 
                  direitos autorais e pertence à Melhores Reviews ou seus licenciadores.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Links Externos</h2>
                <p>
                  Nosso site contém links para sites externos. Não nos responsabilizamos pelo conteúdo, 
                  políticas de privacidade ou práticas desses sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Uso Aceitável</h2>
                <p>Ao usar nosso site, você concorda em não:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usar o site para fins ilegais</li>
                  <li>Tentar acessar áreas restritas do site</li>
                  <li>Interferir com a operação do site</li>
                  <li>Copiar ou reproduzir conteúdo sem autorização</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificações</h2>
                <p>
                  Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
                  As alterações entram em vigor imediatamente após a publicação no site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Lei Aplicável</h2>
                <p>
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
                <p>
                  Para questões sobre estes Termos de Uso, entre em contato conosco através dos 
                  canais disponíveis em nosso site.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
