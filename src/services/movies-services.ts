import { supabaseAdmin } from "@/lib/supabase/admin";

export async function getMovies() {
  const { data: movies, error } = await supabaseAdmin.from("movies").select("*");

  if (error) {
    console.error(error);
    throw new Error("Falha na comunicação com o banco de dados Supabase.");
  }

  return movies.map((movie) => ({
    ...movie,
    cover: movie.cover ? String(movie.cover).trim() : null,
  }));
}

export async function getMovie(id: string) {
  if (
    !id ||
    String(id).trim() === "" ||
    String(id).toLowerCase() === "undefined"
  ) {
    console.warn("getmovie chamado com ID inválido/ausente e foi ignorado:", id);
    return null;
  }
  const { data, error } = await supabaseAdmin
    .from("movies")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(
      "Falha na comunicação com o banco de dados Supabase.",
      error
    );
  }

  return data;
}
