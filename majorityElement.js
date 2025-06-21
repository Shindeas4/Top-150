/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

function majorElement(nums) {
  let n = nums.length;
  const newMap = new Map();
  let majority = Math.floor(n / 2);
  for (let num of nums) {
    let count = (newMap.get(num) || 0) + 1;
    newMap.set(num, count);
    if (count > majority) {
      return num;
    }
  }
  return -1;
}

let op = majorElement([2, 2, 1, 1, 1, 2, 2]);

console.log(op);
