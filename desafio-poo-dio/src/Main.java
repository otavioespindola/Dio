import br.bom.dio.desafio.dominio.Bootcamp;
import br.bom.dio.desafio.dominio.Curso;
import br.bom.dio.desafio.dominio.Dev;
import br.bom.dio.desafio.dominio.Mentoria;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Curso curso1 = new Curso();
        curso1.setTitulo("Curso de Java");
        curso1.setDescricao("Um curso muito bom sobre Java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("Curso de JS");
        curso2.setDescricao("Um curso muito bom sobre JS");
        curso2.setCargaHoraria(4);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("Mentoria de Java");
        mentoria.setDescricao("Expert em Java tirando suas dúvidas");
        mentoria.setData(LocalDate.now());


        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp Java Developer");
        bootcamp.setDescricao("O melhor bootcamp de todos os tempos");
        bootcamp.getConteudos().add(curso1);
        bootcamp.getConteudos().add(curso2);
        bootcamp.getConteudos().add(mentoria);

        Dev devOtavio = new Dev();
        devOtavio.setNome("Otávio");
        devOtavio.inscreverBootcamp(bootcamp);
        System.out.println("Conteúdos inscrito de Otávio: " + devOtavio.getConteudosInscritos());
        devOtavio.progredir();
        devOtavio.progredir();
        System.out.println("-");
        System.out.println("Conteúdos concluídos de Otávio: " + devOtavio.getConteudosConcluidos());
        System.out.println("Conteúdos inscrito de Otávio: " + devOtavio.getConteudosInscritos());
        System.out.println("XP Otávio " + devOtavio.calcularTotalXp());

        System.out.println("-------------------");

        Dev devCamila = new Dev();
        devCamila.setNome("Camila");
        devCamila.inscreverBootcamp(bootcamp);
        System.out.println("Conteúdos inscrito de Camila: " + devCamila.getConteudosInscritos());
        devCamila.progredir();
        System.out.println("-");
        System.out.println("Conteúdos concluídos de Camila: " + devCamila.getConteudosConcluidos());
        System.out.println("Conteúdos inscrito de Camila: " + devCamila.getConteudosInscritos());
        System.out.println("XP Camila " + devCamila.calcularTotalXp());
    }
}
