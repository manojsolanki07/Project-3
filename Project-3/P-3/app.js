"use strict";
// var fall:string[ ] = ["Apple", "Banana", "Mango"];
// console.log(fall);
// let fruits: string[] = ["Apple", "Banana", "Mango"];
// document.write(fruits.join(" , "));
// 1 Write a simple JavaScript program to print expected Output using following array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange
document.write("<h3><i> Q1. Write a simple JavaScript program to print expected Output using following array. <br/> </i></h3>");
var fruits = ["Red", "Green", "White", "White", "Black"];
document.write(fruits.join(" , "), "<br/>");
// var fruits_1:string[] = [];
document.write(fruits.join(" + "), "<br/>");
// document.write(fruits.slice[0]);
document.write(fruits[0], "<br/>");
document.write(fruits.slice(0, 3).join(", "), "<br/>");
document.write(fruits.slice(1, 3).join(", "), "<br/>");
fruits.push("Orange", "<br/>");
document.write(fruits.join("    "));
// Q2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.
document.write("<h3><i> Q2.Write a JavaScript program to get sum of all array element using for loop and foreach loop. <br/></i></h3>");
var af_2 = [10, 20, 30, 40, 50];
document.write(+af_2, "<br/>");
var sum = 0;
for (let i = 0; i < af_2.length; i++) {
    sum = sum + af_2[i];
}
document.write("Sum of all given arry = " + sum);
// Q3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
document.write("<h3><i> Q3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic). <br/></i></h3>");
function max(numbers) {
    var max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function min(numbers) {
    var min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
var ans_3 = [10, 50, 20, 80, 30];
document.write("the given no are = ", ans_3, "<br/>");
document.write("Maximum = " + max(ans_3), "<br/>");
document.write("Minimum = " + min(ans_3));
// 4.Write a JavaScript program for convert all array element in ASCII value. 
document.write("<h3><i> 4.Write a JavaScript program for convert all array element in ASCII value. <br/></i></h3>");
var Q_4 = ["A", "B", "C", "D", "E"];
document.write(Q_4, "<br/>");
var ascii = [];
for (let i = 0; i < Q_4.length; i++) {
    ascii.push(Q_4[i].charCodeAt(0));
}
document.write(ascii);
// Q5.Write a JavaScript program for remove negative values using the filter array function.
document.write("<h3><i> Q5.Write a JavaScript program for remove negative values using the filter array function. <br/></i></h3>");
var q_5 = [10, -5, 20, -8, 30, -2, 40];
document.write("the given no are = ", q_5, "<br/>");
var q_5 = q_5.filter((number) => number >= 0);
document.write(q_5);
