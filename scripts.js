const button = document.querySelector('#buttonSend')

button.addEventListener("click", async (e) => {
    const input = document.querySelector('#inputCep')
    try{
        const cep = input.value
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data =  await response.json()
        
        
        showContent(data)

    } catch (error) {
        if (error) {
            console.log("Bad Request 404 - Digite um cep válido" + error)
        }
    }
   e.preventDefault()

})

function showContent(data) {
    let count = 1
    
    while (count <= 5) {
        let array = Object.values(data)
        let index = array.indexOf("")
        let span = document.querySelector(`.spn${count}`)

        if (index > -1) {
            array.splice(index, 1)
        }
        
        if(data.erro == true) {
            span.innerHTML = 'Informação não encontrada'
            span.style.color = 'red'
            span.style.backgroundColor = 'white'
        }

        span.innerHTML = array[count]
        span.style.backgroundColor = 'lightgrey'
        
        document.querySelector('.spn5').innerHTML = data.ddd
        
        count ++
    } 
}


