import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
                <p>
                  A Melhores Reviews coleta informações limitadas para melhorar sua experiência de navegação. 
                  Utilizamos cookies e ferramentas de análise para entender como os visitantes interagem com nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos Suas Informações</h2>
                <p>As informações coletadas são utilizadas para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Melhorar a experiência de navegação no site</li>
                  <li>Analisar padrões de uso e otimizar conteúdo</li>
                  <li>Personalizar recomendações de produtos</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar sua experiência. Cookies são pequenos arquivos de texto 
                  armazenados em seu dispositivo que nos ajudam a entender como você usa nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Links de Afiliados</h2>
                <p>
                  Este site contém links de afiliados. Quando você clica nesses links e realiza uma compra, 
                  podemos receber uma comissão. Isso não afeta o preço que você paga e nos ajuda a manter 
                  o site funcionando.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Segurança</h2>
                <p>
                  Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, 
                  alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos</h2>
                <p>Você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar as informações que temos sobre você</li>
                  <li>Solicitar correção de dados incorretos</li>
                  <li>Solicitar exclusão de suas informações</li>
                  <li>Optar por não receber comunicações</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações nesta Política</h2>
                <p>
                  Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
                  regularmente para se manter informado sobre como protegemos suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através 
                  dos canais disponíveis em nosso site.
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

export default Privacy;
