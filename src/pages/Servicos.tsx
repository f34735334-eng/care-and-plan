import { useState } from "react";
import { ServiceCard } from "@/components/ui/service-card";
import { services, categories } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function Servicos() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredServices =
    activeCategory === "Todos"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="gradient-hero py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h1>
            <p className="text-lg text-muted-foreground">
              Oferecemos uma gama completa de serviços para cuidar do seu pet com
              amor e profissionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-16 z-40 bg-card/95 backdrop-blur border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveCategory("Todos")}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === "Todos"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              Todos ({services.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum serviço encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
