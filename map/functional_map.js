Array.prototype.myMap = function(f) { return this.reduce((xs, x) => { return xs.concat(f(x)) }, []) }
console.log([1, 2, 3].myMap((x) => { return x * 2 }))
