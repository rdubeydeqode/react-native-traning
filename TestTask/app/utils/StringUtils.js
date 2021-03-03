import {CommonLocalizeStrings} from '../localization/CommonLocalizationStrings';

export function getLastWord(sentence) {
  let lastWord = sentence.split(' ').pop();

  return lastWord;
}

export function replaceLastWord(lastWord, selectedString) {
  let modifiedString =
    selectedString.substring(
      0,
      selectedString.lastIndexOf(CommonLocalizeStrings.space),
    ) +
    CommonLocalizeStrings.space +
    lastWord +
    CommonLocalizeStrings.space;

  return modifiedString;
}
