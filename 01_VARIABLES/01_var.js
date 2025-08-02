/* =================== VAR KEYWORD ===================

    1] Function Level Scope {}
    2] Creates Separate Memory in Window Object
    3] Re-Initializable

*/

var custName1                                    // ✅ Declaration Only : ALLOWED
    custName1 = "Shyam Abc"                      // ✅ Initialization after Declaration : ALLOWED
var custName2 = "Sagar Def"                      // ✅ Declaration with Initialization : ALLOWED

var custName1                                    // ✅ Re-Declaration Only : ALLOWED
    custName1 = "Ram Abc"                        // ✅ Re-Initialization after Declaration / Re-Declaration : ALLOWED
var custName1 = "Shyam Abc"                      // ✅ Re-Declaration with Re-Initialization : ALLOWED

console.log("custName1", custName1)
console.log("custName2", custName2)