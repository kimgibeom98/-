// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = ["a", "b", "c", 10, 100, 50, null];

function findIndexTarget(fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }
  return -1;
}
function findStringIndexOf(indexnumb) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === indexnumb) {
      return i;
    }
  }
  return -1;
}
findIndexTarget(1000000)
findStringIndexOf((number) => number > 9999999)

// check03(3) // true false
// findIndexTarget((number) => number >= 50)
// findIndexTarget((number) => number >= 50)


// const b = [1, 5, 6, 7]
// (number) => number >= 50

// [].indexOf(100)

// ===

// 
const arr = [1, 2, 3];
// O(N)  
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// N*N
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(j)
  }
}