function criar() {
    var n = Number(document.querySelector('#num').value)
    var res = document.querySelector('div.resultado')
    for (var i=1; i <= 10; i++) {
        if(i == 1) {
            res.innerHTML = `${n} x ${i} = ${n*i}<br>`
        } else {
            res.innerHTML += `${n} x ${i} = ${n*i}<br>`
        }
    }
}