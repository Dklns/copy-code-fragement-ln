import * as assert from 'node:assert/strict';
import { formatLocation, getSelectedLineRange } from '../../format';

suite('格式化逻辑', () => {
  test('单选区输出路径和行号范围', () => {
    const output = formatLocation('src/example.ts', [
      { startLine: 12, endLine: 18 }
    ]);

    assert.equal(output, 'src/example.ts:12-18');
  });

  test('多选区输出路径和全部范围', () => {
    const output = formatLocation('src/example.ts', [
      { startLine: 12, endLine: 18 },
      { startLine: 24, endLine: 27 }
    ]);

    assert.equal(output, 'src/example.ts: 12-18 24-27');
  });

  test('行尾在下一行开头时应视为上一行结束', () => {
    const range = getSelectedLineRange({
      start: { line: 0, character: 0 },
      end: { line: 2, character: 0 },
      isEmpty: false
    });

    assert.deepEqual(range, {
      startLine: 1,
      endLine: 2
    });
  });
});
