import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/mockData";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminBlog() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Pet Dicas - Blog</h2>
          <p className="text-muted-foreground">
            Gerencie os artigos e conteúdos do blog
          </p>
        </div>
        <Button variant="hero">
          <Plus className="h-4 w-4 mr-2" />
          Novo Artigo
        </Button>
      </div>

      {/* Articles Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artigo</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Leitura</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-12 w-16 rounded-lg object-cover"
                    />
                    <div className="max-w-xs">
                      <p className="font-medium text-foreground line-clamp-1">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    {post.category}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.date}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.readTime}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
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
