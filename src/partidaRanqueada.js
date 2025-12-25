let vitorias = Number(prompt("Quantas vitorias?"));
let derrotas = Number(prompt("Quantas derrotas?"));

let liga;
let saldo = vitorias - derrotas;

function calcularLiga(vitorias , derrotas){
    let diferenca = vitoria - derrotas;

    if(diferenca <= 10) return "Ferro";
    if(diferenca <= 20) return "Bronze";
    if(diferenca <= 50) return "Prata";
    if(diferenca <= 80) return "Ouro";
    if(diferenca <= 90) return "Diamante";
    if(diferenca <= 100) return "Lendário";
    if(diferenca => 100) return "Imortal";
}

liga = calcularLiga(vitorias, derrotas);

console.log(`O Herói tem saldo de ${saldo} e está na Liga ${liga}`);