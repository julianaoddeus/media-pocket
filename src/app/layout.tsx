// app/layout.tsx
import { AuthProvider } from "@/contexts/auth-client";
import "./globals.css";

export const metadata = {
  title: "Media Pocket",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
