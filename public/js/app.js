const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading weather'
    messageTwo.textContent = ''

    const address = search.value
    
    fetch('/weather?address=' + address).then((response) => {
    response.json().then(({error, location, forecast} = {error}) => {
        if (error) {
            return messageOne.textContent = error
        }
        messageOne.textContent = location
        messageTwo.textContent = forecast
    })
})
})