var numeroSecreto = parseInt(Math.random() * 11);

var tentativasRestantes = 2;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
    tentativasRestantes = 0;
  } else if (tentativasRestantes == 0) {
    elementoResultado.innerHTML =
      "Fim das tentativas. O número sorteado foi: " +
      numeroSecreto +
      ". Reinicie para continuar.";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Apenas números entre 0 e 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "ERROU, o número é menor. Você ainda tem " +
      tentativasRestantes +
      " tentativas.";
    tentativasRestantes--;
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "ERROU, o número é maior. Você ainda tem " +
      tentativasRestantes +
      " tentativas.";
    tentativasRestantes--;
  }
}
