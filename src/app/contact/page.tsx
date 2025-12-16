import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/_components/header";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center ">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground">
              Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
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

                <div>
                  <Label>Assunt *</Label>
                  <Input
                    id="subject"
                    placeholder="Sobre o que você gostaria de falar?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    placeholder="Sobre o que você gostaria de falar?"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
