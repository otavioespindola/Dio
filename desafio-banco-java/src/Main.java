
public class Main {

	public static void main(String[] args) {
		
		Cliente otavio = new Cliente();
		otavio.setNome("Otavio");
		
		Conta cc = new ContaCorrente(otavio);
		Conta poupanca = new ContaPoupanca(otavio);
		
		cc.depositar(100);
		cc.transferir(50, poupanca);
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
