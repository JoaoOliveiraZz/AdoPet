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
        showError('Nome', 'O nome deve conter no mínimo 6 caracteres')

    } else{
        cleanError('Nome');
    }

    if(senha.length < 8){
        Senha.style.border = '2px solid red';
        showError('Senha', 'A senha deve conter no mínimo 8 caracteres');
    }else{
        cleanError('Senha')
    }
    if(senha != senhaConfirm){
        Senha.style.border = '2px solid red';
        SenhaConfirm.style.border = '2px solid red';
        showError('SenhaC', 'Senhas não conferem')
     }else{
         cleanError('SenhaC')
     }
     if (email == ''){
         Email.style.border = '2px solid red';
         showError('Email', 'O campo email não pode estar vazio');
     }
    if(email != emailConfirm){
        showError('EmailC', 'Os Email não conferem')
    }else{
        cleanError('EmailC')
    }


    
    
}
function showError(input, msg){const MenssageError = document.getElementById(`${input}`).textContent = msg;}
function cleanError(input){const Clean = document.getElementById(`${input}`).textContent = '';}



