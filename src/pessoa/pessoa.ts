import { Endereco } from "../endereco/endereco";
import { Evento } from "../evento/evento";

export abstract class Pessoa{

    private _matricula: number = 0;
    private _nome: string = '';
    private _sobrenome: string = '';
    private _idade: number = 0;
    private _brasileiro: boolean = true;
    private _enderecos: Endereco[] = [];
    private _sexo: string = ''; 
    private _CPF: string = '';
    private _eventos: Evento[] = [];
    

  private static quantidadePessoas: number = 0;

  public get eventos(): Evento[] {
        return this._eventos;
    }
    public set eventos(value: Evento[]) {
        this._eventos = value;
    }

    public get matricula(): number {
        return this._matricula;
    }
    protected set matricula(value: number) {
        this._matricula = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }

    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public get brasileiro(): boolean {
        return this._brasileiro;
    }

    public set brasileiro(value: boolean) {
        this._brasileiro = value;
    }
   
    public get enderecos(): Endereco[] {
        return this._enderecos;
    }

    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(value: string) {
        this._sexo = value;
    }

    public get CPF(): string {
        return this._CPF;
    }
    public set CPF(value: string) {
        let padraoCPF: RegExp =/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
        if (padraoCPF.test(value)) {
            this._CPF = value;
        }
        else {
            throw new Error("CPF inválido");
        }
    }


constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[], sexo: string = '', CPF: string = '', ){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.brasileiro = brasileiro;
    this.enderecos = enderecos;
    this.sexo = sexo;
    this.CPF = CPF;
    Pessoa.quantidadePessoas++;
}

exibirnomecompleto(): string{
   return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
}

recuperarEndereco(posicao: number): Endereco{
    return this.enderecos[posicao]!;
}  
 static getquantidadePessoas(): number{
    return Pessoa.quantidadePessoas;
}
protected abstract gerarMatricula(): number;

public listarEventosInscritos(): void {
        console.log(`Eventos em que ${this.nome} ${this.sobrenome} está inscrito(a):`);
        if (this._eventos.length === 0) {
            console.log("Nenhum evento registrado.");
            return;
        }
        this._eventos.forEach(e => {
            console.log(`- ${e.nome}`);
        });


}

public adicionarEvento(evento: Evento): void {
    if (!this._eventos.includes(evento)) {
        this._eventos.push(evento);
    }
}
}

