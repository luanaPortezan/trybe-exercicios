"use strict";
// Primeiro, a função para calcular a área de um quadrado. A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
// A segunda função calculará a área de um retângulo. A fórmula para o cálculo é multiplicar a medida da base pela medida da altura. A = b * h
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
// A terceira calculará a área de um triângulo. A fórmula consiste em multiplicar a medida da base pela medida da altura e dividir o resultado pela metade. A = (b * h) / 2
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
// Já a quarta função, será responsável por calcular o perímetro de um polígono. Um polígono é uma forma geométrica fechada que possui lados retos. Por exemplo: triângulos, retângulos, quadrados, trapézios, hexágonos, entre outros. A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
// Para termos um exemplo com retorno de tipos diferentes. Nossa última função será responsável por verificar se um triângulo é válido com base na medida de seus lados e deve retornar um valor booleano (true ou false). Para que um triângulo exista, um de seus lados deve ser maior que a diferença absoluta entre os outros dois e menor que a soma deles. Caso queira entender melhor, consulte este artigo do Mundo Educação.
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
