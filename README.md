# 📚🎬 Media Pocket

Media Pocket é uma aplicação web para **gerenciar mídias pessoais** — livros, filmes e animes — permitindo que cada usuário cadastre, avalie e visualize suas próprias coleções de forma segura.

O projeto foi desenvolvido com **Next.js App Router**, **Server Actions** e **Supabase**, seguindo boas práticas de segurança (RLS), organização de código e escalabilidade.

---

## 🚀 Funcionalidades

* 🔐 Autenticação de usuários com Supabase
* 📚 Cadastro de **Livros**
* 🎬 Cadastro de **Filmes**
* 🌀 Cadastro de **Animes**
* ⭐ Avaliação por estrelas
* 🧾 Páginas de listagem e detalhe (`[id]`)
* 🔒 Isolamento de dados por usuário (Row Level Security)
* ⚡ Mutations via **Server Actions** (sem API routes para forms)
* 🧠 GraphQL para leitura de dados

---

## 🧱 Stack Tecnológica

### Frontend

* **Next.js 16 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Radix UI**
* **Lucide Icons**
* **ShadCN**

### Backend / Infra

* **Supabase**

  * Auth
  * Database (PostgreSQL)
  * Row Level Security (RLS)
* **Server Actions** para inserções
* **GraphQL (Apollo Client)** para queries

---

## 📁 Estrutura de Pastas

```txt
src/
├── app/
│   ├── actions/
│   │   ├── add-book/
│   │   ├── add-movies/
│   │   └── add-animes/
│   ├── books/
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── movies/
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── animes/
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── add/
│   ├── dashboard/
│   ├── explore/
│   ├── login/
│   ├── register/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
├── contexts/
├── graphql/
│   ├── queries/
│   └── types/
│       ├── book.ts
│       ├── movie.ts
│       └── anime.ts
├── hooks/
├── lib/
└── services/
    ├── books-services.ts
    ├── movies-services.ts
    └── animes-services.ts
```

---

## 🔐 Segurança (RLS)

O projeto utiliza **Row Level Security** no Supabase para garantir que:

* Cada usuário só possa **inserir** registros com seu próprio `user_id`
* Cada usuário só possa **ler** seus próprios dados

Exemplo de policy:

```sql
create policy "Users can insert their own books"
on books
for insert
with check (auth.uid() = user_id);
```

---

## 📝 Forms & Server Actions

Os formulários utilizam **Server Actions** diretamente:

```tsx
<form action={addBookAction}>
```

* Sem `fetch`
* Sem API routes para formulários
* Sessão validada no servidor
* Dados sensíveis protegidos

Valores dinâmicos (ex: avaliação por estrelas) são enviados via:

```html
<input type="hidden" name="rating" />
```

---

## ⚙️ Scripts

```bash
npm run dev      # Ambiente de desenvolvimento
npm run build    # Build de produção
npm run start    # Rodar build
```

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY
```

---

## 📌 Status do Projeto

🚧 Em desenvolvimento

Próximos passos planejados:

* Upload de imagens via Supabase Storage
* Edição de mídias
* Filtros e busca
* Dashboard com estatísticas

---

## 👩‍💻 Autora

Projeto desenvolvido como estudo prático de:

* Next.js moderno
* Arquitetura com Server Actions
* Integração segura com Supabase
* Boas práticas full stack

---

✨ *Media Pocket — sua biblioteca pessoal em um só lugar.*
