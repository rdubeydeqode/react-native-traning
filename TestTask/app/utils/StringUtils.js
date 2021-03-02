export function getLastWord(text) {
  let lastWord = text.split(' ').pop();
  return lastWord;
}

export function replaceLastWord(lastWord, selectedString) {
  let modifiedString =
    selectedString.substring(0, selectedString.lastIndexOf(' ')) +
    ' ' +
    lastWord +
    ' ';
  return modifiedString;
}
