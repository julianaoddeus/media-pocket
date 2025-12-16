export type Anime = {
  id: string;
  title: string;
  studio: string;
  description: string;
  poster: string;
  rating: number;
  episodes: number;
  user_id: string;
  created_at: string;
};

export type GetAnimesResponse = {
  animesCollection: {
    edges: {
      node: Anime;
    }[];
  };
};
