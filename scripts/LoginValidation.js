const Email = document.getElementById('email');
const Senha = document.getElementById('senha');
const Submit = document.querySelector('.SubmitBtn');


Submit.addEventListener('submit', (event) =>{
    
    console.log('chamou')
})

function checkInput(){

    console.log("Opa")
    
    let email = Email.value;
    let senha = Senha.value;

    if(email = ''){
        Email.style.border = '2px solid red';
        
        showError('Email', 'Teste')
    }


}

function showError(input, message){
    document.getElementById(`${input}`).textContent = message;
}
