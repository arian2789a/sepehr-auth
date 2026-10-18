# Sepehr — Emerald Fintech Auth UI

A responsive Persian / RTL authentication interface built with **Next.js App Router, React, TypeScript and CSS**. Project 02 in a six-design authentication portfolio: a charcoal and emerald fintech concept with an original CSS globe, orbital details and angular terrain.

> **UI demo only.** No authentication backend, database, email delivery or OAuth integration is included. Submitting a valid form shows an explicit demo message; passwords are never stored or sent. Social buttons explain that their integrations are not configured. The remember-me checkbox is visual only.

## Features

- Persian copy, document language `fa` and native right-to-left layout.
- Separate login, registration and password-recovery demo routes.
- Responsive desktop split layout and compact mobile form.
- Native email/required-field validation and an eight-character minimum for registration passwords.
- Password visibility toggle, input autocomplete, visible keyboard focus and announced form feedback.
- CSS globe artwork: no stock photos, image downloads or image API keys.
- GitHub Actions production-build and TypeScript checks.
- MIT license.

## Run locally

Install **Node.js 20.9+** (Node.js 22 LTS recommended), then:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The home route redirects to `/login`.

| Route | Page |
| --- | --- |
| `/login` | Sign in |
| `/signup` | Create account |
| `/forgot-password` | Password recovery UI demo |

```bash
npm run build      # Production build
npm run start      # Serve the production build
npm run typecheck  # TypeScript check (run build first on a fresh checkout)
```

No environment variables are required. Vazirmatn is requested from Google Fonts through CSS; Tahoma / Arial are the offline fallback. No credentials are sent to Google Fonts by this application, but the browser makes a normal font request to Google. Self-host the font if you want to remove that request.

## Publish the source on GitHub

Create an **empty** repository named `sepehr-auth-fa` on GitHub. Do not initialize it with a README or license because this project already includes both. Extract this project, open a terminal in its folder, then replace `YOUR_USERNAME` below:

```bash
git init
git add .
git commit -m "Build Persian RTL authentication UI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sepehr-auth-fa.git
git push -u origin main
```

Authenticate with your own GitHub credentials when Git requests it. Do not upload `node_modules`, `.next` or secrets. The included `.gitignore` excludes these.

Suggested repository description:

> Responsive Persian RTL login & sign-up UI built with Next.js, React and TypeScript.

Suggested topics: `nextjs`, `react`, `typescript`, `rtl`, `persian`, `login-page`, `authentication-ui`, `responsive-design`.

## Deploy a live demo

Import your repository into Vercel, keep the detected Next.js framework and default build settings, then deploy. No environment variables are required. Add the resulting URL to your GitHub repository's Website field. A Node.js host running `npm run build` and `npm run start` is another option. This project is not configured for GitHub Pages static hosting.

## Structure

```text
app/
  layout.tsx                Persian document and metadata
  globals.css               Responsive styles and CSS illustration
  page.tsx                  Redirect to login
  login/page.tsx
  signup/page.tsx
  forgot-password/page.tsx
components/auth-screen.tsx  Shared, typed UI and demo interactions
.github/workflows/ci.yml    CI build and TypeScript checks
```

## Customize

Edit colors in `app/globals.css` (`--green`, `--ink`, `--muted`), copy and brand in `components/auth-screen.tsx`, and metadata in `app/layout.tsx`. The artwork is also authored in CSS. Before implementing real login, add server-side validation, secure sessions, CSRF protection where applicable, rate limiting, a password-hashing strategy or managed identity provider, and real recovery / OAuth flows. Never treat client-side validation as authorization.

## راهنمای فارسی

این پروژه طرح شمارهٔ ۲ از مجموعهٔ شش‌تایی است و شامل ورود، ثبت‌نام و نمونهٔ بازیابی رمز عبور می‌شود. برای اجرا، Node.js نصب کن، ترمینال را داخل پوشه باز کن و `npm ci` و سپس `npm run dev` را اجرا کن. مرورگر را در `http://localhost:3000` باز کن.

این نسخه صرفاً رابط کاربری است؛ ساخت حساب، ورود واقعی، ذخیرهٔ رمز، ارسال ایمیل و اتصال گوگل یا گیت‌هاب انجام نمی‌دهد. دکمه‌ها این وضعیت را در خود صفحه اعلام می‌کنند. برای انتشار کد، یک مخزن خالی بساز و دستورهای بخش Publish را با نام کاربری خودت اجرا کن. برای دیدن سایت آنلاین، مخزن را در یک میزبان سازگار با Next.js مثل Vercel وارد کن.

## License

[MIT](LICENSE). You may use, adapt and publish this project. No affiliation with Google or GitHub is implied.

## Design notes

The globe, network lines and terrain are decorative CSS illustrations. No market feeds, live account balances, financial products or investment advice are provided. The finance styling does not imply a real financial service or security certification.

## نکات طراحی

طراحی مشکی و سبز زمردی با کرهٔ شبکه‌ای و مدارهای تزئینی، با CSS ساخته شده است. این پروژه سرویس مالی واقعی نیست و دادهٔ بازار یا پیشنهاد سرمایه‌گذاری ارائه نمی‌کند. فرم‌ها نمایشی هستند و نیازی به کلید API ندارند.

## Delivery validation

- Production build: passed.
- TypeScript check: passed.
- Generated HTML for all three routes: Persian RTL markup, Sepehr branding and artwork verified.
- Live HTTP, browser interaction and visual checks were not completed in this environment. Verify the pages in your browser before publishing a live demo.
