function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Aldebaran",
    idade: 38
} 

const pessoal2 = {
    nome: "Bion",
    idade: 16
}

animal = {
    nome: "Cerberus",
    idade: 1554,
    raca: "HellHound"
}

console.log(calculaIdade.call(pessoa1, 13));
console.log(calculaIdade.apply(animal, [2000]));


