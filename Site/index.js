
var cont=0;

botao.onclick = function()
{
    var dig_nome= nome.value;
    var dig_email= email.value;
    var dig_senha= senha.value;
    var dig_conf= conf_senha.value;
    if(dig_nome==""){
        alert("Nome obrigatorio!");
        cont++;
    }
    if(dig_email==""){
        alert("email obrigatorio!");
        cont++;
    }
    if(dig_senha==""){
        alert("senha obrigatorio!");
        con++
    }
    if(dig_conf==""){
        alert("Confirmar senha obrigatorio!");
        cont++;
    }
    if(dig_conf!=dig_senha){
        alert("Senha não compativel!");
        cont++;
    }
    if(cont==0){
        alert("Cadastro realizado com sucesso!");
    }
}