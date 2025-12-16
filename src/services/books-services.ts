import { SupabaseClient } from "@supabase/supabase-js";

export async function getBooks(supabaseClient: SupabaseClient<any>) {
  const { data: books, error } = await supabaseClient.from("books").select("*");

  const cleanedBooks = books?.map((book) => ({
    ...book,
    cover: book.cover ? String(book.cover).trim() : null,
  }));

  if (error) {
    throw new Error("Falha na comunicação com o banco de dados Supabase.");
  }

  return cleanedBooks;
}
