//CODIGO AQUI
//Se eu tenho 15 reais, e recebo mais 22.40. Quanto dinheiro tenho agora?
let saldo = 15 + 22.40
console.log("saldo inicial", saldo)

//Gastei 12.34. E agora, qual é o meu saldo?
saldo = saldo - 12.34
console.log("saldo 2", saldo)

//Precisei dividir o dinheiro igualmente com meus dois irmãos. Quanto ficou pra cada um?
saldo = saldo / 3
console.log("saldo 3", saldo)

//Apliquei minha parte do dinheiro, e ele rendeu até ficar 3.42 vezes maior. Quanto vale agora?
saldo = saldo * 3.42
console.log("saldo 4", saldo);

//Reparti o dinheiro em fatias inteiras entre três contas, e deixei o resto para comprar um chicletinho. Quanto dinheiro sobrou para o chiclete?
saldo = saldo % 3 
console.log("saldo 5", saldo);

const multESoma = 2*2+2
console.log(multESoma)
const somaEMult = 2*(2+2)
console.log(somaEMult);

let comparacaoIgual = 5===5
console.log(comparacaoIgual);
let comparacaoDiferente = 5!==5
console.log(comparacaoDiferente);
let comparacaoDiferente2 = 5!=="5"
console.log(comparacaoDiferente2);
let comparacaoIgual2 = "5"==="cinco"
console.log(comparacaoIgual2);
let compIgual = typeof 5 === typeof 20
console.log(compIgual);
let compIgual2 = typeof"5" === typeof "cinco"
console.log(compIgual2);

const num1 =2
const num2 =8
let resultado

resultado = num1 == num2
console.log("O primeiro número é igual ao segundo?", resultado);

resultado = num1 <= num2
console.log("O primeiro número é menor ou igual ao segundo?", resultado);

resultado = num1 > num2
console.log("O primeiro número é maior que o segundo?", resultado);

resultado = num1<num2
console.log("O primeiro número é menor que o segundo?", resultado);

let a = "Quero dirigir um Celta 2012";
let b =  "Sou maior de idade";
let c = "consigo comprar o Celta por 22.000 reais";
let d = "consigo alugar o Celta";
let e = "tenho carteira de motorista"

a
!b
b && !e
b && c || d
b && e && !a

