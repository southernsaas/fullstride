# Moving Fullstride Academy into Claude

## Recommended Claude Project setup

Create a Claude Project named **Fullstride Academy** and add these materials to
Project Knowledge:

1. This complete repository or ZIP.
2. `CLAUDE.md`.
3. The Lake onboarding portal HTML.
4. Any official Fullstride brand guide, logos, and design assets.
5. Approved Fullstride product documentation.
6. The real training-video inventory or transcript files when available.

Add this to the Claude Project's custom instructions:

```text
Read and follow CLAUDE.md as the durable project contract. Treat the supplied
Fullstride materials and Lake onboarding portal as the sources of truth. Preserve
the existing functional learning flow and GitHub Pages compatibility. When asked
to implement a change, inspect the relevant files, make the complete change,
verify it, and report changed files plus test results. Clearly label any
assumption caused by missing Fullstride information.
```

## Copy-paste kickoff prompt

```text
Continue development of the supplied Fullstride Academy repository.

First, read CLAUDE.md and inspect index.html, styles.css, app.js,
assets/fullstride-logo.svg, and the supplied Lake onboarding portal HTML.

Treat the Fullstride Project materials as the source of truth for product,
brand, tone, curriculum, and UX decisions. Preserve the current dependency-free
static architecture and GitHub Pages deployment unless I explicitly authorize a
migration.

Confirm your understanding in no more than 8 bullets covering:
- product purpose;
- verified Fullstride positioning;
- design source of truth;
- current architecture;
- lesson, quiz, and certificate gating;
- persistence;
- accessibility and responsive requirements;
- how you will verify changes.

Then wait for my first implementation request. Do not rewrite the app yet.
```

## Efficient prompts for later work

Once the project is configured, requests can stay short because `CLAUDE.md`
contains the durable context.

### Implement a feature

```text
Implement [FEATURE] in Fullstride Academy. Preserve the rules in CLAUDE.md.
Verify the affected end-to-end flow, desktop and mobile layouts, persistence,
and browser console. Return changed files and concise test results.
```

### Update course content

```text
Update [COURSE OR LESSON] using the supplied Fullstride product materials.
Align objectives, instruction, practice, and quiz questions. Do not invent
capabilities or video URLs. Preserve stable IDs and learner progress.
```

### Review without changing code

```text
Audit [SCREEN OR FLOW] against CLAUDE.md and the Lake onboarding portal. Do not
edit files. Prioritize findings by learner impact, brand consistency,
accessibility, functional risk, and implementation effort.
```

### Migrate toward production

```text
Propose a staged migration from the static prototype to [TARGET STACK]. Preserve
all learning rules and data semantics. Separate immediate prototype-safe changes
from changes requiring authentication, a database, video hosting, analytics, or
administrative tooling. Do not implement until I approve the migration plan.
```

## Why this structure is efficient

`CLAUDE.md` holds stable context once. The kickoff prompt makes Claude prove it
has loaded that context without generating unnecessary code. Future prompts can
focus only on the requested change, reducing repetition, context drift, and
brand hallucination.

