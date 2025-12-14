import { SupabaseClient } from "@supabase/supabase-js";

export async function getAnimes(supabaseClient: SupabaseClient<any>) {
  const { data: animes, error } = await supabaseClient
    .from("animes")
    .select("*");

  const cleanedanimes = animes?.map((anime) => ({
    ...anime,
    cover: anime.poster ? String(anime.poster).trim() : null,
  }));

  if (error) {
    throw new Error("Falha na comunicação com o banco de dados Supabase.");
  }

  return cleanedanimes;
}
