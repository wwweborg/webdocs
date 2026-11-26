+++
date = '2026-11-25'
draft = false
weight = 10
title = 'Deployment'
description = 'Build and publish your documentation site.'
author = 'J. Nuck'
+++

Hugo generates a static site. Build the project from your site root and publish the contents of the output directory (`public/`) to a static hosting provider.

## Build locally

Before building, make sure the pages you want to publish do not have `draft = true`. Run:

```sh
hugo --gc --minify
```

Hugo writes the generated site to `public/`. `--minify` reduces the size of generated resources, and `--gc` removes unused cached resources.

## Deploy to Netlify

The Webdocs repository includes a `netlify.toml` file with build settings:

- Publish directory: `public`.
- Production command: `hugo --gc --minify`.
- Production Hugo version: `0.146.0`.
- Deploy previews use `--buildFuture` and the preview URL as `baseURL`.

These settings apply to the Webdocs repository. If your site is a separate repository that uses Webdocs as a submodule, Netlify does not automatically inherit the `netlify.toml` file inside `themes/webdocs`. Create or configure a `netlify.toml` file in your own site's root and set the build command and publish directory there.

If your site includes Webdocs as a submodule, make sure the build environment checks out submodules before running Hugo:

```sh
git submodule update --init --recursive
hugo --gc --minify
```

Set your site's `baseURL` to its production URL. For previews, the Netlify command replaces the base URL with the deploy preview URL.

## Other providers

For other CI services, use a compatible Hugo Extended version, initialize submodules if needed, run `hugo --gc --minify`, and publish the `public/` directory.
