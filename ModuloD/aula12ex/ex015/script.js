function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert("Erro: Verifique os dados e tente novamente!")
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id", "foto ")
        if (fsexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}