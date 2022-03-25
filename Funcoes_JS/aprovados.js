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

function alunosAprovados(arrAluno, media) {
    let aprovados = [];
    for (let i =0; i< arrAluno.length; i++) {
        const {nota, nome} = arrAluno[i];
        if (nota >= media) {
            aprovados.push(nome)
        }
    }    
    return aprovados;
}

function alunosAprovados2(arrAluno, media){
    let aprovados = [];
    let nomeAprovados = [];
    aprovados = arrAluno.filter( aluno => aluno.nota >= media);
    nomeAprovados = aprovados.map( a => a.nome);
   return nomeAprovados
}   

console.log(alunosAprovados2(alunos,6));