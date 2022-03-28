function validaArray(arr, num) {

    try {

        if (!arr || !num) throw new ReferenceError("Envie todos os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo Object");
        if (typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo 'number'");

        if (arr.length !== num) throw new RangeError(`Tamanho do array (${arr.length}) não é igual ao num (${num}) `);

        return arr;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Erro de referência!");            
            console.log(error.message);
        }
        else if (error instanceof TypeError) {
            console.log("Erro de tipo!");
            console.log(error.message);
        }
        else if (error instanceof RangeError) {
            console.log("Erro de tamanho!");            
            console.log(error.message);
        } 
        else {
            console.log('Erro não esperado:' + error)
        }
    }
}

const array = [1,2,3,4,5,6]

console.log(validaArray(array, 6));