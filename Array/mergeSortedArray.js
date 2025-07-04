/*

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

function mergeArray(nums1, nums2, m, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  console.log(nums1);
}

const op = mergeArray([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3);




/*
function mergeArray(nums1: number[], nums2: number[], m: number, n: number): void {
  let i: number = m - 1;            // Pointer for the last element in nums1 (valid part)
  let j: number = n - 1;            // Pointer for the last element in nums2
  let k: number = m + n - 1;        // Pointer for the last position in nums1

  // Merge nums2 into nums1 from the end
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}
*/