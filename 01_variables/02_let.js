/* =================== LET KEYWORD ===================

    1] Block Level Scope {}
    2] Creates Separate Memory out of Window Object
    3] Re-Initializable

*/

let custName1                                    // ✅ Declaration Only : ALLOWED
    custName1 = "Shyam Abc"                      // ✅ Initialization after Declaration : ALLOWED
let custName2 = "Sagar Def"                      // ✅ Declaration with Initialization : ALLOWED

// let custName1                                 // ❌ Re-Declaration Only : NOT-ALLOWED
    custName1 = "Ram Abc"                        // ✅ Re-Initialization after Declaration : ALLOWED
// let custName1 = "Shyam Abc"                   // ❌ Re-Declaration with Re-Initialization : NOT-ALLOWED

console.log("custName1", custName1)
console.log("custName2", custName2)