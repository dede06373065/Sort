function increase(str){
    str.sort(function(a,b){
        return a-b
    })
    return str
}
//increase
console.log(increase([1,5,7,2,3,9,5,4,3,12,54,22]))

function decrease(str){
    str.sort(function(a,b){
        return b-a
    })
    return str
}

console.log(decrease([1,5,7,2,3,9,5,4,3,12,54,22]))