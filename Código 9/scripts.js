// Criar um método para ler um objeto e exibir
// somente as propriedades do tipo string.

const filme = {
    título: 'Vingadores',
    ano: 2018,
    diretor: 'Joe Russo',
    personagem: 'Thor',
}

exibirStrings(filme);

function exibirStrings(obj) {
    for (prop in filme) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop]);
        }
    }
}