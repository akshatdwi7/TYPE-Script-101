type User ={
    readonly _id : string,
    name: string,
    email: string,
    isActive: boolean
    creditCard?: number
}

let myUser : User ={
    _id : "hello",
    name:  "Akshat",
    email:"@joker.com",
    isActive: true
}
myUser.name =" cr7"
console.log(myUser)

    