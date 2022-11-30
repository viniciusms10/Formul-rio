const botao = document.getElementById("botão")

botao.addEventListener("mouseenter" , entrar)
botao.addEventListener("mouseout" , sair)

function entrar() {
    botao.style.background = "rgb(145, 132, 132)"
}

function sair() {
    botao.style.background = "black"
}

function clicar() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const idade = document.getElementById('idade')
    const ocupacao = document.getElementById('ocupação')
    document.write(`Name: ${nome.value};<br> Email: ${email.value}; <br> Age:${idade.value}; <br> Role: ${ocupacao.value}`)

}