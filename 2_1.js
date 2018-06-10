//ques 1
function int(num) {
    return parseInt(num,2) //binary to decimal
}
console.log(int('110011'))
console.log(int('1101'))

// ques 2

//decimal to binary ,hexadecimal,octal
var hexa = (1000).toString(16)
var octa = (1000).toString(8)
var binary = (1000).toString(2)
console.log(hexa)
console.log(octa)
console.log(binary)

////ques 3

console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*100))

// ques 4

var num1 = 2.66778 
var num2 = 6.778245 //no change
var change= num1.toFixed(4)
var nochange= num2.toFixed(4)
console.log(change)
console.log(nochange)

//  ques 5

var arr = [11,22,33,44,55]
var maxarray= Math.max.apply(null, maxarray) //to find max value in array
console.log(maxarray)

// ques 6

var arr = [55,44,33,22,11]
var minarray = Math.min.apply(null,minarray)
console.log(minarray)
// ques 7

var first= 123
var second = 321
var gcd
while (first!=second)
{
	if (first>second)
	{
		first= first - second
	}
	else
	{
		second= second - first
	}
}
gcd = first
console.log(gcd)

// ques 8

function power_of_2(n) {
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
       return n && (n & (n - 1)) === 0;
   }
   
   console.log(power_of_2(16));
   console.log(power_of_2(18));
   console.log(power_of_2(256));

   // ques9

   var a = 5.567875
var n = a.toFixed(4)
console.log(n)

// ques 10

email = function (user) {
    var avg, split, parta, partb
    split = user.split("@")
    parta = split[0]
    avg = parta.length/1 
    //parta = parta.substring(0, (parta.length - avg))
    partb = split[1]
    return  "...@" + partb // we can add part a to provide some unhidden part
}
console.log(email('aasthadua06@gmail.com'))

// ques 11

capital = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
   console.log(capital('welcome'))
   

   // ques 14

   var a,b,c
for(a=1; a <=6; a++)
{
   for (b=1; b < a; b++)
     {
    c=c+("*")       
      }
 console.log(c)
 c='' 
}
   

