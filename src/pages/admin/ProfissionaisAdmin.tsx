import { Button } from "@/components/ui/button";
import { professionals } from "@/data/mockData";
import { Plus, Edit, Trash2, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminProfissionais() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Profissionais</h2>
          <p className="text-muted-foreground">
            Gerencie a equipe do pet shop
          </p>
        </div>
        <Button variant="hero">
          <Plus className="h-4 w-4 mr-2" />
          Novo Profissional
        </Button>
      </div>

      {/* Professionals Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Profissional</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Especialidade</TableHead>
              <TableHead>Avaliação</TableHead>
              <TableHead>Experiência</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {professionals.map((professional) => (
              <TableRow key={professional.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-foreground">
                      {professional.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-primary font-medium">
                    {professional.role}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {professional.specialty}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium">{professional.rating}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {professional.experience}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
