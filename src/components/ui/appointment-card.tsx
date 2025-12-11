import { cn } from "@/lib/utils";
import { Clock, User, PawPrint, Check, AlertCircle } from "lucide-react";

interface AppointmentCardProps {
  clientName: string;
  petName: string;
  petBreed: string;
  service: string;
  price: number;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
  className?: string;
}

export function AppointmentCard({
  clientName,
  petName,
  petBreed,
  service,
  price,
  date,
  time,
  status,
  className,
}: AppointmentCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-medium",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-foreground">{clientName}</span>
          </div>
          <div className="flex items-center gap-2">
            <PawPrint className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {petName} - {petBreed}
            </span>
          </div>
          <p className="text-sm font-medium text-foreground">{service}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{date}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {time}
            </div>
          </div>
        </div>
        <div className="text-right space-y-2">
          <span className="text-lg font-bold text-primary">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          <div
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
              status === "confirmed" && "bg-accent text-accent-foreground",
              status === "pending" && "bg-warning/10 text-warning",
              status === "cancelled" && "bg-destructive/10 text-destructive"
            )}
          >
            {status === "confirmed" && <Check className="h-3 w-3" />}
            {status === "pending" && <AlertCircle className="h-3 w-3" />}
            {status === "confirmed" && "Confirmado"}
            {status === "pending" && "Pendente"}
            {status === "cancelled" && "Cancelado"}
          </div>
        </div>
      </div>
    </div>
  );
}
