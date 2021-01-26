const CriarTarefa = (evento) => {

    evento.preventDefault()
    const capturarInput = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    const valor = capturarInput.value
    if (valor.length == 0) {
        alert('Campo vazio')
    } else {
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class= "content"> ${valor}</p>`
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConcluir())
        tarefa.appendChild(BotaoDeletar())
        lista.appendChild(tarefa)
        capturarInput.value = null
    }
    //console.log(valor)

}

const evento = document.querySelector('[data-form-button]')
evento.addEventListener('click', CriarTarefa)

const BotaoConcluir = () =>{

    const btnConcluir = document.createElement('button')
    btnConcluir.classList.add('check-button')
    btnConcluir.innerHTML = 'concluir'

    btnConcluir.addEventListener('click',ConcluiTarefa)
    return btnConcluir
}

const ConcluiTarefa = (evento) =>{

    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

const BotaoDeletar = () => {

    const btnDeleta = document.createElement('button')
    btnDeleta.innerHTML = 'Deletar'  
    btnDeleta.addEventListener('click',DeletarTarefa)
    
    return btnDeleta
}

const DeletarTarefa = (evento) => {
    const btnDeleta = evento.target
    const tarefaCompleta = btnDeleta.parentElement
    tarefaCompleta.remove()

}