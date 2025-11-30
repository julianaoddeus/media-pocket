import { Button } from "@/components/ui/button";
import {
  Book,
  Film,
  Tv,
  LogOut,
  User,
  Plus,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-2xl">L</span>
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">
              Media Pocket
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/books"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Book className="w-4 h-4" />
              <span>Livros</span>
            </Link>
            <Link
              href="/movies"
               className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Film className="w-4 h-4" />
              <span>Filmes</span>
            </Link>
            <Link
              href="/animes"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Tv className="w-4 h-4" />
              <span>Animes</span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Cadastrar</Button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </header>
  );
}
