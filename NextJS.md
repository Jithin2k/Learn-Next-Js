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

<!-- Safe Co-Location of files -->

Safe co-location means you can place non-routing files (like components, styles, tests, or helpers) inside route folders without exposing them as public routes. Next.js only treats specific files like page.tsx, layout.tsx, route.ts, and loading.tsx as part of the routing system.

<!-- Reserved File Names -->

page.tsx → Defines the route’s content
layout.tsx → Wraps child routes with shared UI
loading.tsx → Suspense fallback while loading
error.tsx → Error boundary for runtime errors
not-found.tsx → Custom 404 page for unmatched routes
route.ts → Defines custom API routes (GET, POST, etc.)
head.tsx → Sets metadata like <title> and <meta>

<!-- Private Folders in Next Js -->

- Prefix folders with \_ (e.g., \_components, \_lib) to signal they’re not routes.
- Next.js will not treat these folders as route segments.
- You can import from them like normal
  src/
  └── app/
  ├── dashboard/
  │ ├── page.tsx
  │ └── \_components/ ← Private folder
  │ └── Sidebar.tsx
  ├── \_lib/ ← Shared utilities
  │ └── fetcher.ts
  ├── \_styles/ ← Global or scoped styles
  │ └── theme.css
  └── \_tests/ ← Test files
  └── dashboard.test.tsx

  <!-- Route Groups in Next Js -->

  - Route groups in Next.js App Router let you organize your folder structure without affecting the URL path. They’re perfect for co-locating layouts, separating concerns, or grouping related routes—without exposing the folder name in the route.

  - src/
└── app/
    └── (marketing)/          ← Route group (not in URL)
        └── home/
            └── page.tsx      ← Accessible at /home

<!-- Layout in Next Js -->
- A layout is a UI that is shared across multiple pages.