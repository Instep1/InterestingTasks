'use strict'

const draftCustomCheckAnagramm = (firstWord, secondWord) => {
    const builderWordsHashMap = (entryObj) => {
      const resultHashMap = {};
  
      for (char of entryObj) {
        if (!resultHashMap[char]) resultHashMap[char] = 1;
        else ++resultHashMap[char];
      }
  
      return resultHashMap;
    };
  
    const firstHashMap = builderWordsHashMap(firstWord);
    const secondHashMap = builderWordsHashMap(secondWord);
  
    if (Object.keys(firstHashMap).length !== Object.keys(secondHashMap).length) {
      return false;
    }
  
    for (countChar in firstHashMap) {
      if (firstHashMap[countChar] !== secondHashMap[countChar]) return false;
      else continue;
    }
  
    return true;
  };