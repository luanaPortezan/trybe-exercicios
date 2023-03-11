// Tipos de coleção
// Chegou a hora de conhecer mais sobre os dois tipos de coleção mais importantes do Typescript: Arrays (que você provavelmente já trabalhou bastante ao longo do curso) e Tuplas.

// Bora lá! 🚀

// Arrays
// Arrays são conjuntos de valores de mesmo tipo. Para declará-los, você pode adicionar o tipo esperado do array com a sintaxe let arrayName: type[] = [...];

// Copiar
// let names: string[] = ["Mary Joe", "Alan Joe"];
// Tuplas
// Tuplas permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fixas. Em JavaScript, elas são representadas como arrays (por isso a semelhança!), mas são estruturas diferentes. Por exemplo, você pode querer representar um valor como um par de uma string e um número.

// Para declarar uma tupla, use a sintaxe let variableName: [type, type, ...]:

// Copiar
// let fullName: [string, string] = ["Jane", "Doe"];
// let person: [string, number] = ["Jane Doe", 35];
// let car: [string, string, number] = ["Ford", "F400", 10];