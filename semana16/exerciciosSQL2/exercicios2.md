#Exercicio1
A) ALTER TABLE Actors DROP COLUMN salary; 
Remove a coluna salary
B)ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
Modifica a tabela gender para receber até 6 caracteres
C)ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
Muda a tabela Actors para a coluna gender receber até 255 caracteres
D)ALTER TABLE Actors CHANGE gender gender VARCHAR(100);

#Exercicio2
UPDATE Actor
SET 
	name = "JULIANA PÃES",
	birth_date = "1987-02-10"
    WHERE id = "005";

    UPDATE Actor
    SET 
	name = "Juliana Paes"
    WHERE id = "005";

UPDATE Actor
SET 
	name = "Lazaro Ramos",
	birth_date = "1987-02-09",
    salary = 51000000,
    gender = "male"
    WHERE id = "005";

#Exercicio3
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
	
#Exercicio4
    SELECT MAX(salary) FROM Actor;
    SELECT MIN(salary) FROM Actor WHERE gender = "female";
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
    SELECT SUM(salary) FROM Actor;
    
#Exercicio5  
A) mostra quantidade de cada genero
B)SELECT id, name FROM Actor
ORDER BY name DESC;
C)SELECT * FROM Actor
ORDER BY salary;
D)SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
E)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
#Exercicio6
A)ALTER TABLE Movie ADD playing_limit_date DATE;
B)ALTER TABLE Movie CHANGE rating rating FLOAT;
C)UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
D) DELETE FROM Movie WHERE id = "001"
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
Não me gerou erros.
#Exercicio7
A)SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
B)SELECT AVG(rating) FROM Movie;
C)SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
D)SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
E)SELECT MAX(rating) FROM Movie;
F)SELECT MIN(rating) FROM Movie;
#Exercicio8
A)SELECT * FROM Movie ORDER BY title;
B)SELECT * FROM Movie ORDER BY title LIMIT 5;
C)SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
D)SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;



