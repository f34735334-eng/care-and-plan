import { blogPosts } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="gradient-hero py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pet Dicas
            </h1>
            <p className="text-lg text-muted-foreground">
              Dicas, novidades e informações úteis para cuidar melhor do seu pet.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="border-b border-border bg-card">
        <div className="container px-4 md:px-6 py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar artigos..."
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-medium"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-foreground line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Ler mais
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar mais artigos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Receba nossas dicas por e-mail
            </h2>
            <p className="text-muted-foreground">
              Cadastre-se para receber conteúdo exclusivo sobre cuidados com pets.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1"
              />
              <Button variant="hero" type="submit">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
