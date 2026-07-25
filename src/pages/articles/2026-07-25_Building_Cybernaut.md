---
layout: ../../layouts/MarkdownPostLayout.astro
title: Building Cybernaut.cloud - Development Log #1
description: Lessons learned while deploying Astro, Cloudflare Pages, GitHub and redesigning the site.
pubDate: 2026-07-25
tags:
 - Astro
 - Cloudflare
 - GitHub
 - Web Development
---

# Building Cybernaut.cloud

This site is more than a portfolio.

It's also becoming documentation of everything I'm learning while moving from desktop support into infrastructure engineering.

Rather than only documenting successes, I'm documenting mistakes and the process used to solve them.

## Goals

- Build a modern portfolio
- Learn Astro
- Learn Git
- Learn Cloudflare Pages
- Learn proper web architecture
- Document everything

---

# Lesson 1
## Git is not scary

Originally Git felt intimidating.

After using it repeatedly, the workflow became predictable.

    git add
    git commit -m "Describe changes"
    git push



Those three commands now deploy changes all the way to production.

---

# Lesson 2
## Cloudflare Pages is incredibly powerful

Instead of renting a VPS just to host a static website, Cloudflare Pages handles:

- HTTPS
- CDN
- Deployment
- Caching
- Global hosting

Deployment now happens automatically after pushing to GitHub.

---

# Lesson 3
## DNS can be confusing

One of the biggest roadblocks happened because multiple Cloudflare products were trying to answer for the same hostname.

A Worker and Pages deployment were conflicting.

Lesson learned:

Only one service should own a hostname.

---

# Lesson 4
## Don't fight the framework

Several layout issues came from trying to force CSS into shapes Astro wasn't expecting.

Instead we learned to build reusable layouts.

_BaseLayout_,
_Header_,
_Footer_,
_Navigation_,


These components now control the entire site.

---

# Lesson 5
## Global CSS matters

Small CSS decisions affect every page.

Instead of styling each page independently, we centralized typography, colors, spacing and responsive behavior.

Future changes now happen in one file.

---

# Lesson 6
## Mobile isn't optional

The navigation worked perfectly...

...until it didn't.

Fixing the mobile menu taught me to always test responsive layouts before considering something "finished."

---

# Lesson 7
## Authenticity beats perfection

One of the most important design decisions wasn't technical.

Instead of making another generic corporate portfolio, Cybernaut became something personal.

The goal became:

Authentic first.
Professional enough to be taken seriously.

That principle now guides every design decision.

---

# Current Stack

- Astro
- GitHub
- Cloudflare Pages
- Markdown
- CSS
- Docker (development)
- Ubuntu

---

# Next Goals

- Finish Projects section
- Improve Articles
- Build light mode
- Add search
- Add RSS
- Publish technical write-ups