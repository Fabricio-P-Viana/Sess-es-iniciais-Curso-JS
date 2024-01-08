// mesmo metodo com comportamentos diferentes


// super class
function Conta(agencia,conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo) {
        console.log("saldo insuficiente");
        this.verSaldo();
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag./c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function CC(agecia,conta,saldo,limite) { // conta corrente
    Conta.call(this,agecia,conta,saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) { // polimorfismo
    if(valor > this.saldo + this.limite) {
        console.log("saldo insuficiente");
        this.verSaldo();
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agecia,conta,saldo) { // conta corrente
    Conta.call(this,agecia,conta,saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const contaCorrente = new CC(11,22,0,100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);


const poupanca = new CP(11,22,0);
poupanca.depositar(10);
poupanca.sacar(110);
poupanca.sacar(1);
