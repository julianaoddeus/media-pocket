import { AddAnime } from "@/app/actions/add-animes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export function AnimeForm() {
  const [rating, setRating] = useState(5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Novo Anime</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            await AddAnime(formData);
          }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              name="title"
              placeholder="Ex: Attack on Titan"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studio">Studio *</Label>
            <Input id="studio" name="studio" placeholder="Ex: MAPPA" required />
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
              placeholder="https://picsum.photos/seed/anime/400/600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="episodes">Número de Episódios *</Label>
            <Input
              id="episodes"
              name="episodes"
              type="number"
              min="1"
              required
            />
          </div>

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

          <Button type="submit" size="lg" className="w-full">
            "Adicionar Filme"
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
