//Login
var emailc;
if(document.getElementById("bLogin") !== null){
    document.getElementById("bLogin").addEventListener("click",
    function che(){
    emailc= emailogin.value;
    var senhac= senhalogin.value;
    if(emailc==""){
        alert("Email obrigatóorio!");
    }
    if(senhac==""){
        alert("Senha obrigatória!");
    }else{
        //ARRAY PARA CADA USUARIO POSSIVELMENTE CADASTRADO
    var busuario1=[localStorage.getItem('email1'),localStorage.getItem('senha1'),localStorage.getItem('nome1')]
    var busuario2=[localStorage.getItem('email2'),localStorage.getItem('senha2'),localStorage.getItem('nome2')]
    var busuario3=[localStorage.getItem('email3'),localStorage.getItem('senha3'),localStorage.getItem('nome3')]
    var busuario4=[localStorage.getItem('email4'),localStorage.getItem('senha4'),localStorage.getItem('nome4')]
//TENTANDO PEGAR O VALOR DO IPUT DO LOGIN E COMPARAR COM O CADASTRO
    var email_login=document.getElementById("emailogin").value;
    var senha_login=document.getElementById("senhalogin").value;
    if(email_login==busuario1[0]&& senha_login==busuario1[1]){
        alert("Seja bem vindo novamente"+ " "+ busuario1[2]);
        window.location.href= "https://jennifersilva46.github.io/LoanNet/Telas/homePerfil.html"

    }else if(email_login==busuario2[0]&& senha_login==busuario2[1]){
        alert("Seja bem vindo, novamente"+ " " + busuario2[2]);
        window.location.href= "https://jennifersilva46.github.io/LoanNet/Telas/homePerfil.html"

    }else if(email_login==busuario3[0]&& senha_login==busuario3[1]){
        alert("Seja bem vindo, novamente"+ " " + busuario3[2]);
        window.location.href= "https://jennifersilva46.github.io/LoanNet/Telas/homePerfil.html"

    }else if(email_login==busuario4[0]&& senha_login==busuario4[1]){
        alert("Seja bem vindo, novamente"+ " " + busuario4[2])
        window.location.href= "https://jennifersilva46.github.io/LoanNet/Telas/homePerfil.html"

    }else{
        alert("Essa conta não possui cadastro nesse site")
    }}
})
}
//Cadastro
var cont=0;
if(document.getElementById("botao") !== null){
    document.getElementById("botao").addEventListener("click", function()
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
        //CHAMANDO FUNÇÃO PARA CADA USUARIO    
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
})
}
//CADASTRANDO USUARIO
function user1(){
    dig_nome=document.getElementById("nome").value;
    dig_email=document.getElementById("email").value;
    dig_senha=document.getElementById("senha").value;
    localStorage.nome1=dig_nome;
    localStorage.email1=dig_email;
    localStorage.senha1=dig_senha;
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
