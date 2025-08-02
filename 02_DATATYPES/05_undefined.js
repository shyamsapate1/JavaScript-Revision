let other = undefined

let otherToString = String(other)                // ✅ Undefined to String : ALLOWED
let otherToNumber = Number(other)                // ✅ Undefined to Number : ALLOWED
let otherToBoolean = Boolean(other)              // ✅ Undefined to Boolean : ALLOWED
// let otherToNull = Null(other)                 // ❌ Undefined to Null : NOT-ALLOWED
// let otherToUndefined = Undefined(other)       // ❌ Undefined to Undefined : NOT-ALLOWED
// let otherToBigInt = BigInt(other)             // ❌ Undefined to BigInt : NOT-ALLOWED
let otherToSymbol = Symbol(other)                // ✅ Undefined to Symbol : ALLOWED
let otherToObject = Object(other)                // ✅ Undefined to Object : ALLOWED

console.log("other Type :", typeof other, "other Value :", other)
console.log("otherToString Type :", typeof otherToString, "otherToString Value :", otherToString)
console.log("otherToNumber Type :", typeof otherToNumber, "otherToNumber Value :", otherToNumber)
console.log("otherToBoolean Type :", typeof otherToBoolean, "otherToBoolean Value :", otherToBoolean)
// console.log("otherToNull Type :", typeof otherToNull, "otherToNull Value :", otherToNull)
// console.log("otherToUndefined Type :", typeof otherToUndefined, "otherToUndefined Value :", otherToUndefined)
// console.log("otherToBigInt Type :", typeof otherToBigInt, "otherToBigInt Value :", otherToBigInt)
console.log("otherToSymbol Type :", typeof otherToSymbol, "otherToSymbol Value :", otherToSymbol)
console.log("otherToObject Type :", typeof otherToObject, "otherToObject Value :", otherToObject)