let total = 23n

let totalToString = String(total)                // ✅ BigInt to String : ALLOWED
let totalToNumber = Number(total)                // ✅ BigInt to Number : ALLOWED
let totalToBoolean = Boolean(total)              // ✅ BigInt to Boolean : ALLOWED
// let totalToNull = Null(total)                 // ❌ BigInt to Null : NOT-ALLOWED
// let totalToUndefined = Undefined(total)       // ❌ BigInt to Undefined : NOT-ALLOWED
let totalToBigInt = BigInt(total)                // ✅ BigInt to BigInt : ALLOWED
let totalToSymbol = Symbol(total)                // ✅ BigInt to Symbol : ALLOWED
let totalToObject = Object(total)                // ✅ BigInt to Object : ALLOWED

console.log("totalToString Type :", typeof totalToString, "totalToString Value :", totalToString)
console.log("totalToNumber Type :", typeof totalToNumber, "totalToNumber Value :", totalToNumber)
console.log("totalToBoolean Type :", typeof totalToBoolean, "totalToBoolean Value :", totalToBoolean)
// console.log("totalToNull Type :", typeof totalToNull, "totalToNull Value :", totalToNull)
// console.log("totalToUndefined Type :", typeof totalToUndefined, "totalToUndefined Value :", totalToUndefined)
console.log("totalToBigInt Type :", typeof totalToBigInt, "totalToBigInt Value :", totalToBigInt)
console.log("totalToSymbol Type :", typeof totalToSymbol, "totalToSymbol Value :", totalToSymbol)
console.log("totalToObject Type :", typeof totalToObject, "totalToObject Value :", totalToObject)