---
title: Sketch and ink a drawing
description: Trace a scanned sketch on a template layer, rough in the lines with the Pencil, ink them with the Paintbrush or the Blob Brush and pen pressure, then clean up and simplify the finished paths.
sidebar:
  order: 12.7
type: guide
category: Draw and edit
subcategory: Freehand
cover: /assets/uploads/vectorcraft/sketch-and-ink-a-drawing-pencil.webp
summary: Turn a scanned sketch into clean inked paths with the freehand tools.
parent: workflows
---

This guide shows how to turn a scanned or photographed sketch into finished line art: you place the sketch on a template layer, rough in the lines with the Pencil, ink them with the Paintbrush or the Blob Brush, clean them up, and reduce the anchor points. Each step links to the page that lists every option of the tool it uses.

## Put the sketch on a template layer

A template layer is locked, its images can be dimmed, and it is left out of printing and export.

1. Choose **File → Place…** (**Ctrl+Shift+P**, or **Cmd+Shift+P** on macOS) and pick the scan of your sketch.
2. Turn on **Template** in the **Place** dialog, then place the file. VectorCraft puts the image on a new locked template layer directly below the current layer and names the layer **Template** followed by the file name.
3. Double-click the template layer's thumbnail in the Layers panel to open **Layer Options**.
4. To give the layer a shorter name, type one such as Sketch in **Name**.
5. Turn on **Dim Images to**, enter a percentage such as 50%, and click **OK**.

![Layer Options for the Sketch layer over a fox sketch on a violet-to-pink sky, with Template, Show, Preview and Dim Images to 50% turned on and Lock and Print checked but dimmed. The Layers panel behind it lists Ink, Sketch and Background, and the Sketch row shows the template icon and a lock](/assets/uploads/vectorcraft/sketch-and-ink-a-drawing-template.webp)

The template layer is locked, so you draw on layers above it.

