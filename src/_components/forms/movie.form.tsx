import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export function MovieForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Novo Filme</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="movie-title">Título *</Label>
            <Input
              id="movie-title"
              
              placeholder="Ex:Inception"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="movie-title">Diretor *</Label>
            <Input
              id="director"
              
              placeholder="Ex: Christopher Nolan"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="movie-description">Descrição *</Label>
            <Textarea
              id="movie-description"
              
              placeholder="Conte-nos sobre este filme..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="poster">URL do Poster (opcional)</Label>
            <Input
              id="poster"
              type="url"
              
              placeholder="https://exemplo.com/poster.jpg"
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
            "Adicionar Filme"
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
