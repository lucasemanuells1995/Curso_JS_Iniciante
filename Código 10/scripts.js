// Calcular média de um aluno

const notasAluno = [75, 72, 80];

console.log(mediaDoAluno(notasAluno));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    console.log('Sua média numérica é:', media.toFixed(2));
    if (media<59) return 'F';
    if (media<69) return 'D';
    if (media<79) return 'C';
    if (media<89) return 'B';
    else return 'A';
}

function calcularMedia(notas) {
    let soma = 0;

    for (let valor of notas) {
        soma += valor;
    }
    return soma/(notas.length);
}