document.addEventListener("DOMContentLoaded", function() {
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");
    const cartoes = document.querySelectorAll(".cartao");
  
    let cartaoAtual = 0;
  
    function exibirCartao(cartaoAtual) {
      cartoes.forEach(function(cartao) {
        cartao.classList.remove("selecionado");
      });
      cartoes[cartaoAtual].classList.add("selecionado");
    }
  
    function avancarCartao() {
      cartaoAtual++;
      if (cartaoAtual >= cartoes.length) {
        cartaoAtual = 0;
      }
      exibirCartao(cartaoAtual);
    }
  
    function voltarCartao() {
      cartaoAtual--;
      if (cartaoAtual < 0) {
        cartaoAtual = cartoes.length - 1;
      }
      exibirCartao(cartaoAtual);
    }
  
    btnAvancar.addEventListener("click", avancarCartao);
    btnVoltar.addEventListener("click", voltarCartao);
  });