function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(elt, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
