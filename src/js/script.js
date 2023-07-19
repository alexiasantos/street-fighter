const personagens = document.querySelectorAll('.personagem')
const audio = document.querySelector('audio')


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        removeClassSelecionado()

        adicionaClassSelecionado(personagem)

        alteraPersonagemGrande(personagem)

        alteraNomePersonagemSelecionado(personagem)
        alteraDescricaoPersonagemSelecionado(personagem)


    })
})



const playAudio = document.querySelector('.play')
const stopAudio = document.querySelector('.stop')
playAudio.addEventListener('click', () => {
    audio.play()
})

stopAudio.addEventListener('click', () => {
    audio.pause()
})


function alteraDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alteraNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alteraPersonagemGrande(personagem) {
    imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.gif`
}

function adicionaClassSelecionado(personagem) {
    personagem.classList.add('selecionado')
}

function removeClassSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

