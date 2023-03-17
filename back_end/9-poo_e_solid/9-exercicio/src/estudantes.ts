class Estudante {
  private _matricula: number;
  private _nome: string;
  private _notasProvas: number[];
  readonly _notasTrabalho: number[];
  
  constructor( matricula: number, nome: string, notasProvas: number[], notasTrabalho: number[] ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalho = notasTrabalho;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(notas: number[]) {
    if(notas.length !== 4) {
      throw Error('Quantidade errada de notas');
    }
    this.notasProvas = notas;
  }
}

const estudante1 = new Estudante( 123456, 'Portezan', [10, 8, 9, 7], [10, 10])
const estudante2 = new Estudante( 123457, 'Will', [6, 5, 8, 7], [9, 10])
const estudante3 = new Estudante( 123458, 'Lígia', [10, 10, 10, 10], [10, 10])

console.log(estudante1);

//  estudante2.notasProvas = estudante3.notasProvas
console.log('Notas de prova:', estudante2.notasProvas);
console.log('Notas de trabalho:', estudante2._notasTrabalho);
