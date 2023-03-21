class Superclass {
  isSuper: boolean
  constructor() {
    this.isSuper = true
  };

  public sayHello(): void {
    console.log('Olá mundo');
  }

  // protected sayHello(): void { // Mude a visibilidade do método `sayHello` de _public_ para _protected_.
  //   console.log('Olá mundo!');
  // }
};

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
  // public sayHello2(): void {// Crie, na _Subclass_, um método público chamado `sayHello2`.
  //   this.sayHello(); // Chame o método `sayHello` dentro do método `sayHello2`.
  // }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
}

// const myFunc = (object: Subclass) => { // Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.
//   object.sayHello2();
// };


const sup = new Superclass(); // Comente a criação da instância da Superclass
const sub = new Subclass();

myFunc(sup); // Comente a chamada da função que possui o objeto do tipo Superclass como parâmetro.
myFunc(sub);

// Mude a visibilidade do método `sayHello` de _protected_ para _private_. O que acontece?
// Ao mudar a visibilidade de _protected_ para _private_, o método `sayHello2` da _Subclass_ deixa de poder acessar o método `sayHello` definido na _Superclass_. Isso acontece pois um método privado só pode ser acessado na classe que o define.