"use strict";
let Userlogin = (name, email, paid = false) => {
    console.log(name, email, paid);
};
Userlogin("Akshat", " i@gmail.com");
let superheros = ['superman', 'batman', 'flash'];
superheros.map((hero) => {
    return (`heros are ${hero}`);
});
// console.log(superheros); // this will throw an error because superheros is not defined
superheros.map((hero) => {
    console.log(`heros are ${hero}`);
});
// let fail=(msg:string):never=>{ // this will never return anything 
//     throw new Error(msg);
// } 
