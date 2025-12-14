import { Book, Film, Tv, Heart } from "lucide-react";
import { Header } from "../_components/header";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default async function About() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre o Media Pocket
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Media Pocket é sua biblioteca pessoal digital, criada para você
              organizar e gerenciar seus livros, filmes e animes favoritos em um
              único lugar elegante e acessível.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Livros
                </h3>
                <p className="text-muted-foreground">
                  Mantenha registro de todos os livros que você leu e avalie
                  cada um deles
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Film className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Filmes
                </h3>
                <p className="text-muted-foreground">
                  Organize sua lista de filmes assistidos com informações
                  detalhadas
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Tv className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Animes
                </h3>
                <p className="text-muted-foreground">
                  Acompanhe seus animes favoritos e nunca perca o controle de
                  onde parou
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20 my-12">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Nossa Missão
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Criamos o Media Pocket com o objetivo de oferecer uma
                experiência simples e intuitiva para quem ama consumir
                diferentes tipos de mídia. Acreditamos que organizar seus
                favoritos deve ser tão prazeroso quanto descobri-los.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Tecnologias
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este projeto foi desenvolvido com as melhores tecnologias
              modernas:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-foreground">Next.js 16</strong> -
                  Framework React com SSG e SSR
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-foreground">Apollo GraphQL</strong> -
                  Client para consultas eficientes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-foreground">Strapi CMS</strong> -
                  Gerenciamento de conteúdo headless
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-foreground">Tailwind CSS</strong> -
                  Estilização moderna e responsiva
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>
                  <strong className="text-foreground">TypeScript</strong> -
                  Type-safety e melhor DX
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
