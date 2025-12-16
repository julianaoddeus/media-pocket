import { createClient } from "@/lib/supabase/server";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();

export const protectedAction = createSafeActionClient().use(
  async ({ next }) => {
    const supabase = createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      throw new Error(
        "Não autorizado. Você precisa estar logado para realizar esta ação."
      );
    }

    return next({ ctx: { user } });
  }
);

export const protectedWithActionClient = protectedAction.use(
  async ({ next, ctx }) => {
    // Criar futuramente permissões/funções específicas,

    // const { data: profile, error } = await createClient()
    //   .from('profiles')
    //   .select('role')
    //   .eq('id', ctx.user.id)
    //   .single();

    // if (profile?.role !== 'admin') {
    //   throw new Error("Acesso negado: Requer privilégios de administrador.");
    // }

    return next(ctx);
  }
);
