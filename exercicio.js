function Funcionario(nome, cargo, salario, grau) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.grau = grau;

    
}

function Servidor(nome) {
    Funcionario.call(this, nome, "Concursado", 12000, "superior");
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 1500, "cursando");
}

const funcionario1 = new Servidor("Manoel"); 
const funcionario2 = new Estagiario("Jailton"); 



console.log(funcionario1)
console.log(funcionario2)