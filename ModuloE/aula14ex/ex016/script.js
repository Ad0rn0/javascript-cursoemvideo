function count() {
    var startNumber = document.getElementById("nstart")
    var endNumber = document.getElementById("nend")
    var skipNumber = document.getElementById("nskip")

    var result = document.querySelector("div#res")

    if (startNumber.value === "" || endNumber.value === "") {
        alert("Please, select valid values")
    } else {
        if (skipNumber.value <= 0 || skipNumber.value === "") {
            alert("Invalid Skip. Considering skip = 1")
            skipNumber.value = 1
        } 
        
        result.innerHTML = ''
        for (var i = 1; i <= endNumber.value; i++) {
            console.log(`Teste ${i}`)
            result.innerHTML += i
            if (i != endNumber.value){
                result.innerHTML += ' -> '
            }
            
        }
        
    }
}