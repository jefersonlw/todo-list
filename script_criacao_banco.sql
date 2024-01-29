DROP DATABASE IF EXISTS dbtodolist;

CREATE DATABASE dbtodolist
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

DROP TABLE IF EXISTS todo_list;

CREATE TABLE IF NOT EXISTS todo_list
(
    idcard SERIAL,
    dstitulo character varying(50),
    dsdescricao text ,
    dtcriacao date,
    dtconcluido date,
    iestatus character varying(1)
);

INSERT INTO todo_list(
	dstitulo, dsdescricao, dtcriacao, dtconcluido, iestatus)
	VALUES ('Criar banco de dados', 'Criar um banco de dados com uma tabela contendo os campos id, título, descrição, data de criação, data de conclusão e status.', '2024-01-26', '2024-01-26', 'F');
	
INSERT INTO todo_list(
	dstitulo, dsdescricao, dtcriacao, dtconcluido, iestatus)
	VALUES ('Criar frontend', 'Criar a tela de visualização dos cards com os botões de adicionar, editar e deletar card.', '2024-01-26', NULL, 'P');
	
INSERT INTO todo_list(
	dstitulo, dsdescricao, dtcriacao, dtconcluido, iestatus)
	VALUES ('Criar backend', 'Criar a conexão entre o banco de dados e o frontend e implementação de testes unitarios', '2024-01-26', NULL, 'P');
	
commit;