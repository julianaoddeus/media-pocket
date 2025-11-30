import { Book, Film, Tv } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Book,
      label: "Livros",
      count: "2",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Film,
      label: "Filmes",
      count: "2",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Tv,
      label: "Animes",
      count: "2",
      color: "from-orange-500 to-red-500",
    },
  ];
  return (
    <section className="py-6 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.count}
              </div>
              <div className=" text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
