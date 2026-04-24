/*
  Form Eventos em JavaScript
      submit-enviar
      reset-apagar dados
      change-mudar/alterar
      checked-checar
      blur-foco apagado
      focus-foco ativo
      input-inserir dados
     
*/
const form = document.querySelector('form');
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const curso = document.querySelector('#curso')
const checkbox = document.querySelector('#agree')
const radios = document.querySelectorAll('input[name="genero"]')

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Formulario submetido")
    console.log("Usuario: ", username.value);
    console.log("Email: ", email.value);
    
    let selecionarGenero = "";
    radios.forEach((radio) => {
        if(radio.checked) {
            selecionarGenero = radio.value;
        }
    });
    console.log("Genero: ", selecionarGenero)
});

curso.addEventListener('change', function(e){
    const cursoSelecionado= e.target.value;
    console.log("Curso selecionado: ", cursoSelecionado)
});

form.addEventListener('reset', function(e){
    console.log("Dados apagadaos")
});

checkbox.addEventListener('change', function(e){
    if(e.target.checked) {
        console.log("checkbox está checado.")
    }else{
        console.log("checkbox não está checado.")
    }
});

username.addEventListener('focus', function(e){
    username.style.borderColor = "red";
});

username.addEventListener('blur', function(e){
    username.style.borderColor = "black";
});

email.addEventListener('focus', function(e){
    email.style.borderColor = "red";
});
email.addEventListener('blur', function(e){
    email.style.borderColor = "black";
});



