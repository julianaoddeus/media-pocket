import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erro ao fazer logout do Supabase:", error);
      return NextResponse.json({ error: "Falha ao sair" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Logout realizado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro inesperado no logout:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
