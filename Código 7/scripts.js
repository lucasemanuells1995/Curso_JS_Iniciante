// Receber um número e dizer se ele é para ou ímpar

exibirTipo(2);

function exibirTipo(valor) {
    if (typeof(valor) === 'number') {
        const restoDivisao = valor % 2;
        let tipo = restoDivisao>0 ? 'ÍMPAR' : 'PAR';
        console.log(tipo);
    }
    else{
        return 0;
    }
}