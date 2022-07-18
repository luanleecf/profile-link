

// inicio dia e hora atual 
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours(0, 0);
var minutos = dataAtual.getMinutes();
console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.");

// var horasMinutos = document.querySelector('.date');
var msg = 'Hora: ';

var diaMesAno = document.querySelector('.time');
var msg1 = 'Ano: '

msg += horas + ':' + minutos;
msg1 += dia + '/' + mes + '/' + ano;

// horasMinutos.innerHTML = msg;
// diaMesAno.innerHTML = msg1;

// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds()) + ' <br> ' + zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear();

    // Exibe na tela usando a div.date
    document.querySelector('.date').innerHTML = dataHora;
}, 1000);

// document.addEventListener('timeupdate', dataAtual)
// document.querySelector('.time').addEventListener('timeupdate',)


//fim dia e hora atual 


function btnRemoveCores() {
    document.getElementsByClassName("cores")[0].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[0].style.color = "#00082F";
    document.getElementsByClassName("cores")[1].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[1].style.color = "#00082F";
    document.getElementsByClassName("cores")[2].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[2].style.color = "#00082F";
}

function darkblue() {
    document.querySelector('body').classList.add('dark-blue');
    document.getElementsByClassName("cores")[1].style.backgroundColor = "#5c75db";
    document.getElementsByClassName("cores")[1].style.color = "#FFF";
    document.getElementsByClassName("cores")[0].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[0].style.color = "#00082F";
    document.getElementsByClassName("cores")[2].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[2].style.color = "#00082F";


    if (document.querySelector('body').classList.contains('pink') || document.querySelector('body').classList.contains('dark-pink')) {
        document.querySelector('body').classList.remove('pink');
        document.querySelector('body').classList.remove('dark-pink');
        document.querySelector('body').classList.add('dark-blue');
    }

}


function pink() {
    document.querySelector('body').classList.add('pink');
    document.getElementsByClassName("cores")[0].style.backgroundColor = "#e63be6";
    document.getElementsByClassName("cores")[0].style.color = "#FFF";
    document.getElementsByClassName("cores")[1].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[1].style.color = "#00082F";
    document.getElementsByClassName("cores")[2].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[2].style.color = "#00082F";

    if (document.querySelector('body').classList.contains('dark-blue') || document.querySelector('body').classList.contains('') || document.querySelector('body').classList.contains('dark-pink')) {
        document.querySelector('body').classList.remove('dark-blue');
        document.querySelector('body').classList.remove('dark-pink');
        document.querySelector('body').classList.add('pink');
    }
}

function darkpink() {
    document.querySelector('body').classList.add('dark-pink');
    document.getElementsByClassName("cores")[0].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[0].style.color = "#00082F";
    document.getElementsByClassName("cores")[1].style.backgroundColor = "#FFF";
    document.getElementsByClassName("cores")[1].style.color = "#00082F";
    document.getElementsByClassName("cores")[2].style.backgroundColor = "#D6336C";
    document.getElementsByClassName("cores")[2].style.color = "#FFF";

    if (document.querySelector('body').classList.contains('dark-blue') || document.querySelector('body').classList.contains('') || document.querySelector('body').classList.contains('pink')) {
        document.querySelector('body').classList.remove('dark-blue');
        document.querySelector('body').classList.remove('pink');
        document.querySelector('body').classList.add('dark-pink');
    }
}

function blue() {

    btnRemoveCores(); //funç

    document.querySelector('body').classList.remove('dark-blue');
    document.querySelector('body').classList.remove('pink');
    document.querySelector('body').classList.remove('dark-pink');
}