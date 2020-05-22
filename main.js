// Declarando variáveis globais
var inp = document.querySelector('input#insert') // adiciona valores
var lista = document.querySelector('#selecao') // manipula o select
var divisao2 = document.querySelector('.divisao2') // manipula a div de textos
var valores = []

// Criando função que armazena dados
function adicionar() {
    // Convertendo a string -> números
    var num_Inp = Number(inp.value)

    if (num_Inp == 0 || num_Inp < 0 || num_Inp > 100) {
        alert('[ERRO 00] - Digite um número entre 1 e 100.')

    } else if (valores.indexOf(num_Inp) != -1) {
        alert('[ERRO 01] - Número já cadastrado!')

    } else {
        let item = document.createElement('option') // cria um elemento 'option'
        item.text = `Valor ${num_Inp} adicionado`
        lista.appendChild(item)
        valores.push(num_Inp) // pega valores de numInp
    }
    // limpa caixa de texto
    divisao2.innerHTML = ''
    inp.value = ''
    inp.focus()
}

function finalizar() {

    var contaLista = valores.length
    var sum = 0
    var media = 0
    var maior = valores[0]
    var menor = valores[0]
    for (var pos in valores) {
        sum += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = Number(sum / contaLista).toFixed(2)
    if (valores == 0) {
        divisao2.innerHTML = alert('[ERRO 02] - Nenhum item encontrado na lista')
    } else {
        divisao2.innerHTML = `<p>Ao todo temos ${contaLista} números cadastrados.<br>O maior valor informado é ${maior} .<br>O menor valor informado é ${menor} .<br>Somando todos os valores temos ${sum}<br>A média dos valores digitados é ${media}</p>`
    }
}