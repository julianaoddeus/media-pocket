"use server";

import { createClient } from "@/lib/supabase/server";

export async function AddBook(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Usuário não autorizado");
  }

  const { error: insertError } = await supabase.from("books").insert({
    title: formData.get("title"),
    author: formData.get("author"),    
    description: formData.get("description"),
    cover: formData.get("cover"),   
    rating: Number(formData.get("rating")),
    user_id: user.id,
    created_at: new Date().toISOString(),
  });

  if (insertError) {
    throw new Error(insertError.message);
  }

  return { success: true };
}

