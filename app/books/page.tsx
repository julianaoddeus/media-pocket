import { db } from "@/lib/interface";
import { Header } from "../_components/header";
import { MediaCard } from "../_components/meadia-card";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynimic = "force-dynamic";
export const revalidate = 3600;

async function getBooks() {
  return db.books;
}

export default async function Book() {
  const supabase = await createClient();
  const books = await getBooks();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meus Livros Favoritos
          </h1>
          <p className="text-lg text-muted-foreground">
            Uma coleção dos melhores livros que já li
          </p>
        </div>

        {books.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum livro encontrado. Adicione seu primeiro livro!
            </p>
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
                href={`/movies/${book.id}`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
