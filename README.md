# nomos-site

The NOMOS positioning site — "the infrastructure for provable authority." A single long-scroll
homepage (Problem → The Shift → The NOMOS Primitive → Why Now → The Platform → audience sections
→ closing) plus fast-follow `/docs`, `/console`, `/contact` pages. Astro, static output, no
client-side framework runtime shipped by default.

## Structure

```
src/
├── content/copy.ts        # all homepage copy — the source of truth, edit here first
├── styles/tokens.css       # design tokens (Linear-dark palette: near-black + indigo)
├── layouts/BaseLayout.astro
├── components/             # one component per homepage section, plus shared Nav/Footer
└── pages/
    ├── index.astro         # the homepage
    ├── docs.astro          # links to the real nomos-spec repo content
    ├── console.astro
    └── contact.astro
```

## Commands

| Command         | Action                                  |
| ---------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`      | Local dev server at `localhost:4321`     |
| `npm run build`    | Build static site to `./dist/`           |
| `npm run preview`  | Preview the production build locally     |

## Deployment — `nomos.nomosprotocol.com`

**Do not touch the root `nomosprotocol.com` deployment or its `/.well-known/*` path.** It
currently serves a live Ed25519 signing-key endpoint (`/.well-known/nomos-signing-keys`) that the
`nomos-spec` verifier CLI hard-codes as the protocol's trust anchor. This site is a separate
subdomain deploy, additive only.

1. Push this project to its own git repo.
2. Create a new Vercel project from that repo (framework preset: Astro, auto-detected).
3. In Vercel → Project → Settings → Domains, add `nomos.nomosprotocol.com`.
4. At the DNS provider managing `nomosprotocol.com`, add the CNAME record Vercel gives you for
   `nomos` → `cname.vercel-dns.com` (or whatever Vercel's dashboard specifies). TLS is issued
   automatically once the record resolves.
5. `/docs`, `/console`, `/contact` ship as routes on the same project — no extra hosting needed.
6. Optional, once live: add a small link from the current root page to
   `nomos.nomosprotocol.com`.

## Content fidelity

`src/content/copy.ts` is transcribed near-verbatim from the positioning brief. If the copy needs
to change, edit the brief's intent first, then update `copy.ts` — don't hand-edit component files
with copy drift from that file.
