import { Endereco } from "../endereco/endereco"
import { Aluno } from "../aluno/aluno";
import { Professor } from "../professor/professor";
import { TecnicoAdministrativo } from "../tecnico-administrativo/tecnico-administrativo";


class Campus{

   private _nome: string = " ";
  
   private _endereco!: Endereco;
  
   private _alunos: Array<Aluno> = [];
  
    private _professores: Array<Professor> = [];
   
    private _tecnicosAdministrativos: Array<TecnicoAdministrativo> = [];
   
 
    public get nome(): string {
      return this._nome;
   }
   public set nome(value: string) {
      this._nome = value;
   }

    public get endereco(): Endereco {
      return this._endereco;
   }
   public set endereco(value: Endereco) {
      this._endereco = value;
   }

    public get alunos(): Array<Aluno> {
      return this._alunos;
   }
   public set alunos(value: Array<Aluno>) {
      this._alunos = value;
   }

   public get professores(): Array<Professor> {
      return this._professores;
   }
   public set professores(value: Array<Professor>) {
      this._professores = value;
   }

   public get tecnicosAdministrativos(): Array<TecnicoAdministrativo> {
      return this._tecnicosAdministrativos;
   }
   public set tecnicosAdministrativos(value: Array<TecnicoAdministrativo>) {
      this._tecnicosAdministrativos = value;
   }

   constructor(nome: string, endereco:Endereco, alunos: Array <Aluno>,professor: Array <Professor>, tecnicosAdministrativos: Array<TecnicoAdministrativo>){
        this._nome = nome;
        this._endereco = endereco;
        this._alunos = alunos;
        this._professores = professor;
        this._tecnicosAdministrativos = tecnicosAdministrativos;
    }

  public adicionarProfessor(professor: Professor): void {
        if (professor.campus && professor.campus !== this) {
            throw new Error("O professor já está alocado a outro campus.");
        }

        professor.campus = this;

        if (!this._professores.includes(professor)) {
            this._professores.push(professor);
        }
    }

    
    public listarProfessores(): void {
        console.log(`Professores do Campus ${this._nome}:`);
        this._professores.forEach((professor) => {
            console.log(`Nome: ${professor.nome} ${professor.sobrenome} | Matrícula: ${professor.matricula}`);
        });
    }
    
   }

      


export{Campus}