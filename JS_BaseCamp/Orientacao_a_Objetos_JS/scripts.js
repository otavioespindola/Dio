class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (this._saldo < valor) {
            return "Operação Negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor (agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }  
    get cartaoCredito() {
        return this._cartaoCredito
    }  
    set cartaoCredito(valor = false) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = "poupanca";
        this._cartaoCredito = cartaoCredito;
    }  
}

class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = "universitaria";
        this._cartaoCredito = cartaoCredito;
    }  

    sacar(valor) {
        if(valor>500){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor
    }
}
