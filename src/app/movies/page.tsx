import { Header } from "@/_components/header";
import { MediaCard } from "@/_components/meadia-card";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getMovies } from "@/services/movies-services";

export const dynimic = "force-dynamic";
export const revalidate = 3600;

export default async function Movies() {
  const supabase = await createClient();
  const movies = await getMovies(supabase);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

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

        {movies?.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum filme encontrado. Adicione seu primeiro filme!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies?.map((movie) => (
              <MediaCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.poster}
                rating={movie.rating}
                subtitle={movie.director}
                href={`/movies/${movie.id}`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
