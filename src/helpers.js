export function makeParagraph(arr) {
  return arr.trim().split(/\r?\n|\r/);
}

export function removeEmptyElements(arr) {
  const index = arr.findIndex((el) => el.trim() === '');
  if (index === -1) return arr;
  arr.splice(index, 1);
  return removeEmptyElements(arr);
}

export function wordFunc(str) {
  return str
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .trim()
    .split(' ')
    .filter((w) => w);
}

export function charFunc(str) {
  return str.replace(/[^a-z0-9+]+/gi, '');
}

export function sentFunc(str) {
  return str
    .replace('...', '')
    .split(/[.!?]+\s/)
    .filter(Boolean);
}
