import { AddBook } from "@/app/actions/add-book";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export function BookForm() {
  const [rating, setRating] = useState(5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Novo Livro</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            await AddBook(formData);
          }}
          className="space-y-6"
        >
          <input type="hidden" name="type" value="book" />
          <input type="hidden" name="rating" value="5" />

          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              name="title"
              placeholder="Ex: O Senhor do anéis"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Autor *</Label>
            <Input
              id="author"
              name="author"
              placeholder="Ex: J.R.R. Tolkien"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição *</Label>
            <Textarea
              id="description"
              name="description"
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
              name="cover"
              placeholder="https://placehold.co/400x600/1f2937/ffffff?text=Book+Cover"
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
            "Adicionar Livro"
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
