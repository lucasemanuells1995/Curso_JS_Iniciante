// Exercícios Constructor Function:

// Criar um objeto postagem (para um blog)
// Tem que possuir: título, mensagem, autor, visualizações, comentários, estaOnline

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaOnline = false
}

let post =
`
   O JavaScript é uma das linguagens de programação mais fáceis de aprender.
Após JavaScript, Python também é uma ótima linguagem para iniciar sua promis-
sora carreira como Developer.

    Porém, antes de aprender qualquer linguagem de programação, é necessário
aprender sobre lógica de programação, como se desenvolvem "ifs", "whiles",
"elses", etc.

Não desista de aprender para se tornar um bom programador. Essa é a profissão
do futuro, e todo mundo terá que aprender pelo menos o básico da programação.`

const postagem1 = new Postagem('As maravilhas do JavaScript', post, 'Lucas Emanuel');

function imprimirPostagem(postagem) {
    for(prop in postagem) {
        console.log(prop, postagem[prop]);
    }
}

imprimirPostagem(postagem1);