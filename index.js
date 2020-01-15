// Your code here
function mapToNegativize(sourceArray){
    let array = []
    for(let i = 0; i < sourceArray.length; i++ ){
        array.push(sourceArray[i] * -1)
        console.log(sourceArray[i])
    }
    return array
}

function mapToNoChange(sourceArray){
    let array = []
    for(let i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i])
    }
    return array
}

function mapToDouble(sourceArray){
    let array = []
    for(let i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i] * 2)
    }
    return array
}
function mapToSquare(sourceArray){
    let array = []
    for(let i = 0; i < sourceArray.length; i++){
        array.push(sourceArray[i] ** 2)
    }
    return array
}


function reduceToTotal(sourceArray, start = 0){
    let total = start 
    for(let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    let returnValue = true
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] == false){
            returnValue = false
        }
    }
    return returnValue
}

function reduceToAnyTrue(sourceArray){
    let returnValue = false
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i]){
            returnValue = true
        }
    }
    return returnValue
}