"use client";

import { useBooks } from "@/hooks/use-books";
import { useMovies } from "@/hooks/use-movies";
import { useAnimes } from "@/hooks/use-animes";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Film, Tv } from "lucide-react";
import { Header } from "../_components/header";
import { MediaCard } from "../_components/meadia-card";

export default function Explore() {
  const { books, loading: booksLoading } = useBooks();
  const { movies, loading: moviesLoading } = useMovies();
  const { animes, loading: animesLoading } = useAnimes();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explorar Coleção
          </h1>
          <p className="text-lg text-muted-foreground">
            Navegue por toda a sua biblioteca de mídia favorita
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="books" className="gap-2">
              <Book className="w-4 h-4" />
              Livros
            </TabsTrigger>
            <TabsTrigger value="movies" className="gap-2">
              <Film className="w-4 h-4" />
              Filmes
            </TabsTrigger>
            <TabsTrigger value="animes" className="gap-2">
              <Tv className="w-4 h-4" />
              Animes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Livros
                </h2>
                {booksLoading ? (
                  <div className="text-muted-foreground">
                    Carregando livros...
                  </div>
                ) : books.length === 0 ? (
                  <div className="text-muted-foreground">
                    Nenhum livro encontrado
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {books.map((book) => (
                      <MediaCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        image={book.cover}
                        rating={book.rating}
                        subtitle={book.author}
                        href={`/books/${book.id}`}
                      />
                    ))}
                  </div>
                )}
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Filmes
                </h2>
                {moviesLoading ? (
                  <div className="text-muted-foreground">
                    Carregando filmes...
                  </div>
                ) : movies.length === 0 ? (
                  <div className="text-muted-foreground">
                    Nenhum filme encontrado
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {movies.map((movie) => (
                      <MediaCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        image={movie.poster}
                        rating={movie.rating}
                        subtitle={movie.director}
                        href={`/movies/${movie.id}`}
                      />
                    ))}
                  </div>
                )}
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Animes
                </h2>
                {animesLoading ? (
                  <div className="text-muted-foreground">
                    Carregando animes...
                  </div>
                ) : animes.length === 0 ? (
                  <div className="text-muted-foreground">
                    Nenhum anime encontrado
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {animes.map((anime) => (
                      <MediaCard
                        key={anime.id}
                        id={anime.id}
                        title={anime.title}
                        image={anime.poster}
                        rating={anime.rating}
                        subtitle={`${anime.studio} • ${anime.episodes} eps`}
                        href={`/animes/${anime.id}`}
                      />
                    ))}
                  </div>
                )}
              </section>
            </div>
          </TabsContent>

          <TabsContent value="books" className="mt-8">
            {booksLoading ? (
              <div className="text-muted-foreground">Carregando livros...</div>
            ) : books.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                Nenhum livro encontrado
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {books.map((book) => (
                  <MediaCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    image={book.cover}
                    rating={book.rating}
                    subtitle={book.author}
                    href={`/books/${book.id}`}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="movies" className="mt-8">
            {moviesLoading ? (
              <div className="text-muted-foreground">Carregando filmes...</div>
            ) : movies.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                Nenhum filme encontrado
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie) => (
                  <MediaCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={movie.poster}
                    rating={movie.rating}
                    subtitle={movie.director}
                    href={`/movies/${movie.id}`}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="animes" className="mt-8">
            {animesLoading ? (
              <div className="text-muted-foreground">Carregando animes...</div>
            ) : animes.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                Nenhum anime encontrado
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {animes.map((anime) => (
                  <MediaCard
                    key={anime.id}
                    id={anime.id}
                    title={anime.title}
                    image={anime.poster}
                    rating={anime.rating}
                    subtitle={`${anime.studio} • ${anime.episodes} eps`}
                    href={`/animes/${anime.id}`}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
