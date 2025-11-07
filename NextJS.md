<!-- What is Next JS -->

- The React Framework for building fullstack apps.Can do frontend and backend together in a single project.

<!-- Why learn Next JS-->

- Simplified Routing
- Easy API routes and integration
- Rendering
- Efficient Data Fetching
- Styling
- Optimization
- Dev and prod build system.

<!-- How to create your NextJS app? -->

- npx create-next-app@latest
- Enter projext name
- TypeScript ✅️
- ESLint ✅️
- React Compiler ✅️
- Tailwind CSS ✅️
- src/dir ✅️
- App Router ✅️
- TurboPack ❌
- import alias ❌

--- To open app in browser use --> npm run dev

<!-- React Server Component -->

- A new architecture introduce bu React team and quickly adopted by Next Js.It introduces a new approach to create React components by diving then in two distinct types :
- Server Components
- Client Components

 <!-- Routing in Next Js -->

- Next Js use a file system based routing system.
- URL you can access are determined by how you organize your files and folders in your code

<!-- Routing Conventions -->
- All Routes must live in the app folder.
- Routes files must be named page.js or page.tsx
- Each folder represents a segment of the URL path

app/
├── page.tsx               → /
├── about/
│   └── page.tsx           → /about
├── menu/
│   └── page.tsx           → /menu
├── menu/
│   └── drinks/
│       └── page.tsx       → /menu/drinks
├── blog/
│   └── [slug]/
│       └── page.tsx       → /blog/:slug (dynamic route)
├── dashboard/
│   ├── layout.tsx         → layout for all /dashboard routes
│   ├── page.tsx           → /dashboard
│   └── settings/
│       └── page.tsx       → /dashboard/settings

<!-- Dynamic Routes -->
- Dynamic routing lets you create pages that respond to variable URL segments, like /product/123 or /blog/react-hooks.
You define dynamic segments using square brackets in folder names: [param]


app/
├── page.tsx                     → /
├── product/
│   └── [productId]/
│       └── page.tsx             → /product/:productId
├── blog/
│   └── [slug]/
│       └── page.tsx             → /blog/:slug
├── user/
│   └── [userId]/
│       └── settings/
│           └── page.tsx         → /user/:userId/settings
├── docs/
│   └── [...slug]/
│       └── page.tsx             → /docs/a/b/c (catch-all)

<!-- Nested Dynamic Routing -->

In Next.js, dynamic routing is achieved using square brackets ([param]) in folder or file names. Nested dynamic routing means placing one dynamic route inside another—useful for hierarchical data like products and their reviews, categories and posts, or users and their settings.

NB : params is asynchronous and must be wrapped using await.

For this URL - /product/42/reviews/7

The folder structure will be---
src/
└── app/
    └── product/
        └── [productId]/
            └── reviews/
                └── [reviewId]/
                    └── page.tsx