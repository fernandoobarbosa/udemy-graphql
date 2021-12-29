const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # Pontos de entrada do nosso servidor
  type Query {
    ola: String!
    horaAtual: String
    dataAtual: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
  }
`

const resolvers = {
  Usuario: {
    salario (usuario) {
      return usuario.salario_real
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
      vip: true
    }),
    produtoEmDestaque: () => ({
      nome: 'Notebook',
      preco: 1299.99,
      desconto: 0.5
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
