let icon = Symbol()

let iconToString = String(icon)                  // ✅ Symbol to String : ALLOWED
// let iconToNumber = Number(icon)               // ❌ Symbol to Number : NOT-ALLOWED
let iconToBoolean = Boolean(icon)                // ✅ Symbol to Boolean : ALLOWED
// let iconToNull = Null(icon)                   // ❌ Symbol to Null : NOT-ALLOWED
// let iconToUndefined = Undefined(icon)         // ❌ Symbol to Undefined : NOT-ALLOWED
// let iconToBigInt = BigInt(icon)               // ❌ Symbol to BigInt : NOT-ALLOWED
// let iconToSymbol = Symbol(icon)               // ❌ Symbol to Symbol : NOT-ALLOWED
let iconToObject = Object(icon)                  // ✅ BigInt to Object : ALLOWED

console.log("iconToString Type :", typeof iconToString, "iconToString Value :", iconToString)
// console.log("iconToNumber Type :", typeof iconToNumber, "iconToNumber Value :", iconToNumber)
console.log("iconToBoolean Type :", typeof iconToBoolean, "iconToBoolean Value :", iconToBoolean)
// console.log("iconToNull Type :", typeof iconToNull, "iconToNull Value :", iconToNull)
// console.log("iconToUndefined Type :", typeof iconToUndefined, "iconToUndefined Value :", iconToUndefined)
// console.log("iconToBigInt Type :", typeof iconToBigInt, "iconToBigInt Value :", iconToBigInt)
// console.log("iconToSymbol Type :", typeof iconToSymbol, "iconToSymbol Value :", iconToSymbol)
console.log("iconToObject Type :", typeof iconToObject, "iconToObject Value :", iconToObject)