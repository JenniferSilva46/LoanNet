if(document.getElementById("bLogin") !== null){
    document.getElementById("bLogin").addEventListener("click",
    function che(){
    var emailc= emailogin.value;
    var senhac= senhalogin.value;
    if(emailc==""){
        alert("Email obrigatóorio!");
    }
    if(senhac==""){
        alert("Senha obrigatória!");
    }
}

    )
}

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
        alert("Cadastro realizado com sucesso! \n\n Faça seu login!");        
            if(localStorage.qusuario==1){
                user1();
                localStorage.qusuario=Number(localStorage.qusuario)+1;
            }else if(localStorage.qusuario==2){
           user2();
           localStorage.qusuario=Number(localStorage.qusuario)+1;
       }else if(localStorage.qusuario==3){
           //user3();
           alert("Chamou sem")
       }else{
        localStorage.qusuario=1;
       }
    }
}
function user1(){
    dig_nome=document.getElementById("nome").value;
    dig_email=document.getElementById("email").value;
    dig_senha=document.getElementById("senha").value;
    localStorage.nome=dig_nome;
    localStorage.email=dig_email;
    localStorage.senha=dig_senha;
}
function user2(){
    let nome_user2=document.getElementById("nome").value;
    let email_user2=document.getElementById("email").value;
    let senha_user2=document.getElementById("senha").value;
    localStorage.nome2=nome_user2;
    localStorage.email2=email_user2;
    localStorage.senha2=senha_user2;
}



if(typeof(Storage)!="undefined"){
    
}else{
    alert("Sem suporte!");
}
