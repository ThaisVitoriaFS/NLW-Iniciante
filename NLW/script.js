const apiKeyIpunt = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponde = document.getElementById('aiResponse')
const form = document.getElementById('form')

const enviarFormulario = (event) => {
    event.preventDefault()
}
form.addEventListener('submit', enviarFormulario)
