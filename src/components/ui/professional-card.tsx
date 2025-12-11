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
        "group overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-medium text-center",
        className
      )}
    >
      <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-accent">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
      <p className="mt-1 text-sm text-muted-foreground">{specialty}</p>
      <div className="mt-3 flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < Math.floor(rating)
                ? "fill-warning text-warning"
                : "text-muted"
            )}
          />
        ))}
        <span className="ml-1 text-sm font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{experience}</p>
    </div>
  );
}
