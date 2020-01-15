// Your code here
function mapToNegativize(array) {
  let newArray = []
  array.forEach(num => newArray.push(num * -1))
  return newArray
}

function mapToNoChange(array) {
  return array
}

function mapToDouble(array) {
    let newArray = []
   array.forEach(num => newArray.push(num * 2))
   return newArray
}

function mapToSquare(array) {
    let newArray = []
   array.forEach(num => newArray.push(num * num))
   return newArray
}

function reduceToTotal(sourceArray, startingpoint = 0) {
    console.log(sourceArray)
    let newNum = startingpoint
    sourceArray.forEach(function(num)  {
         newNum += num
    })
    return newNum
}

function reduceToAllTrue(sourceArray) {
    let val = true

  sourceArray.forEach(function(num) {
      console.log(num)
      if(!num) {
        val = false
      } 
  })
  return val
}

function reduceToAnyTrue(sourceArray) {

    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i])
        return true
    }
   return false
}

