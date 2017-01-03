var evens = [0, 2, 4, 6, 8, 10]

function square(n) {
  console.log(n*n);
}

function doToEvens(callback) {
  evens.forEach(callback)
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

var animals = ["dog", "fish", "cat"]
doToElementsInArray(animals, changeCompletely)

console.log(animals);
