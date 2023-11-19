var nomeDoUsuario = prompt("Digite seu nome");
var distancia = prompt("Digite a distância de anos luz que você quer viajar");
var valorEmMetros = 9460800000000000;
var valorEmAnosLuz = distancia * valorEmMetros;
valorEmMetros = valorEmMetros.toFixed(2);
alert(
  nomeDoUsuario +
    " o valor em metros é " +
    valorEmAnosLuz +
    "m" +
    " tenha uma boa viagem!"
);
