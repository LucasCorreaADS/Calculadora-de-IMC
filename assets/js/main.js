const form = document.querySelector('.form');
const result = document.querySelector('.result');
form.addEventListener('submit', calcular);

function calcular(event) {

    event.preventDefault();

    const peso = Number(document.querySelector('.peso').value);
    const altura = Number(document.querySelector('.altura').value);

    if (detectorDeErros(peso, altura)) {
        return;
    }

    const IMC = (peso / (altura * altura)).toFixed(2)

    exibirResultado(IMC);

}

const verificadorDeIMC = (IMC) => {
    if (IMC <= 18.5) return 'Abaixo do peso';
    if (IMC < 25) return 'Peso normal';
    if (IMC < 30) return 'Sobrepeso';
    if (IMC < 35)return 'Obesidade grau 1';
    if (IMC < 40) return 'Obesidade grau 2';
    if (IMC > 40) return 'Obesidade grau 3';
    
}

function detectorDeErros(peso, altura) {
    result.innerHTML = ''

    const p = document.createElement('p');
    p.classList.add('erro');

    if (Number.isNaN(peso) || peso === 0) {
        p.innerHTML = '*Peso inválido*';;
        result.appendChild(p)
        return true;
    }
    if (Number.isNaN(altura) || altura === 0) {
        p.innerHTML = '*Altura inválida*';
        result.appendChild(p);
        return true;
    }
}

function exibirResultado(IMC) {
    result.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('resultado-p');
    p.innerHTML = `Seu IMC é de ${IMC} kg/m2 (${verificadorDeIMC(IMC)})`;
    result.appendChild(p);
}