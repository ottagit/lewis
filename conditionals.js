//comparison oparetar(>=). 
var age = 11;
if (age>= 18){
   console.log('adult');
}
else{
  console.log('underage');
}
//logical oparator (||).
var item = "biscuit", price = 10;
if (item == "biscuit"&& price == 5){
  console.log ("Affordable");
}
else{
  console.log("Expensive");
}

//logical oparator (||)
if (item == "biscuit" || price == 5){
  console.log("at least affordable");
}
else {
  console.log("not affordable at all");
}
//question 1
var size = 8;
if (size > 20) {
  console.log('big');
}
else{
  console.log('false');
}//question 2

var name = 'lewis';
 if(name.startsWith ('l')) {
   console.log("starts with l");
 }
 else{
   console.log("i dont know how to spell my name");
 }
//question 3
var citizenship1 = 'Kenyan', citizenship2 = 'Mexican';
 if (citizenship1 == citizenship2){
   console.log('Non-dual citizen');
 }
 else {
   console.log('Dual citizen');
 }
 //question 4
 var a,b;
 a = 1,b = 1;
 var diff = a-b;
 if (diff > 0 ){
   console.log("a is greater than b");
 }
 else if (diff < 0 ){
   console.log("a is less than b")
 }
else {
  console.log("a and b are equal in magnitude");
  //question 5
}
var town1 = 'Kisumu';
var town2 = 'Nairobi';
if (town =  'Nairobi || Kisumu' ){
  console.log('is a major city in kenya');
}
else {
  console.log('not a major city in kenya');
}
var age = 10,price = 40;
if (age< 18 && price < 30) {
  console.log('Do something');
}
else {
  console.log('Do nothing');
}
var town1 = 'Kericho';
var town2 = 'Nairobi';
if (town1 === "Kisumu" || town1 === "Nairobi") {
console.log("at least one town is a major city in Kenya");
}
 else {
   console.log('not one town is a major city in Kenya');
 }
 //not operator example
let score = 68;
let pass_mark = 70;
if (!(score >= pass_mark)) {
  console.log("Congrats!");
}
else {
  console.log("Try again");
}
let num1 = 4;
let num2 = 6;
let add = num1 + num2;
console.log(add);//10
function add (num1,num2) {
  console.log(num1 + num2);
}
add (4,6); //10
var sub = (num1,num2)
//function division ()