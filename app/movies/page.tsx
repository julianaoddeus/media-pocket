import { db } from "@/lib/db";
import { Header } from "../_components/header";
import { MediaCard } from "../_components/meadia-card";

export const dynimic = "force-dynamic";
export const revalidate = 3600;

async function getMovies() {
  return db.movies;
}

export default async function Movies() {
  const movies = await getMovies();

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meus Filmes Favoritos
          </h1>
          <p className="text-lg text-muted-foreground">
            Uma coleção dos melhores filmes que já vi
          </p>
        </div>

        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Nenhum filme encontrado. Adicione seu primeiro filme!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster}
              rating={movie.rating}
              subtitle={movie.director}
              href={`/movies/${movie.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
