import { useState } from "react";
import { AppointmentCard } from "@/components/ui/appointment-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { appointments } from "@/data/mockData";
import { Search, Filter, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminAgendamentos() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredAppointments =
    filterStatus === "all"
      ? appointments
      : appointments.filter((a) => a.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Agendamentos</h2>
          <p className="text-muted-foreground">
            Gerencie todos os agendamentos do pet shop
          </p>
        </div>
        <Button variant="hero">
          <Plus className="h-4 w-4 mr-2" />
          Novo Agendamento
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Sidebar - Calendar */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-card">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="pointer-events-auto"
            />
          </div>

          {/* Filters */}
          <div className="rounded-xl border border-border bg-card p-4 shadow-card space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </h3>
            <div className="flex flex-wrap gap-2">
              {["all", "confirmed", "pending", "cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                    filterStatus === status
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  )}
                >
                  {status === "all" && "Todos"}
                  {status === "confirmed" && "Confirmados"}
                  {status === "pending" && "Pendentes"}
                  {status === "cancelled" && "Cancelados"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Appointments List */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por cliente ou pet..." className="pl-10" />
          </div>

          {/* Appointments */}
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} {...appointment} />
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-12 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground">
                Nenhum agendamento encontrado.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
