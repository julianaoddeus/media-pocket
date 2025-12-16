import { Header } from "@/_components/header";
import { PrimarySection } from "@/_components/primary-section";
import { StatsSection } from "@/_components/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PrimarySection />
        <StatsSection />
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Como Funciona
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Cadastre-se
                  </h3>
                  <p className="text-muted-foreground">
                    Crie sua conta gratuitamente em segundos
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Adicione Favoritos
                  </h3>
                  <p className="text-muted-foreground">
                    Organize seus livros, filmes e animes
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Acesse Sempre
                  </h3>
                  <p className="text-muted-foreground">
                    Sua coleção disponível em qualquer lugar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Media Pocket. Organize seus favoritos com estilo.</p>
        </div>
      </footer>
    </div>
  );
}
