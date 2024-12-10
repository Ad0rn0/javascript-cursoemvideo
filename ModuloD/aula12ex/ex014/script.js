function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#c3c8cb'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#f3b171'
    } else {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#102127'
    }
}