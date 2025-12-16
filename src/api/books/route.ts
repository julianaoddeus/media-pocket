
import { createClient } from "@/lib/supabase/server";
import { getBooks } from "@/services/books-services";

export async function GET() {
  try {
    const supabase = createClient();
    const books = getBooks(await supabase);
    return new Response(JSON.stringify(books), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Erro interno do servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
