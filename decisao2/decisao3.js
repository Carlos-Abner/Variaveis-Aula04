let lado1 = 10
let lado2 = 10
let lado3 = 8

if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é equilatero.")
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é isósceles.")
} else {
    console.log("O triângulo é escaleno.")
}