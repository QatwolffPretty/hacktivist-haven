# Hacktivist Haven — Foundation

Phase 0/1 scaffold, **not production-ready**.

## Start
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.
5. Run `npm run lint`, `npm run typecheck`, and `npm run build`.

Supabase clients are scaffolding. Create isolated development/staging Supabase projects before connecting real accounts. Copy `.env.example` to `.env.local` and fill public project URL and publishable key. Never put a secret/service-role key in NEXT_PUBLIC variables.

## Current limitations
No database schema, auth UI, session refresh proxy, RLS, payments, admin operations, or production features are implemented. Prices are explicitly marked as catalogue references and must be moved into PostgreSQL before live checkout. Do not deploy as a functional education platform.

See docs/PROGRESS.md.
