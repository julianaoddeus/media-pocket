import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

interface MediaCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  subtitle?: string;
  href: string;
}

export function MediaCard({
  id,
  title,
  image,
  rating,
  subtitle,
  href,
}: MediaCardProps) {
  return (
    <Link href={href}>
      <Card className="group overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300">
        <div className="aspect-2/3 overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-1 mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
            {subtitle}
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "fill-accent text-accent" : "text-muted"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
