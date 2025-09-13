import Empresa from "./empresa"
import Funcionario from "./funcionario"

export default class Descritor {
    public descrever = (emp: Empresa, fun: Funcionario) => {
        return (`
            Razão Social: ${emp.razaoSocial}
            Nome Fantasia: ${emp.nomeFantasia}
            CNPJ: ${emp.cnpj}
            Endereço
            Rua: ${emp.endereco.rua} Bairro: ${emp.endereco.bairro} Cidade: ${emp.endereco.cidade} Número: ${emp.endereco.numero}

            Funcionários:
            Nome: ${fun.nome}
            Matricula: ${fun.matricula}
            CPF: ${fun.cpf}
            Rua: ${fun.endereco.rua} Bairro: ${fun.endereco.bairro} Cidade: ${fun.endereco.cidade} Número: ${fun.endereco.numero}`
            
        )
    }
}