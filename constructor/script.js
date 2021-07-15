// function Person(name,dob) {
//     this.name = name,
//     this.birthday = new Date(dob),

//     this.calculateAge = function() {
//         const difference  = Date.now() - this.birthday.getTime()
//         const ageDate = new Date(difference)
//         return ageDate.getUTCFullYear() - 1970
//     }
// }

// const shehzad = new Person('shehzad', '05 Aug 2000 ')
// console.log(shehzad)


// function calculateAge() {
//     var birthdate =  new Date(document.getElementById('birth-date').value);
//     var birthdateDay = birthdate.getDate();
//     var birthdateMonth = birthdate.getMonth();
//     var birthdateYear = birthdate.getFullYear();

//     var todaydate = new Date();
//     var todayday = todaydate.getDate();
//     var todaymonth = todaydate.getMonth();
//     var todayyear = todaydate.getFullYear();


//     var calculatedAge = 0;

//     if(todaymonth > birthdateMonth) calculatedAge = todayyear - birthdateYear;

//     else if (todaymonth == birthdateMonth) {
//         if(todaydate >= birthdateDay) calculatedAge = todayyear - birthdateYear;

//         else calculatedAge = todayyear - birthdateYear -1;
//     }
//     else calculatedAge = todayyear - birthdateYear -1;
//     var  outputvalue = calculatedAge;
//     document.getElementById(calculatedAge).innerHTML = calculatedAge;
// }


// function ageCalculator() {  
//     var userinput = document.getElementById("DOB").value;  
//     var dob = new Date(userinput);  
//     if(userinput==null || userinput=='') {  
//       document.getElementById("message").innerHTML = "**Choose a date please!";    
//       return false;   
//     } else {  
      
      
//     var month_diff = Date.now() - dob.getTime();  
//     var age_dt = new Date(month_diff);   
//     var year = age_dt.getUTCFullYear();  
//     var age = Math.abs(year - 1970);  
      
     
//     return document.getElementById("result").innerHTML =    
//              "Age is: " + age + " years. ";  
//     }  
// }  


// constructor

let namee = document.getElementById('name');
let dob = document.getElementById('dob');
let Oname = document.getElementById('outputname');
let Odob = document.getElementById('outputage');
let button = document.getElementById('button');

button.addEventListener('click',function(){
  function Calculater(name, dob){
    this.name= name;
    this.dateOfBirth= new Date(dob);
    this.calculateAge = function() {
            
              const difference  = Date.now() - this.dateOfBirth.getTime()
              const ageDate = new Date(difference)
              return ageDate.getUTCFullYear() - 1970
          }
  }
  
  let inputname= namee.value;
  let inputdob= dob.value;

  const zahid = new Calculater(inputname, inputdob)
  Oname.textContent= inputname;
  Odob.textContent= zahid.calculateAge();
})

