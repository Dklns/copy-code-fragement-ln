import * as fs from 'node:fs';
import * as path from 'node:path';
import { runTests } from '@vscode/test-electron';

function resolveVSCodeExecutablePath(): string | undefined {
  const candidates = [
    process.env.VSCODE_EXECUTABLE_PATH,
    process.env.VSCODE_PATH,
    process.env.LOCALAPPDATA
      ? path.join(process.env.LOCALAPPDATA, 'Programs', 'Microsoft VS Code', 'Code.exe')
      : undefined,
    'C:\\Program Files\\Microsoft VS Code\\Code.exe',
    'D:\\tool\\Microsoft VS Code\\Code.exe'
  ];

  return candidates.find((candidate) => {
    return typeof candidate === 'string' && fs.existsSync(candidate);
  });
}

async function main(): Promise<void> {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionTestsPath = path.resolve(__dirname, './suite/index');
    const vscodeExecutablePath = resolveVSCodeExecutablePath();

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      vscodeExecutablePath,
      launchArgs: [extensionDevelopmentPath, '--disable-extensions']
    });
  } catch (error) {
    console.error('测试运行失败', error);
    process.exit(1);
  }
}

void main();
