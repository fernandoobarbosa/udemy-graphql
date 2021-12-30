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
    perfil_id: 1,
    vip: true,
    status: 'ATIVO'
  },

  {
    id: 2,
    nome: 'Gabriel',
    email: 'gabrielpastel@umail.com',
    idade: 15,
    perfil_id: 1,
    vip: true,
    status: 'INATIVO'
  },
  {
    id: 3,
    nome: 'Lucas',
    email: 'lucas@tottehnam.com',
    idade: 30,
    perfil_id: 2,
    vip: false,
    status: 'BLOQUEADO'
  }
]

module.exports = { usuarios, perfis }
