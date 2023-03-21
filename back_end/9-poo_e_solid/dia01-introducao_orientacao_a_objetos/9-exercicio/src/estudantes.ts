class Estudante {
  private _matricula: number;
  private _nome: string;
  private _notasProvas: number[];
  // readonly _notasTrabalho: number[];
  private _notasTrabalho: number[];
  
  constructor( 
    matricula: number, 
    nome: string, 
    notasProvas: number[], 
    notasTrabalho: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalho = notasTrabalho;
  }

  get matricula(): number {
    return this._matricula;
  }

  set matricula(value: number) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._nome = value;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(notas: number[]) {
    if (notas.length !== 4) {
      throw Error('Quantidade errada de notas! São quatro notas de provas');
    }
    this._notasProvas = notas;
  }

  get notasTrabalho(): number[] {
    return this._notasProvas;
  }

  set notasTrabalho(notas: number[]) {
    if (notas.length !== 2) {
      throw Error('Quantidade errada de notas! São duas notas de trabalhos');
    }
    this._notasTrabalho = notas;
  }

  somaNotas(): number {
    return [...this.notasProvas, ...this.notasTrabalho]
      .reduce((notaAnterior, nota) => {
        const proximaNota = nota + notaAnterior;
        return proximaNota;
      }, 0);
  }

  somaNotaMedia(): number {
    const somaNotas = this.somaNotas();
    const divisor = this.notasProvas.length + this.notasTrabalho.length;

    return Math.round(somaNotas / divisor);
  }
}

// parte 1
// const estudante1 = new Estudante(123456, 'Portezan', [10, 8, 9, 7], [10, 10]);
// const estudante2 = new Estudante(123457, 'Will', [6, 5, 8, 7], [9, 10]);
// const estudante3 = new Estudante(123458, 'Lígia', [10, 10, 10, 10], [10, 10]);

// console.log(estudante1);

// //  estudante2.notasProvas = estudante3.notasProvas
// console.log('Notas de prova:', estudante2.notasProvas);
// console.log('Notas de trabalho:', estudante2._notasTrabalho);

// console.log('Notas de prova:', estudante3.notasProvas);

// parte 2
const personOne = new Estudante(
  123456,
  'Maria da Silva', 
  [25, 20, 23, 23],
  [45, 45],
);

personOne.notasProvas = [25, 20, 23, 23];
personOne.notasTrabalho = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.somaNotas());
console.log('Média de todas as notas: ', personOne.somaNotaMedia());