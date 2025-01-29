
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

// ------------------------------------------------------

// Dado um array de nomes, use map para criar um novo array com todos os nomes em letras maiusculas

// const names = ["ana", "maria", "joão"]

// const resultado = names.map(name => name.toUpperCase())

// console.log(resultado);

// ------------------------------------------------------


// Dado um array de objetos, use map para criar um novo array contendo apenas os valores de uma propriedade específica.

// const users = [
//     { id: 1, name: "Alice"},
//     { id: 2, name: "Bob"},
//     { id: 3, name: "Charlie"},
// ];

// let resultado = users.map(user => `${user.name}`)

// console.log(resultado);


// ------------------------------------------------------

// Dado um array de strings, use filter para criar um novo array contendo apenas as strings que possuem mais de 5 caracteres.

// const words = ["javascript", "map", "filter", "react", "vue"];

// let resultado = words.filter(word => word.length > 5)
// console.log(resultado);


// ------------------------------------------------------

// Dado um array que contém valores nulos ou indefinidos, use filter para criar um novo array sem esses valores.

// const mixedArray = [1, null, 2, null, 3, 4];

// const resultado = mixedArray.filter(newArray => newArray !== null)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de números, use filter para selecionar os números pares e, em seguida, map para dobrá-los.

// const numbers = [1, 2, 3, 4, 5, 6];

// const resultado = numbers.filter(number => number%2 ===0).map(number => number *2)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de nomes, use map para transformá-los em maiúsculas e filter para selecionar apenas os que têm menos de 5 caracteres.

// const names = ["Ana", "Maria", "João", "Eva", "Carlos"];

// const resultado = names.filter(name => name.length<5).map(name => name.toUpperCase())
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de produtos, use filter para retornar apenas os produtos com preço acima de 700.

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
// ];

// const resultado = products.filter(product => product.price>700)
// console.log(resultado);


// ------------------------------------------------------

// PRATICAIVOOOOOOOOOOSS

// Crie um array de números e utilize o método map para retornar um novo array com todos os números dobrados.

// const numbers = [1, 2, 3, 4, 5];
// const resultado = numbers.map(number => number*2)
// console.log(resultado);


// ------------------------------------------------------

// Dado um array de nomes, use map para criar um novo array com todos os nomes em letras maiúsculas.

// const names = ["ana", "maria", "joão"];

// const resultado = names.map(name => name.toUpperCase())
// console.log(resultado);


// ------------------------------------------------------


// Dado um array de objetos, use map para criar um novo array contendo apenas os valores de uma propriedade específica.

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const resultado = users.map(user => `${user.name}`)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de números, use filter para criar um novo array contendo apenas os números pares.

// const numbers = [1, 2, 3, 4, 5, 6];

// const resultado = numbers.filter(number => number%2===0)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de strings, use filter para criar um novo array contendo apenas as strings que possuem mais de 5 caracteres.

// const words = ["javascript", "map", "filter", "react", "vue"];

// const resultado = words.filter(word => word.length >5 )
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de objetos de usuários, filtre os usuários com idade maior ou igual a 18 anos.

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 16 },
// ];

// const idade = users.filter(user => user.age >= 18)
// console.log(idade);

// ------------------------------------------------------

// Dado um array que contém valores nulos ou indefinidos, use filter para criar um novo array sem esses valores.

// const mixedArray = [1, null, 2, null, 3, 4];

// const resultado = mixedArray.filter(array => array !== null)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de números, use filter para selecionar os números pares e, em seguida, map para dobrá-los.

// const numbers = [1, 2, 3, 4, 5, 6];

// const resultado = numbers.filter(number => number%2===0).map(number => number*2)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de nomes, use map para transformá-los em maiúsculas e filter para selecionar apenas os que têm menos de 5 caracteres.

// const names = ["Ana", "Maria", "João", "Eva", "Carlos"];

// const resultado = names.map(name => name.toUpperCase()).filter(name => name.length <5)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de usuários, use filter para selecionar apenas os usuários ativos e map para retornar um array com os nomes desses usuários.

// const users = [
//   { name: "Alice", active: true },
//   { name: "Bob", active: false },
//   { name: "Charlie", active: true },
// ];

// const resultado = users.filter(user => user.active === true).map(user => user.name )
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de strings, use map para criar tags <p> ao redor de cada string.

