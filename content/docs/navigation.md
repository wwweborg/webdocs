+++
date = '2026-11-25'
draft = false
weight = 7
title = 'Navigation'
description = 'How documentation navigation is generated and ordered.'
author = 'J. Nuck'
+++

Webdocs builds documentation navigation from the content under `content/docs/`. You do not need to maintain a manual list of pages for the sidebar.

## Sidebar

The sidebar displays pages and subsections from `content/docs/`. At each level, items are sorted by `weight`, from lowest to highest. Add a `weight` to the front matter to set the order:

```toml
+++
title = 'Installation'
weight = 10
+++
```

Create a subsection by adding a directory with an `_index.md` file and its pages. You can expand or collapse its children from the sidebar. The branch containing the current page expands automatically.

## Section pages

The `content/docs/_index.md` file sets the title and description of the main section. For subsections, also create an `_index.md` file in each directory. Section pages display cards linking to their child pages.

## Breadcrumbs and table of contents

Pages display breadcrumbs linking to the home page and their parent sections. When content has headings, Hugo generates an “On this page” table of contents from them. Use a clear Markdown heading hierarchy to make content easier to navigate:

```md
## Install
### Requirements
### Add the theme
```

## Previous and next links

Links to the previous and next pages appear at the bottom of documentation pages. They are calculated by traversing section pages in `weight` order, including pages in subsections. Keep weights consistent if you want the sequence to follow your intended reading order.

## Header menu

The top menu is configured separately in `hugo.toml` using `menus.main`. See [Configuration]({{< relref "configuration" >}}) for how to add and order links.
