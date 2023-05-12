use techmanprisma;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/perfis.csv"
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;



LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/usuarios.csv"

INTO TABLE user
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;



LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/equipamentos.csv"
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/comentarios.csv"
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- Não mexa

use techmanprisma; 

LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/perfis.csv"
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/usuarios.csv"
INTO TABLE user
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/equipamentos.csv"
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/comentarios.csv"
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;