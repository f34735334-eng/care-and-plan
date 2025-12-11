import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { AdminLayout } from "@/components/layout/AdminLayout";

// Public Pages
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";
import Profissionais from "./pages/Profissionais";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminAgendamentos from "./pages/admin/Agendamentos";
import AdminServicos from "./pages/admin/ServicosAdmin";
import AdminProfissionais from "./pages/admin/ProfissionaisAdmin";
import AdminBlog from "./pages/admin/BlogAdmin";
import AdminConfiguracoes from "./pages/admin/Configuracoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/profissionais" element={<Profissionais />} />
            <Route path="/blog" element={<Blog />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="agendamentos" element={<AdminAgendamentos />} />
            <Route path="servicos" element={<AdminServicos />} />
            <Route path="profissionais" element={<AdminProfissionais />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="configuracoes" element={<AdminConfiguracoes />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
