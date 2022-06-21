BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "FichaLocaisCadastro" (
	"IDLocais"	INTEGER NOT NULL,
	"descLocal"	TEXT,
	PRIMARY KEY("IDLocais")
);
INSERT INTO "FichaLocaisCadastro" ("IDLocais","descLocal") VALUES (1,'Marquises e Viadutos'),
 (2,'Frente de prédios privados e úblicos'),
 (3,'Parques, prças'),
 (4,'Estações de trem, rodoviárias'),
 (5,'Margem de rodovias'),
 (6,'Dentro de construções com áreas internas ocupáveis'),
 (7,'Galerias subterrâneas'),
 (8,'Casas e prédios abandonados'),
 (9,'Outros locais');
COMMIT;
