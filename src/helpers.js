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
    .toLowerCase()
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .split('.')
    .join('')
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

export function bigram(str) {
  let bigMap = {};
  const words = str
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .trim()
    .split(' ')
    .filter((w) => w);
  for (let i = 0; i < words.length - 1; i++) {
    let twoWords = [words[i], words[i + 1]];
    if (!bigMap[twoWords]) {
      bigMap[twoWords] = 0;
    }
    bigMap[twoWords] += 1;
  }
  return bigMap;
}
export function bigramWord(str) {
  let bigMap = {};
  for (let i = 0; i < str.length - 1; i++) {
    let twoWords = [str[i], str[i + 1]];
    if (!bigMap[twoWords]) {
      bigMap[twoWords] = 0;
    }
    bigMap[twoWords] += 1;
  }
  return bigMap;
}

export function uniqueBigram(str) {
  let bigMap = {};
  const words = str
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .trim()
    .split(' ')
    .filter((w) => w);
  for (let i = 0; i < words.length - 1; i++) {
    let twoWords = [words[i], words[i + 1]];
    if (!bigMap[twoWords]) {
      bigMap[twoWords] = 0;
    }
    bigMap[twoWords] += 1;
  }
  for (const key in bigMap) {
    if (bigMap[key] > 1) {
      delete bigMap[key];
    }
  }
  return bigMap;
}

export function uniqueBigramWord(str) {
  let bigMap = {};
  for (let i = 0; i < str.length - 1; i++) {
    let twoWords = [str[i], str[i + 1]];
    if (!bigMap[twoWords]) {
      bigMap[twoWords] = 0;
    }
    bigMap[twoWords] += 1;
  }
  for (const key in bigMap) {
    if (bigMap[key] > 1) {
      delete bigMap[key];
    }
  }
  return bigMap;
}

const words = (stri) =>
  stri
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/\W/g, '')
    .trim()
    .split(' ')
    .filter((w) => w);

export function wordFreq(str) {
  let wordMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!wordMap[str[i]]) {
      wordMap[str[i]] = 0;
    }
    wordMap[str[i]] += 1;
  }
  return wordMap;
}

export function wordUnique(str) {
  let wordMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!wordMap[str[i]]) {
      wordMap[str[i]] = 0;
    }
    wordMap[str[i]] += 1;
  }
  for (const key in wordMap) {
    if (wordMap[key] > 1) {
      delete wordMap[key];
    }
  }
  return wordMap;
}

export function validPal(str) {
  str = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  let pointer1 = 0;
  let pointer2 = str.length - 1;
  while (pointer1 < pointer2) {
    pointer1++;
    pointer2--;
    if (str[pointer1] !== str[pointer2]) {
      return 'no';
    }
  }
  return 'yes';
}
