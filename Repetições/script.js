function tabuada() {
    let num = document.getElementById('txt')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert(`Por favor, digite um Numero.`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (c = 0; c <= 10; c++) {
            let item = document.createElement(`option`)
            item.text = `${n}x${c}=${n*c}`
            tab.appendChild(item)
        }

    }
}