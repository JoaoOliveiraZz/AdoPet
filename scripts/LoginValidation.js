const Email = document.getElementById('email');
const Senha = document.getElementById('senha');
const Submit = document.querySelector('#login');



Submit.addEventListener('submit', (event) =>{
    
    checkInput();
    event.preventDefault();

})

function checkInput(){
    
    let email = Email.value;
    let senha = Senha.value;
    let validado = false;
   

    if(email == ''){

        Email.style.border = '2px solid red';
        
        showError('Email', 'Email inválido');
        validado = false;
    }else{
        Email.style.border = '2px solid rgba(102, 101, 101, 0.782)';
        Email.style.borderRight = 'none';
        Email.style.borderTop = 'none';
        showError('Email', '')
        validado = true;
    }
    if(senha < 8){
        showError('Senha', 'Senha deve conter no mínimo 8 caracteres');
        Senha.style.border = '2px solid red';
        validado = false;
    }else{
        Senha.style.border = '2px solid rgba(102, 101, 101, 0.782)';
        Senha.style.borderRight = 'none';
        Senha.style.borderTop = 'none';
        showError('Senha', '');
        validado = true;
    }

    if(validado){
        window.location.href = '../Fy/FyPage.html'; //redireciona o usuário para a FY caso todos os campos estão corretamente preenchidos
    }




}

function showError(input, message){
    document.getElementById(`${input}`).textContent = message;
}
