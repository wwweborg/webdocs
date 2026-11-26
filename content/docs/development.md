+++
date = '2026-11-25'
draft = false
weight = 12
title = 'Development'
description = 'Theme structure and contribution guidance.'
author = 'J. Nuck'
+++

This page is for anyone who wants to inspect or contribute to the Webdocs source code. To install the theme in a documentation site, follow [Installation]({{< relref "installation" >}}).

## Repository structure

```text
archetypes/   Initial front matter for new pages
assets/
  css/        Styles and visual components
  fonts/      Local fonts and their licenses
  js/         Interface interactions
content/      Demo and documentation site content
layouts/
  _partials/  Shared template partials
  shortcodes/ Components inserted from Markdown
static/       Files copied directly to the generated site
```

`hugo.toml` configures the demo site; `theme.toml` contains the theme metadata. `netlify.toml` describes how the repository is built on Netlify.

## Build and check changes

Use Hugo Extended 0.146.0 or later. To preview the site while you work, run:

```sh
hugo server -D
```

To check a production build:

```sh
hugo --gc --minify
```

Review the affected pages on desktop and mobile, and verify that shortcodes and navigation work before submitting changes.

## Contributing

To report a bug or suggest an improvement, open an issue in the [Webdocs repository](https://github.com/wwweborg/webdocs/issues). Describe how to reproduce the problem and the expected result. To contribute code, open a pull request with a focused change and a description of what you tested.
