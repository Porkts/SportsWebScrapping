const axios = require('axios')
const cheerio = require('cheerio')

const URL_TO_SCRAP = 'https://globoesporte.globo.com/futebol/brasileirao-serie-a/'

// Fazendo a requisicao a pagina
axios.get(URL_TO_SCRAP)
.then(response => {

    // carregando a resposta da requisica para um objeto do cheerio
    const $ = cheerio.load(response.data)

    // forma feia de fazer um string replace em todos os const por var (executar uma string com o eval que contenha const buga)
    eval($('#scriptReact').html().split('const').join('var'))
    console.log(listaJogos)
})
