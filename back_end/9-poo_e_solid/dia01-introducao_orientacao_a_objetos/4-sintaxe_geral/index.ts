//crianção da classe
class Person {
  //atributos
  name: string;
  height: number;
  weight: number;

// métodos
// método construtor
  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n; //atribui valores de fora aos atributos do objeto
    this.height = h;
    this.weight = w;
  }

// método qualquer de exemplo
  sleep() {
    console.log(`${this.name}: is sleeping, zzzzzzz`);
  }
}



// criação dos objetos
const p1 = new Person('Maria', 171, 58); // Saída: Creating person Maria
const p2 = new Person('João', 175, 66); // Saída: Creating person João
console.log(p1.name, p1.height, p1.weight); // Saída: Maria 171 58
console.log(p2.name, p2.height, p2.weight); // Saída: João 175 66

// Acesso aos atributos
p1.sleep(); // Saída: Maria is sleeping, zzzzzzz
p2.sleep(); // Saída: João is sleeping, zzzzzzz

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/