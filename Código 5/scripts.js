// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não Divisível por 3 e 5 => entrada
// Não é um número => 'Não é um número'

const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada==='number'){
        if(entrada%3==0 && entrada%5!=0){
            return 'Fizz'
        }
        else if(entrada%5==0 && entrada%3!=0){
            return 'Buzz'
        }
        else if(entrada%3==0 && entrada%5==0){
            return 'FizzBuzz'
        }
        else{
            return entrada
        }
    }
    else{
        return 'Não é um número'
    }
}