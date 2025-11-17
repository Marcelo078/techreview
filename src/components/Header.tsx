import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Gamepad2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Games Reviews
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/games" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Games
            </Link>
            <Link to="/consoles" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Consoles
            </Link>
            <Link to="/acessorios" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Acessórios
            </Link>
            <Link to="/sobre" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Sobre Nós
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
