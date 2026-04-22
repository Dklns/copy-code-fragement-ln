import * as vscode from "vscode";
import { formatLocation, getSelectedLineRange } from "./format";

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function normalizeRelativePath(
  document: vscode.TextDocument,
): string | undefined {
  if (document.uri.scheme !== "file") {
    return undefined;
  }

  const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);

  if (!workspaceFolder) {
    return undefined;
  }

  return vscode.workspace
    .asRelativePath(document.uri, false)
    .replace(/\\/g, "/");
}

export async function copyCodeFragmentLocation(): Promise<void> {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    await vscode.window.showWarningMessage("当前没有可用的文本编辑器。");
    return;
  }

  const ranges = editor.selections
    .map((selection) => getSelectedLineRange(selection))
    .filter(isDefined);

  if (ranges.length === 0) {
    await vscode.window.showWarningMessage("请先选择代码片段。");
    return;
  }

  const relativePath = normalizeRelativePath(editor.document);

  if (!relativePath) {
    await vscode.window.showWarningMessage(
      "当前文件不在本地工作区内，无法生成相对路径。",
    );
    return;
  }

  const output = formatLocation(relativePath, ranges);
  await vscode.env.clipboard.writeText(output);
}
