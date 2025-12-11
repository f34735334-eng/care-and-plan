import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import {
  Building,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Save,
} from "lucide-react";

export default function AdminConfiguracoes() {
  const handleSave = () => {
    toast({
      title: "Configurações salvas!",
      description: "As alterações foram aplicadas com sucesso.",
    });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Configurações</h2>
        <p className="text-muted-foreground">
          Gerencie as informações do seu pet shop
        </p>
      </div>

      {/* Business Info */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Building className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Informações do Negócio
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="businessName">Nome do Pet Shop</Label>
            <Input id="businessName" defaultValue="Brasil Pet" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input id="cnpj" defaultValue="00.000.000/0001-00" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              defaultValue="Cuidando do seu pet com amor e profissionalismo. Serviços veterinários, estética e muito mais."
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Phone className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Contato</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone Principal</Label>
            <Input id="phone" defaultValue="(11) 99999-9999" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input id="whatsapp" defaultValue="(11) 99999-9999" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              defaultValue="contato@brasilpet.com.br"
            />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <MapPin className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Endereço</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="street">Rua</Label>
            <Input id="street" defaultValue="Rua das Flores" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Número</Label>
            <Input id="number" defaultValue="123" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input id="neighborhood" defaultValue="Centro" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" defaultValue="São Paulo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">Estado</Label>
            <Input id="state" defaultValue="SP" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">CEP</Label>
            <Input id="zip" defaultValue="01234-567" />
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Clock className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Horário de Funcionamento
          </h3>
        </div>

        <div className="space-y-4">
          {[
            { day: "Segunda a Sexta", open: "08:00", close: "20:00" },
            { day: "Sábado", open: "08:00", close: "18:00" },
            { day: "Domingo", open: "", close: "", closed: true },
          ].map((schedule) => (
            <div
              key={schedule.day}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <span className="font-medium text-foreground">{schedule.day}</span>
              <div className="flex items-center gap-4">
                {schedule.closed ? (
                  <span className="text-muted-foreground">Fechado</span>
                ) : (
                  <>
                    <Input
                      className="w-24"
                      defaultValue={schedule.open}
                      placeholder="Abertura"
                    />
                    <span className="text-muted-foreground">às</span>
                    <Input
                      className="w-24"
                      defaultValue={schedule.close}
                      placeholder="Fechamento"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Instagram className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Redes Sociais</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="instagram">Instagram</Label>
            <Input id="instagram" defaultValue="@brasilpet" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="facebook">Facebook</Label>
            <Input id="facebook" defaultValue="brasilpetshop" />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Notificações</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">
                Lembrete por WhatsApp
              </p>
              <p className="text-sm text-muted-foreground">
                Enviar lembrete 24h antes do agendamento
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Lembrete por E-mail</p>
              <p className="text-sm text-muted-foreground">
                Enviar confirmação por e-mail
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button variant="hero" size="lg" onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
}
