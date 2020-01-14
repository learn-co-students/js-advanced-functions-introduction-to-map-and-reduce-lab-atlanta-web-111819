function mapTransform(transform) {
    return function(array) {
        let newArray = []
        array.forEach(element => {
            newArray.push(transform(element))
        })
        return newArray
    }
}

const mapToNegativize = mapTransform(element => 0 - element)

const mapToNoChange = mapTransform(element => element)

const mapToDouble = mapTransform(element => element * 2)

const mapToSquare = mapTransform(element => element ** 2)

function reduceTransform(transform, starter = 0) {
    return function(array, startingPoint = starter) {
        let finalResult = startingPoint
        array.forEach(element => {
            finalResult = transform(finalResult, element)
        })
        return finalResult
    }
}

const reduceToTotal = reduceTransform((total, element) => total + element)

const reduceToAllTrue = reduceTransform((memo, element) => memo && !!element, true)

const reduceToAnyTrue = reduceTransform((memo, element) => memo || !!element, false)