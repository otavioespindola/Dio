
public class Main {

	public static void main(String[] args) {
		
		Cliente otavio = new Cliente();
		otavio.setNome("Otavio");
		
		Conta cc = new ContaCorrente(otavio);
		Conta poupanca = new ContaPoupanca(otavio);
		
		Conta contaEmpresa1 = new ContaEmpresarial(otavio, 2);
		Conta contaEmpresa2 = new ContaEmpresarial(otavio);
		
		
		cc.depositar(100);
		cc.transferir(50, poupanca);
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
		contaEmpresa1.depositar(100);
		contaEmpresa1.transferir(50,	poupanca);
		contaEmpresa1.imprimirExtrato();
		contaEmpresa2.depositar(100);
		contaEmpresa2.transferir(50,	poupanca);
		contaEmpresa2.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
