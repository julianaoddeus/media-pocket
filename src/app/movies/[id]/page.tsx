import { Star, ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/_components/header";
import { getMovie, getMovies } from "@/services/movies-services";

export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map((movie) => ({
    id: movie.id,
  }));
}

export const dynamic = "force-static";

export default async function movieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const movie = await getMovie(id);

  if (!movie) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link href="/movies">
          <Button variant="ghost" className="gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Livros
          </Button>
        </Link>

        <div className="grid md:grid-cols-[00px,1fr] gap-8">
          <div className="space-y-4">
            <div className="w-70 h-100 overflow-hidden rounded-xl bg-muted">
              <img
                src={movie.poster || "/placeholder.svg"}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < movie.rating ? "fill-accent text-accent" : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{movie.studio}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(movie.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Sinopse
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {movie.description}
              </p>
            </div>

            <div className="pt-6">
              <Link href="/add">
                <Button size="lg">Adicionar Novo Livro</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
