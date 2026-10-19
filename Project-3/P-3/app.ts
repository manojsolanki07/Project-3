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

document.write("<h3><i> Q1. Write a simple JavaScript program to print expected Output using following array. <br/> </i></h3>")

var fruits: string[]= ["Red", "Green", "White" ,"White","Black"];
document.write(fruits.join(" , "), "<br/>");
// var fruits_1:string[] = [];
document.write(fruits.join(" + " ) , "<br/>");       
// document.write(fruits.slice[0]);
document.write(fruits[0],  "<br/>")
document.write(fruits.slice(0, 3).join(", ") , "<br/>");
document.write(fruits.slice(1, 3).join(", "),"<br/>");
fruits.push("Orange" , "<br/>" );
document.write(fruits.join("    ") );


// Q2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.
document.write("<h3><i> Q2.Write a JavaScript program to get sum of all array element using for loop and foreach loop. <br/></i></h3>")
var af_2: number[] = [10 , 20 , 30 , 40 , 50];
document.write(+af_2 , "<br/>");
var sum: number = 0;

for (let i: number = 0; i < af_2.length; i++) {
    sum = sum + af_2[i];
}

document.write("Sum of all given arry = " + sum);


// Q3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

document.write("<h3><i> Q3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic). <br/></i></h3>")

function max(numbers: number[]): number {
    var max: number = numbers[0];

    for (let i: number = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

function min(numbers: number[]): number {
    var min: number = numbers[0];

    for (let i: number = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

var ans_3: number[] = [10, 50, 20, 80, 30];
document.write("the given no are = " ,ans_3,"<br/>")
document.write("Maximum = " + max(ans_3),  "<br/>");
document.write("Minimum = " + min(ans_3));



// 4.Write a JavaScript program for convert all array element in ASCII value. 
document.write("<h3><i> 4.Write a JavaScript program for convert all array element in ASCII value. <br/></i></h3>")

var Q_4: string[] = ["A", "B", "C", "D", "E"];
document.write(Q_4 , "<br/>");
var ascii: number[] = [];

for (let i: number = 0; i < Q_4.length; i++) {
    ascii.push(Q_4[i].charCodeAt(0));
}

document.write(ascii);


// Q5.Write a JavaScript program for remove negative values using the filter array function.
document.write("<h3><i> Q5.Write a JavaScript program for remove negative values using the filter array function. <br/></i></h3>")

 var q_5: number[] = [10, -5, 20, -8, 30, -2, 40];
    document.write("the given no are = ",q_5, "<br/>")
 var q_5: number[] = q_5.filter((number: number) => number >= 0);

document.write(q_5);


// Q6. Write a JavaScript program using array map() method and return the square of array element.
//  arr = [2, 5, 6, 3, 8, 9];

document.write("<h3><i>Q6. Write a JavaScript program using array map() method and return the square of array element. <br/></i></h3>")
var square:number[] = [1,2,3,4,5];

document.write(""+square.map(a => a*a).toString()) 

// 7.Write a JavaScript program for sort array in ascending descending.
document.write("<h3><i> 7.Write a JavaScript program for sort array in ascending descending.. <br/></i></h3>")
var num7:number[] = [10,20,30,50,40,80];
document.write("given no is = ")
document.write(""+num7,"<br>".toString())
var ascending = num7.sort((a:number, b:number) => a - b);
document.write("the ascending order is = "+ascending,"<br/>");

var descending = num7.sort((a:number, b:number)=>b-a);
document.write("the decendimg order of = " +descending);



// Q8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.write("<h3><i> Q8. Write a JavaScript program which filters out any string which is less than 8 characters.  <br/></i></h3>")
var word = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.write("words are = "+word,"<br/>".toString());
var result = word.filter((word) => word.length < 8);
document.write(""+result);


// 9. write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
//  output:-  "a new java book" , "A NEW JAVA BOOK"

document.write("<h3><i> Q9. write a JavaScript program to  to print expected output for following string. <br/></i></h3>");
var x1 = "airplane";
document.write("x1 = ",x1,"<br/>".toString());
document.write("output = ",x1[2],"<br/>".toString())

var x2 = "oxoxoxox";
document.write("x2 = "+x2,"<br/>".toString());
document.write("output = ",x2.replaceAll('x', 'X'),"<br/>");

var x3 ="A New Java Book" ;
document.write("x3 = "+x3,"<br/>");
document.write("output = ",x3.toLowerCase(),"<br/>")
document.write("output = ",x3.toUpperCase())


// Q10. write a JavaScript program for array reverse.

document.write("<h3><i>  Q10. write a JavaScript program for array reverse. <br/></i></h3>");
var num10:number[] = [10,20,30,50];
document.write("the given no is = ",num10.toString(),"<br/>");
document.write("the reverse given no is = ",num10.reverse().toString());



// Q11. write a JavaScript program for check value is found or not?
document.write("<h3><i>   Q11. write a JavaScript program for check value is found or not?. <br/></i></h3>");
var num11:number[] = [10,20,30,50];

let output:boolean= num11.includes(10);
if(output==true){
document.write("the given no is in array");
    
}else{
document.write("the given no is not in array");

}
// Q12. write a JavaScript program for print your name and write the no of total character.

document.write("<h3><i>  Q12. write a JavaScript program for print your name and write the no of total character. <br/></i></h3>");
let name4:string = "manoj";
document.write("name = ",name4 , "<br/>")
let output4:number = name4.length;
document.write("number = ",output4.toString());


// 13.  write a JavaScript program given this output using replace concept.
document.write("<h3><i>  Q13.  write a JavaScript program given this output using replace concept. <br/></i></h3>");
let  sen:string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

let out:string = sen.replaceAll("dog", 'cat');

document.write(out);



 
// 14.  write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"] 

document.write("<h3><i>  Q14.  write a JavaScript program convert string to array. <br/></i></h3>");
let num14:string ="Hire the top 1% freelance developers";
document.write("",num14, "<br/>");

let num_14:string[] = num14.split(" ").slice(0  ,4);
document.write("output = ",num_14.toString());


// 15. write a JavaScript program convert for array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel
document.write("<h3><i>  Q15. write a JavaScript program convert for array to string.<br/></i></h3>");
let num15:string[] =['5', '32', 'Daniel'];
document.write("given that = ['5', '32', 'Daniel'];".toString(),"<br/>");
document.write("output = ",num15.join(','))






