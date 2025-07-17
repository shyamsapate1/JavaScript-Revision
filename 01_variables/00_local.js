/* =================== THIS KEYWORD ===================

    1] Function Level Scope {}
    2] Creates Separate Memory in Window Object
    3] Re-Initializable

*/

this.custName1                                   // ✅ Declaration Only : ALLOWED
this.custName1 = "Shyam Abc"                     // ✅ Initialization after Declaration : ALLOWED
this.custName2 = "Sagar Def"                     // ✅ Declaration with Initialization : ALLOWED

this.custName1                                   // ✅ Re-Declaration Only : ALLOWED
this.custName1 = "Ram Abc"                       // ✅ Re-Initialization after Declaration / Re-Declaration : ALLOWED
this.custName1 = "Shyam Abc"                     // ✅ Re-Declaration with Re-Initialization : ALLOWED

console.log("custName1", this.custName1)
console.log("custName2", this.custName2)