import { getAnimes } from "@/services/animes-services";
import { SupabaseClient } from "@supabase/supabase-js";

export async function GET() {
  try {
 
    const animes = getAnimes();
    return new Response(JSON.stringify(animes), {
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
function getBooks(arg0: SupabaseClient<any, "public", "public", any, any>) {
  throw new Error("Function not implemented.");
}
