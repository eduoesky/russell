const tela_inicial = document.querySelector('.opc')

const fundo = document.getElementById('escuro')

const adm_opc = document.querySelector('#adm_opc') //opção do administrador
const prof_opc = document.querySelector('#prof_opc') //opção do professor
const aln_opc = document.querySelector('#aln_opc') //opção do aluno

const adm_form = document.querySelector('#adm_form') //formulário do administrador
const prof_form = document.querySelector('#prof_form') //formulário do professor
const aln_form = document.querySelector('#aln_form') //formulário do aluno

adm_form.style.display = 'none'
prof_form.style.display = 'none'
aln_form.style.display = 'none'

function escurecer() {
    if (fundo.style.display !== 'block') {
        fundo.style.display = 'block'
        fundo.classList.add("s-esc")
    }
}

function n_escurecer() {
    fundo.classList.remove("s-esc")
    fundo.classList.add("n-esc")
    fundo.addEventListener('animationend', function() {
        fundo.style.display = 'none'
        fundo.classList.remove("n-esc")
    }, { once: true })
}

adm_opc.addEventListener('click', function() {
    adm_form.style.display = 'flex'
    prof_form.style.display = 'none'
    aln_form.style.display = 'none'
    escurecer()
})

prof_opc.addEventListener('click', function() {
    prof_form.style.display = 'flex'
    adm_form.style.display = 'none'
    aln_form.style.display = 'none'
    escurecer()
})

aln_opc.addEventListener('click', function() {
    aln_form.style.display = 'flex'
    adm_form.style.display = 'none'
    prof_form.style.display = 'none'
    escurecer()
})

function f_1() {
    adm_form.style.display = 'none'
    n_escurecer()
}

function f_2() {
    prof_form.style.display = 'none'
    n_escurecer()
}

function f_3() {
    aln_form.style.display = 'none'
    n_escurecer()
}


document.getElementById('x_1').addEventListener('click', f_1)
document.getElementById('x_2').addEventListener('click', f_2)
document.getElementById('x_3').addEventListener('click', f_3)

function voltar(){
    history.back()
}