import { db, type User } from "./db";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export const createUser = (
  email: string,
  password: string,
  name: string
): User => {
  const newUser: User = {
    id: Date.now().toString(),
    email,
    password,
    name,
    createdAt: new Date().toISOString(),
  };
  db.users.push(newUser);
  return newUser;
};

export const findUserByEmail = (email: string): User | undefined => {
  return db.users.find((user) => user.email === email);
};

export const validateUser = (
  email: string,
  password: string
): AuthUser | null => {
  const user = findUserByEmail(email);
  if (user && user.password === password) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
  return null;
};

export const generateToken = (user: AuthUser): string => {
  return Buffer.from(JSON.stringify(user)).toString("base64");
};

export const verifyToken = (token: string): AuthUser | null => {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
};
