const arr = [46,2,3,4];
arr.sort(compare)
console.log(arr)

function compare(a,b) {
  return a - b;
}

// arr.forEach(function(item,i,arr) {
//   console.log(`${i} : ${item} inside massive ${arr}`)
// })


// arr[99] = 0;
//
// console.log(arr.length);


// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//
// for (let value of arr) {
//   console.log(value)
// }

// const str = prompt("",'');
// const products = str.split(", ");
//
// products.sort()
//
// console.log(products.join(';'))