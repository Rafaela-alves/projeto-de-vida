const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-10-05T15:30:00"); // 5 de outubro de 2026 às 15:30:00
const tempoObjetivo2 = new Date("2026-12-05T08:00:00"); // 5 de dezembro de 2026 às 08:00:00
const tempoObjetivo3 = new Date("2026-12-30T23:59:59"); // 30 de dezembro de 2026 às 23:59:59
const tempoObjetivo4 = new Date("2026-10-05T00:00:00"); // 5 de outubro de 2026 à meia-noite

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaHorario(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual; // diferença em milissegundos

    if (tempoFinal <= 0) {
        return "00:00:00"; // já passou o tempo
    }

    let segundosTotais = Math.floor(tempoFinal / 60);

    let segundos = segundosTotais % 60;
    let minutosTotais = Math.floor(segundosTotais / 60);
    let minutos = minutosTotais % 60;
    let horasTotais = Math.floor(minutosTotais / 60);
    let horas = horasTotais; // inclui horas que passaram dos dias

    // Formata com zero à esquerda
    let hh = String(horas).padStart(2, '0');
    let mm = String(minutos).padStart(2, '0');
    let ss = String(segundos).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
}

// Exemplo:
let objetivo = new Date("2026-05-01T12:00:00");
console.log(calculaHorario(objetivo)); // ex: "250:34:12"
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
