var numbers = []
var fragment = document.createDocumentFragment()

function addNumber() {
    var res = result
    var number = document.getElementById('num')
    var select = document.getElementById('select')

    res.innerHTML = ''

    if (number.value < 1 || number.value > 100) {
        window.alert('Select a valid number!')
    } else {
        if (numbers.indexOf(number.value) != -1) {
            window.alert(`The number ${number.value} is already in the list. Please, select another number`)
            number.value = ''
        } else {
            numbers.push(number.value)
            var opc = document.createElement('option')
            opc.text = `Valor ${number.value} adicionado.`
            select.appendChild(opc)
            number.value = ''
        }
    }
}

function sendAnalyze() {
    var result = document.getElementById('result')
    result.innerHTML = ''

    result.appendChild(showResults())

}

function showResults() {
    var a = document.createElement('p')
    a.innerHTML = `Ao todo, temos ${count()} números cadastrados.`
    fragment.appendChild(a)

    var b = document.createElement('p')
    b.innerHTML = `O maior valor informado foi ${max()}`
    fragment.appendChild(b)

    var c = document.createElement('p')
    c.innerHTML = `O menor valor informado foi ${min()}`
    fragment.appendChild(c)



    return fragment
}

function count() {
    return numbers.length
}

function max() {
    var maxNum = 0
    for (var num in numbers) {
        if (num > maxNum) {
            maxNum = num
        }
    }
    return maxNum
}

function min() {
    var minNum = 0
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNum){
            minNum = numbers[i]
        }
    }
    return minNum
}

function sum() {

}

function average() {

}