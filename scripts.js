const form = document.querySelector('#form')
const button = document.querySelector('#buttonSend')
form.addEventListener("submit", async (e) => {
    e.preventDefault()
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
   
})

button.addEventListener("click", async (e) => {
    e.preventDefault()
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
   

})


function showContent(data) {
    const { cep, logradouro, uf, localidade, ddd, bairro } = data;
    const infos = document.querySelector('.divInfos');
    const dts = document.querySelector('.dts')
    dts.classList.remove('show')
    infos.classList.add('dotted')
    infos.innerHTML = `
    <span class="spn"><p class="infoc">cep</p>${cep}</span>
    <span class="spn"><p class="infoc">Logradouro</p>${logradouro}</span>
    <span class="spn"><p class="infoc">UF</p>${uf}</span>
    <span class="spn"><p class="infoc">Localidade</p>${localidade}</span>
    <span class="spn"><p class="infoc">ddd</p>${ddd}</span>
    <span class="spn"><p class="infoc">Bairro</p>${bairro}</span>
    `
    

}