import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export function BookForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Novo Livro</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
             
              placeholder="Ex: O Senhor do anéis"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Autor *</Label>
            <Input
              id="author"
             
              placeholder="Ex: J.R.R. Tolkien"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição *</Label>
            <Textarea
              id="description"
             
              placeholder="Conte-nos sobre este livro..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover">URL da Capa (opcional)</Label>
            <Input
              id="cover"
              type="url"
             
              placeholder="https://exemplo.com/capa.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label>Avaliação: 5/5</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className="transition-transform hover:scale-110"
                >
                  <Star className={`w-8 h-8 fill-accent text-accent`} />
                </button>
              ))}
            </div>

          </div>
          
          <Button type="submit" size="lg" className="w-full">
            "Adicionar Livro"
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
