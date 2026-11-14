---
title: Prepare artwork for CMYK printing
description: Take artwork made in RGB to a CMYK press in order, from the CMYK working space and a gamut check through the switch to CMYK Color, single-object conversion, total ink limits and black overprint.
sidebar:
  order: 22.55
type: guide
category: Print and color management
subcategory: Color management
cover: /assets/uploads/vectorcraft/prepare-artwork-for-cmyk-print-color-mode.webp
summary: Check, convert and fix the colors of RGB artwork before it goes to a CMYK press.
parent: workflows
---

This page takes artwork drawn in RGB through the checks and conversions it needs, in order, before it goes to a printing press that uses cyan, magenta, yellow and black (CMYK) inks.

## Check the CMYK working space

VectorCraft converts colors to CMYK through the CMYK working space in the color settings. Set it to the profile your print shop uses before you check or convert any colors.

1. Choose **Edit → Color Settings…** (**Ctrl+Shift+K**, or **Cmd+Shift+K** on macOS). The Separations Preview panel opens at its **Color Settings** section.
2. Under **CMYK**, pick the working space. The default is **VectorCraft Generic CMYK (SWOP-like)**.
3. If your print shop sent an ICC profile, press **Load Profile…** and choose the `.icc` or `.icm` file. The file can be at most 32 MB. VectorCraft keeps a copy and lists the profile under **CMYK** each time it starts. Pick it there.
4. Check **Intent** and **Use Black Point Compensation**. The defaults are **Relative Colorimetric** and on.

