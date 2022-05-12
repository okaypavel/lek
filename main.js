let testu = document.getElementById('prawy')
function indigo(){
    testu.setAttribute('class', 'indigo')
}
function steelBlue(){
    testu.setAttribute('class', 'steelBlue')
}
function olive(){
    testu.setAttribute('class', 'olive')
}

function font(){
    pprawy.style.fontSize = inpfont.value
}

function ten(){
    pprawy.style.color = sel.value  
}

let uli = document.getElementById('ulo')
function dys(){
    uli.setAttribute('class', 'uldysc')
}
function kwa(){
    uli.setAttribute('class', 'ulqw')
}
function okr(){
    uli.setAttribute('class', 'ulokr')
}

function ramka(){
    if(bor.checked){
        imgp.style.border = "solid 1px white"
    } else {
        imgp.style.border = "none"
    }
}