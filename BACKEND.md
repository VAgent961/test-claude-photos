# BACKEND.md — TEST Claude Photos

## Overview
This document describes the backend implementation for the TEST Claude Photos website. It covers the database schema, API routes, admin dashboard, and required environment variables.

---

## Database (Neon Postgres)

### Table: `reservations`
Stores table reservation requests from the website.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `bigserial` | Primary key |
| `created_at` | `timestamptz` | Submission timestamp (default: now) |
| `name` | `text` | Customer full name |
| `date` | `date` | Reservation date |
| `time` | `time` | Reservation time |
| `party_size` | `int` | Number of guests |
| `special_requests` | `text` | Optional notes / dietary requirements |
| `status` | `text` | `new` (default), `done`, `cancelled` |

**Index:** `reservations_created_at_idx` on `created_at desc` for fast admin listing.

---

## API Routes

### `POST /api/reservations`
Handles the reservation form submission.

**Request body (JSON):**
```json
{
  "name": "string (required, max 100 chars)",
  "date": "string (required, YYYY-MM-DD)",
  "time": "string (required, HH:MM)",
  "party_size": "integer (required, >= 1)",
  "special_requests": "string (optional, max 500 chars)"
}
```

**Success response (200):**
```json
{ "ok": true, "whatsapp": "https://wa.me/..." }
```

**Error responses:**
- `400` — validation failed (missing/invalid fields)
- `503` — database not connected (`hasDb === false`)
- `500` — unexpected server error

All error responses include `{ "ok": false, "error": "...", "whatsapp": "..." }`.

**Side effects:**
1. Inserts a row into `reservations` with `status = 'new'`.
2. Calls `notifyOwner()` which sends a Telegram message and/or email to the business owner (if configured).
3. Returns a WhatsApp deep link (`wa.me/...`) so the customer can also send the request manually.

---

## Admin Dashboard

### Route: `/admin`
- Protected by HTTP Basic Auth (middleware in `middleware.ts`).
- Shows the latest 100 reservations, newest first.
- Columns: Submitted At, Name, Date, Time, Party Size, Special Requests, Status.
- Status badge colors: **new** (primary), **done** (green), **cancelled** (red).
- If `DATABASE_URL` is not set, shows a friendly notice instead of crashing.

### Login
- URL: `/admin/login`
- Username: `admin`
- Password: value of `ADMIN_PASSWORD` environment variable.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | **Yes** | Neon Postgres connection string (set automatically on Vercel when you link the Neon integration). |
| `ADMIN_PASSWORD` | **Yes** | Password for `/admin` basic auth. Generate a strong random string. |
| `ADMIN_SECRET` | **Yes** | Secret for admin session cookie (set automatically by Vercel/Next.js). |
| `TELEGRAM_BOT_TOKEN` | No | Bot token from @BotFather for owner notifications. |
| `TELEGRAM_CHAT_ID` | No | Chat ID (user or group) where notifications are sent. |
| `RESEND_API_KEY` | No | API key from Resend for transactional emails. |
| `NOTIFY_EMAIL` | No | Destination email address for new reservation alerts. |
| `NOTIFY_FROM` | No | Verified sender domain in Resend (e.g. `noreply@yourdomain.com`). Required after domain verification. |
| `WHATSAPP_NUMBER` | No | Business WhatsApp number in international format **digits only** (e.g. `96131234567` for Lebanon). Enables the "Send it on WhatsApp too" button. |

---

## LATER (Not Implemented in This Version)
- Customer accounts / patient login
- Online payment / deposit for reservations
- SMS notifications
- Multi-language admin UI
- Export reservations to CSV/Excel
- Email confirmation to the customer

---

## Deployment Checklist
1. Add `DATABASE_URL` (Neon integration on Vercel does this automatically).
2. Set `ADMIN_PASSWORD` in Vercel Project Settings → Environment Variables.
3. Optional: add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `RESEND_API_KEY`, `NOTIFY_EMAIL`, `NOTIFY_FROM`, `WHATSAPP_NUMBER`.
4. Deploy. Visit `/admin` and log in with `admin` / `ADMIN_PASSWORD`.
5. Test a reservation on the live site — it should appear in the admin table within seconds.

---

## File Reference
- `db/schema.sql` — run once in Neon SQL editor to create the table.
- `app/api/reservations/route.ts` — form submission handler.
- `app/admin/page.tsx` — admin dashboard (server component).
- `components/Reservation/ReservationSection2.tsx` — client-side form with fetch integration.
- `middleware.ts` — protects `/admin` and `/api/admin/*` (already exists).
- `lib/notify.ts` — owner notification helpers (already exists).
- `lib/db.ts` — `sql` tagged template & `hasDb` flag (already exists).
