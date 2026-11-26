+++
date = '2026-11-25T19:57:26-05:00'
draft = false
weight = 4
title = 'Getting Started'
description = 'Create the first page and view it locally.'
author = 'J. Nuck'
+++

You don't need to create the Markdown files manually from your code editor; Hugo includes a command that generates the page with the proper initial structure (*archetype*).

{{< steps >}}

1. **Open the terminal in the project root**

   If you use **VS Code**, you can open it quickly with `Ctrl` + `J` (or `Cmd` + `J` on macOS).

2. **Generate the file with Hugo**

   Run the following command, replacing `file-name` with your page's identifier:

   ```bash
   hugo new content/docs/file-name.md
   ```

3. **Edit and publish the content**

   Open the newly created file inside `content/docs/`. In the header (*front matter*), change `draft` to `false` when it's ready to be published:

   ```toml
   +++
   title = "My first page"
   draft = false
   +++
   ```

{{< /steps >}}

{{< callout type="info" >}}
By default, Hugo marks new pages with `draft = true`. While it has that value, the page won't appear in the final site build unless you change it to `false`.
{{< /callout >}}

## Preview the Site Locally

To see changes in real time in your browser, start Hugo's development server from the terminal:

{{< tabs >}}

{{< tab title="Published content only" >}}
```bash
hugo server
```
{{< /tab >}}

{{< tab title="Including drafts" >}}
```bash
hugo server -D
```
{{< /tab >}}

{{< /tabs >}}

Once you've run the command, open the local address shown in the console in your browser (usually `http://localhost:1313/`). Every time you save a file, the page will reload automatically.