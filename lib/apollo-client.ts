import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

// Link de contexto (auth)
const authLink = new SetContextLink(async (prevContext, operation) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return {
    headers: {
      ...prevContext.headers,
      Authorization: session?.access_token
        ? `Bearer ${session.access_token}`
        : "",
    },
  };
});

// Link HTTP (GraphQL do Supabase)
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!,
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
