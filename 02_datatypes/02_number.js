let id = 12345

let idToString = String(id)                      // ✅ Number to String : ALLOWED
let idToNumber = Number(id)                      // ✅ Number to Number : ALLOWED
let idToBoolean = Boolean(id)                    // ✅ Number to Boolean : ALLOWED
// let idToNull = Null(flag)                     // ❌ Number to Null : NOT-ALLOWED
// let idToUndefined = Undefined(flag)           // ❌ Number to Undefined : NOT-ALLOWED
let idToBigInt = BigInt(id)                      // ✅ Number to BigInt : ALLOWED
let idToSymbol = Symbol(id)                      // ✅ Number to Symbol : ALLOWED
let idToObject = Object(id)                      // ✅ Number to Object : ALLOWED

console.log("id Type :", typeof id, "id Value :", id)
console.log("idToString Type :", typeof idToString, "idToString Value :", idToString)
console.log("idToNumber Type :", typeof idToNumber, "idToNumber Value :", idToNumber)
console.log("idToBoolean Type :", typeof idToBoolean, "idToBoolean Value :", idToBoolean)
// console.log("idToNull Type :", typeof idToNull, "idToNull Value :", idToNull)
// console.log("idToUndefined Type :", typeof idToUndefined, "idToUndefined Value :", idToUndefined)
console.log("idToBigInt Type :", typeof idToBigInt, "idToBigInt Value :", idToBigInt)
console.log("idToSymbol Type :", typeof idToSymbol, "idToSymbol Value :", idToSymbol)
console.log("idToObject Type :", typeof idToObject, "idToObject Value :", idToObject)