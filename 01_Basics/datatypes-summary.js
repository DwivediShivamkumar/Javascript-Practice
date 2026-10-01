  //primitive datatypes --> String,Number,Boolean,null,undefined,Symbol,BigInt
  
  const score = 100
  const scoreValue = 100.5

  const isLoggedIn = true
  const outsideTemp = null

  let userEmail;

  const id = Symbol('123')
  const anotherId = Symbol('123')

 console.log(id === anotherId)

 const bigNumber = 3456789012345678901234567890n

 // Reference datatypes (Non-Primitive) --> Arrays,Objects,Functions

 const heroes = ["Iron Man","Spider Man","Thor","Hulk"]

  const myObj = {
    name: "Shivam",
    age: 20,
    isLoggedIn: true,
  }


 const myFunction = function(){
  console.log("Hello Shivam")
 }
 //return myFunction();
 console.log(typeof myFunction);
