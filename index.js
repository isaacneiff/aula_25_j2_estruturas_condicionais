
/*crie um programa que leia dois valores númericos do usuario e em seguida,
calcule a sua soma, em seguida valide se o resultado da soma for maior que 5,
então escreva a mensagem "passou do limite" se não, "dentro do limite"*/


//entrada

// 1 - obter um valor e guardar em uma variavel chamada valor 1
// 2 - obter um valor e guardar em uma variavel chamada valor 2

const valor1 = Number(prompt("Primeiro valor"))
const valor2 = Number(prompt("segundo valor"))


//processamento
//somar os valores das variaveis valor1 e valor2 e guardar em uma variavel chamada resultado
// validar se o resultado é maior que 5 e passar a mensagem "dentro do limite"

const resultado = valor1 + valor2
console.log(" o resultado é: " + resultado)

let mensagem = ""
if (resultado > 5) {

    mensagem = "passou do limite"

}
else {
    mensagem = " esta dentro do limite"
}



//se o perc for maior ou igual a 10 
//então, mude a mensagem para percentual OK
//se não, mude a mensagem para percentual alterado

const percentual = (valor1 * 0.10) / valor2
console.log(" o resultado é: " + percentual)

let mensage = ""

if ((percentual > 10) && (percentual === 10)) {
    mensage = "percentual ok"
} else {
    mensage = "percentual esta alterado"
}


//saida


const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode("o resultado é:  " + resultado + " e esse resultado " + mensagem))
divRoot.appendChild(document.createElement("br"))
divRoot.appendChild(document.createTextNode("o resultado é:  " + percentual + " e esse  " + mensage))
//imprimir a mensagem de acordo