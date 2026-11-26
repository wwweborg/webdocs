+++
date = '2026-11-25'
draft = false
weight = 9
title = 'Appearance'
description = 'Responsive design, color schemes, typography, and color preferences.'
author = 'J. Nuck'
+++

Webdocs includes a responsive design for documentation pages, a home page, and styled components.

## Responsive layout and navigation

On small screens, open the documentation sidebar using the menu button in the header. Close it with the button, by selecting a link, pressing Escape, or clicking outside the sidebar. Sidebar link groups can also be expanded and collapsed.

## Light and dark modes

The theme automatically follows the operating system's color preference (`prefers-color-scheme`). It does not include a manual toggle or a setting to force either mode.

## Typography

The theme includes the Inter typeface for interface text and Google Sans Code for code. Font files and their licenses are in `assets/fonts/`.

## Content styles

The theme styles headings, links, lists, code blocks, navigation, and shortcodes. Code blocks have a copy button when JavaScript and the browser's Clipboard API are available. If copying fails, the button displays an error message.

## Customization

The source styles are in `assets/css/` and interaction logic is in `assets/js/main.js` within the theme repository. If you need to customize the design, keep your changes in your project when possible and review them after updating the submodule. Editing theme files directly can make future updates harder to incorporate.
