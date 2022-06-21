BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "FichaMotivo" (
	"IDMotivoAbo"	INTEGER NOT NULL,
	"descMoti"	TEXT NOT NULL,
	PRIMARY KEY("IDMotivoAbo")
);
INSERT INTO "FichaMotivo" ("IDMotivoAbo","descMoti") VALUES (1,'Perda de moradia'),
 (2,'Ameaça/ violência'),
 (3,'Alcoolismo/ drogas'),
 (4,'Problemas com familiares/ companheiro(a)'),
 (5,'Desemprego'),
 (6,'Trabalho'),
 (7,'Tratamento de saúde'),
 (8,'Preferência/ opção própria'),
 (9,'Não sabe/ não lembra'),
 (10,'Outro');
COMMIT;
