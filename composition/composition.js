const compose = (...fns) => {
  return fns.reduce((f, g) => x => { return f(g(x)) })
}

// Doubles a number
const doubler = x => x * 2

// Gets even numbers from a list
const evens = xs => { return xs.filter(x => x % 2 == 0) }

// Gets numbers greater than 3 from a list
const greaterThan3 = xs => { return xs.filter(x => x > 3) }

// Composes evens and greaterThan3
const evensGreaterThan3 = xs => { return compose(evens, greaterThan3)(xs) }

// Sample array
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Do some tests
console.assert(compose(doubler, doubler, doubler)(2) == 16)
console.assert(evens(list).toString()                == [2, 4, 6, 8, 10].toString())
console.assert(greaterThan3(list).toString()         == [4, 5, 6, 7, 8, 9, 10].toString())
console.assert(evensGreaterThan3(list).toString() == [4, 6, 8, 10].toString())
