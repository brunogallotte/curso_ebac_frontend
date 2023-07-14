const alunos = [
    {nome: 'Bruno', nota: 10},
    {nome: 'Fudencio', nota: 4.6},
    {nome: 'Claudia', nota: 7.0},
    {nome: 'Roberta', nota: 5.9},
    {nome: 'Kleber', nota: 8.6},
    {nome: 'Jessica', nota: 9.1},
    {nome: 'Leonardo', nota: 3.4}
]

// Versão com for

function filtraAlunos() {
    let alunosAprovados = [];
    
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 6) {
            alunosAprovados.push({
                nome: alunos[i].nome,
                nota: alunos[i].nota
            })
        }
    }
    
    return alunosAprovados;
}

const alunosFiltrados = filtraAlunos();

console.log(alunosFiltrados);

// Versão com filter

function filtraAlunos2(aprovados) {
    return aprovados.filter(alunos => alunos.nota >= 6);
}

const alunosFiltrados2 = filtraAlunos2(alunos);

console.log(alunosFiltrados2);