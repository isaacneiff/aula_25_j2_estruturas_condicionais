//Faça um programa que obtenha quatro notas de alunos
//Em seguida, calcule a média simples das notas
//se a média for maior ou igual a 7, imprima "aluno aprovado"
//Senão, se a nota for maior ou igual a 5, imprima "aluno em recuperação"
//Senão, imprima "aluno reprovado"


//entrada
const divRoot = document.getElementById('root')

const nota1 = Number(prompt("informe a primeira nota"))
const nota2 = Number(prompt("informe a segunda nota"))
const nota3 = Number(prompt("informe a terceira nota"))
const nota4 = Number(prompt("informe a quarta nota"))

//Processamento

const media = nota1 + nota2 + nota3 + nota4 / 4

let mensagem = ""

if (media >= 7) {
    mensagem = "Aluno aprovado - Media: " + media
} else {
    if (media >= 5) {
        mensagem = "Aluno em recuperação - Média: " + media
    }

    else {
        mensagem = "Aluno reprovado - Média: " + media
    }
}


document.body.appendChild(document.createTextNode(mensagem))
