// Velocidade máxima de 60Km/h
// A cada 5 Km/h acima acima do limite você ganha + 1 ponto na carteira
// Dica: usar Math.floor
// Pontos > 12 --> "Carteira Suspensa"

verificarVelocidade();

function verificarVelocidade(velocidade) {
    const velocidadeMáxima = 60;
    const kmPorPontos = 5;

    if (typeof(velocidade)==="number"){
        if (velocidade<=velocidadeMáxima){
            console.log("Ok.");
        }
        else if ((velocidade>60) && (velocidade<65)){
            console.log("Ultrapassou velocidade permitida.");
            console.log("Será aplicada apenas uma advertência.");
        }
        else{
            const pontos = Math.floor(((velocidade - velocidadeMáxima) / 5));
            if (pontos>=12) {
                console.log("Sua velocidade é", Math.floor(velocidade) + ".");
                console.log("Seus pontos estão acima de 12.");
                console.log("Carteira Suspensa!");
            }
            else{
                console.log("Sua velocidade é", Math.floor(velocidade) + ".");
                console.log("Você receberá", pontos, "na sua habilitação.");
            }
        }
    }
    else{
        return 0;
    }
}