---
title: Switch between Outline, Preview and Pixel Preview
description: Show the artwork as outlines for the whole view or for single layers, show placed images in Outline, preview the pixels with the pixel grid, hide what lies outside the artboards and turn anti-aliasing off on screen.
sidebar:
  order: 10.82
type: guide
category: View and navigate
subcategory: Screen modes and windows
cover: /assets/uploads/vectorcraft/switch-outline-and-preview-modes-outline.webp
summary: Show the artwork as outlines, as pixels or in full color.
parent: workflows
---

This page shows how to change the way the canvas draws your artwork: in full color (Preview), as outlines for the whole view or for single layers, or as the pixels it turns into. It also covers Trim View, the Anti-aliased Artwork preference, and where to find Overprint Preview and the proofing views.

These modes change only what you see on screen. They do not change what prints or exports.

## Switch the whole view to Outline

Outline draws every path as a thin black line, without fills, strokes or raster effects. Effects that reshape a path still change the outline you see. Paths that other art covers in Preview show in Outline, and you can select them there.

1. Choose **View → Outline** (**Ctrl+Y**, or **Cmd+Y** on macOS). The document tab now ends in **(RGB/Outline)**, or **(CMYK/Outline)** for a CMYK document.
2. Work as usual. In Outline, a click selects a path on its outline. A click inside a shape does not select it. A click on the outline of a path behind a placed image selects that path, and a click on the image's frame selects the image.
3. To go back, choose **View → Preview** (**Ctrl+Y**, or **Cmd+Y** on macOS). The same menu item reads **Outline** in Preview and **Preview** in Outline.

![The mountain lake scene in Outline. Every path is a thin black line on a white canvas, the near mountain range is selected with its red anchor points and bounding box, the placed photo shows as an empty box in the lower-left corner, and the tab reads mountain-lake.vectorcraft @ 93.5 % (RGB/Outline)](/assets/uploads/vectorcraft/switch-outline-and-preview-modes-outline.webp)

In Outline, a placed image shows as a box. A symbol instance shows the outlines of its art, type shows the outline of every character, and a gradient mesh shows its mesh lines. A template layer stays in Preview.

Each view of a document keeps its own mode. New documents and documents you open start in Preview, and switching one document to Outline leaves the other open documents as they are. When you open a second view with **Window → New Window**, one view can be in Outline while the other is in Preview.

## Show one layer in Outline

You can put single layers in Outline while the rest of the view stays in Preview.

1. Open the Layers panel (**Window → Layers**).
2. Ctrl-click (Cmd-click on macOS) the eye of a layer. The layer's art draws as outlines, and its eye turns into a hollow eye with a ring around it.
3. Ctrl-click (Cmd-click on macOS) the eye again to put the layer back in Preview.

![The mountain lake scene in Preview with the Layers panel open. The Mountains layer shows a hollow eye, and its two mountain ranges and the pines draw as black outlines over the violet to coral sky, while the Sky, Lake and Moon layers draw in full color](/assets/uploads/vectorcraft/switch-outline-and-preview-modes-layer-outline.webp)

To work on one layer in color with the others as outlines, Ctrl+Alt-click (Cmd+Option-click on macOS) that layer's eye. This runs **Outline Others**: every other top-level layer goes to Outline, and the layer you clicked goes to Preview. Do the same again while all the other layers are in Outline to run **Preview All Layers**, which puts every layer and sublayer back in Preview. Each of these is one undo step.

The same two commands are in the Layers panel menu. The menu shows **Outline Others** while another layer is in Preview, and **Preview All Layers** once every other layer is in Outline. You can also turn a layer's **Preview** check box off in its **Layer Options** dialog. See [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/).

A layer's Preview setting is saved with the document. It changes only the screen, and exports draw the layer in full.

## Show placed images in Outline

By default, a placed image shows as an empty box in Outline. To see its picture while you trace or line up art with it:

1. Choose **File → Document Setup…** (**Ctrl+Alt+P**, or **Cmd+Option+P** on macOS).
2. On the **General** tab, turn on **Show Images in Outline Mode**.
3. Click **OK**.

In Outline, images now draw their pixels in grayscale under their frame. Such an image covers the paths behind it again, so a click on a path's outline inside the image selects the image. The setting belongs to the document and is off for new documents. See [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/).

## Preview the pixels

Pixel Preview shows the artwork as it will look when it is written to pixels, for example in a PNG or a web image, with one pixel for each point.

