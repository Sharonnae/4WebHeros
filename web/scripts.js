// variable
let x = 8
let y = 9

let c = x % y
c = x % y

// string options
let str = 'sharon nae'
str[0]
str.slice(3, 10)

// check out str. options
// array
let arr = ['red', 'blue', 'yellow']
arr[2]

//size of the array
arr.length

arr.push("green") //add from the end of the array
arr.pop //remove from the end of the array 
arr.shift // remove from start
arr.unshift("brown") // add to start

// concat - merge arrays
// indexof - same as string.indexof
// join -create string from array 
// reverse
// sort

arr.indexOf('ep') // if not found -1


// Functions
function sing(first, second) {
    //another option,less recommended:
    // console.log(`thisi is my first` + first)
    console.log(`this is my first ${first}`);
    return false;
}

sing('effi', 'sharon');

