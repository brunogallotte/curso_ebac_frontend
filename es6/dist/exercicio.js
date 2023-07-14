"use strict";

var alunos = [{
  nome: 'Bruno',
  nota: 10
}, {
  nome: 'Fudencio',
  nota: 4.6
}, {
  nome: 'Claudia',
  nota: 7.0
}, {
  nome: 'Roberta',
  nota: 5.9
}, {
  nome: 'Kleber',
  nota: 8.6
}, {
  nome: 'Jessica',
  nota: 9.1
}, {
  nome: 'Leonardo',
  nota: 3.4
}];

// Versão com for

function filtraAlunos() {
  var alunosAprovados = [];
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
      alunosAprovados.push({
        nome: alunos[i].nome,
        nota: alunos[i].nota
      });
    }
  }
  return alunosAprovados;
}
var alunosFiltrados = filtraAlunos();
console.log(alunosFiltrados);

// Versão com filter

function filtraAlunos2(aprovados) {
  return aprovados.filter(function (alunos) {
    return alunos.nota >= 6;
  });
}
var alunosFiltrados2 = filtraAlunos2(alunos);
console.log(alunosFiltrados2);