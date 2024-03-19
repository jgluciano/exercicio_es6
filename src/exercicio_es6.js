const alunos = [
  { nome: 'João', nota: 5 },
  { nome: 'Maria', nota: 8 },
  { nome: 'Luis', nota: 6 },
  { nome: 'Júlia', nota: 10 },
  { nome: 'Giovana', nota: 4 },
  { nome: 'Alexandra', nota: 9 },
];

const filtroAprovados = (listAlunos) => {
  return listAlunos.filter(aluno => aluno.nota >= 6).map(aluno => aluno.nome);
};

const listAlunosAprovados = filtroAprovados(alunos);
console.log(`Alunos aprovados são: ${listAlunosAprovados}`);
