///question 1
var aa = 1
var bb = 2
console.log(aa, bb)

//question2

function multiply(num1, num2) {
    return num1 * num2;
}
var result = multiply(50, 69);
console.log(result);
/////question 3

var firstname= "aastha"
var Lastname = "dua"
var Name = firstname + Lastname
console.log(Name)
console.log(Name.length)


////question 4

var str = "Please locate where 'locate' occurs!";
var found = str.indexOf("where")
console.log(found)
var found1 = str.lastIndexOf("locate")
console.log(found1)

///queston 5

var str = "Please locate where 'locate' occurs!";

var found = str.indexOf("locate")

var found1= str.lastIndexOf("locate")

var sum = str.slice(found, found + 6)
console.log(sum)

///question 6

str = "Please visit Microsoft!";
var change = str.replace("Microsoft", "Google")
console.log(change)

///question 7


var str = "Hello World";
var lower1 =str.toLowerCase()
console.log(lower1)
var upper1 = str.toUpperCase()
console.log(upper1)

//question 8

// Adding a new value in array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var newfruit = fruits.push("kiwi") // 
console.log(fruits)

newfruit = fruits.unshift("lichi")//another method
console.log(fruits)
   
                     // Removing a Element
newfruit = fruits.pop() // from End
console.log(fruits)
newfruit = fruits.shift() // remove first  element
console.log(fruits)
var pos = fruits.indexOf('Banana');
newfruit = fruits.splice(pos, 1) // from specfic position
console.log(fruits)

//Check if any given variable is an array or not
if (fruits.isArray) {
    console.log("Fruits is an array")
}
//Change any specific element to another value
fruits[2] = 'Pineapple'
console.log(fruits)

//Add new element to a specific location (not front or last).
fruits.splice(1, 0, 'pear')
console.log(fruits)
    //Convert the given array to a string.
var string = ['aastha','dua']
console.log(string.toString())

//question 10

var number= 9.656;
var str = number.toString();
console.log(str)
var fix= number.toFixed(2);
console.log(fix)
var fix2= number.toFixed();
console.log(fix2) 


///question 12

console.log(Math.floor(Math.random() * 100))

///question 13

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
