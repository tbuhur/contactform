let nameId=document.getElementById("nameId");
let consent=document.getElementById("consent");
let emaill=document.getElementById("emaill");
const pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const greetBtn=document.getElementById("greetBtn");
const gmessage=document.getElementById("gmessage");
const elem=document.getElementById("elem");
const repeatBtn=document.getElementById("repeatBtn");
const maxLength=200;
greetBtn.addEventListener("click", function(){
 const userName=nameId.value;
 const userText=consent.value;
 const userMail=emaill.value;
 console.log("Username:" + userName);
    if(userName){
    const message="Hello," + userName +"!Welcome to the Greeting App!";
    gmessage.textContent=message;
    } else{
    alert("Please enter your name!");
    
    }
    
  
    if(userText===""){
     alert("Please fill in the text area!");

    }else  {
     console.log("Text:" + userText);
     
    }
    if (pattern.test(userMail)){
      console.log("E-Mail:" + userMail);
    }else{
      alert("Please enter valid e-mail!");
      
    }
    var checker=document.getElementById("checkbox");
    if(checker.checked) {
      console.log("TERMS");

    }else{
      alert("Please read Terms and Conditions!");   
      return
    }
    alert("Thank you!");
    window.location.pathname="/C:/Users/Tolga%20BUHUR/Desktop/html_practice/done.html";
    const email = 'tolbuhur@gmail.com';
    const subject = 'Test Log Data';
    const body = 'Here is the log data: ' + JSON.stringify(console.log('test data'));

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.location.href = mailtoLink;
});
 repeatBtn.addEventListener("click", function(){
    const userName=nameId.value;

    if(userName){
       gmessage.textContent="";
       for(let i=0; i<3; i++){
          gmessage.textContent +="Hello," + userName + "!" ;
         
       }
    }else{
      alert("Please enter your name!");
    }

    
 });


 consent.addEventListener('input', function(){


   if(consent.value.length > maxLength){

      alert("Character limit reached");
   }
 })





