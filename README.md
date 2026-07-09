# Fullstride Academy

A responsive training and certification prototype for Fullstride's AI-driven
RevOps learning experience.

## Features

- Personalized learner onboarding
- Six-course learning catalog
- Ordered lesson unlocking
- Search and category filters
- Quiz gating, scoring, explanations, and retry
- 80% certification threshold
- Persistent browser progress with `localStorage`
- Branded, printable certificates
- Responsive desktop and mobile layouts
- Fullstride design language aligned with the onboarding portal

## Continue development with Claude

This repository includes:

- `CLAUDE.md` — durable product, brand, architecture, and verification rules
- `HANDOFF_TO_CLAUDE.md` — Claude Project setup and copy-paste prompts

Upload the repository, the Lake onboarding portal HTML, and approved Fullstride
brand and product materials to a Claude Project before beginning further work.

## Run locally

No build step or package installation is required.

```bash
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload or push everything in this folder to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for the `Deploy Fullstride Academy` workflow
   to complete.

The site will be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

The included workflow redeploys the site after every push to `main`.

## Prototype data

Learner names, lesson progress, quiz results, and certificates are stored in the
reviewer's browser using `localStorage`. Each reviewer starts with a separate
blank learning record.

To reset a browser's demo progress:

```js
localStorage.removeItem("fullstride-academy-v1")
```

Then refresh the page.

## Replacing lesson videos

Lesson records are defined in `app.js`. Replace each placeholder `videoUrl` with
an approved Fullstride video URL, then replace the `.video` placeholder inside
`lessonPlayer()` with the selected embedded video player.

## Production considerations

Before using this as a production LMS, add authentication, server-side
persistence, role-based access, analytics, managed video hosting, certificate
verification, automated accessibility testing, and a content administration
workflow.
