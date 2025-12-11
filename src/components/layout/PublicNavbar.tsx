import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/agendamento", label: "Agendar" },
  { href: "/profissionais", label: "Equipe" },
  { href: "/blog", label: "Pet Dicas" },
];

export function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <PawPrint className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Brasil Pet</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === link.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero-outline" size="sm" asChild>
            <a href="tel:+5511999999999" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Emergência
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/agendamento">Agendar Agora</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin">Admin</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button variant="hero-outline" asChild>
                <a href="tel:+5511999999999" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Emergência Veterinária
                </a>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/agendamento">Agendar Agora</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/admin">Área Administrativa</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
