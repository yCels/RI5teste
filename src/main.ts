import Descritor from "./descricaoEmpresa"
import Empresa from "./empresa"
import Endereco from "./endereco"
import Funcionario from "./funcionario"
import Telefone from "./telefone"

let endereco = new Endereco(220, 'Rua Porto Novo', 'Jardim Satélite', 'São José dos Campos')
let telefone = new Telefone('012', '9912309442')
let funcionario = new Funcionario('Lucas Moura', '00088877723', '1877764532', endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa('TECSAT', 'WallTech', '000000000', endereco, funcionarios)

let descritor = new Descritor
console.log(descritor.descrever(empresa, funcionario))