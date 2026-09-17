# Sanaya Academy — Design Improvements (Not Applied)

No intentional design changes were made during the migration. The Nuxt build reproduces the
reference design 1:1 (visual parity was the top priority).

The following improvements were **considered but intentionally NOT applied** so the final
application stays true to the reference design. Each is listed as a suggestion for a future,
design-driven iteration — not something changed during this migration.

| # | Suggested improvement | Why it was not applied |
|---|---|---|
| 1 | **Self-host the IBM Plex Sans Arabic font files** (e.g. via `@nuxt/fonts` or `@fontsource`) | The reference loads from Google Fonts. Self-hosting would improve privacy/perf/TTFB but changes zero visuals; it can be enabled later without touching the design. |
| 2 | **Real WhatsApp number + per-package prefilled messages** | The number is a placeholder (`201000000000`) kept for local use in `.env` (`NUXT_PUBLIC_WHATSAPP_NUMBER`) and consumed via the `useWhatsApp()` composable (runtime config — no hardcoding). Swap the `.env`/platform env value at go-live; zero code changes. |
| 3 | **Real teacher photo + name** | Reference explicitly ships a placeholder ("سيتم استبدالها بصورة المعلمة الفعلية"). Preserved as-is on purpose. |
| 4 | **Real pricing packages** | Reference marks pricing as "قريبًا" (coming soon). Kept to preserve intent and avoid inventing pricing. |
| 5 | **Real social media URLs** | Reference links social icons to `#hero` with "الرابط قريبًا" labels. Kept as-is. |
| 6 | **Canonical/OG images (favicon, og:image)** | A brand `favicon.svg` was added (required for browser tabs); canonical + OG tags exist but `og:image` needs a real asset/URL at launch — intentionally not invented. |
| 7 | **Smaller decorative journey curve to a "dash that draws itself"** | The reference's framer-motion draw render artifact is closely approximated by a clean CSS `stroke-dashoffset` sweep. Fidelity to the *perceived* animation was kept; no redesign needed. |

**Conclusion:** No intentional design changes were required.