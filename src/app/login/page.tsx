"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, Mail, Lock } from "lucide-react";
import { useAuth } from "@/contexts/auth-client";
import { Header } from "@/_components/header";

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err.message || "Erro ao fazer login. Verifique suas credenciais."
      );
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
              Bem-vindo de volta
            </h1>
            <p className="text-muted-foreground">
              Entre para acessar sua coleção
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Entre com suas credenciais para continuar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="••••••••"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline"
                  >
                    Cadastre-se
                  </Link>
                </div>
                
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
