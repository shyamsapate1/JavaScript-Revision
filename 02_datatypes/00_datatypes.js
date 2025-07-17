// PRIMITIVE DATA TYPES

let text = "Shyam"                               // Data Type : String
let id = 12345                                   // Data Type : Number
let flag = false                                 // Data Type : Boolean
let temp = null                                  // Data Type : Null
let other = undefined                            // Data Type : Undefined

let total = 0n                                   // Data Type : BigInt
let icon = Symbol()                              // Data Type : Symbol

// NON - PRIMITIVE DATA TYPES

let data = {}                                    // Data Type : Object

console.log("text", typeof text)
console.log("id", typeof id)
console.log("flag", typeof flag)
console.log("temp", temp === null ? null : typeof temp)
console.log("other", typeof other)

console.log("total", typeof total)
console.log("icon", typeof icon)
console.log("data", typeof data)