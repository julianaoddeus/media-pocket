"use server";

import { createClient } from "@/lib/supabase/server";

export async function AddAnime(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Usuário não autorizado");
  }

  const { error: insertError } = await supabase.from("animes").insert({
    title: formData.get("title"),
    studio: formData.get("studio"),
    description: formData.get("description"),
    poster: formData.get("poster"),
    episodes: formData.get("episodes"),
    rating: Number(formData.get("rating")),
    user_id: user.id,
    created_at: new Date().toISOString(),
  });

  if (insertError) {
    throw new Error(insertError.message);
  }

  return { success: true };
}
