/**
 * Alvin Naufal
 */
function tambah(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") 
    return
  return num1 + num2
}

// TEST CASE
console.log(tambah(0,0)) // 0
console.log(tambah(1,1)) // 2
console.log(tambah(1,2)) // 3
console.log(tambah(100,0)) // 100
console.log(tambah(0,54301)) // 54301