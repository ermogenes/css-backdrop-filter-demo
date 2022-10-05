const atualizaRange = (ev) => {
  let el = ev.target;
  let unidade = el.dataset.unidade;
  let variavel = el.dataset.variavel;
  let novoValor = el.value + unidade;
  document.querySelector(":root").style.setProperty(variavel, novoValor);
  el.nextElementSibling.innerHTML = novoValor;
};

const mudaFundo = (ev) => {
  let el = ev.target;
  let imagem = el.dataset.imagem;
  document
    .querySelector(":root")
    .style.setProperty("--imagem-fundo", `url(${imagem})`);
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("input[type=range]")
    .forEach((el) => el.addEventListener("input", atualizaRange));

  document
    .querySelectorAll("li[data-imagem]")
    .forEach((item) => item.addEventListener("mousedown", mudaFundo));
});
