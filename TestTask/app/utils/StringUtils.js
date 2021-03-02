export function getLastWord(sentence) {
  let lastWord = sentence.split(' ').pop();
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
