const Nome = document.getElementById('nome');
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
    email = Email.value;
    emailConfirm = EmailConfirm.value;
    senha = Senha.value;
    senhaConfirm = SenhaConfirm.value;
    validado = false;

    if(nome.length < 6 || nome == ''){

        Nome.style.border = '2px solid red';
        showError('Nome', 'O nome deve conter no mínimo 6 caracteres')
        validado = false;

    } else{
        cleanError('Nome');
        validado = true;
    }

    if(senha.length < 8){
        Senha.style.border = '2px solid red';
        showError('Senha', 'A senha deve conter no mínimo 8 caracteres');
        validado = false;
    }else{
        cleanError('Senha')
        validado = true;
    }
    if(senha != senhaConfirm){
        Senha.style.border = '2px solid red';
        SenhaConfirm.style.border = '2px solid red';
        showError('SenhaC', 'Senhas não conferem')
        validado = false;
     }else{
         cleanError('SenhaC')
         validado = true;
     }
     if (email == ''){
         Email.style.border = '2px solid red';
         showError('Email', 'O campo email não pode estar vazio');
         validado = false;
     }
    if(email != emailConfirm){
        showError('EmailC', 'Os Email não conferem')
        validado = false;
    }else{
        cleanError('EmailC')
        validado = true;
    }
    
}
function showError(input, msg){const MenssageError = document.getElementById(`${input}`).textContent = msg;}
function cleanError(input){const Clean = document.getElementById(`${input}`).textContent = '';}



