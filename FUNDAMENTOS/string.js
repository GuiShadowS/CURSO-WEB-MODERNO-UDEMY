const escola = 'cod3r'

console.log(escola.charAt(4)) // .charAt() Serve para acessar uma letra dentro de uma palavra ou frase, dentro do parenteses vc coloca o numero da posiçao da letra que vc quer encontrar
console.log(escola.charCodeAt(3)) // .charCodeAt() retorna o valor do codigo HTML da tabela Unicode/ASCII da posiçao selecionada da string ou number 
console.log(escola.indexOf('3')) // Pega o dado que esta na posição informada
console.log(escola.substring(1)) // mostra toda os dados que vem da primeira posiçao para frente
console.log(escola.substring(0,3)) // mostra os dados que estao na primeira posiçao ate na terceira sem contar com ela
console.log('Escola '.concat(escola).concat('!')) // concatena dados
console.log(escola.replace(3,'e')) // substitui um dado em determinada posição para outro dado especificado
console.log('Ana,Maria,Pedro'.split(',')) // transforma em um vetor separado por virgula