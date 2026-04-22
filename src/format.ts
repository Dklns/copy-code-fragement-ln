export interface PositionLike {
  line: number;
  character: number;
}

export interface SelectionLike {
  start: PositionLike;
  end: PositionLike;
  isEmpty: boolean;
}

export interface LineRange {
  startLine: number;
  endLine: number;
}

function getInclusiveEndLine(selection: SelectionLike): number {
  if (selection.end.character === 0 && selection.end.line > selection.start.line) {
    return selection.end.line;
  }

  return selection.end.line + 1;
}

export function getSelectedLineRange(selection: SelectionLike): LineRange | undefined {
  if (selection.isEmpty) {
    return undefined;
  }

  return {
    startLine: selection.start.line + 1,
    endLine: getInclusiveEndLine(selection)
  };
}

export function formatLocation(relativePath: string, ranges: LineRange[]): string {
  const formattedRanges = ranges.map((range) => {
    return `${range.startLine}-${range.endLine}`;
  }).join(' ');

  if (ranges.length === 1) {
    return `${relativePath}:${formattedRanges}`;
  }

  return `${relativePath}: ${formattedRanges}`;
}
