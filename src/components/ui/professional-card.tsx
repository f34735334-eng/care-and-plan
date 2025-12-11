import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ProfessionalCardProps {
  name: string;
  role: string;
  specialty: string;
  image: string;
  rating: number;
  experience: string;
  className?: string;
}

export function ProfessionalCard({
  name,
  role,
  specialty,
  image,
  rating,
  experience,
  className,
}: ProfessionalCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card p-4 md:p-6 shadow-card transition-all hover:shadow-medium text-center",
        className
      )}
    >
      <div className="relative mx-auto mb-3 md:mb-4 h-16 w-16 md:h-24 md:w-24 overflow-hidden rounded-full ring-2 md:ring-4 ring-accent">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-sm md:text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-xs md:text-sm font-medium text-primary">{role}</p>
      <p className="mt-1 text-xs md:text-sm text-muted-foreground line-clamp-1">{specialty}</p>
      <div className="mt-2 md:mt-3 flex items-center justify-center gap-0.5 md:gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3 w-3 md:h-4 md:w-4",
              i < Math.floor(rating)
                ? "fill-warning text-warning"
                : "text-muted"
            )}
          />
        ))}
        <span className="ml-1 text-xs md:text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground hidden md:block">{experience}</p>
    </div>
  );
}
