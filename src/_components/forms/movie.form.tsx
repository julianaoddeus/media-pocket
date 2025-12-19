import { AddMovie } from "@/app/actions/add-movies";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export function MovieForm() {
  const [rating, setRating] = useState(5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Novo Filme</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            await AddMovie(formData);
          }}
          className="space-y-6"
        >
          <input type="hidden" name="type" value="movie" />
          <input type="hidden" name="rating" value="5" />

          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              name="title"
              placeholder="Ex:Inception"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="director">Diretor *</Label>
            <Input
              id="director"
              name="director"
              placeholder="Ex: Christopher Nolan"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Conte-nos sobre este filme..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="poster">URL do Poster (opcional)</Label>
            <Input
              id="poster"
              name="poster"
              type="url"
              placeholder="https://picsum.photos/seed/movie/400/600"
            />
          </div>

          <div className="space-y-2">
            <Label>Avaliação: 5/5</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      value <= rating
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
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
