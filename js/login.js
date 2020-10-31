function validate(e){
   
    //impedir recarregamento da página
    e.preventDefault();

    //.value para buscar o valor do input
    var email = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    // validação de dados em desenvolvimento
    if (email == 'academy@cocreare.com.br' && pass == '123456'){
        window.location.href = "./search_area.html"
    } else {
        alert ('Dados incorretos. Por favor, tente novamente!')
    }
}