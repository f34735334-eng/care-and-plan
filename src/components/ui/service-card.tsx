import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
  className?: string;
}

export function ServiceCard({
  id,
  title,
  description,
  price,
  duration,
  image,
  category,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-medium hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xl font-bold text-primary">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          <Button variant="hero" size="sm" asChild>
            <Link to={`/agendamento?servico=${id}`}>Agendar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
