/**
 * Alvin Naufal
 */
function starLoop(n) {
  const msg_invalid = "number invalid"
  let i = 0

  if (typeof n !== "number" || n < 0) 
    return console.log(msg_invalid)
  else if (n === 0)
    return console.log(" ")

  while (i < n) {
    i++
    console.log("*")
  }
  console.log("\n")
}

// TEST CASE
starLoop(1)
// *

starLoop(2)
// *
// *

starLoop(6)
//*
//*
//*
//*
//*
//*

starLoop(0)
//

starLoop(-5)
// number invalid