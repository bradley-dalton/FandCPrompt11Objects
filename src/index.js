//Capitalize Keys

var str = "hello"
str[0].toUpperCase() + str.slice(1)
const hello = () => "hello"

function capitalizeKeys(obj) {
  var newObject = {}
  Object.entries(obj).forEach(function (arr) {
  var key = arr[0]
  var val = arr[1]
  var cap = key[0].toUpperCase() + key.slice(1)

  newObject[cap] = val
})

  return newObject
}

capitalizeKeys({ anotherTest: 5, someWord: 300})




//StringToObject

var stringToObject = "a:1, b:2, c:3"

function stringToObject(str) {
  var newObject = {}
  str.split(",").forEach(function(keyValPair) {
  var keyVal = keyValPair.split(":")
  var key = keyVal[0]
  var val = keyVal[1]

  newObject[key] = val
})

return newObject
}

stringToObject(stringToObjText)




//Shopping List

var list = "2 carrots, 1 egg, 3 peppers"

function shoppingList(list) {
  var NewObject = {}
  list.split(".").forEach(function (keyValPair) {
   var valKey = keyValPair.split("")
   var val = valKey[0]
   var key = valKey[1]

  newObject[key] = val
})

  return newObject
}

shoppingList(list)



//Map Object

function mapObject(obj, fn) {
  var newObject = {
  Object.entries(obj).forEach(function (arr) {
  var key = arr[0]
  var val = arr[1]

  newObject[key] = fn(val)
})
  return newObject
}

function add2(n) {
  return n + 2
}

mapObject({a:1,b:2}, add2)