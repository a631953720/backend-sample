/**
 * 輸入一個字串，順反序都相同的話回應true
 * @date 2022-11-30
 * @param {string} str
 * @returns {boolean}
 */
function palindrome(str) {
  let start = 0;
  let end = str.length - 1;
  let p1 = str.at(start);
  let p2 = str.at(end);
  let result = true;

  while (end > start) {
    if (p1 !== p2) {
      result = false;
      break;
    } else {
      start++;
      end--;
      p1 = str.at(start);
      p2 = str.at(end);
    }
  }

  console.log(result);
}

// console.log(t.at(0));
palindrome("anc");
palindrome("anccna");
palindrome("asdfadsv");
palindrome("b");