The color settings apply to every open document. For the full list of settings and profiles, see [Choose color settings and profiles](/apps/vectorcraft/manage-color-and-proof/#choose-color-settings-and-profiles).

## Find colors the press cannot print

Some bright RGB colors, such as saturated violets and cyans, are outside the range of colors that CMYK inks can print. That range is the CMYK gamut. Gamut Check finds these colors while the document is still in RGB. Run it before you switch the document to CMYK.

1. Select the objects to check, or select nothing to check the whole document.
2. In the **Color Settings** section of the Separations Preview panel, press **Gamut Check**.
3. Read the result in the status bar: "All colors are within the CMYK gamut", or the number of colors that are out of the CMYK gamut. Each distinct color counts once, however many objects use it.

![The rooftop concert flyer in RGB with the teal Stage Lights group selected. The Separations Preview panel on the right shows Proof Setup set to Working CMYK with Proof Colors checked, and Color Settings with CMYK set to VectorCraft Generic CMYK (SWOP-like). The status bar reads "1 color is out of the CMYK gamut"](/assets/uploads/vectorcraft/prepare-artwork-for-cmyk-print-gamut.webp)

To bring a color into the gamut, change it to a less saturated color with the Color panel. If you leave it, the color changes to a printable color when the document switches to CMYK, and it can look duller. The proof in the next section shows how much.

After the switch to CMYK, every process color is a CMYK or gray color, and Gamut Check does not report any of them. Spot colors defined in Lab do not convert, so Gamut Check can still report them as out of the CMYK gamut.

## Preview the press colors on screen

A soft proof shows on screen how the colors will look when printed with the CMYK working space. The document's colors do not change.

1. Choose **View → Proof Setup → Working CMYK**. Choosing it also turns on **View → Proof Colors**.
2. Compare the proof with the original colors. To turn the proof off and on, choose **View → Proof Colors**.

The proof works in RGB and in CMYK documents. For the other proof targets and **Simulate Paper**, see [Preview colors for another device](/apps/vectorcraft/manage-color-and-proof/#preview-colors-for-another-device).

## Switch the document to CMYK

1. Save a copy of the RGB document if you want to keep the RGB colors, for example for a screen version.
2. Choose **File → Document Color Mode → CMYK Color**. The checked item is the document's current mode.

![The File menu open over the rooftop concert flyer, with the Document Color Mode submenu showing. CMYK Color is highlighted and RGB Color is checked. The active tab reads rooftop-concert-flyer.vectorcraft @ 89.27 % (RGB/Preview), next to a second document open in CMYK. The Separations Preview panel on the right shows the CMYK working space VectorCraft Generic CMYK (SWOP-like)](/assets/uploads/vectorcraft/prepare-artwork-for-cmyk-print-color-mode.webp)

VectorCraft converts these colors through the color settings, all in one undo step named Document Color Mode:

- the colors of the artwork, including opacity masks, effect colors and the colors of graphs;
- symbols, graph designs and pattern tiles;
- graphic styles, brushes and swatches;
- the fill and stroke that new objects get.

Swatches stay linked to the objects that use them, and a tint of a global swatch stays a tint of the converted swatch. Colors set in the Gray model stay gray and print on the black plate only. The document tab changes from **(RGB/Preview)** to **(CMYK/Preview)**.

:::caution
Neutral RGB grays, where R, G and B are equal, convert through the CMYK working space like any other RGB color. Light grays become cyan, magenta and yellow only, darker grays use all four inks, and the darkest grays become a rich black. Gray type and thin gray rules drawn in RGB then print on three or four plates. Before the switch, select them and choose **Edit → Edit Colors → Convert to Grayscale**, so they stay on the black plate. After the switch, check them on the Black plate in the Separations Preview panel.
:::

To go back to the RGB values, choose **Edit → Undo** right after the switch. Switching back with **File → Document Color Mode → RGB Color** converts the CMYK colors again and does not restore the original RGB values.

For more on the color mode of new documents, see [Choose the color mode](/apps/vectorcraft/set-up-documents-and-artboards/#choose-the-color-mode).

## Convert single objects or embedded images

To convert only some objects, for example art pasted from an RGB document into a CMYK one, use **Convert to CMYK**.

1. Select the objects. A selected group converts everything inside it.
2. Choose **Edit → Edit Colors → Convert to CMYK**. The command is dimmed when nothing is selected.

The command converts fills, strokes, gradient stops, type, gradient meshes and pattern fills. An embedded image is replaced with a converted copy. Linked images and colorized images keep their RGB pixels; to convert a linked image, embed it first with **Embed Image(s)** in the Links panel menu (see [Work with placed images](/apps/vectorcraft/work-with-placed-images/#relink-update-and-embed-images)). A pattern fill gets a new pattern swatch while the original pattern stays. A color linked to a global swatch is unlinked when it changes.

:::caution
**Convert to CMYK** does not use the CMYK working space from the color settings, so some colors can look different after it. For example, a bright teal can shift toward blue. When the colors must stay as close as possible to the RGB original, switch the whole document with **File → Document Color Mode → CMYK Color** instead.
:::

For the other commands in **Edit → Edit Colors**, see [Change the colors of finished art](/apps/vectorcraft/fill-stroke-and-color/#change-the-colors-of-finished-art).

## Limit total ink and fix overprints

The total ink of a color is the sum of its cyan, magenta, yellow and black percentages. Print shops give a maximum total ink for their press and paper. Print Ink Fixes lowers every color above that limit and fixes the overprint settings of white and black, in one undo step named Print Ink Fixes.

1. Make sure the document is in CMYK Color. In an RGB document the command does not run and reports that it works on CMYK documents only.
2. Select the objects to fix, or select nothing to fix the whole document.
3. Choose **Object → Plug-ins → Color Effects → Print Ink Fixes…**. The **Print Ink Fixes…** button in the **Inks** section of the Color Effects panel opens the same dialog.
4. Set **Ink Limit** to the total ink your print shop allows. The dialog starts at 300, and the highest value is 400.
5. Check the other options from the following table, then press **OK**.

![The Print Ink Fixes dialog with Ink Limit 300 and Overprint Black 100, and Exclude Pure Black, Remove White Overprint, Fill and Stroke checked. Text Only is unchecked](/assets/uploads/vectorcraft/prepare-artwork-for-cmyk-print-ink-fixes.webp)

| Option | What it does | Value when the dialog opens |
|---|---|---|
| **Ink Limit** | Scales down each fill and stroke color whose total ink is above this percentage. Spot colors and Registration keep their ink, and embedded images and pattern fills are not changed. 0 leaves the total ink as it is. | 300 |
| **Exclude Pure Black** | Leaves colors that use black ink only out of the ink limit. | On |
| **Remove White Overprint** | Turns overprint off for white fills and strokes. | On |
| **Overprint Black** | Sets black fills and strokes with at least this percentage of black to overprint. 0 leaves overprint as it is. | 100 |
| **Text Only** | Sets black overprint on type only. | Off |
| **Fill** and **Stroke** | Choose whether the fixes change fills, strokes or both. | On |

For the full description of the plug-in, see [Print Ink Fixes](/apps/vectorcraft/built-in-plug-ins/#print-ink-fixes).

### Set black to overprint

Black type and thin black lines that overprint print on top of the colors under them, so a slight shift of the plates leaves no white gap around them. Print Ink Fixes sets this with **Overprint Black**. To set black overprint on its own and choose which blacks count:

1. Select the art.
2. Choose **Edit → Edit Colors → Overprint Black…**.
3. Leave **Percentage** at 100 to change only solid black, or lower it to include dark grays. Turn on **Include Blacks with CMY** to include rich blacks that also contain cyan, magenta or yellow.
4. Press **OK**.

To see the result, choose **View → Overprint Preview** (**Ctrl+Alt+Shift+Y**, or **Cmd+Option+Shift+Y** on macOS). For the full option table, see [Overprint black](/apps/vectorcraft/manage-color-and-proof/#overprint-black).

Before you print, check each ink plate in the Separations Preview panel. See [Preview each ink with Separations Preview](/apps/vectorcraft/manage-color-and-proof/#preview-each-ink-with-separations-preview).

## Related

- [Manage color and proof for print](/apps/vectorcraft/manage-color-and-proof/)
- [Trap colors where inks meet](/apps/vectorcraft/trap-colors-between-inks/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Use the built-in plug-ins](/apps/vectorcraft/built-in-plug-ins/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
