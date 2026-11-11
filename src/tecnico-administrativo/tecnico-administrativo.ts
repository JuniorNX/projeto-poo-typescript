import { Endereco } from '../endereco/endereco';
import {Pessoa} from '../pessoa/pessoa';
abstract class TecnicoAdministrativo extends Pessoa {

   private _nacionalidade: string = '';
   private _salario: number = 0;

    public get salario(): number {
        return this._salario;
    }
    set salario(value: number) {
        this._salario = value;
    }
    
   
   public get nacionalidade(): string {
        return this._nacionalidade;
    }
    public set nacionalidade(value: string) {
        this._nacionalidade = value;
    }

    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[], sexo: string, cpf: string, nacionalidade: string, salario: number) {
    super(nome, sobrenome, idade, brasileiro, enderecos, sexo, cpf);
    this.nacionalidade = nacionalidade;
    this.salario = salario;
    this.matricula = this.gerarMatricula();
}

protected gerarMatricula(): number {
    return Math.floor(Math.random() * 9000) + 1000;
}
}
export {TecnicoAdministrativo}