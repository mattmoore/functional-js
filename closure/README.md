# Closures

What is a closure? It is the ability for a function to maintain external scope. Why is this important? Let's examine a scenario.

Suppose we need a way to construct a string with a starting character, then we need a way to add a different character a number of varying times, then terminate the string with a group of characters. One way we could write this is:

```javascript
const start = 'g';
const middle = 'o';
const end = 'al';

var result = start;
for (i = 1; i <= 1; ++i) {
  result += middle;
}
result += end;
```

This will work. It gives us the result we're looking for. But there's a lot of state tracking going on, and the scope of the result variable is something that can be altered at any point by another function in this scope. There's another way we can handle this.

```javascript
const start = 'g';
const middle = 'o';
const end = 'al';

const pattern = (x = undefined) => {
  if (x) { return x; }
  var result = start;
  f = (end = undefined) => {
    result = result + middle;
    if (end) { return result + end; }
    return f;
  }
  return f;
};

pattern()('al')
//=> goal
pattern()()('al')
//=> gooal
```

There is more code in the pattern function than the original example, however, this new example is safer, and more flexible. Each time I increment the letter
