import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createClient } from "./supabase/client";


const supabase = createClient()

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
  fetch: async (uri, options) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const headers = new Headers(options?.headers);
    headers.set("apikey", process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);

    if (session?.access_token) {
      headers.set("Authorization", `Bearer ${session.access_token}`);
    }

    return fetch(uri, {
      ...options,
      headers,
    });
  },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
