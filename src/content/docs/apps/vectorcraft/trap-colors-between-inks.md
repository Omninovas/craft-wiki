---
title: Trap colors where inks meet
description: Add overprinting traps where solid colors meet, so a press that prints its plates slightly out of register leaves no white gap between them, and check the traps before printing.
sidebar:
  order: 22.6
type: guide
category: Print and color management
subcategory: Print
cover: /assets/uploads/vectorcraft/trap-colors-between-inks-result.webp
summary: Add overprinting traps where colors meet so misregistration leaves no gaps.
parent: workflows
---

This page shows how to add traps where two solid colors meet, set the trap options, keep traps live as an effect and check them before the job goes to a print shop.

On a printing press, each ink prints from its own plate. When the plates land slightly out of line, a thin strip of paper can show where two colors meet. A trap is a thin extra shape along that edge. It lies over the darker color, is painted with the lighter color and is set to overprint, so the two inks overlap a little and no paper shows.

## Add a trap with the Pathfinder panel

1. Select two or more objects filled with solid colors where they meet. A selected group counts as the objects inside it.
2. Choose **Window → Pathfinder** (**Ctrl+Shift+F9**, or **Cmd+Shift+F9** on macOS).
3. Click the menu button at the top right of the Pathfinder panel and choose **Trap…**. The command stays dimmed until two or more objects are selected.
4. Set the options in the Trap dialog. See [Trap options](#trap-options).
5. Press **OK**.

![The Trap dialog over the lighthouse sticker, with Thickness 0.25 pt, Height/Width 100, Tint Reduction 40, and Traps with Process Color and Reverse Traps unchecked. Behind it, the lighthouse and the teal sea are selected, and the Pathfinder panel is open on the right](/assets/uploads/vectorcraft/trap-colors-between-inks-dialog.webp)

VectorCraft adds the traps as one new group directly above the topmost selected object and selects the group. The objects you selected do not change. **Edit → Undo** removes the whole group in one step, named Trap.

The traps follow only the edges that show. Where an object is partly covered by another selected object, the trap follows the visible part. Two objects filled with the same color get no trap between them. Objects without a solid fill, such as gradient fills or unfilled paths, do not take part.

To decide which color spreads, VectorCraft compares the lightness of the two colors. The lighter color spreads into the darker one. When both colors are equally light, the color with less ink spreads.

In the picture below, the traps were made with **Thickness** 1 pt and **Tint Reduction** 100 so that they are easy to see at 1000%.

![The lighthouse sticker at 1000%, where a selected green trap band runs down each side of the amber tower against the teal sea, and the View menu is open with Overprint Preview checked. The Layers panel shows the new group above the Lighthouse group, expanded to its eight paths](/assets/uploads/vectorcraft/trap-colors-between-inks-result.webp)

:::tip
**Trap…** does not change which operation **Repeat Pathfinder** runs. See [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/#use-the-pathfinder-panel-menu).
:::

## Trap options

The Trap dialog opens with the defaults in this table each time.

| Option | What it does | Range | Default |
|---|---|---|---|
| **Thickness** | How far the lighter color reaches into the darker one across vertical edges. | 0.01 to 5000 pt | 0.25 pt |
| **Height/Width** | The reach across horizontal edges, as a percentage of **Thickness**. At 100 the trap is the same width on every edge. Use another value for paper that stretches more in one direction on press. | 1 to 1000% | 100% |
| **Tint Reduction** | The trap paints the lighter color at this percentage of its tint. At 100 the trap uses the full color. A lower value keeps two light colors from printing a dark line where they overlap. | 0 to 100% | 40% |
| **Traps with Process Color** | A trap of a spot color is painted with the matching CMYK process color instead of the spot swatch. | On or off | Off |
| **Reverse Traps** | The darker color spreads into the lighter one instead. A rich black (100% black with other inks) does not spread. | On or off | Off |

The **Height/Width** and **Tint Reduction** fields take a number without the % sign.

## When Trap does not run

When VectorCraft cannot add traps, it adds nothing and shows one of these messages in the status bar:

| Status bar message | Cause and fix |
|---|---|
| `Trap: select two or more objects filled with solid colours` | Fewer than two of the selected objects have a solid fill. Select more objects, or give them solid fills. |
| `Trap: no edges of different colours meet among the selected objects` | The selected objects do not touch or overlap, or every edge that shows is between objects of the same color. Select objects whose colors meet. |
| `Trap: more than 1048576 pairs of objects lie close enough to trap, or too many objects share a horizontal range; trap fewer objects at a time` | The selection is too large to trap at once. Trap smaller parts of the art one after another. |

## Keep traps live with the Trap effect

The Trap effect builds the traps among the members of a group or a layer each time they change. Use it when the art may still move or change color.

1. Select a group, or target a layer in the Layers panel.
2. Choose **Effect → Pathfinder → Trap…**.
3. Set the options. The effect dialog has the five options of the Trap dialog and two more:
   - **Precision**: how closely the trap's outline follows the edges, from 0.001 to 10 pt. The default is 0.01 pt.
   - **Remove Redundant Points**: removes anchor points that do not change the trap's shape. It is on by default.
4. Leave **Preview** on to see the traps on the canvas while you change the values, then press **OK**.

![The Trap effect dialog over the lighthouse sticker, whose art is selected as one group. The dialog shows Thickness 0.25 pt, Height/Width 100, Tint Reduction 40, Traps with Process Color and Reverse Traps unchecked, Precision 0.01 pt, and Remove Redundant Points and Preview checked. The Appearance panel on the right lists the Group with Contents, Trap and Opacity rows](/assets/uploads/vectorcraft/trap-colors-between-inks-effect.webp)

The effect appears as a Trap row in the Appearance panel. To change its options, double-click the row.

To turn the traps into paths, select the group and choose **Object → Expand Appearance**. See [Make the appearance permanent](/apps/vectorcraft/apply-effects-and-appearance/#make-the-appearance-permanent).

## Check traps before printing

Traps are set to overprint, so they show their real color only while overprinting is shown.

1. Choose **View → Overprint Preview** (**Ctrl+Alt+Shift+Y**, or **Cmd+Option+Shift+Y** on macOS). Each trap shows the mix of the two inks.
2. Zoom in on an edge where two colors meet. A trap reaches only as far as its **Thickness** value, so a thin trap needs a high zoom to show.
3. Choose **Window → Separations Preview** and turn on **Overprint Preview (separations)**. Alt-click (Option-click on macOS) the eye of one plate to show only that plate. Each trap is painted with the lighter of the two colors, or with the darker one when **Reverse Traps** is on, so look for it on the plates of that color. With **Traps with Process Color** on, a trap of a spot color is painted with process inks instead of the spot color.

For more on overprinting and the ink plates, see [Check how inks overprint](/apps/vectorcraft/manage-color-and-proof/#check-how-inks-overprint) and [Preview each ink with Separations Preview](/apps/vectorcraft/manage-color-and-proof/#preview-each-ink-with-separations-preview).

When you save the trapped art as a PDF for a print shop, the **Output** section of **File → Save as PDF…** has a **Mark as trapped** option under **Output Intent**. It is not available for PDF/A files. See [Save a PDF](/apps/vectorcraft/open-and-save-files/#save-a-pdf).

## Related

- [Prepare artwork for CMYK printing](/apps/vectorcraft/prepare-artwork-for-cmyk-print/)
- [Manage color and proof for print](/apps/vectorcraft/manage-color-and-proof/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
