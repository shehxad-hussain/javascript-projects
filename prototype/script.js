// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');
// let dob = document.getElementById('dob');
// let Oname = document.getElementById('outputname');
// let Odob = document.getElementById('outputage');
// let button = document.getElementById('button');

// button.addEventListener('click',function(){
//   function Calculater(name, dob){
//     this.name= name;
//     this.dateOfBirth= new Date(dob);
//     this.calculateAge = function() {
            
//     const difference  = Date.now() - this.dateOfBirth.getTime()
//     const ageDate = new Date(difference)
//     return ageDate.getUTCFullYear() - 1970
//           }
//   }
  
//   let inputname= fname.value;
//   let inputdob= dob.value;

//   const zahid = new Calculater(inputname, inputdob)
//   Oname.textContent= inputname;
//   Odob.textContent= zahid.calculateAge();

// })

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let dob = document.getElementById('dob');
let Oname = document.getElementById('outputname');
let Odob = document.getElementById('outputage');
let button = document.getElementById('button');


button.addEventListener('click', function() {
    function Person(firstName, lastname, dob) {
        this.firstName = firstName,
        this.lastname = lastname,
        this.birthday = new Date(dob);

        Person.prototype.calculateAge = function() {
            const difference  = Date.now() - this.birthday.getTime()
            const ageDate = new Date(difference)
            return ageDate.getUTCFullYear() - 1970
        }

        
    }

    let inputname = fname.value;
    let inputnamee = lname.value;
    let inputdob= dob.value;
  
    const zahid = new Person(inputname, inputnamee, inputdob)
    Oname.textContent= inputname + inputnamee;
    Odob.textContent= zahid.calculateAge();
})



// function Person(firstName, lastname, dob) {
//     this.firstName = firstName,
//     this.lastname = lastname,
//     this.birthday = new Date(dob)
// }



// Person.prototype.greeting = function() {
//     return `Hi ${this.firstName} ${this.lastname} Welcome to our website`
// }

// const user1 = new Person('John', 'Doe', '26 june 1991')

// console.log(user1.calculateAge())