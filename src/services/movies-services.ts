import { SupabaseClient } from "@supabase/supabase-js";

export async function getMovies(supabaseClient: SupabaseClient<any>) {
  const { data: Movies, error } = await supabaseClient
    .from("movies")
    .select("*");

  const cleanedMovies = Movies?.map((movie) => ({
    ...movie,
    cover: movie.cover ? String(movie.cover).trim() : null,
  }));

  if (error) {
    throw new Error("Falha na comunicação com o banco de dados Supabase.");
  }

  return cleanedMovies;
}
