import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Film, Tv } from "lucide-react";
import { Header } from "../_components/header";
import { BookForm } from "../_components/forms/book-form";
import { MovieForm } from "../_components/forms/movie.form";
import { AnimeForm } from "../_components/forms/anime-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default async function Add() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Adicionar à Coleção
            </h1>
            <p className="text-lg text-muted-foreground">
              Adicione um novo livro, filme ou anime aos seus favoritos
            </p>
          </div>

          <Tabs defaultValue="book" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="book"
                className="flex items-center justify-center gap-2"
              >
                <Book className="w-4 h-4" />
                Livro
              </TabsTrigger>
              <TabsTrigger
                value="movie"
                className="flex items-center justify-center gap-2"
              >
                <Film className="w-4 h-4" />
                Filme
              </TabsTrigger>
              <TabsTrigger
                value="anime"
                className="flex items-center justify-center gap-2"
              >
                <Tv className="w-4 h-4" />
                Anime
              </TabsTrigger>
            </TabsList>

            <TabsContent value="book" className="mt-8">
              <BookForm />
            </TabsContent>

            <TabsContent value="movie" className="mt-8">
              <MovieForm />
            </TabsContent>

            <TabsContent value="anime" className="mt-8">
              <AnimeForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
