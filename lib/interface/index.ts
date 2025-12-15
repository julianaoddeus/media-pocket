// Mock database para simular Strapi CMS
export interface IUser {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  user_metadata: {
    name: string;
  };
}

export interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  rating: number;
  userId: string;
  createdAt: string;
}

export interface IMovie {
  id: string;
  title: string;
  director: string;
  description: string;
  poster: string;
  rating: number;
  userId: string;
  createdAt: string;
}

export interface IAnime {
  id: string;
  title: string;
  studio: string;
  description: string;
  poster: string;
  rating: number;
  episodes: number;
  userId: string;
  createdAt: string;
}
