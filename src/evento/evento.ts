import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

class Evento {

    private _nome: string;
    private _endereco: Endereco;
    private _participantes: Array<Pessoa> = [];

    constructor(nome: string, endereco: Endereco) {
        this._nome = nome;
        this._endereco = endereco;
    }

    public get nome(): string {
        return this._nome;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }

    public get participantes(): Array<Pessoa> {
        return this._participantes;
    }

    public inscreverParticipante(participante: Pessoa): void {
        if (!this._participantes.includes(participante)) {
            this._participantes.push(participante);
            participante.adicionarEvento(this);
        } else {
            console.log(`O participante ${participante.nome} já se encontra inscrito neste evento.`);
        }
    }

    public listarParticipantes(): void {
        console.log(`Participantes do evento "${this._nome}":`);
        if (this._participantes.length === 0) {
            console.log("Nenhum participante inscrito.");
            return;
        }
        this._participantes.forEach(p => {
            console.log(`- ${p.nome} ${p.sobrenome} (Matrícula: ${p.matricula})`);
        });
    }
}

export { Evento };