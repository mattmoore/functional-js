/* We want to build a pattern
/*
const pattern = () => {

};
*/

/* pattern()()('al'); =>  'gooal'*/
/* pattern()()()('al'); =>  'goooal'*/

const pattern = (x = undefined) => {
  if (x) { return x }
  var result = 'g'
  f = (y = undefined) => {
    if (y) { return result + y }
    result += 'o'
    return f
  }
  return f
}

examples = [
  pattern('al'),
  pattern()('al'),
  pattern()()('al'),
  pattern()()()('al'),
  pattern()()()()()()()()()()('al')
]

examples.forEach((item, index, array) => {
  console.log(item)
})
