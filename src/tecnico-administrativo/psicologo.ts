import { TecnicoAdministrativo } from "./tecnico-administrativo";
import { Endereco} from "../endereco/endereco";
class Psicologo extends TecnicoAdministrativo{

    private _CRP: number = 0;
    
    public get CRP(): number {
        return this._CRP;
    }
    public set CRP(value: number) {
        this._CRP = value;
    }

constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[], sexo: string, cpf: string, nacionalidade: string, salario: number,CRP: number) {
        super(nome, sobrenome, idade, brasileiro, enderecos, sexo, cpf, nacionalidade, salario);
        this._CRP = CRP
    }

}
export {Psicologo}