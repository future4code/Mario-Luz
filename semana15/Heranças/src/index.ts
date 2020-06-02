import { User } from './User';
import { Customer } from './Customer';
import { Employee } from './Employee';
import { Seller } from './Seller';
import { uuid } from 'uuidv4';

console.log('------------------Exercício 1--------------------');
const newUser = new User(uuid(), 'lfvirtuoso@gmail.com', 'Filipe', '1234');
console.log(newUser.getId());

/*
Exercício 1
a.
Não, pois password é um atributo privado.

b.
Uma, pois criei apenas uma instância da classe User.
*/

console.log('------------------Exercício 2--------------------');
const newCustomer = new Customer(
  uuid(),
  'random@gmail.com',
  'random',
  '4321',
  '4234424'
);

console.log(newCustomer.getCreditCard());

/*
Exercício 2
a.
A mensagem será exibida uma vez pois estou criando apenas uma instância.

b.
A mensagem será exbida duas vezes se contar o exercício número 1. Porque uma nova
instância está sendo criada.
*/

console.log('------------------Exercício 3--------------------');
console.log(`O ID é ${newCustomer.getId()}`);
console.log(`Ò email é ${newCustomer.getEmail()}`);
console.log(`O nome é ${newCustomer.getName()}`);
console.log(`O número do cartão de crédito é ${newCustomer.getCreditCard()}`);
console.log(`O valor total de compra é R$ ${newCustomer.purchaseTotal}`);

/*
Exercício 2
a.
Não pois a senha é um atributo privado da classe User.

*/

console.log('------------------Exercício 4/5--------------------');
console.log(newCustomer.introduceYourself('Filipe'));

console.log('------------------Exercício 6--------------------');

const newEmployee = new Employee(
  uuid(),
  'marioluz@mario.com',
  'mario',
  '4329',
  '02/05/2020',
  1000
); /*

/*
Exercício 6
a.
3, considerando os exercícios anteriores.

b.
O ID, o email, no nome, utilizar o método para se apresentar, além de tabém de exibir
as informações sobre a data de admissão e o salário base
*/

console.log('------------------Exercício 7--------------------');

console.log(`O Salário total é: R$ ${newEmployee.calculateTotalSalary()}`);

console.log('------------------Exercício 8--------------------');

const newSeller = new Seller(
  uuid(),
  'teste@gmail.com',
  'MarioLuz',
  '323',
  '10/04/2020',
  999
);

/*
Exercício 8
a.
ID, email, nome, senha, data de admissão e o salário base.

b.

*/
console.log(newSeller.getId());
console.log(newSeller.getName());
console.log(newSeller.getEmail());
console.log(newSeller.getAdmissionDate());
console.log(newSeller.getBasesalary());

//Não posso imprimir a senha

console.log('------------------Exercício 10--------------------');

const newSeller2 = new Seller(
  uuid(),
  'marioluzz@mario.com',
  'mario2',
  '323323',
  '10/04/2019',
  4239
);

newSeller2.setSalesQuantity(2);
console.log(newSeller2.calculateTotalSalary());
