
// const listaDeCompras = [
//     { nome: 'Arroz', valor: 5.99, promotion: false },
//     { nome: 'Feijão', valor: 4.50, promotion: true },
//     { nome: 'Macarrão', valor: 3.25, promotion: false },
//     { nome: 'Carne', valor: 20.00, promotion: false },
//     { nome: 'Frango', valor: 15.75, promotion: true },
//     { nome: 'Leite', valor: 3.80, promotion: false },
//     { nome: 'Ovos', valor: 7.20, promotion: true },
//     { nome: 'Queijo', valor: 12.50, promotion: false },
//     { nome: 'Tomate', valor: 6.40, promotion: false },
//     { nome: 'Cebola', valor: 2.30, promotion: false },
//     { nome: 'Alface', valor: 4.10, promotion: true },
//     { nome: 'Batata', valor: 3.60, promotion: false },
//     { nome: 'Cenoura', valor: 2.80, promotion: true },
//     { nome: 'Maçã', valor: 5.20, promotion: false },
//     { nome: 'Banana', valor: 4.00, promotion: true },
//     { nome: 'Pão', valor: 3.00, promotion: false },
//     { nome: 'Açúcar', valor: 2.50, promotion: true },
//     { nome: 'Óleo', valor: 6.30, promotion: false },
//     { nome: 'Sal', valor: 1.50, promotion: false },
//     { nome: 'Café', valor: 7.80, promotion: true }
//   ];

// //  O PUSH ADICIONA A LISTA
// // O POP REMOVE O ULTIMO DA LISTA

//   function getPromotionProducts(list) {
//     let promotionList = []
//     for (let index = 0; index < list.length; index++) {
//         if (list[index].promotion===true) {
//             promotionList.push(list[index])
//         }
//         console.log(promotionList);
        
//     }
//   }
//   getPromotionProducts(listaDeCompras)

// ------------------------------------------------------

// Crie um array contendo os números [1, 2, 3, 4]. Use o método push para adicionar o número 5 ao final do array. Exiba o array após a operação.

// let arrayDeNumeros = [1,2,3,4]

// arrayDeNumeros.push(5)
// console.log(arrayDeNumeros);


// ------------------------------------------------------

// Adicionar vários elementos ao final do array

// let arrayDeNumeros = [1,2,3,4]

// arrayDeNumeros.push(5,6,7,8,9)
// console.log(arrayDeNumeros);


// ------------------------------------------------------

// Crie um array com os nomes ['Maria', 'João', 'Ana']. Use o método push para adicionar os nomes 'Carlos' e 'Pedro' ao final do array. Exiba o array após a operação.

// let arrayDeNomes = ["Maria","João","Ana"]

// arrayDeNomes.push("Carlos", "Pedro")
// console.log(arrayDeNomes);


// ------------------------------------------------------

// Criar um array de objetos e adicionar um novo objeto

// let Array = [
//     { nome: 'Arroz', valor: 5.99, promotion: false },
//     { nome: 'Feijão', valor: 4.50, promotion: true },
//     { nome: 'Macarrão', valor: 3.25, promotion: false },
// ]

// let novoObjeto = { nome: 'Tapioca', valor: 4.29, promotion: false }
// let novoObjeto2 = { nome: 'Cuscuz', valor: 2.29, promotion: false }

// Array.push(novoObjeto,novoObjeto2);
// console.log(Array);


// ------------------------------------------------------

// Crie um array de objetos com o seguinte conteúdo:
// const pessoas = [
//   { nome: 'Lucas', idade: 25 },
//   { nome: 'Fernanda', idade: 30 }
// ];

// let array = [
//     { nome: "Lucas", idade: 25 },
//     { nome: "Fernanda", idade: 30 },
// ];
// console.log(array);


// ------------------------------------------------------

// Adicionar elementos a um array vazio

// let arrayVazio = []
// let elemento1 = { nome: 'Tapioca', valor: 4.29, promotion: false }
// let elemento2 = { nome: 'Cuscuz', valor: 2.29, promotion: false }

// arrayVazio.push(elemento1,elemento2)
// console.log(arrayVazio);


// ------------------------------------------------------

// Crie um array vazio e adicione os números de 1 a 10 usando o método push. Exiba o array após cada inserção.

// let arrayDeNumeros = [];

// for (let index = 1; index <= 10; index++) {
//     arrayDeNumeros.push(index)
    
// }
// console.log(arrayDeNumeros);


// Remover o último número de um array
// Crie um array com os números [10, 20, 30, 40, 50]. Use o método pop para remover o último número do array. Exiba o array após a operação.

// let lista = [10, 20, 30, 40, 50];

// lista.pop();
// console.log(lista);


// ------------------------------------------------------

// Crie um array com os nomes ['Ana', 'Beatriz', 'Carlos', 'Denise']. Use o método pop para remover o último nome do array. Exiba o array após a operação.

// let arrayNomes = [
//     'Ana', 'Beatriz', 'Carlos', 'Denise'
// ]

// arrayNomes.pop()
// console.log(arrayNomes);

// ------------------------------------------------------

// Crie um array com os números [100, 200, 300, 400, 500]. Remova o último número usando o método pop e armazene esse valor em uma variável. Exiba o valor removido e o array restante.

// let arrayDeNumeros = [100, 200, 300, 400, 500]
// let removido = arrayDeNumeros.pop()
// console.log(removido);


// ------------------------------------------------------

// Crie um array com os números [5, 10, 15]. Use o método push para adicionar o número 20 ao final do array. Em seguida, use o método pop para remover o último número. Exiba o array após cada operação.

// let numeros = [5, 10, 15]

// numeros.push(20)
// console.log(numeros);

// // numeros.pop()
// // console.log(numeros);
