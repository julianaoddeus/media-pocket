import { getMovies } from "@/services/movies-services";

export async function GET() {
  try {   
    const animes = getMovies();
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
