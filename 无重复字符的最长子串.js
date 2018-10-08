/**
 给定一个字符串，找出不含有重复字符的最长子串的长度。

 示例 1:

 输入: "abcabcbb"
 输出: 3
 解释: 无重复字符的最长子串是 "abc"，其长度为 3。
 示例 2:

 输入: "bbbbb"
 输出: 1
 解释: 无重复字符的最长子串是 "b"，其长度为 1。
 示例 3:

 输入: "pwwkew"
 输出: 3
 解释: 无重复字符的最长子串是 "wke"，其长度为 3。
 请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。
 */

/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
  return findMaxLength(getAllUnique(s))
};

function getAllUnique(s) {
  var all = []
  var temp = []
  var strArr = s.split('')
  for (var i = 0; i < strArr.length; i++) {
    for (var j = i; j < strArr.length - 1; j++) {
      if (strArr[j] != strArr[j + 1]) {
        if (0 == j) {
          temp.push(strArr[j])
        } else {
          temp.push(strArr[j])
          var flag = false
          for (var k = 0; k < temp.length; k++) {
            if (strArr[j + 1] == temp[k]) {
              flag = true
              break
            }
          }
          if (flag) {
            all.push(temp)
            temp = []
            break
          } else {
            if (strArr.length - 1 == j) {
              temp.push(strArr[j + 1])
              all.push(temp)
              temp = []
            }
          }
        }
      } else {
        temp.push(strArr[j])
        all.push(temp)
        temp = []
      }
    }
    if (temp.length > 0) {
      var length = strArr.length
      if (strArr[length - 2] != strArr[length - 1]) {
        temp.push(strArr[length - 1])
        all.push(temp)
        temp = []
      }
    }
  }
  return all
}

function findMaxLength (arr) {
  var max = 0
  arr.forEach((item, index) => {
      var length = item.length
      if (length > max) {
      max = length
    }
  })
  return max
}

