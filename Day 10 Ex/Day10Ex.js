
//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"//
let x ="John"
let y = "Doe"
console.log(x +' '+ '<>' +' ' + y)

//22) Create an object with properties such name, surname, email//
let object = {
    name: "Bimal Kumar",
    surname: "Sah",
    email: "bimalsah19962gmail.com",
}
//23) Delete Email from the previously created object//
delete object.email
console.log(object)

//24) Create an array with 10 strings in it//
let array= ["dog","cow","cat","tiger","lion","bear","dear","horse","zebra","monkey"]

//25) Print in the console every string in the previous array//
    console.log(array)
//26) Create an array with 100 random numbers in it//
let arr = [];
while(arr.length < 100){
    var r = Math.floor(Math.random() * 100) + 1
    arr.push(r)
}
console.log(arr)
//27) Wrote a function to get the MAX and the MIN from the previously created array//
let Max_Min= function(){
        console.log(Math.max(...arr))
        console.log(Math.min(...arr))

    }
Max_Min()
 
//28) Create an array of arrays, in which every array has 10 random numbers//
let x1 = Array(10).fill().map(
    () => Array(10).fill().map(
      () => Math.floor(Math.random() * 10)
    )
  )
  
  console.log(x1)
//29) Create a function that gets 2 arrays and returns the longest one//
let array1 = [1,2,3,4,5]
let array2 = ["cat","dog","elephant"]
let longestArr = function(){
    if(array1>array2){
        return array1
    }else{
        return array2
    }
}
console.log(longestArr())

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values//
let arr1 = [1,2,3,4,5,6]
let arr2 = [2,4,8,9,2]
let sum1= arr1.reduce(function(a,b){
    return a+b
}, 0)
let sum2= arr2.reduce(function(a,b){
    return a+b
}, 0)
if(sum1>sum2){
    return sum1
}else{
    return sum2
}