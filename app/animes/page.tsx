import { Header } from "../_components/header";
import { MediaCard } from "../_components/meadia-card";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getAnimes } from "../services/animes-services";

export const dynimic = "force-dynamic";
export const revalidate = 3600;

export default async function Animes() {
  const supabase = await createClient();
  const animes = await getAnimes(supabase);
  console.log(animes);
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
            Meus Animes Favoritos
          </h1>
          <p className="text-lg text-muted-foreground">
            Uma coleção dos melhores animes que já li
          </p>
        </div>
        {animes?.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum anime encontrado. Adicione seu primeiro anime!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {animes?.map((anime) => (
              <MediaCard
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.poster}
                rating={anime.rating}
                subtitle={`${anime.studio} • ${anime.episodes} episódios`}
                href={`/animes/${anime.id}`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
