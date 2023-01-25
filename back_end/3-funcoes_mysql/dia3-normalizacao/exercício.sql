DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA zoo;
USE zoo;

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo CHAR(1) NOT NULL,
  idade TINYINT NOT NULL,
  localizacao VARCHAR(20) NOT NULL
);
   
CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL
);

CREATE TABLE cuidador (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);