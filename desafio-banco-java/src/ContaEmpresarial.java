
public class ContaEmpresarial extends Conta{

	private double taxa = 1.0;

	public ContaEmpresarial(Cliente cliente) {
		super(cliente);
		
	}
	public ContaEmpresarial(Cliente cliente, double taxa) {
		super(cliente);
		this.taxa = taxa;
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("======= Extrato de Conta Empresa ==========");
		super.imprimirInfosComuns();
	}
	
	@Override
	public void transferir(double valor, Conta contaDestino) {
		this.sacar((valor + taxa));
		contaDestino.depositar(valor);		
	}

}
