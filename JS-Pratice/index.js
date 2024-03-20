 //JAVASCRIPT BASIS

 "" + 1 + 0
 "" - 1 + 0
 true + false
 6 / "3"
 "2" * "3"
 4 + 5 + "px"
 "$" + 4 + 5
 "4" - 2
 "4px" - 2
 "  -9  " + 5
 "  -9  " - 5
 null + 1
 undefined + 1
 " \t \n" - 25 > 4

 "apple" > "pineapple"
 "2" > "12"
 undefined == null
 undefined === null
 null == "\n0\n"



let login = "123";
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}


 let log = "Employee";

 let mesg =  (log == 'Employee') ? log = 'Hello' : 
                (log == 'Director') ? log = 'Greetings':
                (log == '') ?  log = 'No login':
                mesg = '';

 console.log(mesg);
    
   console.log( null || 2 || undefined );

 console.log( 1 && null && 2 );

 console.log( null || 2 && 3 || 4 );




 let day = 7;

 switch(day) {
   case 1:
     day = "Monday";
   break;
   case 2:
     day = "Tuesday";
   break;
   case 3:
     day = "Wednesday";
   break;
   case 4:
     day = "Thusday";
   break;
   case 5:
     day = "Friday";
   break;
   case 6:
     day = "Saturday";
   break;
   default:
     day = "Sunday";
   break;
 }


// Ternary Operator ?

//  syntax

// condition ? if true : if false

 let age = 1;

 (age >= 20) ? "Adult" : "Teenager";



//   LOOPS
// for loop

 for (let i = 1; i <= 5 ; i++) 
   console.log(i);
  
   for (let j = 1; j <= 3; j++) {
     console.log("inner loop" + j);
   }


 let coding = ["JS", "C++", "TS"];

 for (i = 0; i < coding.length; i++) 
   console.log(coding[i]);

//   continue 
 for( i = 0; i < 10; i++) {
   if(i % 2 == 0) {
     break;
   }
   console.log(i);
 }


// /FUNCTION

//  Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'


//  Write a function greet having one parameter and returning 'Hello <parameter>!'.

//  Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.


// function return 

 function fn1(x)  {
    function fn2(y) {
      return x * y;
    }
   return fn2;
 }

 let result = fn1(3);
 console.log(result);
console.log((result(2)))

function fn1(x) {
    function fn2(y) {
        return x * y;
    }
    return fn2;
}

let output = fn1(2);
console.log(output);

output(2);



// callback function 

 function display(result) {
   console.log(result);
 }

 function add(n1,n2,myCallback) {
   let sum = n1 + n2;
   myCallback(sum);
 }

 add(2,3,display);

 function myFunction (result) {
   console.log(result);
 }

 function Add (n1,n2,myCallback) {
    let sum = n1 + n2;    
    myCallback(sum);
 }
 Add(2,3,myFunction);

//   anonmous function
// without function name

 (function() {
   console.log("Shehzad");
 }
 )
 ();


// Objects

const Person = {
    firstName:"Shehxad",
    lastName :"Hussain",
    rollno: 12,
    age: 23,
    address: {
      street: "Back Market",
      city:"Danyore",
    },
    
    getfullName: function () {
      return this.firstName + " " + this.lastName;  
    },
  }
  
    function myFunc() {
        console.log("Hello " + this.firstName);
    }
  
  
   Person.sub = 'cs';
   delete Person.rollno;
   console.log(Person.address.city);
   console.log("city" in Person.address);
  
  
  Person.greeting = myFunc;
  console.log(Person);
  console.log(Person.getfullName());
  
//   access object  property or values
//   using for in loop
    for (let prop in Person) {
      console.log(prop + " : " + Person[prop]);
    }
  
  
  
