"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";


import { IUser } from "@/lib/interface/user";
import { useRouter } from "next/navigation";
import { createClient } from '@/lib/supabase/client';

interface AuthContextType {
  user: IUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  getSignedUrl: (filePath: string) => Promise<string>;
  uploadPicture: (file: File, userId: string) => Promise<string>;
  logout: () => void;
  isLoading: boolean;
}

const EXPIRATION_TIME_SECONDS = 2592000;
const AuthContext = createContext<AuthContextType | undefined>(undefined);
const supabase = createClient();

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {   
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoading(false);
    if (error) {
      throw new Error(error.message);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro desconhecido ao registrar.");
      }
      await login(email, password);
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);

    router.refresh();
  };

  const uploadPicture = async (file: File, userId: string) => {
    const filePath = `${userId}/${file.name}`;

    const { data, error } = await supabase.storage
      .from("media_poket_Storage")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      throw new Error("Erro ao fazer upload: " + error.message);
    }

    return data.path;
  };

  async function getSignedUrl(filePath: string) {
    const { data, error } = await supabase.storage
      .from("media_poket_Storage")
      .createSignedUrl(filePath, EXPIRATION_TIME_SECONDS);

    if (error) {
      throw new Error("Erro ao obter URL: " + error.message);
    }

    return data.signedUrl;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        getSignedUrl,
        uploadPicture,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
