export type Movie = {
  id: string;
  title: string;
  director: string;
  description: string;
  poster: string;
  rating: number;
  user_id: string;
  created_at: string;
};

export type GetMoviesResponse = {
  moviesCollection: {
    edges: {
      node: Movie;
    }[];
  };
};
