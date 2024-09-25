// all the primitive data types are stored in stack memory and we get the copy of the varible in this memory, whe we access it.
// All the Non primitive data types are stored in heap memory and we get the direct referencr of that varible in this memory ,and we can change
//change the value wherever we access it.
let email="rj@gmail.com"
let AnotherEmail=email
console.log(AnotherEmail);

 AnotherEmail="1254@gmail.com"
 console.log(AnotherEmail);
 console.log(email);



 let userOne={
    name:"rajat",
    email:"455@gmail.com" 
 }
 let userTwo=userOne
console.log(userTwo);

userTwo.name="rabi"
console.log(userOne.name);
