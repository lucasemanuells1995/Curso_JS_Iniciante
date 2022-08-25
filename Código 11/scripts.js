// Factory Functions (Funções de Fábrica)
// Funções encapsuladas.

function criarCelular(marcaCelular, capacidadeBateria, tamanhoDaTelaPolegadas, tamanhoDaTelaVertical, tamanhoDaTelaHorizontal) {
    return {
        marcaCelular,
        capacidadeBateria,
        tamanhoDaTelaPolegadas,
        tamanhoDaTelaVertical,
        tamanhoDaTelaHorizontal,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

const celularRedMi = criarCelular('Xiaomi', 10000, 7.5, 155, 75)
console.log(celularRedMi)