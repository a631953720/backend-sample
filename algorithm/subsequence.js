/**
 * 比對該字串是否為另一字串的子字串，且順序必須相同
 *
 * @example
 *  isSubsequence('book', 'brooklyn') // true
 *  isSubsequence('abc', 'bac') // false
 * @date 2022-11-30
 * @param {string} subStr
 * @param {string} str
 * @returns {boolean}
 */
function isSubsequence(subStr, str) {
  let subStrStart = 0;
  let strStart = 0;

  let subStrLeft = subStr.at(subStrStart);
  let strLeft = str.at(strStart);

  let result = false;

  let i = 0;

  while (strStart < str.length) {
    i++;
    // 子字串與目標字串不相等，目標字串指針向後
    if (strLeft !== subStrLeft) {
      strStart++;
      strLeft = str.at(strStart);
    }
    // 成功比對，兩個指針都向後
    else if (strLeft === subStrLeft) {
      strStart++;
      subStrStart++;
      subStrLeft = subStr.at(subStrStart);
      strLeft = str.at(strStart);
    }
    // 子字串指針成功到最後一個字串，判斷為真 (錯誤判斷)
    // 子字串指針成功到超過字串長度會變成undefined，代表判斷完畢
    // 子字串指針超過子字串長度，代表判斷完畢
    if (subStrStart >= subStr.length) {
      result = true;
      break;
    }
    // 目標字串剩餘比對數量少於子字串
    if (str.length - strStart - (subStr.length - subStrStart) < 0) {
      result = false;
      break;
    }
  }

  console.log(subStr, str, result, `迴圈數量: ${i}`);
  return result;
}

isSubsequence("book", "brooklyn"); // true
isSubsequence("abc", "bac"); // false
isSubsequence("abc", "bacc"); // false
isSubsequence("adwqfd", "adsaawqffasdddddddddddddddddddddddd"); // true
isSubsequence("", "fff"); // true
