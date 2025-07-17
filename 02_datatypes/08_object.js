let data = {}

let dataToString = String(data)                  // ✅ Object to String : ALLOWED
let dataToNumber = Number(data)                  // ✅ Object to Number : ALLOWED
let dataToBoolean = Boolean(data)                // ✅ Object to Boolean : ALLOWED
// let dataToNull = Null(data)                   // ❌ Object to Null : NOT-ALLOWED
// let dataToUndefined = Undefined(data)         // ❌ Object to Undefined : NOT-ALLOWED
// let dataToBigInt = BigInt(data)               // ❌ Object to BigInt : NOT-ALLOWED
let dataToSymbol = Symbol(data)                  // ✅ Object to Symbol : ALLOWED
let dataToObject = Object(data)                  // ✅ Object to Object : ALLOWED

console.log("dataToString Type :", typeof dataToString, "dataToString Value :", dataToString)
console.log("dataToNumber Type :", typeof dataToNumber, "dataToNumber Value :", dataToNumber)
console.log("dataToBoolean Type :", typeof dataToBoolean, "dataToBoolean Value :", dataToBoolean)
// console.log("dataToNull Type :", typeof dataToNull, "dataToNull Value :", dataToNull)
// console.log("dataToUndefined Type :", typeof dataToUndefined, "dataToUndefined Value :", dataToUndefined)
// console.log("dataToBigInt Type :", typeof dataToBigInt, "dataToBigInt Value :", dataToBigInt)
console.log("dataToSymbol Type :", typeof dataToSymbol, "dataToSymbol Value :", dataToSymbol)
console.log("dataToObject Type :", typeof dataToObject, "dataToObject Value :", dataToObject)