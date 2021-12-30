const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola: () => 'Bem vindo ao mundo GraphQL!',
  horaAtual: () => new Date().toLocaleTimeString('pt-BR'),
  dataAtual: () => new Date(),
  usuarioLogado: () => ({
    id: 1,
    nome: 'Fulano',
    email: 'fulano@email.com',
    idade: 32,
    salario_real: 1234.56,
    vip: true,
    perfil_id: 1
  }),
  produtoEmDestaque: () => ({
    nome: 'Notebook',
    preco: 1299.99,
    desconto: 0.5
  }),
  numerosMegaSena: () =>
    Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort((a, b) => a - b),
  usuarios: () => usuarios,
  usuario (_, args) {
    return usuarios.find((usuario) => usuario.id === args.id)
  },
  perfis: () => perfis,
  perfil (_, args) {
    return perfis.find((perfil) => perfil.id === args.id)
  }
}
