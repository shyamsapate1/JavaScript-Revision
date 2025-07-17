/* =================== CONST KEYWORD ===================

    1] Block Level Scope {}
    2] Creates Separate Memory out of Window Object
    3] Re-Initializable

*/

// const custName1                               // ❌ Declaration Only : NOT-ALLOWED
//       custName1 = "Shyam Abc"                 // ❌ Initialization after Declaration : NOT-ALLOWED
const custName2 = "Shyam Abc"                    // ✅ Declaration with Initialization : ALLOWED

// const custName1                               // ❌ Re-Declaration Only : NOT-ALLOWED
//       custName1 = "Ram Abc"                   // ❌ Re-Initialization after Declaration / Re-Declaration : NOT-ALLOWED
// const custName1 = "Shyam Abc"                 // ❌ Re-Declaration with Re-Initialization : NOT-ALLOWED

// console.log("custName1", custName1)
console.log("custName2", custName2)