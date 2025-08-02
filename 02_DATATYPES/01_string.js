let text = "123"

let textToString = String(text)                  // ✅ String to String : ALLOWED
let textToNumber = Number(text)                  // ✅ String to Number : ALLOWED
let textToBoolean = Boolean(text)                // ✅ String to Boolean : ALLOWED
// let textToNull = Null(text)                   // ❌ String to Null : NOT-ALLOWED
// let textToUndefined = Undefined(text)         // ❌ String to Undefined : NOT-ALLOWED
let textToBigInt = BigInt(text)                  // ✅ String to BigInt : ALLOWED
let textToSymbol = Symbol(text)                  // ✅ String to Symbol : ALLOWED
let textToObject = Object(text)                  // ✅ String to Object : ALLOWED

console.log("text Type :", typeof text, "text Value :", text)
console.log("textToString Type :", typeof textToString, "textToString Value :", textToString)
console.log("textToNumber Type :", typeof textToNumber, "textToNumber Value :", textToNumber)
console.log("textToBoolean Type :", typeof textToBoolean, "textToBoolean Value :", textToBoolean)
// console.log("textToNull Type :", typeof textToNull, "textToNull Value :", textToNull)
// console.log("textToUndefined Type :", typeof textToUndefined, "textToUndefined Value :", textToUndefined)
console.log("textToBigInt Type :", typeof textToBigInt, "textToBigInt Value :", textToBigInt)
console.log("textToSymbol Type :", typeof textToSymbol, "textToSymbol Value :", textToSymbol)
console.log("textToObject Type :", typeof textToObject, "textToObject Value :", textToObject)