You can also make an existing layer a template: open its **Layer Options** and turn on **Template**. The dialog then locks the layer and sets **Dim Images to** 50%. [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/#set-layer-options) describes every option in the dialog.

## Rough in the lines with the Pencil

1. Click the template layer's row in the Layers panel to make it the current layer, then click **Create New Layer** at the bottom of the panel. The new layer goes directly above the template layer. Double-click its name and type Rough.
2. Press N to choose the Pencil tool.
3. Set the stroke color and weight you want for the rough lines, and set the fill to None.
4. Drag along the lines of the sketch. While you drag, the Pencil shows the path it fits to the stroke, and VectorCraft keeps that path when you release the mouse button.
5. To fix part of a line, keep the path selected and draw over that part again. A stroke that starts and ends near the selected path replaces the section between those two points.

![An amber Pencil stroke still being drawn up the fox's right ear at 150% zoom, over the dimmed sketch. The stroke shows its fitted path with blue anchor points, and a magenta anchor label marks where its end meets the start of the line along the back. Earlier amber lines follow the left ear, the muzzle, the chest and the back, and the Layers panel shows the Rough layer current between Ink and the Sketch template layer](/assets/uploads/vectorcraft/sketch-and-ink-a-drawing-pencil.webp)

Double-click the Pencil tool to open **Pencil Tool Options**. Three options change how rough lines behave:

- **Fidelity** (1.5 px by default) sets how closely the path follows your hand. Move it toward **Accurate** to keep small wobbles, or toward **Smooth** for fewer anchor points and smoother curves.
- **Close paths when ends are within** (15 px) closes a path when you end the stroke this close to its start. Set it to 0 if your lines often end near where they began and you want them to stay open.
- **Edit selected paths within** (12 px) sets how close to a selected path a stroke must start to continue or redraw it. Set it to 0 to always start a new path.

The full table of Pencil options is in [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/#set-the-pencil-tool-options).

## Ink with the Paintbrush or the Blob Brush

Ink the final lines on a layer above the Rough layer: highlight the Rough layer and click **Create New Layer**, or click a layer that is already above it. With a drawing tablet, both brushes respond to pen pressure.

### Ink with the Paintbrush

The Paintbrush draws a path with the current brush on its stroke.

1. Press **Ctrl+Shift+A** (**Cmd+Shift+A** on macOS) to deselect everything. Clicking a brush while ink is selected applies that brush to the selection.
2. In the Brushes panel, click a Calligraphic brush, then double-click it to open its **Calligraphic Brush Options**.
3. Set **Size** to **Pressure**, enter a **Variation**, and click **OK**. The line is Size minus Variation wide at the lightest pressure and Size plus Variation at the heaviest, so with a Variation of 0 it does not change with pressure. Clicking **OK** also updates the strokes already painted with that brush.
4. Press B to choose the Paintbrush tool.
5. Drag along the rough lines. The Paintbrush records the pen pressure along each stroke.

The Paintbrush has the same **Fidelity**, **Close paths when ends are within** and **Edit selected paths within** options as the Pencil. See [Paint with the Paintbrush](/apps/vectorcraft/paint-with-brushes/#paint-with-the-paintbrush).

### Ink with the Blob Brush

The Blob Brush paints filled shapes instead of stroked paths. A new shape that touches a shape with the same fill and no stroke merges with it, so the strokes of one outline build up into a single shape.

1. Set the stroke color to your ink color. The Blob Brush paints with the stroke color, or with the fill color when the stroke is None.
2. Press Shift+B to choose the Blob Brush tool.
3. Double-click the Blob Brush tool in the Tools panel to open its options, set **Size** to **Pressure**, enter a **Variation**, and click **OK**. With a Size of 7 pt and a Variation of 3 pt, the tip is 4 pt wide at the lightest pressure and 10 pt at the heaviest.
4. Drag along the rough lines. Press [ or ] to make the tip 1 pt smaller or larger.

![The fox outline inked in navy with the Blob Brush at 150% zoom, with the merged ink shape selected and outlined in green. A pressure stroke is part way along the underside of the tail: a blue outline shows the area being painted, the round tip outline sits at the end of the stroke, and a readout shows L: 90.87 pt. The Layers panel lists Ink, Rough, Sketch and Background, with Ink current](/assets/uploads/vectorcraft/sketch-and-ink-a-drawing-blob.webp)

The other Blob Brush options, including **Keep selected** and **Merge only with selection**, are in [Paint filled shapes with the Blob Brush](/apps/vectorcraft/paint-with-brushes/#paint-filled-shapes-with-the-blob-brush).

### Add flat color under the ink

To color the drawing without covering the ink, highlight the ink layer and Ctrl+Alt-click (Cmd+Option-click on macOS) **Create New Layer**, which adds a layer directly below it. Double-click its name, type Color, and draw filled shapes with no stroke on that layer.

## Clean up the lines

When the ink is finished, delete the Rough layer: highlight it in the Layers panel and click **Delete Selection** (the trash button). Hide the template layer while you clean up, so you see the lines on their own: choose **View → Hide Template** (**Ctrl+Shift+W**, or **Cmd+Shift+W** on macOS). Choose **View → Show Template** to see the sketch again.

The Smooth and Path Eraser tools are in the Pencil tool's group and change only selected paths. Select the path you want to fix first.

- **Smooth** removes wobbles from the part of a selected path near your drag. Drag along the wobbly part, and repeat for a smoother result. Double-click the tool to change its **Fidelity** (2.5 pt by default).
- **Path Eraser** removes the parts of a selected path that you drag over, such as an overshoot past a corner.
- **Join** closes small gaps. Drag across the two open ends to join them into one path. When two open lines cross and their ends stick out past the crossing, drag over those ends, and the Join tool trims them and joins the lines where they cross. To join the selected ends without dragging, choose **Object → Path → Join** (**Ctrl+J**, or **Cmd+J** on macOS).
- **Eraser** (Shift+E) cuts through filled shapes, which is how you trim Blob Brush ink. It erases from the selected shapes, or from every path it crosses when nothing is selected.

![The fox's muzzle at 900% zoom, inked in navy over coral and cream fills, with the template layer hidden. A long zigzag whisker running from the muzzle is selected with its green anchor points showing, and a thin blue line along its middle shows the Smooth tool part way through a drag from the muzzle outward. Two smooth whiskers sit below it, and the Layers panel lists Ink, Color, Sketch and Background](/assets/uploads/vectorcraft/sketch-and-ink-a-drawing-cleanup.webp)

For more on these tools, see [Smooth and erase parts of a path](/apps/vectorcraft/draw-and-edit-paths/#smooth-and-erase-parts-of-a-path), [Join open ends with the Join tool](/apps/vectorcraft/cut-join-and-refine-paths/#join-open-ends-with-the-join-tool) and [Erase parts of shapes with the Eraser](/apps/vectorcraft/cut-join-and-refine-paths/#erase-parts-of-shapes-with-the-eraser).

## Simplify the finished paths

Freehand paths often have more anchor points than their shape needs. **Object → Path → Simplify…** removes anchor points while keeping the shape close to the original.

1. Select the inked paths.
2. Choose **Object → Path → Simplify…**. A slider opens under the selection at the Auto-Simplify setting, and the canvas shows the simplified paths.
3. Drag the slider to the left for fewer anchor points, or to the right to stay closer to the original.
4. Press Enter, or click outside the slider, to keep the result. Press Esc to put the paths back.

**Simplify** is also in the Contextual Task Bar and in the Quick Actions of the Properties panel. The Simplify dialog's options are in [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/#simplify).

When the drawing is finished, you can delete the template layer: highlight it in the Layers panel and click the trash button. Template layers do not print and are left out of export, so you can also keep the layer in the document.

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/)
- [Paint with brushes and variable widths](/apps/vectorcraft/paint-with-brushes/)
- [Cut, join and refine paths](/apps/vectorcraft/cut-join-and-refine-paths/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
- [Work with placed images](/apps/vectorcraft/work-with-placed-images/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
