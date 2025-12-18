import { getAnimes } from "@/services/animes-services";
import { getBooks } from "@/services/books-services";
import { getMovies } from "@/services/movies-services";
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
 
 const books = await getBooks();
 const movies = await getMovies();
 const animes = await getAnimes();
  const stats = {
    books: books.length,
    movies: movies.length,
    animes: animes.length,
    total: books.length + movies.length + animes.length,
  }

  return NextResponse.json(stats)
}
