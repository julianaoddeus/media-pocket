"use client";
import type React from "react";
import { Header } from "../_components/header";
import { Lock, LogIn, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Login() {
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
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
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
                      placeholder="********"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* error */}

                <Button type="submit" size="lg" className="w-full">
                  Entrar
                </Button>

                <div>
                  Não tem uma conta?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline"
                  >
                    Cadastre-se
                  </Link>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Credenciais de teste: <br />
                    Email:
                    <span className="text-xs text-foreground font-mono">
                      demo@example.com
                    </span>
                    <br />
                    Senha:
                    <span className="text-xs text-foreground font-mono">
                      demo123
                    </span>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
