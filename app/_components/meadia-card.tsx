import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

interface MediaCardProps {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  subtitle?: string;
  href: string;
}

export function MediaCard({
  id,
  title,
  imageUrl,
  rating,
  subtitle,
  href,
}: MediaCardProps) {
  return (
    <Link href={href}>
      <Card className="group overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300">
        <div className="aspect-2/3 overflow-hidden bg-muted">
          <img
            src={imageUrl || "/placehoder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Card>
      <CardContent>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div>
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
    </Link>
  );
}
