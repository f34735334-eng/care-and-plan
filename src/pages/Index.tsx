import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { ProfessionalCard } from "@/components/ui/professional-card";
import { services, professionals, blogPosts } from "@/data/mockData";
import {
  PawPrint,
  Calendar,
  Heart,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Online",
    description: "Agende consultas e serviços 24h pelo site ou WhatsApp.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos seu pet com todo amor e carinho que ele merece.",
  },
  {
    icon: Shield,
    title: "Profissionais Qualificados",
    description: "Equipe especializada e em constante atualização.",
  },
  {
    icon: Clock,
    title: "Plantão 24h",
    description: "Emergências veterinárias atendidas a qualquer hora.",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative gradient-hero py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-accent-foreground">
                <PawPrint className="h-3 w-3 md:h-4 md:w-4" />
                Pet Shop & Clínica Veterinária
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Cuidados completos para o seu{" "}
                <span className="text-primary">melhor amigo</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                Oferecemos serviços veterinários, estética, hospedagem e muito mais.
                Tudo que seu pet precisa em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/agendamento">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Agendar Agora
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/servicos">Ver Serviços</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2 md:pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-background bg-muted"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">+2.500</p>
                    <p className="text-muted-foreground text-xs">Clientes felizes</p>
                  </div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 md:h-5 md:w-5 fill-warning text-warning"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-foreground">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in hidden sm:block">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop"
                  alt="Cachorro feliz"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 rounded-xl bg-card p-3 md:p-4 shadow-lg border border-border animate-slide-in">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground">
                      187 Agendamentos
                    </p>
                    <p className="text-xs text-muted-foreground">Este mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-4 md:p-6 shadow-card transition-all hover:shadow-medium hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 md:mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="mb-1 md:mb-2 text-sm md:text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Nossos Serviços
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Conheça tudo o que oferecemos para cuidar do seu pet
              </p>
            </div>
            <Button variant="ghost" asChild className="self-start md:self-auto">
              <Link to="/servicos" className="flex items-center gap-2">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Nossa Equipe
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Profissionais apaixonados por animais e dedicados ao bem-estar do
              seu pet
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
          <div className="text-center mt-6 md:mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/profissionais">Conhecer Toda Equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Pet Dicas
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Conteúdo exclusivo para você cuidar melhor do seu pet
              </p>
            </div>
            <Button variant="ghost" asChild className="self-start md:self-auto">
              <Link to="/blog" className="flex items-center gap-2">
                Ver todas as dicas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-medium"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                  <span className="text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
              Emergência Veterinária?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Nossa equipe está disponível 24 horas para atender seu pet em
              situações de emergência.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-card text-primary hover:bg-card/90 w-full sm:w-auto"
                asChild
              >
                <a href="tel:+5511999999999" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  Ligar Agora
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
