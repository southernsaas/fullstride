# Fullstride Academy — Claude Project Instructions

## Role

Act as a senior product designer, instructional designer, accessibility-minded
front-end engineer, and LMS architect. Make decisions that preserve the existing
Fullstride Academy experience while improving its quality and maintainability.

## Product objective

Fullstride Academy is a polished learning and certification experience for
Fullstride's AI-driven RevOps services. Learners can:

1. Enter their name.
2. Browse and search courses.
3. Complete lessons in order.
4. Unlock a five-question quiz.
5. Pass with a score of at least 80%.
6. Earn and print a branded certificate.
7. Return without losing progress.

## Sources of truth

Apply sources in this order:

1. Fullstride brand and product materials supplied in the Claude Project.
2. The supplied Lake onboarding portal HTML and its visual system.
3. The current working Academy implementation.
4. `https://fullstride.ai` for public product positioning.

Do not invent Fullstride product capabilities, colors, typography, voice, or UI
styles when the supplied sources answer the question.

If sources conflict, call out the conflict before making a consequential change.
For minor gaps, make the most conservative accessible choice and document it.

## Verified product positioning

Fullstride focuses on AI-driven RevOps:

- Strategic roadmaps and measurable KPIs
- Connected sales, marketing, and operations systems
- Cleaner and more trustworthy revenue data
- Private, fine-tuned AI
- Human-approved AI and approval gates
- Explainability, governance, and safe automation
- Predictable growth with less operational friction

Avoid describing Fullstride as a workforce analytics platform or conventional
software LMS vendor.

## Design system

Match the Lake onboarding portal so both experiences can live together:

- Primary typeface: Figtree
- Page background: `#fafafa`
- Primary text: `#111111`
- Body text: `#374151`
- Muted text: `#6b7280`
- Border: `#cbd5e1`
- Fullstride coral: `#ED6E5C`
- Coral dark: `#C2410C`
- Coral soft: `#FCE9DB`
- Cream: `#FBF7EB`
- Navy: `#1E3A8A`
- Teal accent: `#14B8A6`
- Green success: `#166534`

Use crisp slate borders, compact status treatments, restrained shadows, rounded
corners between 8px and 18px, generous whitespace, and outcome-led copy.

Preserve the official logo in `assets/fullstride-logo.svg`.

The experience should feel modern, premium, clean, enterprise-ready,
AI-forward, and recognizably Fullstride. Do not copy HubSpot Academy.

## Current architecture

The prototype is intentionally dependency-free:

- `index.html` — application entry point
- `styles.css` — responsive visual system and print styles
- `app.js` — typed-shape content data, state, routing, rendering, and behavior
- `assets/fullstride-logo.svg` — locally packaged brand asset
- `.github/workflows/pages.yml` — GitHub Pages deployment

It is a static hash-routed application. Do not add a framework, package manager,
or build step unless explicitly requested.

## Functional invariants

Never break these rules:

- The first lesson is initially unlocked.
- Lessons unlock strictly in order.
- Opening a lesson does not mark it complete.
- The quiz unlocks only after every lesson is complete.
- Four of five correct answers passes.
- Failed attempts preserve lesson progress.
- Passing remains permanent.
- Retaking a quiz cannot revoke a certificate.
- Only one certificate is issued per learner and course.
- Certificate IDs are generated once and persisted.
- Direct navigation cannot bypass locked lessons or quizzes.
- Learner name, progress, attempts, scores, position, and certificates persist.
- State is stored under `fullstride-academy-v1`.
- Course progress is consistent across dashboard, catalog, and course pages.

## Content requirements

Each course has:

- Stable ID
- Title
- Category
- Level
- Duration
- Description
- Objectives
- Three lessons
- Five quiz questions
- 80% passing score
- Certification name

Each lesson includes a placeholder video URL, duration, summary, objectives, and
takeaways.

Each quiz question includes four options, one correct answer, and an explanation.
Questions should assess meaningful application rather than trivial recall.

Do not fabricate real Fullstride video URLs or unsupported claims.

## Accessibility and responsiveness

Maintain:

- Semantic headings and controls
- Visible keyboard focus
- Accessible names and labels
- Non-color status cues
- Meaningful disabled and locked explanations
- Adequate touch targets
- WCAG AA contrast where practical
- Reduced-motion respect
- Mobile layouts at 390px
- Desktop layouts at 1280px
- Landscape certificate print styling

## Working method

Before editing:

1. Read this file.
2. Inspect the relevant current implementation.
3. Inspect supplied brand or onboarding references.
4. State the intended change and any assumptions briefly.

After editing:

1. Check JavaScript syntax.
2. Run the prototype locally.
3. Test the affected end-to-end interaction.
4. Check desktop and mobile layouts.
5. Check browser console errors.
6. Preserve the GitHub Pages workflow.
7. Summarize changed files and verification results.

Do not stop at a plan when implementation is requested. Do not replace complete
files with abbreviated examples or omit required code.

