import * as assert from 'node:assert/strict';
import * as path from 'node:path';
import * as vscode from 'vscode';
import { COPY_LOCATION_COMMAND } from '../../extension';

suite('扩展命令', () => {
  test('复制工作区内文件的相对路径与行号', async () => {
    const extension = vscode.extensions.all.find((item) => {
      return item.packageJSON.name === 'copy-code-fragment-ln';
    });

    assert.ok(extension);
    await extension.activate();

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    assert.ok(workspaceFolder);

    const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, '.tmp-test', 'fixture.ts');
    const fileContent = Buffer.from('const a = 1;\nconst b = 2;\nconst c = 3;\n');

    await vscode.workspace.fs.createDirectory(vscode.Uri.joinPath(workspaceFolder.uri, '.tmp-test'));
    await vscode.workspace.fs.writeFile(fileUri, fileContent);

    const document = await vscode.workspace.openTextDocument(fileUri);
    const editor = await vscode.window.showTextDocument(document);
    editor.selections = [
      new vscode.Selection(
        new vscode.Position(0, 0),
        new vscode.Position(2, 0)
      )
    ];

    await vscode.commands.executeCommand(COPY_LOCATION_COMMAND);

    const clipboardText = await vscode.env.clipboard.readText();
    assert.equal(
      clipboardText.replace(/\\/g, '/'),
      '.tmp-test/fixture.ts:1-2'
    );
  });
});
