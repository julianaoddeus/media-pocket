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

// Mock database storage
export const db = {
  users: [
    {
      id: "1",
      email: "demo@example.com",
      password: "demo123",

      createdAt: new Date().toISOString(),
    },
  ] as IUser[],
  books: [
    {
      id: "1",
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      description: "Uma épica jornada pela Terra Média",
      cover: "/lord-of-the-rings-cover.png",
      rating: 5,
      user_id: "1",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      description: "Um clássico distópico sobre vigilância e controle",
      cover: "/1984-book-cover.png",
      rating: 5,
      userId: "1",
      createdAt: new Date().toISOString(),
    },
  ] as IBook[],
  movies: [
    {
      id: "1",
      title: "Inception",
      director: "Christopher Nolan",
      description: "Um ladrão que rouba segredos através dos sonhos",
      poster: "/inception-movie-poster.png",
      rating: 5,
      userId: "1",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Interstellar",
      director: "Christopher Nolan",
      description: "Uma jornada através do espaço e tempo",
      poster: "/interstellar-movie-poster.jpg",
      rating: 5,
      userId: "1",
      createdAt: new Date().toISOString(),
    },
  ] as IMovie[],
  animes: [
    {
      id: "1",
      title: "Attack on Titan",
      studio: "MAPPA",
      description: "Humanidade vs Titãs em uma batalha épica",
      poster: "/attack-on-titan-inspired-poster.png",
      rating: 5,
      episodes: 87,
      userId: "1",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Death Note",
      studio: "Madhouse",
      description:
        "Um caderno que mata qualquer pessoa cujo nome seja escrito nele",
      poster: "/death-note-anime-poster.jpg",
      rating: 5,
      episodes: 37,
      userId: "1",
      createdAt: new Date().toISOString(),
    },
  ] as IAnime[],
};
