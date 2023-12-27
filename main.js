// js history

/*
*Tim Berners le >> world wep 
*Mosic wep >> img >>1993
*Netscape Broweser >>> bernerd eich >>> 1994 >>> dynamic
*livescript >>1-self>>functionl programming 2-schem>>oop 3-java>>syntax
*jscript >>microsoft ---- w3c >> tim Berners lee
*/
 
// intro to js

/*
*intraction in js
*integration with backend
*validtion
*/

// window.alert('mahmoud')
// document.getElementById("dd").innerHTML='mmmmmmmmmmmmmmmmmmmmmmmmmmm'

// var x;
// 1- & OR 5 OR A
// 2- var var ;
// 3- var na me;
// var x = document.getElementById("dd").innerHTML='mmmmmmmmmmmmmmmmmmmmmmmmmmm';

// *Data types:-
// 
/**
 * *Primtive
 * 1-num 
 * 2-boolen
 * 3-string
 * 4-undefind
 * 5-null 
 * >>>ec 5
 * 6-bignt
 * 7-symbol
 *  */ 

// var x; >>declertion
// console.log(typeof(x))
// x='dssd'>>assign
  /**
   * *non Primtive
   * 1-object 
   */

  /**
   * *concotioion operators
   * *prompt
   * *conditional statments (switch)
   */

  ///*Write a program that determines whether a given number is positive or not.

// *1-Write a program that allow to user enter number then printit
// !Example
// !Input: 5
// !Output: 5
// var x=  Number( window.prompt("enter your num"))
// console.log(x)
//*2- Write a program that take number from user then print yes if that number can divide by 3
//* and 4 otherwise print no
// !Example1
// !Input: 12 Output Yes
// !Example 2
// !Input: 9 Output No
// var x=parseInt(window.prompt("enter your num"))
// if(x%2==0){
//   document.write('This number mode 2 == 0')
// }else{
//   document.write('no')
// }
// *3- Write a program that allows the user to insert 2 integers then print the max
// !Example1
// !Input: 3 5
// !Output: 5
// !Example 2
// !Input: 10 7
// !Output: 10
// var x=parseInt(window.prompt("enter your num1"))
// var y=parseInt(window.prompt("enter your num2"))
// if (x>y){
//   document.write(x)
// }else{
//   document.write(y)
// }
// *4- Write a program that allows the user to insert an integer then print negative if it is
// *negative number otherwise print positive.
// !Example 1
// !Input: -5
// !output negative
// !Example2
// !Input: 10
// !Output positive
// var x=parseInt(window.prompt("enter your num"))
// if(x>=1){ 
//   document.write('positive')
// }
// else{
//   document.write('negative')
// }
// *5- Write a program that take 3 integers from user then print the max element
// *and the min element.
// !Example 1
// !Input:7,8,5
// !Output:
// !max element = 8
// !min element = 5
// !Example2
// !Input: 3 6 9
// !Outputs:
// !Max element = 9
// !Min element = 3
// var num1=parseInt(window.prompt("please enter number one : "))
// var num2=parseInt(window.prompt("please enter number two : "))
// var num3=parseInt(window.prompt("please enter number three : "))
// var maxNumber;
// var minNumber;
// if((num1>num2)&&(num1>num3)){
//     maxNumber=num1;
//     document.write("maxNumber you entered is :  " + maxNumber+"</br>");
// }else if((num2>num1)&&(num2>num3)){
//     maxNumber=num2;
//     document.write("maxNumber you entered is :  " + maxNumber+"</br>");
// }else{
//     maxNumber=num3;
//     document.write("maxNumber you entered is :  " + maxNumber+"</br>");
// }
// if((num1<num2)&&(num1<num3)){
//    minNumber=num1;
//     document.write("maxNumber you entered is :  " +minNumber+"</br>");
// }else if((num2<num1)&&(num2<num3)){
//    minNumber=num2;
//     document.write("maxNumber you entered is :  " +minNumber+"</br>");
// }else{
//    minNumber=num3;
//     document.write("maxNumber you entered is :  " +minNumber+"</br>");
// }
// *6- Write a program that allows the user to insert integer number then
// *check If a number is oven or odd
//  !Example 1
// !Input: 8
// !Output: even
// !Example 2
// !Input: 7
// !Output: odd
// var x=parseInt(window.prompt("enter your num"))
// if(x%2===0){
//   document.write("even");
// }else{
//   document.write("odd");
// }
// *8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// *then print vowel otherwise print consonant
// !Example1
// !Input: O
// !Output: vowel
// !Example 2
// !Input: b
// !Output:
// !Consonant
// var char=window.prompt("please enter any charcter");
// if(char==("a"||"e"||"i"||"o"||"u")){
//   document.write("this charcter is vowel ");
// }else if(char==("A"||"E"||"I"||"O"||"U")){
//   document.write("this charcter is vowel ");
// }
// else{
//   document.write("this charcter is consonant ");
// }
// *9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// !that’s number
// !Example Input 5
// !Output 1, 2, 3, 4, 5
// var num = parseInt(window.prompt("Enter a number:"));
// for (var i = 1; i <= num; i++) {
//   document.write(i);
// }
// *10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// !Example
// !Input: 5
// !Outputs:
// !5 10 15 20 25 30 35 40 45 50 55 60
// var num = parseInt(window.prompt("Enter a number:"));

