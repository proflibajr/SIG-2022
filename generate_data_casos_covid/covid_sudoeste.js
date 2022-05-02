const moment = require('moment')
const random = require('random-number')

const cidades = [
    { nome: "Francisco Beltrão", populacao: 91093 },
    { nome: "Pato Branco", populacao: 82881 },
    { nome: "Dois Vizinhos", populacao: 40641 },
    { nome: "Coronel Vivida", populacao: 20932 },
    { nome: "Santo Antônio do Sudoeste", populacao: 20031 },
    { nome: "Chopinzinho", populacao: 19327 },
    { nome: "Capanema", populacao: 19152 },
    { nome: "Ampére", populacao: 19049 },
    { nome: "Realeza", populacao: 16922 },
    { nome: "Mangueirinha", populacao: 16868 },
    { nome: "Clevelândia", populacao: 16789 },
    { nome: "Salto do Lontra", populacao: 14797 },
    { nome: "Santa Izabel do Oeste", populacao: 14659 },
    { nome: "Marmeleiro", populacao: 14320 },
    { nome: "Planalto", populacao: 13620 },
    { nome: "Itapejara d'Oeste", populacao: 11964 },
    { nome: "Nova Prata do Iguaçu", populacao: 10548 },
    { nome: "São João", populacao: 10241 },
    { nome: "Barracão", populacao: 10219 },
    { nome: "São Jorge d'Oeste", populacao: 9050 },
    { nome: "Verê", populacao: 7340 },
    { nome: "Renascença", populacao: 6838 },
    { nome: "Vitorino", populacao: 6827 },
    { nome: "Mariópolis", populacao: 6581 },
    { nome: "Enéas Marques", populacao: 5996 },
    { nome: "Saudade do Iguaçu", populacao: 5427 },
    { nome: "Pranchita", populacao: 5157 },
    { nome: "Nova Esperança do Sudoeste", populacao: 5046 },
    { nome: "Flor da Serra do Sul", populacao: 4624 },
    { nome: "Cruzeiro do Iguaçu", populacao: 4263 },
    { nome: "Salgado Filho", populacao: 3580 },
    { nome: "Bom Jesus do Sul", populacao: 3541 },
    { nome: "Bom Sucesso do Sul", populacao: 3237 },
    { nome: "Sulina", populacao: 2981 },
    { nome: "Manfrinópolis", populacao: 2605 },
    { nome: "Boa Esperança do Iguaçu", populacao: 2503 },
]

//Imprime o cabeçalho do CSV
console.log('dtregistro;municipio;confirmados;suspeitos;obitos')

//Percorrer as cidades gerando dados
cidades.forEach(cidade => {
    
    var data = moment(new Date('2020/01/20'))
    const hoje = new Date()

    while (data <= hoje) {

        //Confirmado: de 0,5% a 2% do total da população
        var confirmados = Math.round(cidade.populacao * (random({min: 0.05, max: 0.2}) / 100))

        //Suspeitos: de 60% a 100% a mais que confirmados
        var suspeitos = Math.round(confirmados * random({min: 1.6, max: 2}))

        //Obitos: de 1% a 3% dos contaminados
        var obitos = Math.round(confirmados * random({min: 0, max: 0.03}))

        //Imprime a linha de saída
        console.log(`${data.format('DD-MM-YYYY')};${cidade.nome};${confirmados};${suspeitos};${obitos}`)

        //Adiciono um dia a data
        data = data.add(1, 'day')
    }

});