/**
 * pointer 找平均演算法， 複雜度 O(n)
 * @date 2022-11-30
 * @param {number[]} arr
 * @param {number} avg
 * @returns {number[][]}
 */
function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;
  let p1 = arr[start];
  let p2 = arr[end];
  const result = [];

  do {
    const _avg = (p1 + p2) / 2;
    if (_avg > avg) {
      end -= 1;
      p2 = arr[end];
    }
    if (_avg === avg) {
      result.push([p1, p2]);
      end -= 1;
      start += 1;
      p1 = arr[start];
      p2 = arr[end];
    }
    if (_avg < avg) {
      start += 1;
      p1 = arr[start];
    }
  } while (start < end);

  console.log(result);
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 55);
