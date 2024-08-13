const form = document.querySelector(`form`)
const inputWeigth = document.querySelector(`#weigth`)
const inputHeigth = document.querySelector(`#heigth`)

const modalWrapper = document.querySelector(`.modal-wrapper`)
const modalMessage = document.querySelector(`.modal-wrapper .modal-card .title span`)
const modalButtonClose = document.querySelector(`.modal-wrapper .modal-card button.close`)

function IMC(weigth, heigth) {
  return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}

/*Funcao de validacao dos dados do inputs*/
function notANumber(value) {
  return isNaN(value) || value == ``
}

form.onsubmit = function(event) {
  event.preventDefault()
  
  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  /*Logica da validacao dos dados nos inputs*/ 
  const showAlertError = notANumber(weigth) || notANumber(heigth)
  if (showAlertError) {
    alertError.open()
    return;
  }
  alertError.close()
  
  const result = IMC(weigth, heigth)
  const message = `Seu IMC é de ${result}`
  
  modalMessage.innerText = message

 /*Executar o calculo e exibir a mensagem (tambem) pressionando a tecla Enter*/
  function pressEnterKey(event) {
    if (event.key === 'Enter') {
      modalMessage.innerText = message
    }
  }

  modalWrapper.classList.add(`open`)
}

/*Exibir o alerta de erro caso os dados do input nao passem na validacao*/
const alertError = {
  element: document.querySelector(`.alert-error`), 
  open() {
    alertError.element.classList.add(`open`)
  },
  close() {
    alertError.element.classList.remove(`open`)
  }
}

/*Reiniciar a pagina ao clicar no botao x*/
modalButtonClose.onclick = function() {
  location.reload()
}

/*Fechar o modal reiniciando a pagina (tambem) com a tecla Esc*/ 
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if(event.key === `Escape`) {
    location.reload()
  }
}