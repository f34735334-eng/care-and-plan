import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, professionals } from "@/data/mockData";
import { CheckCircle2, Clock, User, PawPrint, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function Agendamento() {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get("servico") || "";

  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    service: preSelectedService,
    professional: "",
    time: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    petName: "",
    petBreed: "",
    petAge: "",
  });

  const selectedService = services.find((s) => s.id === formData.service);
  const selectedProfessional = professionals.find(
    (p) => p.id === formData.professional
  );

  const handleSubmit = () => {
    toast({
      title: "Agendamento realizado!",
      description: "Você receberá uma confirmação por e-mail e WhatsApp.",
    });
    setStep(4);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="gradient-hero py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agendar Serviço
            </h1>
            <p className="text-lg text-muted-foreground">
              Escolha o serviço, profissional e horário mais conveniente para você
              e seu pet.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="border-b border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex items-center py-4 overflow-x-auto">
            {["Serviço", "Data e Hora", "Seus Dados", "Confirmação"].map(
              (label, index) => (
                <div key={label} className="flex items-center">
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                      step > index + 1
                        ? "bg-primary text-primary-foreground"
                        : step === index + 1
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                        step > index + 1
                          ? "bg-primary-foreground text-primary"
                          : step === index + 1
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {step > index + 1 ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="w-8 h-px bg-border mx-2 hidden sm:block" />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    Selecione o Serviço
                  </Label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() =>
                          setFormData({ ...formData, service: service.id })
                        }
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.service === service.id
                            ? "border-primary bg-accent"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <h3 className="font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-primary font-bold">
                            R$ {service.price.toFixed(2).replace(".", ",")}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {service.duration}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    Escolha o Profissional (opcional)
                  </Label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {professionals.map((professional) => (
                      <button
                        key={professional.id}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            professional: professional.id,
                          })
                        }
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.professional === professional.id
                            ? "border-primary bg-accent"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={professional.image}
                            alt={professional.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {professional.name}
                            </h3>
                            <p className="text-sm text-primary">
                              {professional.role}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!formData.service}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Selecione a Data
                    </Label>
                    <div className="rounded-xl border border-border bg-card p-4">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        className="pointer-events-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Selecione o Horário
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setFormData({ ...formData, time })}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            formData.time === time
                              ? "border-primary bg-accent text-accent-foreground"
                              : "border-border bg-card hover:border-primary/50"
                          }`}
                        >
                          <span className="font-medium">{time}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => setStep(3)}
                    disabled={!date || !formData.time}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Client Data */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Seus Dados
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientName">Nome Completo</Label>
                    <Input
                      id="clientName"
                      value={formData.clientName}
                      onChange={(e) =>
                        setFormData({ ...formData, clientName: e.target.value })
                      }
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientPhone">Telefone / WhatsApp</Label>
                    <Input
                      id="clientPhone"
                      value={formData.clientPhone}
                      onChange={(e) =>
                        setFormData({ ...formData, clientPhone: e.target.value })
                      }
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="clientEmail">E-mail</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, clientEmail: e.target.value })
                      }
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-4 md:col-span-2 pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <PawPrint className="h-5 w-5 text-primary" />
                      Dados do Pet
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petName">Nome do Pet</Label>
                    <Input
                      id="petName"
                      value={formData.petName}
                      onChange={(e) =>
                        setFormData({ ...formData, petName: e.target.value })
                      }
                      placeholder="Nome do seu pet"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petBreed">Raça</Label>
                    <Input
                      id="petBreed"
                      value={formData.petBreed}
                      onChange={(e) =>
                        setFormData({ ...formData, petBreed: e.target.value })
                      }
                      placeholder="Ex: Golden Retriever"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petAge">Idade</Label>
                    <Select
                      value={formData.petAge}
                      onValueChange={(value) =>
                        setFormData({ ...formData, petAge: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a idade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="filhote">Filhote (até 1 ano)</SelectItem>
                        <SelectItem value="jovem">Jovem (1-3 anos)</SelectItem>
                        <SelectItem value="adulto">Adulto (3-7 anos)</SelectItem>
                        <SelectItem value="idoso">Idoso (7+ anos)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                    Voltar
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={
                      !formData.clientName ||
                      !formData.clientPhone ||
                      !formData.petName
                    }
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="text-center space-y-6 animate-scale-in py-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">
                    Agendamento Confirmado!
                  </h2>
                  <p className="text-muted-foreground">
                    Enviamos os detalhes para seu e-mail e WhatsApp.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 max-w-md mx-auto text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Data e Hora</p>
                      <p className="font-medium text-foreground">
                        {date?.toLocaleDateString("pt-BR")} às {formData.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <PawPrint className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Serviço</p>
                      <p className="font-medium text-foreground">
                        {selectedService?.title}
                      </p>
                    </div>
                  </div>
                  {selectedProfessional && (
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Profissional
                        </p>
                        <p className="font-medium text-foreground">
                          {selectedProfessional.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                    Novo Agendamento
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5511999999999?text=Olá! Acabei de agendar ${selectedService?.title} para ${date?.toLocaleDateString("pt-BR")} às ${formData.time}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Confirmar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
