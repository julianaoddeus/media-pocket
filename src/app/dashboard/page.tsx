"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/_components/header";
import { Book, Film, TrendingUp, Tv } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { user, isLoading } = useAuth();
  const [stats, useStat] = useState({
    books: 0,
    movies: 0,
    animes: 0,
    total: 0,
  });

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  }, [user, isLoading]);

  useEffect(() => {
    const fetchStat = async () => {
      const reponse = await fetch("/api/stats");
      if (reponse.ok) {
        const data = await reponse.json();
        useStat(data);
      }
    };

    if (user) fetchStat();
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Seja em vindo, {user?.user_metadata?.name}!
          </p>
        </div>

        <div className="grid md:grid-cols-2 ld:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Itens
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {stats.total}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Em sua coleção
              </p>
            </CardContent>
          </Card>

          <Link href="/books">
            <Card className="hover:ring-2 hover:ring-primary trasition-all cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pd-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Livros
                </CardTitle>
                <Book className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {stats.books}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Livros registrados
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/movies">
            <Card className="hover:ring-2 hover:ring-primary trasition-all cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pd-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Filmes
                </CardTitle>
                <Film className="w-4 h-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {stats.movies}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Filmes registrados
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/animes">
            <Card className="hover:ring-2 hover:ring-primary trasition-all cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pd-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Animes
                </CardTitle>
                <Tv className="w-4 h-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-boal text-foreground">
                  {stats.animes}
                </div>
                <p className="text-xl text-muted-foreground mt-1">
                  Animes acompanhados
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Ações Rápidas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/add">
              <Card className="hover:ring-2 hover:ring-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">➕</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Adicionar Novo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Adicione um novo item à sua coleção
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/books">
              <Card className="hover:ring-2 hover:ring-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Book className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Ver Livros
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Navegue pela sua biblioteca
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/about">
              <Card className="hover:ring-2 hover:ring-primary transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">ℹ️</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Sobre
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Saiba mais sobre o projeto
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
