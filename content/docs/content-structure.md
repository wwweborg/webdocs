+++
date = '2026-11-25'
draft = false
weight = 6
title = 'Content Structure'
description = 'Organize your documentation pages and sections.'
author = 'J. Nuck'
+++

Webdocs uses Markdown files from your Hugo site as content. Store documentation pages in `content/docs/`; directories with an `_index.md` file create sections that can contain pages or nested sections.

## Files and sections

A small site might have this structure:

```text
content/
├── _index.md
├── about.md
└── docs/
    ├── _index.md
    ├── getting-started.md
    └── guides/
        ├── _index.md
        └── publishing.md
```

`content/_index.md` is the home page. `content/docs/_index.md` defines the documentation section, and `content/docs/guides/_index.md` creates a subsection. Markdown pages within a section appear in the documentation navigation.

## Front matter

Front matter appears at the beginning of a Markdown file and contains page metadata. This theme uses TOML front matter delimited by `+++`:

```toml
+++
title = 'Getting Started'
description = 'Create your first page.'
weight = 10
draft = false
+++
```

- `title` sets the page title.
- `description` appears as an introduction on pages and section cards.
- `weight` controls the order in navigation; lower values appear first.
- `draft = true` keeps a page as a draft. Hugo excludes it from regular builds until you change it to `false`.

You can use YAML or JSON if that is how your site is configured, but keep the same front matter format used by your project.

## Create pages with archetypes

The `archetypes/docs.md` archetype provides initial metadata for content under `docs`. Create a page with:

```sh
hugo new content docs/my-page.md
```

Review the generated file, add your content, and change `draft` to `false` when it is ready to publish. To preview drafts locally, run `hugo server -D`.

## File names and URLs

The file name contributes to the page URL. Use descriptive, lowercase names separated by hyphens, such as `getting-started.md`. Nested sections are part of the path, such as `docs/guides/publishing/`.
