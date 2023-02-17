const alunos = [
    {nome: 'manoel', nota: 10.0},
    {nome: 'pedro', nota: 4.0},
    {nome: 'maria', nota: 7.2},
    {nome: 'joana', nota: 3.5},
    {nome: 'vitoria', nota: 6.0},
    {nome: 'gabriela', nota: 1.5},
];

function alunosAprovados(aprovados) {
    return aprovados.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados)

