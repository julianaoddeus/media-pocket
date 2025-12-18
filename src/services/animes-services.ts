import { supabaseAdmin } from "@/lib/supabase/admin";


export async function getAnimes() {
  const { data: animes, error } = await supabaseAdmin.from("animes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Falha na comunicação com o banco de dados Supabase.");
  }

  return animes.map((anime) => ({
    ...anime,
    cover: anime.cover ? String(anime.cover).trim() : null,
  }));
}

export async function getanime(id: string) {
  if (
    !id ||
    String(id).trim() === "" ||
    String(id).toLowerCase() === "undefined"
  ) {
    console.warn(" ID inválido/ausente e foi ignorado:", id);
    return null;
  }
  const { data, error } = await supabaseAdmin
    .from("animes")
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