// for (var i = 1; i <= 12; i++) {
//   var result = num * i;
//   console.log(result);
// }
// *11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// *between 1 to this number
// !Example:
// !Input: 15
// !Output: 2 4 6 8 10 12 14
// var num = parseInt(window.prompt("Enter a number:"));

// for (var i = 2; i <= num; i += 2) {
//   console.log(i);
// }
// *12- Writeaprogramthattaketwointegersthenprintthepower
// !Example:
// !Input: 4 3
// !Output: 64
// !Hint how to calculate 4^3 = 4 * 4 * 4 =64
// var base = parseInt(window.prompt("Enter a number:"));
// var exponent = parseInt(window.prompt("Enter a number:"));
// var result =1;
// switch (exponent) {
//   case 0:
//     result = 1;
//     break;
//   case 1:
//     result = base;
//     break;
//   default:
//     for (let i = 0; i < exponent; i++) {
//       result *= base;
//     }
// }

// console.log(result);
// *12- Write a program to enter marks of five subjects and calculate total, average and
// *percentage.
// !Example
// !Input: - Enter Marks of five subjects:
// !95
// !76
// !58
// !90
// !89
// !Output:-.Total marks = 435
// !Average Marks =87
// !Percentage =87
// var marks = [];
// var totalMarks = 0;

// for (var i = 0; i < 5; i++) {
//   marks[i] = parseInt(window.prompt("Enter marks for subject " + (i + 1) + ":"));
//   totalMarks += marks[i];
// }

// var averageMarks = totalMarks / 5;
// var percentage = (totalMarks / 500) * 100;

// console.log("Total marks = " + totalMarks);
// console.log("Average Marks = " + averageMarks);
// console.log("Percentage = " + percentage);

// *13-Write a program to input month number and print number of days in that
// *month.
// !Example:
// !Input: - Month Number: 1
// !Output:-. Days in Month: 31
// var monthNumber = prompt("Enter the month number:");
// var daysInMonth;

