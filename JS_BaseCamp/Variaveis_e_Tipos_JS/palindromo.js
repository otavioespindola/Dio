let palavra = "abba";

// Método 1: utilizando metodos e desconsiderando espaços
palavra.replace(/ /g,"") == palavra.replace(/ /g,"").split("").reverse().join("") 
? console.log("É palindromo") : console.log("Não é palindromo")

//Metodo 2: utilizando FOR e esperando apenas 1 palavra sem espaço

function verificaPalindromo(string) {
    for (let i = 0; i < string.length/2; i++) {
        if (string[i] !== string[string.length -1 - i]) {
            return false
        }
    }
    return true
}

console.log(verificaPalindromo(palavra));