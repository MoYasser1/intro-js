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
