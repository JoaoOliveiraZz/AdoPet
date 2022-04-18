const Nome = document.getElementById('nome');
const User = document.getElementById('user');
const Email = document.getElementById('email');
const EmailConfirm = document.getElementById('emailConfirm');
const Senha = document.getElementById('senha');
const SenhaConfirm = document.getElementById('senhaConfirm');
const Submit = document.getElementById('form');

Submit.addEventListener('submit', (e)=>{
    e.preventDefault()

    checkInput()
})

function checkInput(){

    nome = Nome.value;
    user = User.value;
    email = Email.value;
    emailConfirm = EmailConfirm.value;
    senha = Senha.value;
    senhaConfirm = SenhaConfirm.value;

    if(nome.length < 6 || nome == ''){
        Nome.style.border = '2px solid red';
        console.log('O nome deve conter no mínimo 6 caracteres')
        showError(Nome, 'O nome deve conter no mínimo 6 caracteres')
    }
    // else{
    //     Nome.style.border = '2px solid green';
    // }

    if(senha.length < 8){
        Senha.style.border = '2px solid red';
        console.log('A senha deve conter no mínimo 8 caracteres')
    }
    if(senha != senhaConfirm){
        Senha.style.border = '2px solid red';
        SenhaConfirm.style.border = '2px solid red';
        console.log('senhas nao batem')
     }
    //else{
    //     Senha.style.border = '2px solid green';
    //     SenhaConfirm.style.border = '2px solid green';
    // }
    if(email != emailConfirm){
        console.log('email não batem')
    }


    
    
}
function showError(input, msg){

    const MenssageError = document.getElementsByClassName(`${input}`);

}


3


