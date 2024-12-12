function count() {
    var startNumber = document.getElementById("nstart")
    var endNumber = document.getElementById("nend")
    var skipNumber = document.getElementById("nskip")
    var nextNumber = 0

    var result = document.querySelector("div#res")

    if (startNumber.value === "" || endNumber.value === "") {
        alert("Please, select valid values")
    } else {
        if (skipNumber.value <= 0 || skipNumber.value === "") {
            alert("Invalid Skip. Considering skip = 1")
            skipNumber.value = 1
        } 

        result.innerHTML = ''
        for (var i = Number(startNumber.value); i <= endNumber.value; i+=Number(skipNumber.value)) {
            nextNumber = i + Number(skipNumber.value)
            result.innerHTML += i
            if (nextNumber <= endNumber.value){
                    result.innerHTML += ' -> '
            }
        }
    }
}