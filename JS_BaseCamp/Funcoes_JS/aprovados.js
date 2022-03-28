const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

//Método 1 - utilizando for
function alunosAprovados1(arrAluno, media) {
    let aprovados = [];
    for (let i =0; i< arrAluno.length; i++) {
        const {nota, nome} = arrAluno[i];
        if (nota >= media) {
            aprovados.push(nome)
        }
    }    
    return aprovados;
}
//Método 2 - utilizando métodos de arrays
function alunosAprovados2(arrAluno, media){
    let aprovados = [];    
    aprovados = arrAluno.filter( aluno => aluno.nota >= media).map( a => a.nome);    
   return aprovados
} 
//Método 3 - utilizando arrow functions
let alunosAprovados3 = (arrAluno, media) => arrAluno.filter( aluno => aluno.nota >= media).map( a => a.nome);


console.log(alunosAprovados1(alunos,6));
console.log(alunosAprovados2(alunos,6));
console.log(alunosAprovados3(alunos, 6));