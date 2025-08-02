/* =================== GLOBAL KEYWORD ===================

    1] Function Level Scope {}
    2] Creates Separate Memory in Window Object
    3] Re-Initializable

*/

global.custName1                                 // ✅ Declaration Only : ALLOWED
global.custName1 = "Shyam Abc"                   // ✅ Initialization after Declaration : ALLOWED
global.custName2 = "Sagar Def"                   // ✅ Declaration with Initialization : ALLOWED

global.custName1                                 // ✅ Re-Declaration Only : ALLOWED
global.custName1 = "Ram Abc"                     // ✅ Re-Initialization after Declaration / Re-Declaration : ALLOWED
global.custName1 = "Shyam Abc"                   // ✅ Re-Declaration with Re-Initialization : ALLOWED

console.log("custName1", global.custName1)
console.log("custName2", global.custName2)