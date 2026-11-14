---
title: Automate VectorCraft
description: Find and run any command by name, change keyboard shortcuts, record and replay actions with stops, run an action on a folder of files, check a script before you run it, and run VectorCraft from the command line or an MCP client.
sidebar:
  order: 23
type: guide
category: Automate and extend
subcategory: Automation
cover: /assets/uploads/vectorcraft/search-commands.webp
summary: Run commands by name, record actions and drive VectorCraft from the command line.
parent: workflows
---

This guide shows you how to find any command by typing part of its name, give tools, commands and panels your own keyboard shortcuts, record a series of steps as an action and play it on one document or on a whole folder of files, and check a script file before you run it. It then covers `vectorcraft-cli`, which runs the same commands without opening a window, and the Model Context Protocol (MCP) server, which other programs use to control VectorCraft.

## Find a command by name

1. Choose **Help → Search Commands…**, or press **Ctrl+Shift+/** (**Cmd+Shift+/** on macOS).
2. Type part of the name of a command or a tool, for example `align`.
3. Press the Up and Down arrow keys to highlight a result, then press Enter, or click a result.

The box searches every command and tool, shows up to 14 matches, and shows each match's keyboard shortcut beside it. Choosing a tool selects it, and choosing a command runs it.

![The Search Commands box with "align" typed in over four selected lanterns in a night market scene, listing matches such as Window → Align → Align, which is highlighted, and Align left with its keyboard shortcut](/assets/uploads/vectorcraft/search-commands.webp)

## Change keyboard shortcuts

1. Choose **Edit → Keyboard Shortcuts…**, or press **Ctrl+Alt+Shift+K** (**Cmd+Option+Shift+K** on macOS).
2. Under **Set**, choose **VectorCraft Defaults** or **Classic Defaults**.
3. Choose the **Tools** tab or the **Menu Commands** tab, and type in the **Search** box to narrow the list. Panels are listed under Window on the **Menu Commands** tab.
4. Click the shortcut next to an entry, then press the new keys. Press Esc to cancel.
5. Click **OK** to keep the changes, or **Cancel** to discard them.

![The Keyboard Shortcuts dialog over a night market scene. The Tools tab is filtered by "selection", the Set list shows Custom, and Group Selection Tool is selected with its new shortcut, Shift+A.](/assets/uploads/vectorcraft/keyboard-shortcuts-custom.webp)

When you change a shortcut, the **Set** list shows **Custom**. The dialog also has these buttons:

| Button | What it does |
|---|---|
| **Clear** | Removes the shortcut from the selected entry |
| **Use Default** | Gives the selected entry its default shortcut again |
| **Go to Conflict** | Selects the entry that the keys you pressed were taken from |
| **Import…** | Reads a saved shortcut set into the dialog; press **OK** to keep it |
| **Export…** | Saves the current set as a `.json` file |
| **Export Text…** | Saves the current set's tools and menu commands, with their shortcuts, as a text file |
| **Reset to Defaults** | Returns every shortcut to the **VectorCraft Defaults** set |

:::note
If the keys you press already belong to another entry, VectorCraft removes them from that entry and shows a message naming it.
:::

The [keyboard shortcuts](/apps/vectorcraft/keyboard-shortcuts/) reference lists every default shortcut.

## Record and play actions

An action is a list of recorded steps. Each step is a VectorCraft command with the settings it ran with.

1. Choose **Window → Actions**.
2. Click **Create New Set** at the bottom of the panel, type a name and click **OK**.
3. Click **Create New Action**. In **New Action**, type a **Name**, choose the **Action Set**, and click **Record**. The panel shows **● Recording**.
4. Do the steps you want to record.
5. Click **Stop Playing/Recording**.
6. To play the action, select it in the panel and click **Play Current Selection**.

![The New Action dialog over a night market scene with one lantern selected. The Name is Lantern Glow, the Action Set is Studio, the Function Key is F5 with Shift selected, and the Color is Yellow. The Actions panel on the right shows the Studio set below Default Actions.](/assets/uploads/vectorcraft/action-new-action-dialog.webp)

![The Actions panel beside three star badges in a dusk scene, with a set named Studio holding an action named Badge, expanded to show its three recorded steps, shape.ellipse, paint.setFill and paint.setStroke, each with its check box selected](/assets/uploads/vectorcraft/actions-panel.webp)

Expand an action to see its steps. Each step has a check box: clear it to leave that step out when the action plays, and select it again to include it.

In **New Action** and **Action Options…**, the **Function Key** list assigns a key from F1 to F15 that plays the action. You can add **Ctrl** (**Cmd** on macOS) and **Shift** to the key. On Windows, F1, Ctrl+F4 and Ctrl+F6 cannot be used.

:::tip
With the default **Accelerated** speed, the whole action plays as one step in the undo history, so one Undo reverses it. **Playback Options…** also offers **Step by Step** and **Pause For**, which play one step at a time and record each step as its own undo step.
:::

![The Actions panel menu open beside a strip of the night market scene, listing New Action, New Set, Duplicate, Delete, Set Options, Batch, Play Current Selection, Insert Stop, Action Options, Playback Options, Save Actions, Load Actions and Float Panel](/assets/uploads/vectorcraft/actions-panel-menu.webp)

The panel menu holds these commands:

| Command | What it does |
|---|---|
| **New Action…** | Opens **New Action**, the same as **Create New Action** |
| **New Set…** | Creates a new action set |
| **Duplicate** | Copies the selected action, or the current set when no action is selected |
| **Delete** | Deletes the selected actions or sets |
| **Set Options…** | Renames the current set |
| **Batch…** | Plays the selected action on every file in a folder, or on every data set of the open document |
| **Play Current Selection** | Plays the selected action, or plays on from a stop the action waits at |
| **Insert Stop…** | Adds a stop to the recording in progress or to the selected action |
| **Action Options…** | Changes the selected action's name, function key and color |
| **Playback Options…** | Sets the playback speed: **Accelerated**, **Step by Step** or **Pause For** |
| **Save Actions…** | Saves the current set to a `.vcactions` file |
| **Load Actions…** | Adds a saved set to the panel |

### Add a stop to an action

A stop makes a playing action wait and show a message, so you can check the result or do a step by hand before the action goes on.

1. In the **Actions** panel, expand the action and select the step that the stop should follow. To add the stop after the last step, collapse the action and select it. While you record an action, the stop goes after the steps recorded so far.
2. Choose **Insert Stop…** from the panel menu.
3. In **Record Stop**, type the **Message** that the action shows when it reaches the stop.
4. Select **Allow Continue** to give the message box a **Continue** button.
5. Click **OK**. In an existing action, the stop appears as **Stop:** followed by the message, and it is selected.

![The Record Stop dialog over a sheet of dusk postcards, with the Message "Check the label before export" and Allow Continue selected. To the right, the docked Actions panel shows the Postcard Prep action in the Postcards set expanded to its four steps, select.all, object.scale, text.create and document.export, with text.create selected.](/assets/uploads/vectorcraft/actions-insert-stop.webp)

An action plays up to a stop whose check box is selected and waits there, at any speed. If you clear a stop's check box, playback skips the stop. A message box opens with the action's name as its heading, the message, and the line "Press Play Current Selection in the Actions panel to go on." With **Accelerated**, the steps between two stops are one step in the undo history.

| Button or command | What it does |
|---|---|
| **Continue** | Plays the rest of the action. The message box shows it only when **Allow Continue** is selected. |
| **Stop** | Closes the message box. The action keeps waiting at the stop. |
| **Play Current Selection** | Plays on from the stop |
| **Stop Playing/Recording** | Ends the playback. The steps that already ran stay, and the rest do not run. |

**Batch…** cannot play an action with an included stop. For such an action, it shows "Batch cannot play an action with a stop" in the status bar and does not open.

## Run an action on a folder of files

**Batch…** plays an action on every file in a folder, or on every data set of the open document, and then saves, exports or closes each result.

1. In the **Actions** panel, select the action. If the action has no steps, every step is cleared, or an included step is a stop, **Batch…** shows a message in the status bar and does not open.
2. Choose **Batch…** from the panel menu. The dialog shows the action's name at the top.
3. Set **Play** to **Folder** or **Data Sets**.
4. For **Folder**, type a **Source Folder** or click **Choose…**, and select **Include All Subdirectories** to include its subfolders. For **Data Sets**, the dialog shows "Uses every data set of the open document." in their place.
5. Choose one of the **Destination** options. For **Folder**, type a **Destination Folder** or click **Choose…**. With **Data Sets** and **Folder**, choose how the files are named in **File Name**, which appears below **Destination Folder**.
6. Select or clear the options under **Overrides**, and click **OK**.

![The Batch dialog for the Badge action over a dusk scene with three star badges, with Play set to Folder, Source Folder C:\Art\badges, Include All Subdirectories cleared, Destination set to Folder, Destination Folder C:\Art\badges-out, and all four Overrides options selected. The Actions panel on the right shows the Badge action, with 3 steps, selected in the Studio set.](/assets/uploads/vectorcraft/action-batch.webp)

When the batch ends, the status bar shows how many files or data sets were processed, for example "Batch: 3 processed," and how many failed. If the source holds more than 500 files or data sets, or if **Include All Subdirectories** finds a folder nested more than 8 levels deep, the batch stops with an error before it processes any file. The batch skips files whose names start with a dot and files VectorCraft cannot open.

If you click **OK** with no **Source Folder** or no **Destination Folder**, or with **Data Sets** chosen and no document open, the status bar names what is missing and the dialog stays open. The batch also stops with an error, and the dialog stays open, when the folder holds no file VectorCraft can open or the document has no data sets.

| Destination | What happens to each file |
|---|---|
| **None** | The file stays open |
| **Save and Close** | The file is saved over the source and closed |
| **Folder** | The file is saved or exported into the **Destination Folder** and closed |

With **Folder**, each file keeps its name and its format. With **Data Sets**, VectorCraft applies each data set in turn to the open document, and the document stays open. When **Destination** is **Folder**, VectorCraft saves one `.vectorcraft` copy for each data set. With **Data Sets**, the dialog shows the warning "Each data set saves over the same file, which keeps only the last data set." when the settings would save every data set to one file.

| Option | Default | What it does |
|---|---|---|
| **Include All Subdirectories** | Off | Also plays the action on the files in the source folder's subfolders |
| **File Name** (Data Sets) | **File + Number** | Shows only when **Play** is **Data Sets** and **Destination** is **Folder**. **File + Number** names each file after the document with 001, 002 and so on; **File + Data Set Name** uses the document's name, an underscore and the data set's name; **Data Set Name** uses the data set's name. A name already used gets `-2`, `-3` and so on. |
| **Override Action "Open" Commands** | On | Skips the Open steps recorded in the action. The other steps run on the file the batch opened. With **Data Sets**, Open steps are always skipped. |
| **Override Action "Save" Commands** | On | The action's recorded Save steps write their files into the **Destination Folder**, named after the source file |
| **Override Action "Export" Commands** | On | The action's recorded Export steps write their files into the **Destination Folder**, named after the source file, with the export format's extension |
| **Stop on Errors** | On | Stops the batch at the first file or data set that fails |

The Save and Export overrides apply only when **Destination** is **Folder**.

## Set action and playback options

To rename the current set, choose **Set Options…** from the Actions panel menu, type a **Name** and click **OK**. **New Set…** opens the same dialog with the name **Set 1**, or the next number that no set uses.

To change an action, select it and choose **Action Options…**:

| Option | What it does |
|---|---|
| **Name** | Renames the action. **OK** is unavailable while the name is empty. |
| **Function Key** | **None**, or a key from F1 to F15 that plays the action, with **Ctrl** (**Cmd** on macOS) and **Shift** check boxes. The action's key takes priority over a command shortcut on the same keys. |
| **Color** | **None**, **Red**, **Yellow**, **Green**, **Blue** or **Violet**. VectorCraft saves the color with the action, and the Actions panel does not display it. |

![The Action Options dialog for the Lantern Glow action over the night market's lanterns, with the Name Lantern Glow, the Function Key F5 with Shift selected, and the Color Yellow](/assets/uploads/vectorcraft/action-options-dialog.webp)

To set how fast actions play, choose **Playback Options…** from the panel menu, choose a speed and click **OK**:

| Speed | What happens |
|---|---|
| **Accelerated** | The default. Every included step runs at once, as one step in the undo history. |
| **Step by Step** | One step runs at a time, and the window is redrawn after each step. Each step is its own undo step. |
| **Pause For** | VectorCraft waits the number of seconds you enter, from 1 to 60, between steps. Each step is its own undo step. The field starts at 1. |

![The Playback Options dialog over the night market's lanterns, with Pause For selected and 3 seconds entered](/assets/uploads/vectorcraft/action-playback-options.webp)

VectorCraft saves the playback speed with its preferences, and the speed stays set after a restart. An action that is already playing keeps the speed it started with, and while an action plays step by step or with pauses, VectorCraft does not start another one.

## Check a script before you run it

**Check Script…** reads a script file and reports what it does without running any of it. To run scripts, see [Run scripts](/apps/vectorcraft/run-scripts/).

1. Choose **File → Scripts → Check Script…**.
2. Choose a `.jsx`, `.jsxinc` or `.jsxbin` file. Opening one of these files with **File → Open…** shows the same report.
3. Read the report, then click **Copy Report** to copy it to the clipboard as JSON, or **Close**.

![The Check Script report for lantern-labels.jsx. It lists what the script needs, then the Outside the document section with "Writes, moves or deletes files" on lines 19 and 20, the Menu commands section with group and selectall, and the Document model section, above the Copy Report and Close buttons.](/assets/uploads/vectorcraft/check-script-report.webp)

The report lists what the script needs, then these sections. A section appears only when the script has something to list in it.

| Section | What it lists | Beside each entry |
|---|---|---|
| **Outside the document** | Whether the script writes, moves or deletes files, opens files in other apps, opens network connections, loads native code, sends messages to other apps, reads or sets environment variables, runs code the checker can't read, or changes the preferences of the app the script was written for | A count and the line numbers |
| **Menu commands** | The menu commands the script runs, and how many command names the script builds as it runs | A count and the line numbers |
| **Document model** | The document objects and properties the script uses | A count |
| **Directives** | The script's `#` and `//@` directives | The line, or the file and line |
| **Includes** | The files the script's `#include` lines name, and whether each one was checked | The line, or the file and line |
| **Problems** | Strings, comments, regular expressions, template literals, XML literals or brackets left open; a closing bracket with no opening one; syntax newer than ES3; unknown directives; invalid UTF-8; mixed line endings; and nesting too deep to follow | The line, or the file and line |

VectorCraft also checks the files that `#include` lines name, and reads them only from inside the script's folder. It checks up to 8 MiB in each file, 32 MiB in all and 64 included files. For a script file larger than 8 MiB, the report shows "Too large to check." An included file that VectorCraft skips because a limit was reached is listed under **Includes** as "Not read: a limit was reached." VectorCraft cannot read a compiled `.jsxbin` file. For one, the report shows "Compiled script: ask its author for the .jsx file."

## Run commands from the command line

`vectorcraft-cli` runs VectorCraft's commands without opening a window. It reads a file or starts a new document, runs the commands you list in order, and exports the result.

| Install | Where the CLI is |
|---|---|
| Windows (MSI) | `%LOCALAPPDATA%\Programs\ArtCraft\VectorCraft\vectorcraft-cli.exe` for the default install. The installer does not add it to `PATH`. |
| Linux (deb, rpm) | `/usr/bin/vectorcraft-cli` |
| macOS | The separate `vectorcraft-cli-<version>-macos-universal.zip` release download. The `.app` holds only the desktop app. |

| Command | What it does |
|---|---|
| `vectorcraft-cli commands` | Prints the command catalog as JSON |
| `vectorcraft-cli run --in in.svg --cmd select.all --cmd paint.setFill --params '{"color":"#ff0000"}' --export out.svg` | Opens a file, selects everything, fills it red and exports the result |
| `vectorcraft-cli run --cmd file.new --params '{"width":800,"height":600}' --cmd shape.star --params '{"cx":400,"cy":300,"radius1":200,"radius2":90}' --export star.vectorcraft` | Builds a new document from commands and saves it |
| `vectorcraft-cli run --in sheet.vectorcraft --commands steps.json --export out.pdf` | Runs the steps listed in a JSON file |
| `vectorcraft-cli convert poster.ai poster.pdf` | Opens a file and exports it in the format that the second file's extension names |
| `vectorcraft-cli perf --native-io` | Measures how long VectorCraft's own save and open commands take |
| `vectorcraft-cli --safe-mode convert poster.vectorcraft poster.pdf` | Runs the subcommand with no plug-in loaded |

Each `--params` applies to the `--cmd` just before it. `run` prints one line of JSON for each step and stops with an error at the first step that fails, naming that step by its number, counted from 0. `--export` can be given more than once, and the file extension sets the format. For PNG and other image exports, `--scale` sets the pixels per point and `--ppi` sets the pixels per inch. When both are given, `--ppi` is used. Without either, image exports use the document's raster effects resolution.

The star in the following image was drawn, filled and exported by one `vectorcraft-cli run` command.

<img src="/assets/uploads/vectorcraft/cli-star.webp" alt="An amber five-pointed star in a violet dusk sky above a coral sun and teal ground, drawn, filled and exported by one command-line run" width="360" style="display: block; margin-inline: auto;" />

A steps file for `--commands` holds a JSON array of steps, or one step per line. Each step is an object with `command`, the command's id, and optional `params`. A steps file can hold up to 64 MiB and 100,000 steps.

```json
[
  {"command": "select.all"},
  {"command": "paint.setFill", "params": {"color": "#2ec4b6"}}
]
```

:::tip
Put long parameters in a steps file and pass it with `--commands`. `--commands -` reads the steps from standard input.
:::

### Convert a file

`vectorcraft-cli convert IN OUT` opens `IN` and exports `OUT`. These options change how `.ai`, EPS and PDF files are read and written:

| Option | What it does |
|---|---|
| `--editing-data` | Reads a `.ai` or EPS file from its editing data instead of its PDF part or page, when VectorCraft can read the editing data. The two can draw differently, and the PDF part or page can be older. |
| `--legacy-name-encoding <encoding>` | Reads the names in a `.ai` or EPS file's editing data that are not UTF-8 in `windows-1252` (the default), `macintosh`, `windows-949`, `shift_jis`, `gbk` or `big5`. The names include layers, objects, artboards, colors, gradients, patterns, graphic styles, swatches, brushes, symbols, variables, data sets, and the text values of data sets. |
| `--preserve-editing` | Embeds the native VectorCraft document in a PDF `OUT`, and the result's warnings say so. Without it, `convert` leaves the native document out of a PDF. With `--artboard`, or a `--range` that does not cover every artboard, the native document is left out with its own warning. |

**Save As** to PDF in the app keeps the native document by default.

### Measure performance

`vectorcraft-cli perf` checks VectorCraft's performance budgets on a generated test document of 50,000 paths, or the number you give with `--paths`. It exits with an error when a budget is exceeded, unless the report says the machine is busy.

With `--native-io`, `perf` instead measures VectorCraft's own save and open commands, with one warmup run and five measured runs and no disk reads or writes. `--artboards` with a number from 1 to 4 repeats the artwork on that many overlapping artboards, and works only with `--native-io`. `--native-io` allows at most 50,000 paths and cannot be combined with `--deep`.

### Run without plug-ins

Put `--safe-mode` before any subcommand to run it with no plug-in loaded. Plug-in commands report that Safe Mode is on, and the plug-ins stay installed. `vectorcraft-cli --safe-mode mcp` runs a headless server and does not take `--connect`. To use a running app without plug-ins, start it with `vectorcraft --safe-mode --control <port>`. See [Use plug-ins from the command line](/apps/vectorcraft/install-and-manage-plug-ins/#use-plug-ins-from-the-command-line).

## Drive VectorCraft from an MCP client

`vectorcraft-cli mcp` runs a server for the [Model Context Protocol](https://modelcontextprotocol.io), a standard protocol that automation clients use to call VectorCraft's commands. The client starts the server and communicates with it over standard input and output.

| Mode | Start it with | What it drives |
|---|---|---|
| Connected | `vectorcraft-cli mcp --connect 127.0.0.1:7979`, with the app started as `vectorcraft --control 7979` | The open VectorCraft window. You see each change as it happens. |
| Headless | `vectorcraft-cli mcp --headless` | Its own session with no window. Tools that work only with the desktop app, such as opening a panel, are not available. |
| Automatic | `vectorcraft-cli mcp` | Tries `127.0.0.1:7979` once when it starts, and runs headless when no app answers |

To use the connected mode:

1. Quit VectorCraft if it is running.
2. Start it with the control port:
   - Windows (PowerShell): `& "$env:LOCALAPPDATA\Programs\ArtCraft\VectorCraft\vectorcraft.exe" --control 7979`
   - macOS: `open -a VectorCraft --args --control 7979`
   - Linux: `vectorcraft --control 7979`
3. Wait until the VectorCraft window is open.
4. Start your MCP client with `vectorcraft-cli mcp --connect 127.0.0.1:7979` as the server command.

:::note
The Start menu, Dock and desktop launchers start VectorCraft without a control port. A server started with no flag before the app was open stays headless until the client restarts it.
:::

Two options limit the files that commands can use:

- `--automation-read-root <folder>`: every file a command reads must be inside this folder.
- `--automation-write-root <folder>`: every file a command saves or exports must be inside this folder.

Each option can be given more than once. Read and write access are separate. Give the same folder to both options when the client needs to read and write it. With only `--automation-read-root`, commands cannot write any file to disk.

On `vectorcraft-cli mcp`, the root options run the server headless, and the server stops with an error if you also give `--connect`. To limit a connected session, start the app with the options instead:

```sh
vectorcraft --control 7979 --automation-read-root <folder> --automation-write-root <folder>
```

:::caution
A connected client can change, save and export your open documents. Without either root option, commands can read and write files anywhere your account can. Give read and write roots that cover only the project folder.
:::

### Read the command reference

The `engine.apiReference` command returns the command API reference as Markdown, in a `markdown` field. The reference has a section for each built-in command that has a parameter schema, with its label, menu, API level, whether it is deprecated, what it writes, its cost, a summary, what it returns and its parameters. Commands without a schema, including plug-in commands, are not in it. The MCP server also lists the reference as the resource `vectorcraft://commands/reference`.

When the server lists commands, it gives the parameter schema of each command that has one in two forms: as `schema`, a JSON Schema 2020-12 schema, and as `inputSchema`, the same schema with an object at its root, in the form an MCP tool's input schema takes. A brief listing leaves both out.

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Keyboard shortcuts](/apps/vectorcraft/keyboard-shortcuts/)
- [Run scripts](/apps/vectorcraft/run-scripts/)
- [Install and manage plug-ins](/apps/vectorcraft/install-and-manage-plug-ins/)
- [Use the built-in plug-ins](/apps/vectorcraft/built-in-plug-ins/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
- [AI agents](/apps/vectorcraft/ai-agents/)
