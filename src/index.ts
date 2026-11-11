import { Endereco } from './endereco/endereco';
import { Aluno, SituacaoAluno } from './aluno/aluno';
import { Professor } from './professor/professor';
import { Bibliotecario } from './tecnico-administrativo/bibliotecario';
import { Psicologo } from './tecnico-administrativo/psicologo';
import { Campus } from './campus/campus';
import { Evento } from './evento/evento';


const endereco1 = new Endereco("12345-678", 123, "Rua Dos Bancários", "Centro", "Simão Dias", "Sergipe");
const endereco2 = new Endereco("98765-432", 456, "Rua da Bica", "Boa Vista", "Lagarto", "Sergipe");
const endereco3 = new Endereco("23483-876", 321, "Rua São Cristóvão", "Atalaia", "Aracaju", "Sergipe");


const felipe = new Aluno("Felipe", "Silva", 20, true, [endereco1], "Masculino", "987.654.321-00", "Engenharia", SituacaoAluno.FORMANDO);
const jorge = new Aluno("Jorge", "Domingos", 22, true, [endereco1], "Masculino", "149.037.720-47", "Arquitetura", SituacaoAluno.MATRICULADO);


const luiz = new Professor("Luiz", "Oliveira", 40, false, [endereco1, endereco2], "Masculino", "123.456.789-00", 5000);
const diego = new Professor("Diego", "Armando", 40, true, [endereco3], "Masculino", "312.536.890-16", 5000);


const maria = new Bibliotecario("Maria", "Souza", 30, true, [endereco2], "Feminino", "456.789.123-00", "Brasileira", 12345, 5000);
const igor = new Psicologo("Igor", "Asaka", 33, false, [endereco2], "Masculino", "223.444.534-55", "Japonês", 1632, 4000);


console.log("--- TESTANDO CAMPUS E ALOCAÇÃO DE PROFESSORES ---");

const campusLagarto = new Campus("IFS - Campus Lagarto", endereco1, [felipe], [], [igor]);
const campusAracaju = new Campus("IFS - Campus Aracaju", endereco3, [jorge], [], [maria]);


campusLagarto.adicionarProfessor(luiz);
campusAracaju.adicionarProfessor(diego);


campusLagarto.listarProfessores();
campusAracaju.listarProfessores();


console.log("\n[Tentando alocar um professor em dois campi simultaneamente...]");
try {
    campusAracaju.adicionarProfessor(luiz);
} catch (error: any) {
    console.log(`Erro capturado com sucesso: ${error.message}`);
}

console.log("\n--- TESTANDO EVENTOS E PARTICIPANTES ---");

const eventoTecnologia = new Evento("Semana de Tecnologia do IFS", endereco1);

eventoTecnologia.inscreverParticipante(felipe);
eventoTecnologia.inscreverParticipante(luiz);

console.log("\n[Tentando inscrever o Felipe novamente no mesmo evento...]");
eventoTecnologia.inscreverParticipante(felipe);

console.log("");
eventoTecnologia.listarParticipantes();

console.log("");
felipe.listarEventosInscritos();
luiz.listarEventosInscritos();






 




 

