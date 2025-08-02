// IIFE
(function IIFE() {
    console.log("IIFE")
})();

// IIFE - USING ARROW FUNCTION
(() => {
    console.log('IIFE Using Arrow Function')
})();

// IIFE - USING ARROW FUNCTION - PARAMETER
((fName, lName) => {
    console.log(`IIFE Using Arrow Function - Using Parameters ${fName}`, lName)
})("Shyam", 'Sapate')