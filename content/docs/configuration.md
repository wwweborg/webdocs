+++
date = '2026-11-25'
draft = false
weight = 5
title = 'Configuration'
description = 'Customize Webdocs menus, links, and announcements.'
author = 'J. Nuck'
+++

Configure Webdocs in your site's `hugo.toml` file. This guide covers the theme options; to install it, see [Installation]({{< relref "installation" >}}).

## Basic Hugo settings

A minimal `hugo.toml` file can include:

```toml
baseURL = 'https://docs.example.com/'
languageCode = 'en'
title = 'My Project Documentation'
theme = 'webdocs'
enableRobotsTXT = true
```

Set `baseURL` to your site's final URL, `languageCode` to the code for your primary language, and `title` to the name you want to display. `enableRobotsTXT` tells Hugo to generate `robots.txt`.

The theme requires Hugo Extended 0.146.0 or later. To explicitly set the requirement in your site configuration:

```toml
[module.hugoVersion]
  extended = true
  min = '0.146.0'
```

## Main menu

The header displays the entries defined in `menus.main`. Each item can point to an internal page with `pageRef`; `weight` determines its order:

```toml
[menus]
  [[menus.main]]
    name = 'Home'
    pageRef = '/'
    weight = 10

  [[menus.main]]
    name = 'Docs'
    pageRef = '/docs'
    weight = 20

  [[menus.main]]
    name = 'About'
    pageRef = '/about'
    weight = 30
```

Update the references to match pages that exist on your site. To add or remove links, add or delete a `[[menus.main]]` entry.

## Link to your project repository

`params.githubURL` sets the destination of the “View on GitHub” button on the home page:

```toml
[params]
  githubURL = 'https://github.com/my-organization/my-project'
```

This should be the repository for your documentation or project, not necessarily the Webdocs repository. If you omit `githubURL`, the button is not displayed.

## Announcement

You can display an announcement at the top of the site with `params.banner`:

```toml
[params.banner]
  key = 'release-1'
  message = 'The new version is available. [See what changed](/docs/changelog/)'
```

The message supports Markdown. Visitors can dismiss the announcement; their preference is saved in that browser's local storage. Change `key` when you publish a new announcement so it appears again for visitors who dismissed the previous one. If you do not define a message, the announcement is not displayed.

## Language

Author-provided text, such as navigation labels, links, and announcements, is configured in your site's files. Set `languageCode` to match the primary language of your content. Some theme interface labels are written in English; changing `languageCode` does not translate them automatically.
