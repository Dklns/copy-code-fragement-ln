# Copy Code Fragment LN

Copy the current file's relative path together with the selected line ranges in VS Code.

## Features

- Adds an editor context menu command: `复制代码片段定位`
- Adds a default shortcut: `Ctrl+Shift+C`
- Copies a single selection as `src/foo.ts:12-18`
- Copies multiple selections as `src/foo.ts: 12-18 20-21 30-35`

## Behavior

- The copied path is relative to the workspace root.
- The command is available only when the active text editor has a selection.
- Only local files inside the current workspace are supported.
- Line numbers are 1-based.

## Usage

1. Open a file inside a VS Code workspace.
2. Select one or more code fragments.
3. Right-click and choose `复制代码片段定位`, or press `Ctrl+Shift+C`.
4. Paste the generated location string anywhere you need.

## Development

```bash
npm install
npm test
npm run package
```

Press `F5` in VS Code to launch an Extension Development Host.

## Project Structure

- `src/extension.ts`: extension entry point and command registration
- `src/command.ts`: command execution and clipboard writing
- `src/format.ts`: selection and line-range formatting logic
- `src/test`: unit and integration tests

## Release Notes

See [CHANGELOG.md](./CHANGELOG.md).
