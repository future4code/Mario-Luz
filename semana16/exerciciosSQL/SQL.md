#exercicio1
A) 
VARCHAR - string de no maximo 255 caracteres
DATE - Definição de DATA com o formato (YYYY-MM-DD)
B) 
SHOW DATABASES - Retorna os Banco de Dados conectados.
SHOW TABLES - Retorna as Tabelas
C) 
DESCRIBE- Retorna todos dados da Tabela 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
#exercicio2
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY
R: Entrada duplicada '002' para a chave 'PRIMARY

R:INSERIR NO ATOR (id, nome, salário) VALORES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female") Código de erro: 1136. A contagem de colunas não contagem do valor da correspondência na linha 1

#exercicio3 
SELECT id, nome do ator WHERE id = "002" LIMIT 0, 1000 Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos;

#exercicio4
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
SELECT * FROM Actor WHERE name LIKE "%g%" or "%G%" ;
SELECT * FROM Actor WHERE name LIKE "%A%"or "%a%" or "%g%" or "%G%" AND salary BETWEEN 35000000 AND 90000000;
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT id, name from Actor WHERE id = "002";
SELECT id from Actor WHERE salary <= 5000000;
SELECT * from Actor WHERE gender = "invalid";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "female";
SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
#exercicio5
TEXT não tem um limite específico de tamanho além do máximo do banco de dados. Ele é armazenado na área específica para blobs já que a expectativa é que ele será grande.
#Exercício 6
A) SELECT id, title, rating FROM Movie WHERE id = "004";
B) SELECT * FROM Movie WHERE title = "Cidade de Deus";
C) SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
#Exercício 7
A) SELECT * FROM Movie WHERE title LIKE "%vida%";
B) SELECT * FROM Movie WHERE title LIKE "%ano%" OR synopsis LIKE "%ano%";
C) SELECT * FROM Movie WHERE release_date < "2020-06-08"
D) SELECT * FROM Movie WHERE release_date < "2020-06-08" AND title LIKE "%ano%" OR synopsis LIKE "%ano%" AND rating >= 7







