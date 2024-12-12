function generate() {
    var num = document.querySelector('input#num')
    var tab = document.getElementById('tab')

    if (num.value === "") {
        window.alert('Please input a valid number!')
    } else{
        tab.innerHTML = ''
        var number = Number(num.value)
        for (var i = 1; i <= 10; i++){
            var opc = document.createElement('option')
            opc.text = `${number} X ${i} = ${number*i}`
            tab.value = `opc${i}`
            tab.appendChild(opc)
        }
    }
}