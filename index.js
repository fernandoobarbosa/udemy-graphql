const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const perfis = [
  {
    id: 1,
    nome: 'Administrador'
  },
  {
    id: 2,
    nome: 'Comum'
  }
]

const usuarios = [
  {
    id: 1,
    nome: 'Diego',
    email: 'diego@email.com',
    idade: 23,
    perfil_id: 1
  },

  {
    id: 2,
    nome: 'Gabriel',
    email: 'gabrielpastel@umail.com',
    idade: 15,
    perfil_id: 1
  },
  {
    id: 3,
    nome: 'Lucas',
    email: 'lucas@tottehnam.com',
    idade: 30,
    perfil_id: 2
  }
]

// const typeDefs = gql``

const resolvers = {
  Usuario: {
    salario (usuario) {
      return usuario.salario_real
    },
    perfil (usuario) {
      return perfis.find((p) => p.id === usuario.perfil_id)
    }
  },
  Produto: {
    precoComDesconto: (produto) => produto.preco * (1 - produto.desconto)
  },
  Query: {
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
}

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
