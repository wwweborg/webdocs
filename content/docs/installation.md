+++
date = '2026-11-25T19:22:33-05:00'
draft = false
weight = 3
title = 'Installation'
description = 'Install this theme in your documentation project'
author = 'J. Nuck'
+++

This guide explains how to add **Webdocs** to a Hugo site using a Git submodule. This is the recommended method for this repository: the theme is tracked as a separate Git repository inside your site, so you can update it independently.

This repository does not currently include Go module metadata, so this guide uses Git submodules rather than Hugo Modules.

## Requirements

- [Hugo Extended](https://gohugo.io/installation/) **0.146.0 or later**. The standard Hugo build is not sufficient because the theme uses Hugo Pipes to process CSS and JavaScript.
- [Git](https://git-scm.com/downloads), to add and update the theme submodule.
- An existing Hugo site, or a new one created with `hugo new site`.

Check the installed Hugo version and confirm the output includes `extended`:

```sh
hugo version
```

No Node.js or package installation is required; Hugo builds the theme's CSS and JavaScript.

## Install Webdocs

If you are starting a new site, create it and initialize its Git repository:

```sh
hugo new site my-docs   # 'my-docs' is the name of your project
cd my-docs
git init
```

From the root of your Hugo site, add Webdocs as a submodule:

```sh
git submodule add https://github.com/wwweborg/webdocs.git themes/webdocs
```

If your site already has a Git repository, skip `git init`. If it does not, initialize one before adding the submodule.

## Configure the site

Set the theme name in the site's `hugo.toml`:

```toml
theme = 'webdocs'
```

Keep your site's existing settings, such as `baseURL`, `languageCode`, and `title`. You can optionally configure the GitHub link shown on the home page:

```toml
[params]
  githubURL = 'https://github.com/your-name/your-docs'
```

Create a documentation section at `content/docs/_index.md`. Webdocs uses this section to build the documentation sidebar:

```toml
+++
title = 'Documentation'
description = 'Guides for my project.'
weight = 1
+++

Browse the guides to get started.
```

Add your pages under `content/docs/`, for example `content/docs/getting-started.md`, and give each page a title in its front matter.

## Preview and build

From the root of your site, start the local server:

```sh
hugo server
```

Open the local URL printed by Hugo. To generate the production site, run:

```sh
hugo --minify
```

## Clone and update the submodule

When cloning a site repository that contains Webdocs, initialize its submodules with either:

```sh
git clone --recurse-submodules https://github.com/your-name/your-docs.git
```

Or, after cloning without that option:

```sh
git submodule update --init --recursive
```

To update Webdocs to the latest commit on its configured remote branch:

```sh
git submodule update --remote --merge themes/webdocs
```

The site repository records the exact Webdocs commit it uses. Review and commit the updated submodule reference in the site repository to keep the update reproducible:

```sh
git add themes/webdocs
git commit -m "Update Webdocs theme"
```

In a CI build, initialize submodules before running Hugo:

```sh
git submodule update --init --recursive
hugo --minify
```
