

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("crianças");
let inputHoras = document.getElementById("horas");

let resultado = document.getElementById("resultado");

function calcular() {



    let adultos = inputAdultos.value;
    let crianças = inputCriancas.value;
    let duracao = inputHoras.value



    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianças);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) * crianças / 2);


    resultado.innerHTML = `<p> ${qtdTotalCarne / 1000} kg de carne <p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdTotalCerveja / 375)} latas de cerveja <p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de bebida <p>`

}
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }

}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

