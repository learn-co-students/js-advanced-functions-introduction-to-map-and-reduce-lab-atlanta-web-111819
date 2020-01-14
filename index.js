// Your code here
function mapToNegativize(array){
    let newArray = []
    for(let i=0; i < array.length; i++){
        newArray.push(array[i]*-1)
    }
    return newArray
    
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    let newArray = []
    for(let i=0;i<array.length;i++){
        newArray.push(array[i]*2)
    }
    return newArray
}

function mapToSquare(array){
    let newArray = []
    for(let i=0;i<array.length;i++){
        let val = array[i]
        newArray.push(val*val)
    }
    return newArray
}

function reduceToTotal(array, num=0){
    let val = num
    for(let i=0;i<array.length;i++){
        val = val + array[i]
    }
    return val
}

function reduceToAllTrue(array){
    for(let i=0;i<array.length;i++){
        if(array[i] === false){
            return false;
        }
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i=0;i<array.length;i++){
        if(array[i] === true){
            return true;
        }
    }
    return false
}