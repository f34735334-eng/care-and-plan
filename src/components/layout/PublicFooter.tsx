import { Link } from "react-router-dom";
import { PawPrint, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <PawPrint className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Brasil Pet</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Cuidando do seu pet com amor e profissionalismo. Serviços veterinários, estética e muito mais.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Nossos Serviços
              </Link>
              <Link to="/agendamento" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Agendar Consulta
              </Link>
              <Link to="/profissionais" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Nossa Equipe
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pet Dicas
              </Link>
            </nav>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Serviços</h3>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Consultas Veterinárias</span>
              <span className="text-sm text-muted-foreground">Banho & Tosa</span>
              <span className="text-sm text-muted-foreground">Vacinação</span>
              <span className="text-sm text-muted-foreground">Hospedagem Pet</span>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Rua das Flores, 123<br />
                  São Paulo - SP
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+5511999999999" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:contato@brasilpet.com.br" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contato@brasilpet.com.br
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Seg - Sex: 8h às 20h<br />
                  Sáb: 8h às 18h
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Brasil Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
