class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
    
    Obs: Usando essa sintaxe é necessário indicar explicitamente 
    logo antes do nome do atributo se ele é public, private, protected ou readonly
  */
  // constructor(public name: string, private birthDate: Date) { }
  constructor(public name: string, protected birthDate: Date) { } //// Protected: classe filha pode ler e escrever, mas acessos externos não

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

/*
Saída (código rodado em Mar/2022):
1
Tigre está andando!
*/



// const main = (animal: Animal) => {
//   console.log(animal.age);
//   animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
// }

// main(tiger);



class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();

/*
Saída (código executado em Mar/2022):
4
Papagaio está voando!
*/



// class Animal {
//   constructor(private birthDate: Date) { } // Repare no private

// }
// class Bird1 extends Animal {
//   showBirthDate() {
//     console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
//   }
// }

// class Bird2 extends Animal {
//   showBirthDate() {
//     console.log(this.birthDate); // Okay!
//   }
// }



// class Animal {
//   constructor(protected birthDate: Date) { }
// }
// class Bird1 extends Animal {
//   constructor(public name: string) { } // ERRO: constructor deve respeitar o contrato da superclasse
// }



// class Animal {
//   constructor(protected birthDate: Date) { }
// }
// class Bird2 extends Animal {
//   constructor(public name: string) {
//     super(new Date());
//   }
// }