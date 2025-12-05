import { Header } from "../_components/header";

export default function Books() {
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

        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Nenhum livro encontrado. Adicione seu primeiro livro!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Book items would go here */}
        </div>
      </main>
    </div>
  );
}
