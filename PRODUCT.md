# Product

## Register

brand

## Users

The TeamCama website serves two overlapping audiences, with adult students leading the visual identity:

- **Primary — Adult students (18–45)** evaluating a martial arts gym for serious, sustained training. They visit on a phone or laptop, often after seeing a friend train or finding the gym via search. They want to know: is this place legit, will I be welcomed as a beginner, and do these people actually train hard.
- **Secondary — Parents researching kids' programs.** They want to see a safe, structured, well-coached environment where their child will be respected and grow. They scan for: who teaches, what classes look like, and whether the gym feels like a community.

The job-to-be-done is the same for both: in under 30 seconds, decide whether TeamCama is the gym they want to walk into.

## Product Purpose

TeamCama (est. 2011) teaches Taekwondo, Muay Thai, and Brazilian Jiu Jitsu. The website's job is to communicate the **identity, people, and culture** of the gym — not to hard-sell trial classes. Conversions (trial booking, contact) are secondary.

Success looks like: a visitor closes the tab thinking "those are my people, that's my room." Credibility, warmth, and a clear sense of who trains there matter more than CTA conversion rate.

## Brand Personality

Three words: **welcoming, grounded, real.**

- **Welcoming, not intimidating.** TeamCama is a community gym, not a fight club. Imagery includes the full range of students — adults, families, beginners, lifers — not just elite competitors.
- **Grounded, not hyped.** Confidence is shown through quiet craft (clean photography, considered typography, generous space) rather than aggressive caps-locked hype.
- **Real, not precious.** This is a working gym. Sweat, mats, real faces. Avoid stock-perfect athleticism and avoid art-gallery preciousness.

Voice: plain-spoken, direct, generous. No tough-guy chest-beating. No corporate fitness jargon. When in doubt, sound like a respected coach talking to a new student.

## Anti-references

Things this site should explicitly NOT look or feel like:

- **Hardcore-fight-gym aesthetic** — black-and-blood-red, skulls, "warrior", caps-locked screaming, drill-sergeant copy. The current red-on-near-black palette and ESTablished-2011 styling lean too far this way for a community gym; pull back.
- **Generic SaaS / template fitness sites** — gradient hero, three icon-cards, "Get started" purple button. Nothing about it should feel pulled from a Webflow starter.
- **Boutique-fitness slick** — Equinox, Barry's Bootcamp polish. TeamCama is a real martial arts gym, not a luxury product.
- **AI slop tells** — gradient text, glassmorphism cards, hero metric template, identical icon-card grids, em-dash-laden marketing copy.

## Design Principles

1. **People before product.** Real photos of real students and coaches do more work than any heading. Typography and layout serve the photography, not the other way around.
2. **Warmth without softness.** The site can be quiet, considered, even monochrome — but never cold or intimidating. Light or near-neutral surfaces are on the table; pure black is not the only option.
3. **One sharp accent, used sparingly.** Color commits to a single restrained accent that signals identity, not a palette of decorative reds. The accent should feel like a stamp, not wallpaper.
4. **Show the room.** Disciplines, schedule, philosophy — all framed as a tour of the actual gym, not a brochure of features.
5. **Editorial, not advertorial.** Long-form sections (philosophy, our journey) are treated like a magazine spread: strong typographic hierarchy, real whitespace, no marketing hedges.

## Accessibility & Inclusion

- Target **WCAG 2.2 AA** across all pages.
- The current dark palette has multiple low-contrast issues (`text-on-surface/40`–`/60` on near-black) that will fail AA — these are explicit fixes, not nice-to-haves.
- All interactive controls must have visible focus states and minimum 44×44px touch targets.
- All imagery must have meaningful alt text; decorative images should be `alt=""`.
- Respect `prefers-reduced-motion` for hover scale, smooth scroll, and any added motion.
- Class names like "Brazilian Jiu Jitsu" and martial-arts terms should be spelled consistently and pronounced clearly in copy.
