Array.prototype.myMap = function(f) {
  xs = []
  this.forEach(function(x, index, array) {
    xs[index] = f(x)
  })
  return xs
}

console.log([1, 2, 3].myMap((x) => { return x * 2 }))
