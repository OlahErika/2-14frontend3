"use strict";

/*
function mondHello(){
    //alert("Hello");
    console.log("Hello");
}
*/


/*
//mondHello();
let func = mondHello; //funkció másolása
func(); //másolt példány meghívása
mondHello(); //az eredetit hívom meg
*/

/*
//1. felírás
function szum(a,b){
    return a+b;
}
console.log(szum(2,3));

//2. felírás
let sum = function (a,b){
    return a+b;
};

console.log(sum(2,3));

//3. felírás
let osszeg = (a,b) => a+b;
alert(osszeg(1,2));

//megegyezik

let osszeg2 = function (a,b){
    return a+b;
}
alert(osszeg(1,2));

//

let double = n => n*2;
//let double = function (n) (return n*2)
console.log(double(3)); //6
*/

let mondHello = () => alert("Hello");
mondHello();

let age = prompt("Hány éves vagy? ")

let Hello = (age < 18) ?
() => alert("Helloka") :
() => alert("Üdvözlöm");

Hello();

let osszeg = (a,b) => {
    let eredmeny = a + b;
    console.log("szevasztok");
    return eredmeny;
}
console.log(osszeg(1,2));

