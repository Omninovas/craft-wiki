---
title: Place text from text and word processor files
description: Place a plain text, RTF or word processor file as area type, clean up its line breaks and spaces in Text Import Options, see which formatting an RTF, .docx or .doc file keeps, and fit text that runs past its frame.
sidebar:
  order: 21.6
type: guide
category: Files and formats
subcategory: Formats
cover: /assets/uploads/vectorcraft/place-text-from-documents-placed.webp
summary: Bring the text of a .txt, .rtf, .docx or .doc file into a document as area type.
parent: workflows
---

This guide covers placing the text of a plain text file (`.txt`), an RTF file (`.rtf`) or a word processor document (`.docx` or `.doc`) as area type with **File → Place…**, and fitting the placed text to its frame.

## Place a plain text file

1. Open the document that gets the text. To put the text in a frame of your own, draw a rectangle where it goes and select it.
2. Choose **File → Place…**, or press **Ctrl+Shift+P** (**Cmd+Shift+P** on macOS), and pick the `.txt` file.
3. In the Place dialog, turn on **Replace** if you selected a rectangle, and press **Place**. The Text Import Options dialog opens.
4. Set the options described in the [Text Import Options](#text-import-options) table.
5. Press **OK**.

![The Text Import Options dialog over the night market menu card, with Platform set to Windows, Character Set set to Unicode, Join the lines of each paragraph and Remove blank lines between paragraphs checked, and Replace checked with 3 in its box](/assets/uploads/vectorcraft/place-text-from-documents-import-options.webp)

VectorCraft places the text as one area type object, named after the file, and selects it. The text is set in Source Sans 3 Regular at 12 pt in black, and you can style it as described in [Add and style type](/apps/vectorcraft/add-and-style-type/).

The frame of the placed type depends on how you place it:

- With **Replace**, the frame takes the bounds of the selected object, and the type takes that object's place in the stacking order. The replaced object is removed.
- When you place one file without **Replace**, the frame is the artboard less a 36 pt margin on each side, centered in the view.
- When you place several files at once, the pointer is loaded with the files. A click places the text in a 468 x 648 pt frame with its top-left corner at the click. A drag draws the frame from where you press, keeping the proportions of that 468 x 648 pt frame.

When you place several files at once, the Text Import Options dialog does not open. Each `.txt` file is read with the default options: **Unicode**, each line a paragraph, blank lines kept, and no spaces replaced with tabs. To set the options for a `.txt` file, place it on its own.

**Link** in the Place dialog does not apply to text. The placed text is a copy and does not change when the file changes.

## Text Import Options

| Option | What it does | Default |
|---|---|---|
| **Platform** | **Windows** or **Mac**. The platform sets the 8-bit character set that VectorCraft reads: Windows-1252 for **Windows** and Mac Roman for **Mac**. | **Mac** on macOS, **Windows** on other systems |
| **Character Set** | **Unicode** reads UTF-8, or UTF-16 when the file starts with a byte-order mark. A file that is not valid UTF-8 is read in the platform's 8-bit character set. **ANSI** always reads the platform's 8-bit character set. | **Unicode** |
| **Join the lines of each paragraph** | Joins each block of lines into one paragraph, with a space between the lines. A blank line ends the paragraph. When it is off, each line of the file becomes a paragraph. | Off |
| **Remove blank lines between paragraphs** | Removes the blank lines between paragraphs. When it is off, each blank line becomes an empty paragraph. | Off |
| **Replace** … **or more spaces with a tab** | Replaces each run of that many spaces or more with one tab. The number goes from 2 to 100 and can be edited while the checkbox is on. | Off, 3 |

VectorCraft treats CR LF, CR and LF line endings alike. It drops control characters other than tabs, and blank lines at the end of the file. A text file can be at most 4 MB. A file that holds no text is not placed, and the status bar shows an error.

## Place an RTF, .docx or .doc file

1. To put the text in a frame of your own, draw a rectangle and select it.
2. Choose **File → Place…** and pick the `.rtf`, `.docx` or `.doc` file.
3. Turn on **Replace** if you selected a rectangle, and press **Place**.

These files have no import options. The text comes in as area type with the formatting the file gives it, and the frame follows the same rules as for a plain text file.

![The night market menu card after placing stall-hours.docx in the teal panel: a bold Stall hours heading, four bold stall names with their hours in amber, and an italic description under each name. The Type tool's caret is in Lantern Noodles, the Character section of the Properties panel shows Source Sans 3 Bold at 16 pt, and the status bar shows the Type tool's hints](/assets/uploads/vectorcraft/place-text-from-documents-placed.webp)

The placed text keeps this formatting:

- **Character formatting**: the font, size, bold, italic, underline, strikethrough, all caps, small caps, superscript and subscript, raised and lowered text, and the color. `.docx` and `.doc` files also keep double strikethrough.
- **Paragraph formatting**: the alignment, the left, right and first-line indents, the space before and after, and the text direction. `.docx` files also keep hanging indents.
- **Styles**: in a `.docx` or `.doc` file, the formatting that paragraph and character styles give is applied to the text. The styles themselves are not added to the document.

Each row of a table becomes one paragraph, with a tab between its cells. A field brings in its result. A line break starts a new paragraph, and page and column breaks in a `.docx` file are dropped.

The placed text leaves out pictures, shapes and embedded objects, hidden text, headers, footers, footnotes and endnotes, and comments. A `.docx` or `.doc` file also loses its deleted text and the text in its text boxes, and a `.docx` file loses its list numbers and symbol characters.

VectorCraft reads `.doc` files in the binary format introduced in 1997. It does not place a `.doc` file in an older format, an encrypted one, or one last saved with fast save. Save such a file again as `.docx` and place it again.

VectorCraft reads a file as RTF when its content starts with `{\rtf`, whatever its name. A file with the `.txt` extension is always placed as plain text.

## Fit the placed text

Text that does not fit in its frame overflows. When the type is selected, a red out port on the frame shows the overflow.

- To make the frame follow the text, select the type, choose **Type → Area Type Options…** and set **Fit** to **Auto Size**. The frame's height then follows the text after every edit.
- To scale the text down until it fits, set **Fit** to **Shrink Text to Fit**, and set the smallest size in **Fit Min Percent** (50% by default).
- To set the frame's size yourself, type a **Height** in **Type → Area Type Options…**.
- To continue the text in another frame, select the type with the Selection tool and click the red out port. Then click a closed path to flow the text into it, click empty canvas for a new frame of the same size, or drag to draw the new frame. [Flow text between frames](/apps/vectorcraft/add-and-style-type/#flow-text-between-frames) describes threading.

For headlines and lists in the placed text, see [Make lists and fit type to its frame](/apps/vectorcraft/make-lists-and-fit-type/). For paragraph styles, tabs and other tools for long text, see [Work with styles and long text](/apps/vectorcraft/work-with-styles-and-long-text/).

## Related

- [Open and save files](/apps/vectorcraft/open-and-save-files/#place-a-file-instead-of-opening-it)
- [Add and style type](/apps/vectorcraft/add-and-style-type/)
- [Work with styles and long text](/apps/vectorcraft/work-with-styles-and-long-text/)
- [Make lists and fit type to its frame](/apps/vectorcraft/make-lists-and-fit-type/)
- [Open and place PDF and .ai pages](/apps/vectorcraft/open-pdf-and-ai-pages/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
