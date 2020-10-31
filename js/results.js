
/* Função para mostrar as imagens ao clicar no botão imagens no mobile */
function imagens() {
    document.getElementById('img-post').style.display = 'flex';
    document.getElementById('tweet-post').style.display = 'none';
}

/* Função para mostrar os tweeta ao clicar no botão tweets no mobile */
function tweets() {
    document.getElementById('img-post').style.display = 'none';
    document.getElementById('tweet-post').style.display = 'block';
}
