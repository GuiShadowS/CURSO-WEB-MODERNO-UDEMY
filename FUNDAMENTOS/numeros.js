const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Saber se um valor é numero inteiro ou não
console.log(Number.isInteger(peso2)) // Saber se um valor é numero inteiro ou não

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // .toFixed() serve para escolher quantas casas decimais vira depois do ponto
console.log(media.toString()) //  .toString(2) serve para transformar uma valor em binario
console.log(typeof media) // mostra o tipo do dado