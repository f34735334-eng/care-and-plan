import { Link } from "react-router-dom";
import { MetricCard } from "@/components/ui/metric-card";
import { AppointmentCard } from "@/components/ui/appointment-card";
import { Button } from "@/components/ui/button";
import { appointments, dashboardMetrics } from "@/data/mockData";
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  const todayAppointments = appointments.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Agendamentos Confirmados"
          value={dashboardMetrics.confirmedAppointments}
          change={dashboardMetrics.confirmedChange}
          changeType="positive"
          icon={Calendar}
        />
        <MetricCard
          title="Taxa de Não Comparecimento"
          value={dashboardMetrics.noShowRate}
          change={dashboardMetrics.noShowChange}
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Faturamento Estimado"
          value={dashboardMetrics.estimatedRevenue}
          change={dashboardMetrics.revenueChange}
          changeType="positive"
          icon={DollarSign}
        />
        <MetricCard
          title="Ocupação da Agenda"
          value={dashboardMetrics.occupancyRate}
          change={dashboardMetrics.occupancyChange}
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Today's Appointments */}
      <div className="rounded-xl border border-border bg-card shadow-card">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Clock className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Agendamentos de Hoje
              </h2>
              <p className="text-sm text-muted-foreground">
                {todayAppointments.length} compromissos
              </p>
            </div>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/admin/agendamentos" className="flex items-center gap-2">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="p-6 space-y-4">
          {todayAppointments.map((appointment) => (
            <AppointmentCard key={appointment.id} {...appointment} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/admin/agendamentos"
          className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-medium hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Gerenciar Agenda</h3>
              <p className="text-sm text-muted-foreground">
                Ver e editar agendamentos
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/admin/servicos"
          className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-medium hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Serviços e Preços</h3>
              <p className="text-sm text-muted-foreground">
                Atualizar catálogo
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/admin/profissionais"
          className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-medium hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Equipe</h3>
              <p className="text-sm text-muted-foreground">
                Gerenciar profissionais
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
