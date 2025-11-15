import { Link } from "react-router-dom";
import { Gamepad2, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Gamepad2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Melhores Reviews</span>
            </Link>
            <p className="text-sm text-background/70">
              As melhores análises de produtos gaming do Brasil. Qualidade, procedência e avaliações verificadas.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="text-sm text-background/70 hover:text-background transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/consoles" className="text-sm text-background/70 hover:text-background transition-colors">
                  Consoles
                </Link>
              </li>
              <li>
                <Link to="/acessorios" className="text-sm text-background/70 hover:text-background transition-colors">
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm text-background/70 hover:text-background transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-background/70 hover:text-background transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-background/70 hover:text-background transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-sm text-background/70 hover:text-background transition-colors">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/60">
          <p>© 2025 Melhores Reviews. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site contém links de afiliados. Podemos receber comissões por compras realizadas através destes links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
