// Escreva um programa que diga se o numero
// informado pelo usuario é par ou impar
// imprima o numero e o resultado 

const divSudo = document.getElementById('sudo')
const numero = Number(prompt('Informe um número: '))

const resto = numero % 2

console.log(resto)

let mensagem = ""

if (resto === 0) {
    mensagem = `${numero} é par`
} else {
    mensagem = `${numero} é impar`
}

divSudo.appendChild(document.createTextNode("o resultado é:  " + numero + " e esse resultado " + mensagem))