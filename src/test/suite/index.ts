import * as path from 'node:path';
import Mocha = require('mocha');

export function run(): Promise<void> {
  const mocha = new Mocha({
    ui: 'tdd',
    color: true
  });

  const testsRoot = __dirname;
  mocha.addFile(path.resolve(testsRoot, './format.test.js'));
  mocha.addFile(path.resolve(testsRoot, './extension.test.js'));

  return new Promise((resolve, reject) => {
    mocha.run((failures: number) => {
      if (failures > 0) {
        reject(new Error(`存在 ${failures} 个失败用例。`));
        return;
      }

      resolve();
    });
  });
}
