// Regular add
f = (x, y) => {
  return x + y
}

// Simple curried form. This allows us to chain single parameters as separate function calls.
g = (x) => {
  return (y) => { return f(x, y) }
}

// Recursive curried form. We can recursively call the method to add additional values. We still maintain single arity.
h = (x) => {
  return (y = undefined) => { return y ? h(f(x, y)) : x }
}

examples = {
  add:             f(2, 3),
  simple_curry:    g(2)(3),
  recursive_curry: h(2)(3)(1)(1)()
}

Object.keys(examples).forEach(function(item, index, array) {
  console.log( item + ': ' + examples[item] )
})
