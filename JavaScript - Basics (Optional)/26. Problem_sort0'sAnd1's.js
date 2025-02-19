/**
 * SORT BINARY ARRAY (0s BEFORE 1s)
 * ==================================
 * Problem: Given a binary array (containing only 0s and 1s), rearrange the elements so that:
 * - All `0`s appear before all `1`s.
 * - The solution must be **in-place** (no extra array).
 * - The array should be accessed **only once** (single pass).
 * 
 * Approach (Two-Pointer Technique):
 * ----------------------------------
 * 1. Initialize two pointers:
 *    - `left = 0` → Start of the array
 *    - `right = n - 1` → End of the array
 * 2. Traverse the array:
 *    - If `arr[left] == 0`, move `left` forward.
 *    - If `arr[right] == 1`, move `right` backward.
 *    - If `arr[left] == 1` and `arr[right] == 0`, **swap them**.
 * 3. Stop when `left >= right`.
 */

// Function to sort binary array
function sortBinaryArray(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        // Move left pointer if already 0
        if (arr[left] === 0) {
            left++;
        }
        // Move right pointer if already 1
        else if (arr[right] === 1) {
            right--;
        }
        // Swap when left is 1 and right is 0
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}

// Example Usage
let arr = [1, 0, 1, 0, 1, 0, 1, 0];
sortBinaryArray(arr);
console.log(arr); // Output: [0, 0, 0, 0, 1, 1, 1, 1]

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: arr = [1, 0, 1, 0, 1, 0, 1, 0]
 * Output: [0, 0, 0, 0, 1, 1, 1, 1]
 * 
 * Case 2: arr = [0, 1, 1, 0, 0, 1]
 * Output: [0, 0, 0, 1, 1, 1]
 * 
 * Case 3: arr = [1, 1, 1, 1]
 * Output: [1, 1, 1, 1]
 * 
 * Case 4: arr = [0, 0, 0, 0]
 * Output: [0, 0, 0, 0]
 */
