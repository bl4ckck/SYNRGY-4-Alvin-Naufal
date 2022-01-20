/**
 * Alvin Naufal
 */
function starNestedLoop(n, m) {
    /**
     * m --> row
     * n --> column
     */
    // Output string
    let res = ""

    // Type checking
    if (typeof n !== "number" && typeof m !== "number") 
        return

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res += "*"
        }
        res += "\n"
    }
    console.log(res)
}

//TEST CASE
starNestedLoop(1,2)
// *
// *

starNestedLoop(2,3)
// **
// **
// **

starNestedLoop(4,1)
// ****