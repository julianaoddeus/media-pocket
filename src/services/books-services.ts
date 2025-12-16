import { supabaseAdmin } from "@/lib/supabase/admin";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getBooks() {
  // Use o cliente Admin, seguro no build/servidor
  const { data: books, error } = await supabaseAdmin.from("books").select("*");

  if (error) {
    console.error(error);
    throw new Error("Falha na comunicação com o banco de dados Supabase.");
  }

  return books.map((book) => ({
    ...book,
    cover: book.cover ? String(book.cover).trim() : null,
  }));
}

export async function getBook(id: string) {
  if (
    !id ||
    String(id).trim() === "" ||
    String(id).toLowerCase() === "undefined"
  ) {
    console.warn("getBook chamado com ID inválido/ausente e foi ignorado:", id);
    return null;
  }
  const { data, error } = await supabaseAdmin
    .from("books")
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
