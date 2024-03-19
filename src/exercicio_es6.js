const alunos = [
  { nome: 'João', nota: 5 },
  { nome: 'Maria', nota: 8 },
  { nome: 'Luis', nota: 6 },
  { nome: 'Júlia', nota: 10 },
  { nome: 'Giovana', nota: 4 },
  { nome: 'Alexandra', nota: 9 },
]

function filtroAprovados(listAlunos) {
  const nomes = [];
  listAlunos.forEach(aluno => {
    if (aluno.nota >= 6) {
      nomes.push(aluno.nome);
    }
  });
  return nomes;
}

const listAlunosAprovados = filtroAprovados(alunos);
console.log(`Alunos aprovados são: ${listAlunosAprovados}`);
