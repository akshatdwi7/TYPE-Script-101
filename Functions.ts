let Userlogin=(name:string ,email:string,paid:boolean=false)=>{ // :number outside the bracket is the return type of the function
    console.log(name,email,paid);
}
Userlogin("Akshat", " i@gmail.com");

let superheros = ['superman','batman','flash'];
 
superheros.map((hero):string=>{ // this will force us to return a string
   return (`heros are ${hero}`);
})
// console.log(superheros); // this will throw an error because superheros is not defined

superheros.map((hero):void=>{  // this will not force us to return anything , we can only return undefined
     console.log(`heros are ${hero}`);
     
 })

// let fail=(msg:string):never=>{ // this will never return anything 
//     throw new Error(msg);
// } 