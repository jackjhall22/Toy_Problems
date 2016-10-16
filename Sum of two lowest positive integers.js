/*
Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. 
No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

*/

///Solution///

function sumOfTwoLowest(numbers){
	return numbers
	.sort((a,b) => a - b)
	.reduce((acc,num, i) => i > 1 ? acc : acc + num, 0)
}