BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Toalha" (
	"IDToalha"	INTEGER NOT NULL,
	"numeroToalha"	INTEGER NOT NULL,
	PRIMARY KEY("IDToalha")
);
CREATE TABLE IF NOT EXISTS "FichaAtendimentoExterno" (
	"IDAtendimentoExterno"	INTEGER NOT NULL,
	"CRAS"	TEXT,
	"CREAS"	TEXT,
	"CRPSR"	TEXT,
	"IAAlbergue"	TEXT,
	"hospiClini"	TEXT,
	"outro"	TEXT,
	PRIMARY KEY("IDAtendimentoExterno")
);
CREATE TABLE IF NOT EXISTS "FichaDinheiroGanho" (
	"IDDinheiro"	INTEGER NOT NULL,
	"construcaoCivil"	TEXT,
	"servicoGeral"	TEXT,
	"flanelinha"	TEXT,
	"pedeDin"	TEXT,
	"carregador"	TEXT,
	"catadorMaterial"	TEXT,
	"naoRespondeu"	TEXT,
	"outros"	TEXT,
	"outrosQual"	TEXT NOT NULL,
	PRIMARY KEY("IDDinheiro")
);
CREATE TABLE IF NOT EXISTS "FichaFrequencia" (
	"IDFrequencia"	INTEGER NOT NULL,
	"dataFreq"	NUMERIC NOT NULL,
	"horarioFreq"	NUMERIC NOT NULL,
	"nomeFreq"	TEXT NOT NULL,
	"banhoFreq"	TEXT NOT NULL,
	"lancheFreq"	TEXT NOT NULL,
	"roupaFreq"	TEXT NOT NULL,
	"cestaBaFreq"	TEXT NOT NULL,
	"TransFreq"	TEXT NOT NULL,
	PRIMARY KEY("IDFrequencia")
);
CREATE TABLE IF NOT EXISTS "FichaNumeroDiasRua" (
	"IDNumeroDiasRua"	INTEGER NOT NULL,
	"ruaNum"	TEXT,
	"albergueNum"	TEXT,
	"domicilioPartNum"	TEXT,
	"outroNum"	TEXT,
	"outroQualNum"	TEXT NOT NULL,
	PRIMARY KEY("IDNumeroDiasRua")
);
CREATE TABLE IF NOT EXISTS "FichaPIA" (
	"IDPIA"	INTEGER NOT NULL,
	"nomePIA"	TEXT NOT NULL,
	"nomeSocPIA"	TEXT,
	"tecPIA"	TEXT NOT NULL,
	"filiacaoPIA"	TEXT NOT NULL,
	"datanascPIA"	NUMERIC,
	"localPIA"	TEXT,
	"sexoPIA"	TEXT NOT NULL,
	"estadoCivilPIA"	TEXT NOT NULL,
	"racaPIA"	TEXT NOT NULL,
	"religiaoPIA"	TEXT,
	"escolaridadePIA"	TEXT,
	"rgPIA"	NUMERIC,
	"emissaoPIA"	TEXT,
	"orgaoDocPIA"	TEXT,
	"certPIA"	TEXT,
	"livroPIA"	TEXT,
	"folhaPIA"	TEXT,
	"cpfPIA"	NUMERIC,
	"pisPIA"	NUMERIC,
	"reservistaPIA"	NUMERIC,
	"eleitorPIA"	NUMERIC,
	"secaoPIA"	NUMERIC,
	"zonaPIA"	NUMERIC,
	"ctpsPIA"	NUMERIC,
	"serieCtpsPIA"	NUMERIC,
	"emissaoCtpsPIA"	TEXT,
	"refEndePIA"	TEXT,
	"tipoPIA"	TEXT,
	"ruaPIA"	TEXT,
	"fonePIA"	NUMERIC,
	"bairroPIA"	TEXT,
	"municipioPIA"	TEXT,
	"profissaoPIA"	TEXT NOT NULL,
	"attProfPIA"	TEXT NOT NULL,
	"tipoAttProfPIA"	TEXT,
	"rendaMensalPIA"	NUMERIC,
	"empresaPIA"	TEXT NOT NULL,
	"beneficioPIA"	TEXT NOT NULL,
	"valorBenePIA"	NUMERIC NOT NULL,
	"deficienciaPIA"	TEXT NOT NULL,
	"expeDefiPIA"	TEXT,
	"probleSauPIA"	TEXT,
	"medicacoesProblePIA"	TEXT,
	"depQuimicoPIA"	TEXT NOT NULL,
	"drogasDepPIA"	TEXT,
	"temRuaPIA"	TEXT,
	"motivoTempRuaPIA"	TEXT,
	"proceMotiTempRuaPIA"	TEXT,
	"centAcolhiPIA"	TEXT NOT NULL,
	"comproJudiPIA"	TEXT NOT NULL,
	"qualComproJudiPIA"	TEXT,
	"propInicialPIA"	TEXT,
	PRIMARY KEY("IDPIA")
);
CREATE TABLE IF NOT EXISTS "HistoricoVOL" (
	"IDHistoricoVol"	INTEGER NOT NULL,
	"tituloHisVol"	TEXT NOT NULL,
	"dataHisVol"	INTEGER NOT NULL,
	"duracaoHisVol"	INTEGER NOT NULL,
	"IDPerfil"	TEXT NOT NULL,
	PRIMARY KEY("IDHistoricoVol")
);
CREATE TABLE IF NOT EXISTS "PerfilADM" (
	"IDPerfil"	INTEGER NOT NULL,
	"perfilADM"	TEXT NOT NULL,
	"imagemADM"	BLOB,
	"descricaoADM"	TEXT NOT NULL,
	"nomePerfilADM"	INTEGER,
	"telefonePerfilADM"	INTEGER,
	"emailPerfilADM"	INTEGER,
	PRIMARY KEY("IDPerfil" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "UsuarioAssistidos" (
	"IDAssistidos"	INTEGER NOT NULL,
	"IDFichaAbordagem"	TEXT,
	"IDFichaCadastro"	NUMERIC,
	"IDFichaFrequencia"	TEXT,
	"IDFichaPIA"	TEXT,
	"IDAtendimento"	TEXT,
	"IDToalha"	TEXT,
	FOREIGN KEY("IDFichaAbordagem") REFERENCES "FichaAbordagem"("IDAbordagem"),
	FOREIGN KEY("IDAtendimento") REFERENCES "Atendimento"("IDAtendimento"),
	FOREIGN KEY("IDFichaCadastro") REFERENCES "FichaCadastro"("IDCadastro"),
	FOREIGN KEY("IDFichaPIA") REFERENCES "FichaPIA"("IDPIA"),
	FOREIGN KEY("IDFichaFrequencia") REFERENCES "FichaFrequencia"("IDFrequencia"),
	FOREIGN KEY("IDToalha") REFERENCES "Toalha"("IDToalha"),
	PRIMARY KEY("IDAssistidos")
);
CREATE TABLE IF NOT EXISTS "FichaAbordagem" (
	"IDAbordagem"	INTEGER NOT NULL,
	"nomeAbo"	TEXT NOT NULL,
	"chamadoAbo"	TEXT NOT NULL,
	"origemAbo"	TEXT NOT NULL,
	"albergueAbo"	TEXT NOT NULL,
	"qualAbergAbo"	TEXT NOT NULL,
	"tempoRuaAbo"	TEXT NOT NULL,
	"IDMotivoAbo"	TEXT NOT NULL,
	"irProjetoAbo"	TEXT NOT NULL,
	"quandoIrProjeAbo"	TEXT NOT NULL,
	"obsAbo"	TEXT NOT NULL,
	"eduAbo"	TEXT NOT NULL,
	"dataAbo"	TEXT NOT NULL,
	PRIMARY KEY("IDAbordagem")
);
CREATE TABLE IF NOT EXISTS "FichaCadastro" (
	"IDCadastro"	INTEGER NOT NULL,
	"nomeCad"	TEXT NOT NULL,
	"chamadoCad"	TEXT NOT NULL,
	"documentoCad"	TEXT NOT NULL,
	"rgDocCad"	NUMERIC,
	"cpfDocCad"	NUMERIC,
	"nascimentoCad"	TEXT,
	"IDLocais"	INTEGER NOT NULL,
	"abrigoCad"	TEXT NOT NULL,
	"domPartCad"	TEXT NOT NULL,
	"IDNumRua"	TEXT,
	"tempRuaCad"	TEXT,
	"IDMotivoCad"	TEXT,
	"tempcidCad"	TEXT,
	"familiaCad"	TEXT NOT NULL,
	"cttParenteCad"	TEXT NOT NULL,
	"attCad"	TEXT NOT NULL,
	"IDAtendeCad"	TEXT,
	"carteiraCad"	TEXT NOT NULL,
	"IDDinheiro"	TEXT,
	"benefCad"	TEXT NOT NULL,
	"qualBenefCad"	TEXT NOT NULL,
	FOREIGN KEY("IDMotivoCad") REFERENCES "FichaMotivo"("IDMotivoAbo"),
	FOREIGN KEY("IDAtendeCad") REFERENCES "FichaAtendimentoExterno"("IDAtendimentoExterno"),
	FOREIGN KEY("IDNumRua") REFERENCES "FichaNumeroDiasRua"("IDNumeroDiasRua"),
	FOREIGN KEY("IDLocais") REFERENCES "FichaLocaisCadastro"("IDLocais"),
	PRIMARY KEY("IDCadastro")
);
CREATE TABLE IF NOT EXISTS "Atendimento" (
	"IDAtendimento"	INTEGER NOT NULL,
	"tituloAtendi"	TEXT NOT NULL,
	"observacaoAtendi"	TEXT NOT NULL,
	"dataAtendi"	NUMERIC NOT NULL,
	"horaAtendi"	NUMERIC NOT NULL,
	"IDEncaminhamento"	INTEGER NOT NULL,
	PRIMARY KEY("IDAtendimento")
);
CREATE TABLE IF NOT EXISTS "UsuarioADM" (
	"IDUsuarioADM"	INTEGER NOT NULL,
	"nomeCompletoADM"	TEXT NOT NULL,
	"emailADM"	TEXT NOT NULL,
	"senha"	NUMERIC NOT NULL,
	"telefone"	NUMERIC,
	"IDPerfil"	INTEGER,
	PRIMARY KEY("IDUsuarioADM" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Doacao" (
	"IDDoacao"	INTEGER NOT NULL,
	"tituloDoacao"	TEXT NOT NULL,
	"descricaoDoacao"	TEXT NOT NULL,
	"dataDoacao"	TEXT NOT NULL,
	"valorDoacao"	TEXT NOT NULL,
	"comproDoacao"	BLOB,
	PRIMARY KEY("IDDoacao")
);
CREATE TABLE IF NOT EXISTS "FichaEncaminhamento" (
	"IDEncaminhamento"	INTEGER NOT NULL,
	"servEnca"	TEXT NOT NULL,
	"dataEnca"	NUMERIC,
	"obsEnca"	TEXT,
	PRIMARY KEY("IDEncaminhamento")
);
CREATE TABLE IF NOT EXISTS "FichaLocaisCadastro" (
	"IDLocais"	INTEGER NOT NULL,
	"descLocal"	TEXT,
	PRIMARY KEY("IDLocais")
);
CREATE TABLE IF NOT EXISTS "FichaMotivo" (
	"IDMotivoAbo"	INTEGER NOT NULL,
	"descMoti"	TEXT NOT NULL,
	PRIMARY KEY("IDMotivoAbo")
);
INSERT INTO "Toalha" ("IDToalha","numeroToalha") VALUES (1,35),
 (3,122);
INSERT INTO "FichaAtendimentoExterno" ("IDAtendimentoExterno","CRAS","CREAS","CRPSR","IAAlbergue","hospiClini","outro") VALUES (1,'Não','undefined','undefined','undefined','undefined','undefined');
INSERT INTO "FichaDinheiroGanho" ("IDDinheiro","construcaoCivil","servicoGeral","flanelinha","pedeDin","carregador","catadorMaterial","naoRespondeu","outros","outrosQual") VALUES (1,'sim','sim','sim','sim','sim','sim','','','');
INSERT INTO "FichaFrequencia" ("IDFrequencia","dataFreq","horarioFreq","nomeFreq","banhoFreq","lancheFreq","roupaFreq","cestaBaFreq","TransFreq") VALUES (1,'27/05/2022','15:33','Gustavo Monteiro','SIM','SIM','NÃO','SIM','NÃO'),
 (2,'23/01/2022','12:53','Juliana Silva','SIM','SIM','SIM','NÂO','NÃO'),
 (3,'23/01/2022','undefined','undefined','undefined','SIM','SIM','NÂO','NÃO'),
 (4,'26/05/2022','15:33','Gabriel','SIM','SIM','NÃO','SIM','NÃO'),
 (5,'26/05/2022','15:33','Fernando','SIM','SIM','NÃO','SIM','NÃO'),
 (6,'26/05/2022','15:33','Kaiky','SIM','SIM','NÃO','SIM','NÃO'),
 (7,'26/05/2022','15:33','Leão','SIM','SIM','NÃO','SIM','NÃO'),
 (8,'26/05/2022','15:33','lol','SIM','SIM','NÃO','SIM','NÃO'),
 (9,'26/05/2022','15:33','Bruno Meira','SIM','SIM','NÃO','SIM','NÃO'),
 (10,'26/05/2022','15:33','GIOVANNA FURLAN TORRES','SIM','SIM','NÃO','SIM','NÃO');
INSERT INTO "FichaNumeroDiasRua" ("IDNumeroDiasRua","ruaNum","albergueNum","domicilioPartNum","outroNum","outroQualNum") VALUES (1,'Santa Clara','Santa Maria','','sim','Praças');
INSERT INTO "FichaPIA" ("IDPIA","nomePIA","nomeSocPIA","tecPIA","filiacaoPIA","datanascPIA","localPIA","sexoPIA","estadoCivilPIA","racaPIA","religiaoPIA","escolaridadePIA","rgPIA","emissaoPIA","orgaoDocPIA","certPIA","livroPIA","folhaPIA","cpfPIA","pisPIA","reservistaPIA","eleitorPIA","secaoPIA","zonaPIA","ctpsPIA","serieCtpsPIA","emissaoCtpsPIA","refEndePIA","tipoPIA","ruaPIA","fonePIA","bairroPIA","municipioPIA","profissaoPIA","attProfPIA","tipoAttProfPIA","rendaMensalPIA","empresaPIA","beneficioPIA","valorBenePIA","deficienciaPIA","expeDefiPIA","probleSauPIA","medicacoesProblePIA","depQuimicoPIA","drogasDepPIA","temRuaPIA","motivoTempRuaPIA","proceMotiTempRuaPIA","centAcolhiPIA","comproJudiPIA","qualComproJudiPIA","propInicialPIA") VALUES (1,'Jorge Batista','Jorjão','Soraya','Não','12/06/1980','Brás','Masculino','Casado','Branco',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Não','Catador de reciclaveis',NULL,NULL,'Não','Não','Não Aplicavel','Visual',NULL,NULL,NULL,'Álcool',NULL,NULL,NULL,NULL,'Não','Não',NULL,NULL);
INSERT INTO "PerfilADM" ("IDPerfil","perfilADM","imagemADM","descricaoADM","nomePerfilADM","telefonePerfilADM","emailPerfilADM") VALUES (2,'undefined','Administrador do sistema','Administrador do sistema','Administrador do sistema','Administrador do sistema','Administrador do sistema'),
 (3,'Voluntário','https://www.google.com/search?q=imagem+pessoa+icon&tbm=isch&ved=2ahUKEwivxMWp3_33AhXRN7kGHQi5Bm0Q2-cCegQIABAA&oq=imagem+pessoa+icon&gs_lcp=CgNpbWcQAzIGCAAQHhAIOgUIABCABDoECAAQHlDjCVjKQGDdQmgLcAB4AIABfYgBvxKSAQQ0LjE4mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=HcCPYu_BG9Hv5OUPiPKa6AY&bih=962&biw=1920&client=opera&hs=r20#imgrc=CjjvAIrmeyYV-M','Funcionário Temporário','Mariana Silva de Paula','(11) 94339865','mariana@revirar.com');
INSERT INTO "UsuarioAssistidos" ("IDAssistidos","IDFichaAbordagem","IDFichaCadastro","IDFichaFrequencia","IDFichaPIA","IDAtendimento","IDToalha") VALUES (1,'1',1,'1','1','1','1'),
 (2,'1',1,'1','1','1','1'),
 (3,'1',1,'1','1','1','1'),
 (4,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (5,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (6,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (7,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (8,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (9,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (10,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (11,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (12,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (13,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (14,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (15,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (16,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (17,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (18,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (19,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (20,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (21,'undefined','undefined','undefined','undefined','undefined','undefined'),
 (22,'undefined','undefined','undefined','undefined','undefined','undefined');
INSERT INTO "FichaAbordagem" ("IDAbordagem","nomeAbo","chamadoAbo","origemAbo","albergueAbo","qualAbergAbo","tempoRuaAbo","IDMotivoAbo","irProjetoAbo","quandoIrProjeAbo","obsAbo","eduAbo","dataAbo") VALUES (1,'Albuquerque','Bruno','São Paulo','Não','','2 anos','1','Sim','Segunda-Feira','','Giovanna','25/05/2022'),
 (2,'Bruno Otávio Bezeirra de Meira','Bruno','Carapicuiba','Não','','2 Anos','1','Não','','Teste de cadastro de usuário','Giovanna Furlan','25/05/2022');
INSERT INTO "FichaCadastro" ("IDCadastro","nomeCad","chamadoCad","documentoCad","rgDocCad","cpfDocCad","nascimentoCad","IDLocais","abrigoCad","domPartCad","IDNumRua","tempRuaCad","IDMotivoCad","tempcidCad","familiaCad","cttParenteCad","attCad","IDAtendeCad","carteiraCad","IDDinheiro","benefCad","qualBenefCad") VALUES (5,'Bruno Meira','Pedro de Assunção Esteves','Pedro de Assunção Esteves','undefined','undefined','28/03/2002',6,'Pedro de Assunção Esteves','Pedro de Assunção Esteves','undefined','undefined','undefined','undefined','Pedro de Assunção Esteves','Pedro de Assunção Esteves','Pedro de Assunção Esteves','undefined','Pedro de Assunção Esteves','undefined','Pedro de Assunção Esteves','Pedro de Assunção Esteves');
INSERT INTO "Atendimento" ("IDAtendimento","tituloAtendi","observacaoAtendi","dataAtendi","horaAtendi","IDEncaminhamento") VALUES (1,'2° Encontro','Quer sair das ruas e continuar com acompanhamneto','25/05/2022','19:00',155);
INSERT INTO "Doacao" ("IDDoacao","tituloDoacao","descricaoDoacao","dataDoacao","valorDoacao","comproDoacao") VALUES (1,'Doação Julio Nascimento','5 peças de roupa, 10 produtos de higiene e 5kilos de arroz.','25/05/2022','Somando todos os itens o valor da doação é de R$120,00',NULL),
 (2,'teste1gih','4 ropa','2022-06-01T19:22','40 reais',NULL);
INSERT INTO "FichaLocaisCadastro" ("IDLocais","descLocal") VALUES (1,'Marquises e Viadutos'),
 (2,NULL),
 (3,NULL),
 (4,NULL),
 (5,NULL),
 (6,NULL),
 (7,NULL);
COMMIT;
