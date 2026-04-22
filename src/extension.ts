import * as vscode from 'vscode';
import { copyCodeFragmentLocation } from './command';

export const COPY_LOCATION_COMMAND = 'copyCodeFragmentLn.copyLocation';

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    COPY_LOCATION_COMMAND,
    async () => {
      await copyCodeFragmentLocation();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
