//spread 
var arr=[10,20,30]
var arr1=[...arr,40,50,60]
console.log(arr)
console.log(arr1)
//2
var name="gow"
console.log(`my name is ${name}`) //not single quotes, back ticks to be used
//3
function demo(){
    console.log("Hello");
}

const callback=(callbackfun)=>{
    console.log("world");
    callbackfun();
}
callback(demo)

//Map-accept a func and return new array
let arr2=[1,2,3,4,5]
let maparray=arr2.map((i)=>{return i*2})
console.log(arr2)
console.log(maparray)

//filter-returns a new array based on given condition
let arr3=[1,2,3,4,5,6]
let filarray=arr3.filter((i)=>{return i%2==0})
console.log(arr3)
console.log(filarray)

//Reduce- accept two parameters(accumulate value,current value) and return single value 
const reduarray=arr1.reduce((sum,current)=>{return sum+current},0);
console.log(reduarray)