// const texts = ["Hello", "World", "JavaScript"];

// const resultado = texts.map(text => `<p>${text}</p>`)
// console.log(resultado);


// ------------------------------------------------------

// Dado um array de números, use filter para criar um novo array contendo apenas os números que são divisíveis por 3.

// const numbers = [1, 3, 4, 6, 9, 10, 12, 15];

// const resultado = numbers.filter(number => number %3===0)
// console.log(resultado);


// ------------------------------------------------------

// Dado um array de números, use filter para selecionar os pares e, em seguida, map para transformá-los em números ímpares somando 1.

// const numbers = [1, 2, 3, 4, 5, 6];

// const resultado = numbers.filter(number => number %2===0).map(number => number +1)
// console.log(resultado);

// ------------------------------------------------------

// Use map para formatar um array de usuários para que cada elemento seja uma string no formato: 

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];


// ------------------------------------------------------

// Dado um array de produtos, use filter para retornar apenas os produtos com preço acima de 700.

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
// ];

// const resultado = products.filter(prod => prod.price > 700)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de pedidos, use filter para retornar apenas os pedidos com quantidade maior que 1.

// const orders = [
//   { product: "Laptop", quantity: 1 },
//   { product: "Phone", quantity: 3 },
//   { product: "Tablet", quantity: 2 },
// ];

// const resultado = orders.filter(ord => ord.quantity > 1)
// console.log(resultado);

// ------------------------------------------------------

// Dado um array de objetos representando funcionários, filtre apenas aqueles cujo status seja "ativo".

// const employees = [
//   { name: "Alice", status: "ativo" },
//   { name: "Bob", status: "inativo" },
//   { name: "Charlie", status: "ativo" },
// ];

// const resultado = employees.filter(stat => stat.status === "ativo")
// console.log(resultado);


// ------------------------------------------------------

// Dado um array de alunos com suas respectivas notas, filtre apenas os alunos aprovados (nota >= 7).

// const students = [
//   { name: "Alice", grade: 6 },
//   { name: "Bob", grade: 8 },
//   { name: "Charlie", grade: 7 },
//   { name: "David", grade: 5 },
// ];

// const nota = students.filter(not => not.grade >= 7)
// console.log(nota);


// ------------------------------------------------------

// Use filter e map para obter os nomes dos alunos com idade maiores  ou igual que 25

// const students = [
//   { name: 'Alice', age: 16 },
//   { name: 'Bob', age: 18 },
//   { name: 'Charlie', age: 27 },
//   { name: 'David', age: 25 },
// ];

// const idade = students.filter(stu => stu.age >=25).map(stu => stu.name)
// console.log(idade);


// --------------------------------------------------------------------------------------------------

// Crie uma função chamada multiplicar que recebe dois parâmetros: uma lista de números e um número pelo qual todos os elementos da lista devem ser multiplicados. Em seguida, use map para aplicar essa função à lista de números.

// Crie uma função chamada filtrarPares que recebe uma lista de números e filtra apenas os números pares dessa lista, utilizando filter.


// Crie uma função chamada processarLista que primeiro usa filter para filtrar números ímpares e depois usa map para multiplicar os números restantes por 10.

// Crie uma função chamada transformarNumeros que recebe uma lista de números e um parâmetro operacao. Se o parâmetro for "quadrado", a função deve retornar uma lista com os quadrados dos números; se for "raiz", deve retornar a raiz quadrada de cada número. Utilize map para realizar a transformação

// Crie uma função chamada filtrarPorIdade que recebe uma lista de objetos representando pessoas (com as propriedades nome e idade) e um parâmetro idadeMinima. A função deve retornar apenas as pessoas cuja idade seja maior ou igual à idadeMinima, utilizando filter.

// Crie uma função chamada filtrarMultiplicar que recebe uma lista de números e um número multiplicador. A função deve primeiro filtrar todos os números maiores que 10 e, em seguida, multiplicar esses números pelo valor do multiplicador.


// Crie uma função chamada classificarIdadePorCategoria que recebe uma lista de idades e classifica cada idade em uma categoria. As categorias são:

// "Criança" para idades entre 0 e 12.
// "Adolescente" para idades entre 13 e 18.
// "Adulto" para idades entre 19 e 59.
// "Idoso" para idades a partir de 60.