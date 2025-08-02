let flag = true

let flagToString = String(flag)                  // ✅ Boolean to String : ALLOWED
let flagToNumber = Number(flag)                  // ✅ Boolean to Number : ALLOWED
let flagToBoolean = Boolean(flag)                // ✅ Boolean to Boolean : ALLOWED
// let flagToNull = Null(flag)                   // ❌ Boolean to Null : NOT-ALLOWED
// let flagToUndefined = Undefined(flag)         // ❌ Boolean to Undefined : NOT-ALLOWED
let flagToBigInt = BigInt(flag)                  // ✅ Boolean to BigInt : ALLOWED
let flagToSymbol = Symbol(flag)                  // ✅ Boolean to Symbol : ALLOWED
let flagToObject = Object(flag)                  // ✅ Boolean to Object : ALLOWED

console.log("flag Type :", typeof flag, "flag Value :", flag)
console.log("flagToString Type :", typeof flagToString, "flagToString Value :", flagToString)
console.log("flagToNumber Type :", typeof flagToNumber, "flagToNumber Value :", flagToNumber)
console.log("flagToBoolean Type :", typeof flagToBoolean, "flagToBoolean Value :", flagToBoolean)
// console.log("flagToNull Type :", typeof flagToNull, "flagToNull Value :", flagToNull)
// console.log("flagToUndefined Type :", typeof flagToUndefined, "flagToUndefined Value :", flagToUndefined)
console.log("flagToBigInt Type :", typeof flagToBigInt, "flagToBigInt Value :", flagToBigInt)
console.log("flagToSymbol Type :", typeof flagToSymbol, "flagToSymbol Value :", flagToSymbol)
console.log("flagToObject Type :", typeof flagToObject, "flagToObject Value :", flagToObject)