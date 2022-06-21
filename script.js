
// cria a variável e captura o selector(.digital) no html do css
let digitalElement = document.querySelector('.digital');
// cria as variáveis dos elementos segundos,minutos e horas
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();// captura as info da data na variável now
    let hour = now.getHours();// captura as horas
    let minute = now.getMinutes();// captura os minutos
    let second = now.getSeconds();// captura os segundos

    // mostra o relojo digital e adiciona os 0 quando menorr que 10 nos elementos 
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;// divide o relojo em segundos no analogico
    let mDeg = ((360 / 60) * minute) - 90;// divide o relojo em segundos no analogico
    let hDeg = ((360 / 12) * hour) - 90;// divide o relojo em segundos no analogico

    // estas propriedades criam as rotações partindo da esquerda(left) no relojo analógico
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

// quando o tempo e de 0 até 9 (adiciona 0 na frente do numero menor de 10)
function fixZero(time) {
    // forma reduzida
    return time < 10 ? `0${time}` : time;
    // forma normale
    // if(time < 10){
    //     return '0'+time;
    // }else{
    //     return time;
    // }
}

// espera 1000 milisegundos ou 1 segundo para atualizar o relojo
setInterval(updateClock, 1000);

// atualiza 1 vez de forma rápida (no início)
updateClock();