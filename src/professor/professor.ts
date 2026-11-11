import {Pessoa} from '../pessoa/pessoa';
import {Projeto} from '../projeto/projeto';
import { Endereco } from '../endereco/endereco';
import { Campus } from '../campus/campus';
class Professor extends Pessoa implements Projeto{

    private _salario: number = 0;

    private _campus?: Campus | undefined;
    
    
    
    public get campus(): Campus | undefined {
        return this._campus;
    }
    public set campus(value: Campus | undefined) {
        this._campus = value;
    }
   
    
    public get salario(): number {
        return this._salario;
    }
    
    public set salario(value: number) {
        this._salario = value;
    }

constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[],sexo: string,cpf: string, salario: number){
    super(nome, sobrenome, idade, brasileiro, enderecos, sexo, cpf);
    this.salario = salario;
    this.matricula = this.gerarMatricula();
}
recuperarEndereco(posicao: number): Endereco{
    return this.enderecos[posicao]!;
}
 protected gerarMatricula(): number {
    return Math.floor(Math.random() * (90000000 - 100000000 + 1) + 100000000);
}

submeterProjetoPesquisa(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de um professor.");
    }
    submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de extensão de um professor.");
    }
}


export {Professor};