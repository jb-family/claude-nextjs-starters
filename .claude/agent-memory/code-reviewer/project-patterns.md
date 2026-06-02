---
name: project-patterns
description: Recurring code issues, conventions, and anti-patterns found in the my-app Next.js 16 + React 19 starter during initial full review
metadata:
  type: project
---

## Confirmed Good Patterns

- Providers.tsx uses useState(() => new QueryClient(...)) — correct pattern to avoid shared state across requests
- ThemeToggle uses mounted check before rendering — correctly prevents hydration mismatch with next-themes
- Form pages use zodResolver with typed schemas from lib/validations.ts — correct integration
- Server Components used for layout files and static pages (no unnecessary "use client")
- cn() from lib/utils.ts is used consistently for conditional Tailwind classes
- suppressHydrationWarning is applied only to the root <html> tag — correct scope

## Known Issues Found in Initial Review

### Critical / Major
- `app/page.tsx` (root) duplicates the full layout (Header + Footer inline) instead of using the (marketing) layout group. `app/(marketing)/page.tsx` already has the correct layout-group version, so `app/page.tsx` is dead/conflicting code that will shadow the marketing layout route.
- `catch (error)` blocks in login and signup pages silently swallow errors — the caught `error` variable is unused, so real API errors would never surface in logs.
- `console.log("회원가입 데이터:", data)` left in signup/page.tsx onSubmit — leaks PII (name, email) to browser console in production.

### Consistency / Minor
- `lib/constants.ts` SITE_CONFIG.description says "Next.js 15" but package.json is Next.js 16.2.7 — stale copy.
- `app/(marketing)/page.tsx` hero text says "Next.js 15" — same stale copy.
- `app/(dashboard)/docs/page.tsx` lists "Next.js 15" in the tech stack card.
- `app/(dashboard)/examples/dialogs/page.tsx` dialog info modal says "Next.js 15".
- `types/index.ts` defines `NavItem` interface; `lib/constants.ts` also exports `NavItem` type — duplicate type definitions for the same concept.
- `EmptyState` component's `action` prop only supports `onClick: () => void` — no href support, limiting its reuse for link-style actions.
- `Loading` component: the outer div's `className` prop (`className`) is passed to cn() but the actual `cn()` call ignores it — `className` is applied to the spinner icon instead of the wrapper div.
- `page-header.tsx` breadcrumb uses array index as React key — should use a stable value like `crumb.href ?? crumb.label`.
- Footer uses raw `<a>` tags instead of Next.js `<Link>` — loses client-side navigation and prefetching.
- `app/page.tsx` Button uses raw `<a>` tags via asChild — should use Next.js `<Link>` component.
- Sidebar collapse state is local component state — will reset on every navigation. Should persist to localStorage via usehooks-ts `useLocalStorage`.

### Architecture
- No Zustand store exists yet despite being listed as a required state management tool — hooks/ directory is empty.
- No API routes exist under app/api/ — the ApiResponse<T> type and pattern is defined but not used anywhere.
- React Query is configured but not used in any data-fetching scenario — all data is hardcoded mock data.

**Why recorded:** These patterns surfaced on the first full codebase review and are likely to recur as features are added.

**How to apply:** Flag these categories on every PR review — version string drift, console.log with user data, duplicate type definitions, raw <a> vs <Link>, and missing error logging.
