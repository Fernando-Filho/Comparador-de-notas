//setando valores para o teste, na pratica seria usado input`s.
var nomes = ['Fernando', 'yale', 'cocaum', "allyson",]
var tabela = [15, 11, 10, 7]
var tabelaApoio = []

//Recolhendo os valores da Array principal para usar como comparação no final.
for (contador0 = 0; contador0 < tabela.length; contador0++) {tabelaApoio.push(tabela[contador0])}

for (contador1 = 0; contador1 < tabela.length; contador1++) 
{
    var contador2 = contador1 + 1

    for (contador2 ; contador2 < tabela.length; contador2++) 
    {
        var firstValue = tabela[contador1]
        var secondValue = tabela[contador2]

        if (firstValue > secondValue) 
        {
            tabela[contador1] = secondValue
            tabela[contador2] = firstValue
        }
    }
}

//Comparando a tabela principal a de apoio para poder buscar o melhor aluno.
var melhorNota = tabelaApoio.indexOf(tabela[tabela.length-1])
var melhorAluno = nomes[melhorNota]

console.log(melhorNota)
console.log(melhorAluno)