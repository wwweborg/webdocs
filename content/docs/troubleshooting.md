+++
date = '2026-11-25'
draft = false
weight = 11
title = 'Troubleshooting'
description = 'Solutions to common issues when using Webdocs.'
author = 'J. Nuck'
+++

## Hugo cannot build the theme resources

Check that you have **Hugo Extended 0.146.0 or later**:

```sh
hugo version
```

The output should include `extended`. Install a compatible Extended build and run the server or build again.

## The theme is missing after cloning the site

If Webdocs is configured as a submodule, clone the site with `--recurse-submodules` or initialize the submodule afterward:

```sh
git submodule update --init --recursive
```

Also check that `theme = 'webdocs'` is set in your configuration and that the submodule is located at `themes/webdocs`.

## The documentation sidebar is empty

The sidebar appears on pages in the `docs` section. Check that `content/docs/_index.md` exists, your pages are under `content/docs/`, and they do not have `draft = true`. You can temporarily include drafts in the local server with `hugo server -D`.

## A page is missing or appears in the wrong position

New pages are usually created as drafts. Set `draft` to `false` to publish them. Set `weight` in the front matter to order pages and sections; lower values appear first.

## The “View on GitHub” button is missing

Set `params.githubURL` in `hugo.toml` to the URL of your own site's repository. If it is omitted or empty, the home page button is not displayed.

## The announcement does not appear again

The browser stores dismissed announcements in local storage. Change `params.banner.key` in `hugo.toml` to make a new version of the announcement appear again. If storage is blocked, the announcement may continue to appear on later visits.

## I cannot copy a code block

The button uses the browser's Clipboard API, which may not be available in every context. Try `localhost` or the published site over HTTPS. If the operation fails, the button displays an error.