1. Choose **View → Pixel Preview** (**Ctrl+Alt+Y**, or **Cmd+Option+Y** on macOS).
2. Zoom in until each pixel shows as a square. At 600% and above, a line marks the edge of every pixel.
3. Choose **View → Pixel Preview** again to turn it off.

![The edge of the amber moon at 800% with Pixel Preview on. The round edge and the violet glow around it draw as steps of square pixels, a thin grid marks every pixel over the sky, and the status bar shows 800%](/assets/uploads/vectorcraft/switch-outline-and-preview-modes-pixel-preview.webp)

Pixel Preview applies to every open document and every view. While it is on, Smart Guides do not snap or highlight objects.

To start a new document with Pixel Preview on, open **Advanced Options** in the **New Document** dialog and set **Preview Mode** to **Pixel**. The other choices are **Default** and **Overprint**.

Two preferences change what Pixel Preview shows:

| Preference | Page | Default | What it does |
|---|---|---|---|
| **Show Pixel Grid (Above 600% Zoom)** | **Guides & Grid** | On | Draws the pixel grid in Pixel Preview at 600% zoom and above. Turn it off to see the pixels without the grid. |
| **Display Bitmaps as Anti-aliased Images in Pixel Preview** | **File Handling** | Off | Off, placed images draw with hard-edged pixels in Pixel Preview. On, they draw smoothed, as they do outside Pixel Preview. |

To change them, choose **Edit → Preferences…** (**Ctrl+K**) on Windows and Linux, or **VectorCraft → Settings → General…** (**Cmd+K**) on macOS, and open the page in the table. To make small art crisp in the exported file, see [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/#keep-small-art-sharp-on-screen).

## Hide what lies outside the artboards

Choose **View → Trim View** to draw only the parts of the artwork that lie inside the artboards. Art on the pasteboard and the parts of objects that reach past an artboard's edge are hidden, so you see each page as it will look once it is trimmed. Choose **View → Trim View** again to show everything. Trim View has no shortcut and applies to every open document. In a document without artboards, Trim View does not hide anything.

To check bleed and trim marks for print, see [Manage color and proof for print](/apps/vectorcraft/manage-color-and-proof/#add-trim-marks-and-check-the-trimmed-page).

## Turn anti-aliasing off

VectorCraft smooths the edges of the artwork on screen. To see hard edges instead:

1. Choose **Edit → Preferences…** (**Ctrl+K**) on Windows and Linux, or **VectorCraft → Settings → General…** (**Cmd+K**) on macOS.
2. On the **General** page, under **Options**, turn off **Anti-aliased Artwork**. It is on by default.
3. Click **OK**.

With the preference off, the canvas draws the edges of shapes and type without smoothing. Raster effects and pattern tiles stay smooth. The preference changes only the screen. Exported images use the anti-aliasing set in their export options. See [Preferences](/apps/vectorcraft/preferences/).

## Other view modes

- **Overprint Preview** (**Ctrl+Alt+Shift+Y**, or **Cmd+Option+Shift+Y** on macOS), **Proof Colors** and **Proof Setup** show how inks and other devices will reproduce the colors. See [Manage color and proof for print](/apps/vectorcraft/manage-color-and-proof/).
- **Hide Edges**, **Hide Bounding Box** and the other items in the lower part of the **View** menu hide the marks drawn over the artwork. See [Customize the workspace](/apps/vectorcraft/customize-the-workspace/#show-or-hide-edges-and-widgets-on-the-canvas).
- **Window → New Window** opens another view of the same document with its own zoom and mode.

## Shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Outline or Preview | Ctrl+Y | Cmd+Y |
| Pixel Preview | Ctrl+Alt+Y | Cmd+Option+Y |
| Overprint Preview | Ctrl+Alt+Shift+Y | Cmd+Option+Shift+Y |
| Document Setup | Ctrl+Alt+P | Cmd+Option+P |
| One layer in Outline or Preview | Ctrl-click the layer's eye | Cmd-click the layer's eye |
| Outline Others or Preview All Layers | Ctrl+Alt-click the layer's eye | Cmd+Option-click the layer's eye |

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Zoom and pan the canvas](/apps/vectorcraft/zoom-and-pan-the-canvas/)
- [Present and use screen modes](/apps/vectorcraft/present-and-use-screen-modes/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Manage color and proof for print](/apps/vectorcraft/manage-color-and-proof/)
- [Customize the workspace](/apps/vectorcraft/customize-the-workspace/)
- [Preferences](/apps/vectorcraft/preferences/)
