/**
 * Using recursion instead of a loop to sum the items from an array
 */
function sumByRecursion(items){
  if(!items.length) return 0

  return items.pop() + sumByRecursion(items)
}


// testing
const result = sumByRecursion([1, 9, 3, 2])

console.log(result) //15