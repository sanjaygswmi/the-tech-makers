# The Tech Makers - Vercel Preview & Testing

Clean, sanitized repository for **The Tech Makers** website preview deployments and testing on Vercel.

> **Provenance & Security:**
> - Source: Cloned cleanly from branch `audit/site-revamp-plan` (Commit `440e9ce`).
> - Git History: Completely fresh, independent Git repository with no legacy commits or tracked credential files.
> - Security Compliance: Scanned for credentials, API tokens, certificates, and secrets. All sensitive filenames, private keys, and `.env*` files are strictly excluded via `.gitignore`.

---

## Getting Started

### Prerequisites

- **Node.js**: `v20.x` or `v24.x` (LTS recommended)
- **npm**: `v10+` or `v12+`

### Installation

Clone this repository and install dependencies using the lockfile:

```bash
git clone https://github.com/sanjaygswmi/the-tech-makers.git
cd the-tech-makers
npm ci
```

### Environment Configuration

Copy `.env.example` to create your local `.env.local` file:

```bash
cp .env.example .env.local
```

Fill in the required values. **Never commit `.env` or `.env.local` files to Git.**

---

## Environment Variables Reference

| Variable Name | Scope | Required | Description |
|---|---|---|---|
| `NEXT_PUBLIC_API_URL` | Client & Server | Yes | Base URL for internal API endpoints (e.g. `http://localhost:3000/api` or `https://<preview-domain>.vercel.app/api`). |
| `NEXT_PUBLIC_FRONTEND_URL` | Client & Server | Yes | Canonical base URL for SEO canonical links, metadata, and sitemaps. |
| `PORT` | Server | Optional | Port for local server (defaults to `3000`). |
| `MONGODB_URI` | Server (Secret) | Yes | MongoDB Atlas connection string for articles, categories, and tags. |
| `JWT_SECRET` | Server (Secret) | Yes | Secret signing key for admin session tokens. |
| `HUBSPOT_API_KEY` | Server (Secret) | Yes | HubSpot Private App Token for CRM lead integration. |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Client (Public) | Yes | Google reCAPTCHA site key for contact and career forms. |
| `RECAPTCHA_SECRET_KEY` | Server (Secret) | Yes | Google reCAPTCHA secret key for server-side verification. |
| `ADMIN_EMAIL` | Server | Yes | Destination email for contact form enquiry alerts. |
| `SMTP_HOST` | Server (Secret) | Yes | SMTP server hostname for transactional notification emails. |
| `SMTP_PORT` | Server | Yes | SMTP server port (`587` or `465`). |
| `SMTP_USER` | Server (Secret) | Yes | SMTP username / authenticated sender address. |
| `SMTP_PASS` | Server (Secret) | Yes | SMTP password or app password. |
| `SMTP_SECURE` | Server | Optional | Use TLS (`true` or `false`, defaults to `false` for port 587). |
| `UPSTASH_REDIS_REST_URL` | Server (Secret) | Optional | Upstash Redis REST URL for distributed API rate limiting. |
| `UPSTASH_REDIS_REST_TOKEN` | Server (Secret) | Optional | Upstash Redis REST Token. (If omitted, system safely falls back to in-memory rate limiting). |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the Next.js development server with Turbopack. |
| `npm run build` | Builds the production application with static page generation and type checking. |
| `npm run start` | Runs the built production server locally. |
| `npm run lint` | Runs ESLint validation across all pages and components. |
| `npm test` | Runs the full test suite (security smoke tests + HubSpot integration tests). |
| `npm run test:security` | Runs security tests validating rate limits, payload guards, and header protections. |
| `npm run test:integrations` | Runs mock integration tests for CRM and contact form behavior. |

---

## Testing & Validation

Before deploying, run all verification checks locally:

```bash
# 1. Run test suite
npm test

# 2. Run linter
npm run lint

# 3. Validate TypeScript
npx tsc --noEmit

# 4. Verify production build
npm run build
```

---

## Vercel Deployment Guide

### Preview Deployment Only

1. In the **Vercel Dashboard**, click **Add New...** > **Project**.
2. Select the GitHub repository `sanjaygswmi/the-tech-makers` (or your clean preview repository).
3. Framework Preset: **Next.js**.
4. Configure the **Environment Variables** listed above in the Vercel Project Settings. Ensure secrets (`MONGODB_URI`, `JWT_SECRET`, `HUBSPOT_API_KEY`, etc.) are saved in Vercel's private environment variables.
5. Deploy from the `main` branch or a feature branch.
6. **Do NOT promote to production or attach the production domain** `thetechmakers.com` to this project. Keep this exclusively for preview testing.
