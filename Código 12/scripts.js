// Constructor Functions (Funções de Construtor)

function Celular(marcaCelular, capacidadeBateria, tamanhoDaTelaPolegadas, tamanhoDaTelaVertical, tamanhoDaTelaHorizontal) {
    this.marcaCelular = marcaCelular,
    this.capacidadeBateria = capacidadeBateria,
    this.tamanhoDaTelaPolegadas = tamanhoDaTelaPolegadas,
    this.tamanhoDaTelaVertical = tamanhoDaTelaVertical,
    this.tamanhoDaTelaHorizontal = tamanhoDaTelaHorizontal,
    this.ligar = function() {
        console.log('Fazendo ligação...');
    }
}

const celularAsus = new Celular('Asus', 5000, 6.5, 150, 70);
console.log(celularAsus);