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
├── page.tsx → /
├── about/
│ └── page.tsx → /about
├── menu/
│ └── page.tsx → /menu
├── menu/
│ └── drinks/
│ └── page.tsx → /menu/drinks
├── blog/
│ └── [slug]/
│ └── page.tsx → /blog/:slug (dynamic route)
├── dashboard/
│ ├── layout.tsx → layout for all /dashboard routes
│ ├── page.tsx → /dashboard
│ └── settings/
│ └── page.tsx → /dashboard/settings

<!-- Dynamic Routes -->

- Dynamic routing lets you create pages that respond to variable URL segments, like /product/123 or /blog/react-hooks.
  You define dynamic segments using square brackets in folder names: [param]

app/
├── page.tsx → /
├── product/
│ └── [productId]/
│ └── page.tsx → /product/:productId
├── blog/
│ └── [slug]/
│ └── page.tsx → /blog/:slug
├── user/
│ └── [userId]/
│ └── settings/
│ └── page.tsx → /user/:userId/settings
├── docs/
│ └── [...slug]/
│ └── page.tsx → /docs/a/b/c (catch-all)

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

<!-- Catch All Segments -->

- Catch-all segments allow a single route file to handle any number of URL segments. This is useful when you don’t know how deep the path will go.

- src/
  └── app/
  └── docs/
  └── [[...slug]]/
  └── page.tsx
- What does it mean?
- Matches /docs → params.slug = undefined
- Matches /docs/setup → params.slug = ['setup']
- Matches /docs/setup/install → params.slug = ['setup', 'install']
- Matches /docs/setup/install/deploy → params.slug = ['setup', 'install', 'deploy']

<!-- Error Page Customisation -->

- Create a file not-found in the app folder and addd your custom styling.
  not-found.tsx is a strict convention in Next.js App Router (introduced in Next.js 13+). It’s the only filename Next.js recognizes for rendering a custom 404 page within a route segment.

src/
└── app/
├── not-found.tsx ← Global 404 page
└── blog/
├── page.tsx
└── not-found.tsx ← Blog-specific 404 page
