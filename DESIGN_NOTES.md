# Team Cama — local design trial

## Direction

Longbow's condensed display typography, Fallen Samurai's restrained black/red
contrast, and 361° QuikFoam's athletic editorial energy. Real academy photography
is retained. Off-white text, quieter neutral surfaces, consistent controls, and
shorter mobile sections replace the dusty-pink treatment.

## Changed

- Clearer home-page offering and free-class action; native anchor navigation.
- Responsive menu and shared native dialogs (focus containment, Escape, backdrop
  dismissal, and focus restoration). The former custom dialog hook was replaced.
- Visible weekly schedule, one shared source for program data, and beginner FAQs.
- One shared inquiry form with program preselection, an explicitly labeled email
  draft action, copy fallback, and no false delivery claim.
- Contact form before location information on mobile.
- Gallery with landscape-friendly group photos and dark, legible photo viewer.
- Server-rendered pages and route metadata. The unused About metadata file was
  replaced by an export in the actual page.
- Instructor names, roles, photos, and existing biographies retained. Empty bios
  are simply omitted instead of displaying an unfinished notice.

## Still needs owner input before launch

- Confirm Taekwondo times. The detailed sessions were retained from the prior
  schedule and are explicitly labeled for confirmation; contradictory summary
  times were removed.
- Supply remaining instructor biographies and a portrait for Jay.
- Configure an email delivery provider if inquiries should send within the site.
  Until then, the form only prepares an email draft.
- Set NEXT_PUBLIC_SITE_URL to the real public origin before production deployment
  so social-preview image URLs use that origin. The local trial uses localhost.
- Nothing has been published or pushed.

## Generated social card

Asset: public/og.png. Generated with built-in ImageGen; no gym photographs were
generated or altered.

Prompt: landscape typography-led Team Cama editorial card, condensed uppercase,
near-black #131412, off-white #f3f0e7, vermilion #f04b3e, subtle photocopied grain,
and thin rules. Exact text: “TEAM CAMA”, “BRAZILIAN JIU-JITSU · MUAY THAI ·
TAEKWONDO”, “STOCKTON, CALIFORNIA”, “EST. 2011”. No people, invented logos, or
additional text.

## Checks

Run npm test for draft encoding, shared schedule data, and text contrast.
Run npm run lint and npm run build for application checks.
This implementation pass did not include a fresh browser interaction test.
