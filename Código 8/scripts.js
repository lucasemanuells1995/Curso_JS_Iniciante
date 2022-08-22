// Soma dos múltiplos de 3 e 5
// Pode ser substituído por qualquer múltiplo

somaMultiplos(10);

function somaMultiplos(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for(i = 0; i <= limite; i++) {
        if(i % 3 === 0) {
            multiplosDe3 += i;
        }
        else if(i % 5 === 0) {
            multiplosDe5 += i;
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}