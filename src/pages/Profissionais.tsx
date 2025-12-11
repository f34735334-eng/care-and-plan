import { ProfessionalCard } from "@/components/ui/professional-card";
import { professionals } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Profissionais() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="gradient-hero py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça os profissionais dedicados que cuidam do seu pet com amor e
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Quer fazer parte da nossa equipe?
            </h2>
            <p className="text-muted-foreground">
              Estamos sempre em busca de profissionais apaixonados por animais.
              Entre em contato conosco!
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:trabalhe@brasilpet.com.br">
                Enviar Currículo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
