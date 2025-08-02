let temp = null

let tempToString = String(temp)                  // ✅ Null to String : ALLOWED
let tempToNumber = Number(temp)                  // ✅ Null to Number : ALLOWED
let tempToBoolean = Boolean(temp)                // ✅ Null to Boolean : ALLOWED
// let tempToNull = Null(temp)                   // ❌ Null to Null : NOT-ALLOWED
// let tempToUndefined = Undefined(temp)         // ❌ Null to Undefined : NOT-ALLOWED
// let tempToBigInt = BigInt(temp)               // ❌ Null to BigInt : NOT-ALLOWED
let tempToSymbol = Symbol(temp)                  // ✅ Null to Symbol : ALLOWED
let tempToObject = Object(temp)                  // ✅ Null to Object : ALLOWED

console.log("temp Type :", typeof temp, "temp Value :", temp)
console.log("tempToString Type :", typeof tempToString, "tempToString Value :", tempToString)
console.log("tempToNumber Type :", typeof tempToNumber, "tempToNumber Value :", tempToNumber)
console.log("tempToBoolean Type :", typeof tempToBoolean, "tempToBoolean Value :", tempToBoolean)
// console.log("tempToNull Type :", typeof tempToNull, "tempToNull Value :", tempToNull)
// console.log("tempToUndefined Type :", typeof tempToUndefined, "tempToUndefined Value :", tempToUndefined)
// console.log("tempToBigInt Type :", typeof tempToBigInt, "tempToBigInt Value :", tempToBigInt)
console.log("tempToSymbol Type :", typeof tempToSymbol, "tempToSymbol Value :", tempToSymbol)
console.log("tempToObject Type :", typeof tempToObject, "tempToObject Value :", tempToObject)