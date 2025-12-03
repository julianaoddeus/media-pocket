import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export function AnimeForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Novo Anime</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="anime-title">Título *</Label>
            <Input
              id="anime-title"
              placeholder="Ex: Attack on Titan"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studio">Studio *</Label>
            <Input id="studio" placeholder="Ex: MAPPA" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="anime-description">Descrição *</Label>
            <Textarea
              id="anime-description"
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
            <Label htmlFor="episodes">Número de Episódios *</Label>
            <Input id="episodes" type="number" min="1" required />
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