// switch (parseInt(monthNumber)) {
//   case 1: 
//   case 3: 
//   case 5: 
//   case 7: 
//   case 8: 
//   case 10: 
//   case 12: 
//     daysInMonth = 31;
//     break;
//   case 4: 
//   case 6: 
//   case 9: 
//   case 11: 
//     daysInMonth = 30;
//     break;
//   case 2: 
//     let year = new Date().getFullYear();
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       daysInMonth = 29;
//     } else {
//       daysInMonth = 28;
//     }
//     break;
//   default:
//     daysInMonth = "Invalid month number";
//     break;
// }
// console.log("Days in Month:", daysInMonth);
// *14- Write a program to input marks of five subjects
// *Physics, Chemistry, Biology, Mathematics and Computer
// *, Find percentage and grade
// !Percentage >= 90%: Grad A
// !Percentage >= 80%: Grad B
// !Percentage >= 70%: Grad C
// !Percentage >= 60%: Grad D
// !Percentage >= 40%: Grad E
// !Percentage < 40%: Grad F
// function calculatePercentage(marks) {
//   var totalMarks = 500; // Total marks for all subjects
//   var obtainedMarks = marks.reduce((sum, mark) => sum + mark, 0);
//   return (obtainedMarks / totalMarks) * 100;
// }
// function assignGrade(percentage) {
//   if (percentage >= 90) {
//     return 'Grade A';
//   } else if (percentage >= 80) {
//     return 'Grade B';
//   } else if (percentage >= 70) {
//     return 'Grade C';
//   } else if (percentage >= 60) {
//     return 'Grade D';
//   } else if (percentage >= 40) {
//     return 'Grade E';
//   } else {
//     return 'Grade F';
//   }
// }
// var physicsMarks = parseInt(prompt('Enter marks for Physics:'));
// var chemistryMarks = parseInt(prompt('Enter marks for Chemistry:'));
// var biologyMarks = parseInt(prompt('Enter marks for Biology:'));
// var mathematicsMarks = parseInt(prompt('Enter marks for Mathematics:'));
// var computerMarks = parseInt(prompt('Enter marks for Computer:'));
// var marks = [physicsMarks, chemistryMarks, biologyMarks, mathematicsMarks, computerMarks];
// var percentage = calculatePercentage(marks);
// var grade = assignGrade(percentage);
// console.log('Percentage:', percentage.toFixed(2) + '%');
// console.log('Grade:', grade);
// ******************************** Using switch case*******************************
// *15- Write a program to print total number of days in month
// var month = parseInt(window.prompt("Enter a number:"));
// switch (month) {
//   case 1: 
//   case 3: 
//   case 5: 
//   case 7: 
//   case 8: 
//   case 10: 
//   case 12: 
//     console.log("31 days");
//     break;

//   case 4: 
//   case 6: 
//   case 9: 
//   case 11: 
//     console.log("30 days");
//     break;
//   case 2: 
//     console.log("28 or 29 days");
//     break;
//   default:
//     console.log("Invalid month");
//     break;
// }
// *16- Write a program to check whether an alphabet is vowel or consonant
//  var alphabet = window.prompt("Enter a alphabet:");

// switch (alphabet.toLowerCase()) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }
// *17- Write a program to find maximum between two numbers
// var x = window.prompt("Enter a num:");
// var y = window.prompt("Enter a num:");
// switch (true) {
//   case x > y:
//     console.log("Maximum: " + x);
//     break;
//   case y > x:
//     console.log("Maximum: " + y);
//     break;
//   default:
//     console.log("Numbers are equal");
// }
// *18- Write a program to check whether a number is even or odd
// var number = window.prompt("Enter a num:");
// switch (number % 2) {
//   case 0:
//     console.log("Even");
//     break;
//   case 1:
//     console.log("Odd");
//     break;
// }
// *19- Write a program to check whether a number is positive or negative or zero
// var num = window.prompt("Enter a num:");
// switch (true) {
//   case num > 0:
//     console.log("Positive");
//     break;
//   case num < 0:
//     console.log("Negative");
//     break;
//   default:
//     console.log("Zero");
// }
// *20- Write a program to create Simple Calculator
// let operand1 = window.prompt("Enter a num:");
// let operand2 = window.prompt("Enter a num:");
// let operator = window.prompt("Enter a operator");

// switch (operator) {
//   case "+":
//     console.log(operand1 + operand2);
//     break;
//   case "-":
//     console.log(operand1 - operand2);
//     break;
//   case "*":
//     console.log(operand1 * operand2);
//     break;
//   case "/":
//     console.log(operand1 / operand2);
//     break;
//   default:
//     console.log("Invalid operator");
// }