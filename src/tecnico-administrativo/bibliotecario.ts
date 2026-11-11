import { TecnicoAdministrativo } from './tecnico-administrativo';
import { Endereco} from '../endereco/endereco';
class Bibliotecario extends TecnicoAdministrativo {

    private _CRB: number = 0;
    
    
    public get CRB(): number {
        return this._CRB;
    }
    public set CRB(value: number) {
        this._CRB = value;
    }

    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[], sexo: string, cpf: string, nacionalidade: string, salario: number, CRB: number) {
        super(nome, sobrenome, idade, brasileiro, enderecos, sexo, cpf, nacionalidade, salario);
        this._CRB = CRB;
    }


}
export {Bibliotecario};