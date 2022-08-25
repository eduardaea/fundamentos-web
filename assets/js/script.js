var nome = window.document.getElementById('nome')
var age = window.document.getElementById('age')
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')



function validaNome(){
    let Txtnome = window.document.querySelector('#Txtnome')
    console.log(Txtnome.value)
    if(nome.value.length < 2){
        Txtnome.innerHTML= "Nome invalido!"
        Txtnome.style.color= 'red'
        
    }
    else{
        Txtnome.innerHTML= "Nome Permitido!"
        Txtnome.style.color = 'green'
    
    }
    
}