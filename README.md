# Windfall

Small, useful software grown in an experimental software factory. Live at
**https://windfall.canopypowered.com**. Part of [CanopyPowered](https://www.canopypowered.com/).

A Jekyll site that GitHub Pages builds from `main`. No build step of our own.

## Add or change an app

Each app is one file in `_apps/`. Front matter drives the home page, filters and the app page:

| Field | Meaning |
|---|---|
| `name`, `order` | Display name and position (lower first) |
| `status` | `live` (shown with screenshots and links) or `soon` (shown under Ripening) |
| `category` | Filter chip; new categories appear automatically |
| `tagline`, `summary`, `facts` | Card copy |
| `price`, `license_short` | Card footer, e.g. `Free`, `Open source · MIT` |
| `screen` | Illustration in `_includes/screens/` |
| `links` | Buttons: `label`, `url`, optional `primary: true` |
| `stage`, `want_issue` | For `soon` apps: label and the 👍 issue number |

The body of a live app's file is its page: get-it links, what you need, privacy and licenses.
Keep setup steps in the app's own repo and link to them, so this page rarely needs editing.

## Write a blog post

Add `_posts/YYYY-MM-DD-slug.md`:

```markdown
---
title: Why Windfall
description: One line shown in the post list.
tags: [factory]
discussion: https://github.com/Fledgewing/windfall/discussions/1   # optional
---
Your post in Markdown.
```

Drafts live in `_drafts/` and are not published. Move one into `_posts/` with a date to publish it.
The RSS feed is at `/blog/feed.xml`.

## Install guide

Steps are in `_data/install.yml`; each step names a drawing in `_includes/install/`.

## Requests

The home page form opens a prefilled GitHub issue (`.github/ISSUE_TEMPLATE/app-request.yml`,
label `app-request`). The "Most wanted" list reads open `app-request` issues sorted by 👍.
Coming-soon apps each have one `want-this` issue.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

## Licenses

Code: MIT (`LICENSE`). Words and illustrations: see `CONTENT-LICENSE.md`. Fonts: SIL OFL 1.1.
