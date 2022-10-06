"use strict";
// kutya osztály létrehozása 
/*
// let kutya = new Object(); <-> ugyanaz, mint az 5. sor
let kutya ={
    nev: "Elemér", // ezek lesznek a kutya tulajdonségai, kulcs és érték párok
    kor: 2, // azaz properties
    "szereti a madarakat": true //utolsó tulajdonság nevet "" közé kell tenni
    //utolsó tulajdonság után nincs vessző
};
console.log(kutya.nev); //GET
console.log(kutya.kor); //GET
kutya.isKorcs = true; //SERT
kutya["szereti a madarakat"] = true; //SET
delete kutya.nev; //Törlés
*/

/*
let user = {
    név: "John",
    kor: 30
};
*/
//let key = prompt("Mit szeretnél tudni a felhasználróról?", "név");
//console.log(user[key]);
/*
let gyumi = prompt("Milyen gyümölcsöt szeretnél venni?", "alma");
let zsák = {};
zsák[gyümi] = 5,
console.log(zsák.alma);
*/

function UserLetre(név,kor){
   return{
    név: név,
    //kor: kor
    kor
};
}
let user = UserLetre ("John", 30);
console.log(user.név);
console.log(user.kor);

let obj ={
    for: 1,
    let: 2,
    return: 3
}
console.log(obj.for + obj.let + obj.return); //6

let obj2 = {
    0: "test" //ugyanaz, mintha: "0" : "test"
}; //mindkét esetben a 0-vá konvertálódik a string "0"
console.log(obj["0"]);
console.log(obj[0]);