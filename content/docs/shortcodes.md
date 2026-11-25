+++
date = '2026-11-24T15:11:46-05:00'
draft = false
title = 'Shortcodes'
weight = 10
description = 'Hola a todos'
+++

Webdocs incluye shortcodes para añadir componentes visuales en archivos Markdown. Los atributos se escriben como `nombre="valor"`.

## Callouts

Bloques destacados: `info` (azul), `warning` (amarillo), `error` (rojo), `important` (morado) e `idea` (verde). El tipo predeterminado es `info`.

Puedes cambiar el icono Meteor con `icon` o usar un emoji con `emoji`. El contenido admite Markdown:

{{< callout type="info" emoji="🚀" >}}
La publicación terminó correctamente.
{{< /callout >}}
{{< callout type="warning" emoji="🚀" >}}
La publicación terminó correctamente.
{{< /callout >}}
{{< callout type="error" emoji="🚀" >}}
La publicación terminó correctamente.
{{< /callout >}}
{{< callout type="important" emoji="🚀" >}}
La publicación terminó correctamente.
{{< /callout >}}
{{< callout type="idea" emoji="🚀" >}}
La publicación terminó correctamente.
{{< /callout >}}
{{< callout type="idea" icon="rocket" >}}
La publicación terminó correctamente.
{{< /callout >}}

## Badges {{< badge type="warning" text="En progreso" />}}

Etiquetas pequeñas con los mismos tipos y colores de los callouts. `text` puede usarse como atributo o como contenido. El icono es opcional.

{{< badge type="warning" text="En progreso" />}}
{{< badge type="idea" icon="check" >}}Listo{{< /badge >}}

Los tipos disponibles son `info`, `warning`, `error`, `important` e `idea`. Si se omite `type`, se usa `info`.

## Cards

Enlaces tipo tarjeta con título, descripción y flecha. `href` puede ser una ruta del sitio o una URL externa. El icono es opcional.

{{< card href="/docs/getting-started/" title="Guía de inicio" description="Configura el proyecto paso a paso." icon="rocket" />}}

Sin `href`, la tarjeta se muestra como un bloque no enlazado:

{{< card title="Próximamente" description="Esta sección todavía está en preparación." />}}

El contenido del bloque también admite Markdown:

{{< card href="/docs/getting-started/" title="Siguiente paso" icon="arrow-right" >}}
Empieza con `hugo server` y consulta la **guía completa**.
{{< /card >}}

## Details

Acordeón nativo para contenido que se puede expandir. Añade `open="true"` para mostrarlo abierto inicialmente.

{{< details title="¿Cómo se instala?" >}}
Ejecuta `hugo server` desde la raíz del proyecto.
{{< /details >}}

## Iconos

Inserta un icono Meteor en línea. El nombre se indica con `name` o como primer argumento. Puedes añadir `label` para describirlo a lectores de pantalla y `class` para asignar una clase CSS.

Los iconos integrados son `info`, `warning`, `error`, `important`, `idea`, `sparkles`, `rocket`, `arrow-right`, `chevron-right`, `external-link`, `check` y `copy`. Para añadir otro icono Meteor, copia su SVG a `assets/icons/meteor/` y nómbralo, por ejemplo, `book-open.svg`; luego usa `name="book-open"` en el shortcode `icon` o `icon="book-open"` en otro shortcode.

{{< icon name="rocket" >}} Continuar
{{< icon name="arrow-right" >}} Continuar

## Steps

Muestra una lista ordenada con números dentro de recuadros redondeados. Escribe los pasos como una lista Markdown normal. Puedes añadir una descripción en un párrafo separado y sublistas con guiones o numeración; indenta el contenido para que pertenezca al paso.

{{< steps >}}
1. **Instala Hugo**

   Descarga la versión extendida y comprueba la instalación:

   - Revisa que Hugo esté disponible en la terminal.
   - Confirma la versión instalada.

2. **Crea el sitio**

   Puedes seguir estos pasos adicionales:

   1. Clona el repositorio.
   2. Entra en la carpeta del proyecto.

3. **Inicia el servidor**

   Ejecuta `hugo server` y abre la dirección local en el navegador.
{{< /steps >}}

## Pestañas

Agrupa paneles con una pestaña por bloque. Cada panel se declara con `tab` y un `title`. La primera pestaña queda seleccionada inicialmente. Si JavaScript no está disponible, se muestran todos los paneles. Mantén cada bloque `tab` dentro de `tabs`; puedes incluir Markdown, listas y bloques de código:

{{< tabs >}}
  {{< tab title="Bash" >}}
  ```bash
  hugo server
  ```
  {{< /tab >}}
  {{< tab title="PowerShell" >}}
  ```powershell
  hugo server -D
  ```
  {{< /tab >}}
{{< /tabs >}}

### Mostrar la sintaxis de un shortcode como código

Hugo evalúa los shortcodes aunque estén dentro de un bloque de código. Para mostrar su sintaxis literalmente en una página, escapa sus delimitadores:

```md
{{</* callout type="info" title="Nota" */>}}
Este texto se muestra como ejemplo, no como un componente.
{{</* /callout */>}}
```
