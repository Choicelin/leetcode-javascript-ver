/**
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 处理空list情况
    if (!l1.val) {
        l1.val = 0
    }
    if (!l2.val) {
        l2.val = 0
    }
    // list转数组
    var arr1 = []
    while(l1.next) {
        arr1.push(l1.val) 
        l1 = l1.next
    }
    arr1.push(l1.val)
    var arr2 = []
    while(l2.next) {
        arr2.push(l2.val) 
        l2 = l2.next
    }
    arr2.push(l2.val)
    // 对齐两个数组
    if (arr2.length > arr1.length) {
        var i = 0;
        while(i < arr2.length - arr1.length) {
            arr1.push(0)
        }   
    } else {
        var i = 0;
        while(i < arr1.length - arr2.length) {
            arr2.push(0)
        }   
    }
    // 数组加法，如果采取直接数字加，精度会不够
    var carry = 0
    var resultArr = arr1.map(function (item, index) {
        var temp = (item + arr2[index] + carry) % 10
        carry = Math.floor((item + arr2[index] + carry) / 10)
        return temp
    })
    if (carry > 0) {
        resultArr.push(carry)
    }
    
    return resultArr
    // 生成结果链表
    var list = []
    resultArr.forEach(function(item, index, arr) {
        let tempList = new ListNode(parseInt(item))
        list.push(tempList)
    })
    return list.reduce(function(a, current, index) {
        let temp = a
        while(temp.next) {
            temp = temp.next
        }
        temp.next = current
        return a
    })
};