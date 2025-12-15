import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

const GRAPHQL_ENDPOINT = `${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}/graphql/v1`;

export async function graphqlFetch(query: string, variables?: any) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const token = session?.access_token;

  if (!token) {
    throw new Error("Usuário não autenticado para buscar dados GraphQL.");
  }

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // IMPORTANTÍSSIMO: Enviar o token do usuário para RLS funcionar
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL Errors:", result.errors);
    throw new Error(result.errors[0].message || "Erro na consulta GraphQL");
  }

  return result.data;
}
