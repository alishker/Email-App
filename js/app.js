//variables

var sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    EmailForm = document.getElementById('email-form');


//eventListeners

eventListeners();
  
function eventListeners(){
    //onload event
    document.addEventListener('DOMContentLoaded', appInit);
    //fields events
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    //reset the form event
    resetBtn.addEventListener('click', resetForm);

    EmailForm.addEventListener('submit', sendEmail)
    
}


//functions
function appInit(){
    //dissable send button onload
    sendBtn.disabled = true;
}

function validateField(){
    let errors;

    ValidateLengths(this);
    //validate email
    if(this.type==='email'){
       validateEmail(this);
    }
    if(email.value !=="" && subject.value !=="" && message.value !==""){
        sendBtn.disabled = false;
    }

}
function ValidateLengths(field){
    if(field.value.length>0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field){
    let emailText = field.value;
    //check if email value contains "@"
    if( emailText.indexOf('@')!== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } 
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
         }
  }


    function resetForm(){
        EmailForm.reset();
    }

    function sendEmail(e){
        e.preventDefault();
        const spinner = document.querySelector('#spinner');
        spinner.style.display = 'block';

        const sendEmailImg = document.createElement('img');
        sendEmailImg.src = 'img/mail.gif';
        sendEmailImg.style.display = 'block';


        setTimeout(function(){
            spinner.style.display = 'none';
            document.querySelector('#loaders').appendChild(sendEmailImg);
            setTimeout(function(){
                EmailForm.reset();
                sendEmailImg.remove();

            },5000);
        },3000);
    }

