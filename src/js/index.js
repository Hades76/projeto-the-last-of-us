const botoesCarrossel = document.querySelectorAll(".botao");
const imagensCarroseel = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
       
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        imagensCarroseel[indice].classList.add("ativa");

    })
})