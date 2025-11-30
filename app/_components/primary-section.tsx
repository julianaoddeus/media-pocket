import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function PrimarySection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className=" font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Seus Favoritos em um Só Lugar.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Organize e gerencie sua coleção de livros, filmes e animes favoritos
            de forma simples e elegante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg">
                Começar Agora
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/books">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
              >
                Explorar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
