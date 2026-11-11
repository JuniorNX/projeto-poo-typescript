import { Endereco } from '../endereco/endereco';
import {Pessoa} from '../pessoa/pessoa';
import {Projeto} from '../projeto/projeto';
class Aluno extends Pessoa implements Projeto {


    private _curso: string = '';
    
    private _situacao: SituacaoAluno = SituacaoAluno.ATIVO;
    
    
     public get curso(): string {
        return this._curso;
    }
    public set curso(value: string) {
        this._curso = value;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }
    public set situacao(value: SituacaoAluno) {
        this._situacao = value;
    }

constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[],sexo: string,cpf: string, curso: string, situacao: SituacaoAluno){
    super(nome, sobrenome, idade, brasileiro, enderecos, sexo, cpf);
    this.matricula = this.gerarMatricula();
    this.curso = curso;
    this.situacao = situacao;

}
    
 protected gerarMatricula(): number {
    let ano:number= new Date().getFullYear();
    let numero: number = Math.floor(Math.random() *(9000 - 10000 + 1 ) + 10000);
    return Number (`${ano}${numero}`);


}


submeterProjetoPesquisa(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de um aluno.");
    }
    submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de extensão de um aluno.");
    }


}

enum SituacaoAluno {
ATIVO = "Ativo",
MATRICULADO = "Matriculado",
TRANCADO = "Trancado",
CONCLUIDO = "Concluído",
CANCELADO = "Cancelado",
FORMANDO = "Formando"
}

export {Aluno, SituacaoAluno};