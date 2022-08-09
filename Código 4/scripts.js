//Função
//Verbo + Substantivo
//Ex.: resetaCor --> vai resetar a cor.

let corSite = 'azul';

function resetaCor() {
    corSite = '';
}

console.log('Função de resetar a cor:', '(olhar código)');
console.log(corSite);
resetaCor();
console.log(corSite);

corSite = 'azul';
function mudarCor(cor) {
    corSite = cor;
}

console.log('Função de mudar a cor:', '(olhar código)');
console.log(corSite);
mudarCor('amarelo');
console.log(corSite);