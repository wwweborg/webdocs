+++
date = '2026-11-25'
draft = false
weight = 8
title = 'Shortcodes'
description = 'Visual components available in Markdown content.'
author = 'J. Nuck'
+++

Shortcodes add Webdocs components to your Markdown pages. Attributes use the `name="value"` format, and the content between the tags can include Markdown.

## Callouts

Use `callout` to highlight a note. `type` accepts `info` (the default), `warning`, `error`, `important`, or `idea`. `title` and `icon` are optional; `emoji` displays an emoji instead of the icon.

```md
{{</* callout type="warning" title="Before you continue" */>}}
Back up your data before making this change.
{{</* /callout */>}}
```

```md
{{</* callout type="idea" emoji="✨" */>}}
You can also use **Markdown** in the text.
{{</* /callout */>}}
```

## Badges

`badge` creates a small label. Pass its text with the `text` attribute or as inner content; `type` accepts the same values as `callout`, and the icon is optional.

```md
{{</* badge type="warning" text="In progress" */>}}
{{</* badge type="idea" icon="check" */>}}Done{{</* /badge */>}}
```

## Cards

`card` creates a card. `title` and `description` are optional; if no title is provided, “Learn more” is used. Setting `href` makes the card a link; without `href`, it is displayed as non-linked content. It also accepts `icon` and Markdown content:

```md
{{</* card href="/docs/getting-started/" title="Getting started" description="Create and preview your documentation." icon="rocket" */>}}
Continue to the **getting started guide**.
{{</* /card */>}}
```

## Details

`details` creates a native HTML disclosure. `title` sets its summary text. Add `open="true"` to show it expanded on page load:

```md
{{</* details title="How do I start the server?" */>}}
Run `hugo server` from the root of your site.
{{</* /details */>}}
```

## Icons

`icon` inserts an inline icon. Pass its name using the `name` attribute or as the first argument. `label` provides an accessible name, and `class` lets you add a CSS class.

```md
{{</* icon name="arrow-right" label="Next" */>}}
{{</* icon "check" */>}}
```

Built-in icons are `info`, `warning`, `error`, `important`, `idea`, `sparkles`, `rocket`, `arrow-right`, `chevron-right`, `external-link`, `check`, and `copy`. Additional SVGs can also be loaded from `assets/icons/meteor/<name>.svg`.

## Steps

`steps` displays an ordered list with visual numbering. Write a regular Markdown list inside it; each item can contain paragraphs and nested lists:

```md
{{</* steps */>}}
1. **Install Hugo**

   Download the Extended version and verify the installation.

2. **Start the site**

   Run `hugo server` and open the local URL shown in the terminal.
{{</* /steps */>}}
```

## Tabs

`tabs` groups one or more `tab` shortcodes. Each tab needs a `title`; the `label` attribute on `tabs` describes the group. The first tab is selected by default.

````md
{{</* tabs label="Development commands" */>}}
  {{</* tab title="Bash" */>}}
  ```sh
  hugo server
  ```
  {{</* /tab */>}}
  {{</* tab title="PowerShell" */>}}
  ```powershell
  hugo server -D
  ```
  {{</* /tab */>}}
{{</* /tabs */>}}
````

With JavaScript enabled, you can switch tabs by clicking or using the left/right arrow keys and Home/End. If JavaScript is unavailable, all panels remain visible.

## Display shortcodes as code

Hugo also processes shortcodes inside code blocks. To display them literally, wrap the delimiters with `/*` and `*/`:

````md
{{</* callout type="info" */>}}
This example is displayed as code and is not executed.
{{</* /callout */>}}
````
