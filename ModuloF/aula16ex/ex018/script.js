var numbers = []
var fragment = document.createDocumentFragment()

function addNumber() {
    var res = result
    var number = document.getElementById('num')
    var select = document.getElementById('select')

    res.innerHTML = ''

    if (number.value < 1 || number.value > 100) {
        window.alert('Select a valid number!')
        number.value = ''
        number.focus()
    } else {
        if (numbers.indexOf(number.value) != -1) {
            window.alert(`The number ${number.value} is already in the list. Please, select another number`)
            number.value = ''
            number.focus()
        } else {
            numbers.push(number.value)
            var opc = document.createElement('option')
            opc.text = `Valor ${number.value} adicionado.`
            select.appendChild(opc)
            number.value = ''
            number.focus()
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
    a.innerHTML = `We have ${count()} numbers`
    fragment.appendChild(a)

    var b = document.createElement('p')
    b.innerHTML = `The max value is ${max()}`
    fragment.appendChild(b)

    var c = document.createElement('p')
    c.innerHTML = `The min value is ${min()}`
    fragment.appendChild(c)

    var d = document.createElement('p')
    d.innerHTML = `The sum of all values is ${sum()}`
    fragment.appendChild(d)

    var e = document.createElement('p')
    e.innerHTML = `The average of all values is ${average()}`
    fragment.appendChild(e)

    return fragment
}

function count() {
    return numbers.length
}

function max() {
    var maxNum = numbers[0]
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i]
        }
    }
    return maxNum
}

function min() {
    var minNum = numbers[0]
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNum){
            minNum = numbers[i]
        }
    }
    return minNum
}

function sum() {
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i])
    }
    return sum
}

function average() {
    var average = 0
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i])
    }
    average = sum / numbers.length
    return average
}