
const express = require('express'); 
const app = express();
const cors = require("cors");
app.use(express.static("src/Frontend/"));
app.use(express.static("src/Frontend/paginas"));
app.use(cors());

const port = process.env.PORT || 3081;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'src/Backend/revirar.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


/* Definição dos endpoints do sistema*/

// CRUD - BANCO DE DADOS REVIRAR


// USUÁRIO ASSISTIDOS CADASTRADOS

// Insere um registro (é o C do CRUD - Create)
app.post('/userassistidosinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO UsuarioAssistidos (IDFichaAbordagem, IDFichaCadastro, IDFichaFrequencia, IDFichaPIA, IDAtendimento, IDToalha) VALUES (  '" + req.body.IDFichaAbordagem + "','" + req.body.IDFichaCadastro + "','" + req.body.IDFichaFrequencia + "','" + req.body.IDFichaPIA + "','" + req.body.IDAtendimento + "','" + req.body.IDToalha + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/userassistidosdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM UsuarioAssistidos  WHERE IDAssistidos = '" + req.body.IDAssistidos + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/usersassistidos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM UsuarioAssistidos ORDER BY IDAssistidos COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});




// FICHA ABORDAGEM 

// Insere um registro (é o C do CRUD - Create)
app.post('/abordageminsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaAbordagem (nomeAbo,chamadoAbo, origemAbo, albergueAbo, qualAbergAbo,tempoRuaAbo, IDMotivoAbo, irProjetoAbo, quandoIrProjeAbo, obsAbo, eduAbo, dataAbo) VALUES ( '" + req.body.nomeAbo + "','" + req.body.chamadoAbo + "','" + req.body.origemAbo + "','" + req.body.albergueAbo + "','" + req.body.qualAbergAbo + "','" + req.body.tempoRuaAbo + "','" + req.body.IDMotivoAbo + "','" + req.body.irProjetoAbo + "','" + req.body.quandoIrProjeAbo + "','" + req.body.obsAbo + "','" + req.body.eduAbo + "','" + req.body.dataAbo + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/abordagemdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaAbordagem  WHERE IDAbordagem = '" + req.body.IDAbordagem + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/abordagemusers', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaAbordagem ORDER BY IDAbordagem COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/abordagemupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaAbordagem SET nomeAbo = '" + req.body.nomeAbo + "' WHERE IDAbordagem = '" + req.body.IDAbordagem + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// FICHA CADASTRO

// Insere um registro (é o C do CRUD - Create)
app.post('/cadastroinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaCadastro (nomeCad, chamadoCad, docCad, rgCad,cpfCad,nascimentoCad,localCad ,abrigoCad,domPartCad,ruaVezCad,albVezCad,dompartvezCad,dompartQual,viveRuaCad,moraCidaCad,viveFamCad,parenteCad,attcomCad,atendLuCad,centroCad,centrorefCad,instacolhiCad,hospiCad,trabaCad,dinheiroCad,dinheiroCad2,dinheiroCad3,dinheiroCad4,dinheiroCad5,dinheiroCad6,dinheiroCad7,benefCad,qualBenefCad) VALUES ('" + req.body.nomeCad + "','" + req.body.chamadoCad + "','" + req.body.docCad + "','" + req.body.rgCad + "','" + req.body.cpfCad + "','" + req.body.nascimentoCad + "','" + req.body.localCad + "','" + req.body.abrigoCad + "','" + req.body.domPartCad + "','" + req.body.ruaVezCad + "','" + req.body.albVezCad + "','" + req.body.dompartvezCad + "','" + req.body.dompartQual + "','" + req.body.viveRuaCad + "','" + req.body.moraCidaCad + "','" + req.body.viveFamCad + "','" + req.body.parenteCad + "','" + req.body.attcomCad + "','" + req.body.atendLuCad + "','" + req.body.centroCad + "','" + req.body.centrorefCad + "','" + req.body.instacolhiCad + "','" + req.body.hospiCad + "','" + req.body.trabaCad + "','" + req.body.dinheiroCad + "','" + req.body.dinheiroCad2 + "','" + req.body.dinheiroCad3 + "','" + req.body.dinheiroCad4 + "','" + req.body.dinheiroCad5 + "','" + req.body.dinheiroCad6 + "','" + req.body.dinheiroCad7 + "','" + req.body.benefCad + "','" + req.body.qualBenefCad + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/cadastrodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaCadastro  WHERE IDCadastro = '" + req.body.IDCadastro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/cadastrousers', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaCadastro ORDER BY IDCadastro COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/cadastroupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaCadastro SET nomeCad = '" + req.body.nomeCad + "' WHERE IDCadastro = '" + req.body.IDCadastro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



//Ficha Atendimento

// Insere um registro (é o C do CRUD - Create)
app.post('/atendimentoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

   var sql = "INSERT INTO Atendimento (tituloAtendi, observacaoAtendi, dataAtendi, horaAtendi, IDEncaminhamento) VALUES ( '" + req.body.tituloAtendi + "', '" + req.body.observacaoAtendi + "', '" + req.body.dataAtendi + "', '" + req.body.horaAtendi + "', '" + req.body.IDEncaminhamento + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/atendimentodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Atendimento WHERE IDAtendimento = '"+ req.body.IDAtendimento + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atendimentoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Atendimento SET tituloAtendi = '" + req.body.tituloAtendi + "' WHERE IDAtendimento = '" + req.body.IDAtendimento + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/atendimentoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM Atendimento ORDER BY IDAtendimento COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});




//Ficha Atendimento Externo

// Insere um registro (é o C do CRUD - Create)
app.post('/atendimentoexternoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaAtendimentoExterno (CRAS, CREAS, CRPSR, IAAlbergue, hospiClini, outro) VALUES ( '" + req.body.CRAS + "', '" + req.body.CREAS + "', '" + req.body.CRPSR + "', '" + req.body.IAAlbergue + "', '" + req.body.hospiClini + "', '" + req.body.outro + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/atendimentoexternodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaAtendimentoExterno WHERE IDAtendimentoExterno = '" + req.body.IDAtendimentoExterno + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atendimentoexternoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaAtendimentoExterno SET CRAS = '" + req.body.CRAS + "' WHERE IDAtendimentoExterno = '" + req.body.IDAtendimentoExterno + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/atendimentoexternoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaAtendimentoExterno ORDER BY IDAtendimentoExterno COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


// FICHA DINHEIRO GANHO


// Insere um registro (é o C do CRUD - Create)
app.post('/dinheiroganhoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaDinheiroGanho (construcaoCivil, servicoGeral, flanelinha, pedeDin, carregador, catadorMaterial, naoRespondeu, outros, outrosQual) VALUES ('" + req.body.construcaoCivil + "', '"  + req.body.servicoGeral + "', '"  + req.body.flanelinha + "','" + req.body.pedeDin + "','"  + req.body.carregador + "','"  + req.body.catadorMaterial + "','"  + req.body.naoRespondeu + "','"  + req.body.outros + "','"  + req.body.outrosQual + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/dinheiroganhodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaDinheiroGanho WHERE IDDinheiro = '" + req.body.IDDinheiro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/dinheiroganhoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaDinheiroGanho SET construcaoCivil = '" + req.body.construcaoCivil + "' WHERE IDDinheiro = '" + req.body.IDDinheiro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/dinheiroganhoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaDinheiroGanho ORDER BY IDDinheiro COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FICHA NUMERO DE DIAS NA RUA


// Insere um registro (é o C do CRUD - Create)
app.post('/numerodiasruainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaNumeroDiasRua (ruaNum, albergueNum, domicilioPartNum, outroNum, outroQualNum) VALUES ('" + req.body.ruaNum + "', '" + req.body.albergueNum + "', '" + req.body.domicilioPartNum + "','" + req.body.outroNum + "','" + req.body.outroQualNum + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/numerosdiasruadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaNumeroDiasRua WHERE IDNumeroDiasRua = '" + req.body.IDNumeroDiasRua + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/numerodiasruaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaNumeroDiasRua SET ruaNum = '" + req.body.ruaNum + "' WHERE IDNumeroDiasRua = '" + req.body.IDNumeroDiasRua + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

app.get('/numerodiasruaselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaNumeroDiasRua ORDER BY IDNumeroDiasRua COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// FICHA TOALHA



// Retorna todos registros (Toalha)
app.get('/selecttoalha', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Toalha';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (Toalha)
app.post('/toalhainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "INSERT INTO Toalha (nomeToalha, numeroToalha) VALUES ('"+ req.body.nomeToalha +"', '"+ req.body.numeroToalha +"')";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close();
  res.end();
});

// Exclui um registro (Toalha)
app.post('/toalhadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM Toalha WHERE IDToalha = '"+ req.body.IDToalha +"'";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close();
});

// Atualiza um registro (toalha)
app.post('/toalhaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Toalha SET numeroToalha = '" + req.body.numeroToalha + "', nomeToalha = '" + req.body.nomeToalha + "' WHERE IDToalha = " + req.body.IDToalha;
  
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); 
});

// FICHA DOAÇÃO



// Retorna todos registros (DOAÇÃO)
app.get('/doacaoselect', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM Doacao ORDER BY IDDoacao COLLATE NOCASE'
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});

// Insere um registro (Doação)
app.post('/doacaoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var sql = "INSERT INTO Doacao (tituloDoacao, descricaoDoacao, dataDoacao, valorDoacao, comproDoacao, nomeDoador, cpfDoador, telefoneDoador) VALUES ('"+ req.body.tituloDoacao +"', '"+ req.body.descricaoDoacao +"', '"+ req.body.dataDoacao +"', '"+ req.body.valorDoacao +"', '"+ req.body.comproDoacao +"', '"+ req.body.nomeDoador +"', '"+ req.body.cpfDoador +"', '"+ req.body.telefoneDoador +"')";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close();
  res.end();
});

// Exclui um registro (Doação)
app.post('/doacaodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM Doacao WHERE IDDoacao = '"+ req.body.IDDoacao +"'";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close();
});

// Atualiza um registro (Doação)
app.post('/doacaoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "UPDATE Doacao SET tituloDoacao = '" + req.body.tituloDoacao + "', descricaoDoacao = '" + req.body.descricaoDoacao + "', dataDoacao = '" + req.body.dataDoacao + "', valorDoacao = '" + req.body.valorDoacao + "', comproDoacao = '" + req.body.comproDoacao + "', nomeDoador = '" + req.body.nomeDoador + "', cpfDoador = '" + req.body.cpfDoador + "', telefoneDoador = '" + req.body.telefoneDoador +  "' WHERE IDDoacao = " + req.body.IDDoacao;
  
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); 
});



// FICHA PIA

// Retorna todos registros (PIA)
app.get('/piaselect', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM FichaPIA ORDER BY IDPIA COLLATE NOCASE'
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});

// Insere um registro (PIA)
app.post('/piainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var sql = "INSERT INTO FichaPIA (nomePIA, nomeSocPIA, tecPIA, datanascPIA, localPIA, sexoPIA, racaPIA, filiacaoPIA, estadoCivilPIA, profissaoPIA, attProfPIA, empresaPIA, beneficioPIA, valorBenePIA, deficienciaPIA, depQuimicoPIA, centAcolhiPIA, comproJudiPIA, religiaoPIA, escolaridadePIA, rgPIA, emissaoPIA, orgaoDocPIA, certPIA, livroPIA, folhaPIA, cpfPIA, pisPIA, reservistaPIA, eleitorPIA, secaoPIA, zonaPIA, ctpsPIA, serieCtpsPIA, emissaoCtpsPIA, refEndePIA, tipoPIA, ruaPIA, fonePIA, bairroPIA, municipioPIA, tipoAttProfPIA, rendaMensalPIA, expeDefiPIA, probleSauPIA, medicacoesProblePIA, drogasDepPIA, temRuaPIA, motivoTempRuaPIA, proceMotiTempRuaPIA, qualComproJudiPIA, propInicialPIA, PTRS, especiSauPIA) VALUES ('"+ req.body.nomePIA +"', '"+ req.body.nomeSocPIA +"', '"+ req.body.tecPIA +"', '"+ req.body.datanascPIA +"', '"+ req.body.localPIA +"', '"+ req.body.sexoPIA +"', '"+ req.body.racaPIA +"', '"+ req.body.filiacaoPIA +"', '"+ req.body.estadoCivilPIA +"', '"+ req.body.profissaoPIA +"', '"+ req.body.attProfPIA +"', '"+ req.body.empresaPIA +"', '"+ req.body.beneficioPIA +"', '"+ req.body.valorBenePIA +"', '"+ req.body.deficienciaPIA +"', '"+ req.body.depQuimicoPIA +"', '"+ req.body.centAcolhiPIA +"', '"+ req.body.comproJudiPIA +"', '"+ req.body.religiaoPIA +"', '"+ req.body.escolaridadePIA +"', '"+ req.body.rgPIA +"', '"+ req.body.emissaoPIA +"', '"+ req.body.orgaoDocPIA +"', '"+ req.body.certPIA +"', '"+ req.body.livroPIA +"', '"+ req.body.folhaPIA +"', '"+ req.body.cpfPIA +"', '"+ req.body.pisPIA +"', '"+ req.body.reservistaPIA +"', '"+ req.body.eleitorPIA +"', '"+ req.body.secaoPIA +"', '"+ req.body.zonaPIA +"', '"+ req.body.ctpsPIA +"', '"+ req.body.serieCtpsPIA +"', '"+ req.body.emissaoCtpsPIA +"', '"+ req.body.refEndePIA +"', '"+ req.body.tipoPIA +"', '"+ req.body.ruaPIA +"', '"+ req.body.fonePIA +"', '"+ req.body.bairroPIA +"', '"+ req.body.municipioPIA +"', '"+ req.body.tipoAttProfPIA +"', '"+ req.body.rendaMensalPIA +"', '"+ req.body.expeDefiPIA +"', '"+ req.body.probleSauPIA +"', '"+ req.body.medicacoesProblePIA +"', '"+ req.body.drogasDepPIA +"', '"+ req.body.temRuaPIA +"', '"+ req.body.motivoTempRuaPIA +"', '"+ req.body.proceMotiTempRuaPIA +"', '"+ req.body.qualComproJudiPIA +"', '"+ req.body.propInicialPIA +"', '"+ req.body.PTRS +"', '"+ req.body.especiSauPIA +"')";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close();
  res.end();
});

// Exclui um registro (Doação)
app.post('/piadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM FichaPIA WHERE IDPIA = '"+ req.body.IDPIA +"'";
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close();
});

// Atualiza um registro (Doação)
app.post('/piaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "UPDATE FichaPIA SET nomeSocPIA = '" + req.body.nomeSocPIA + "', tecPIA = '" + req.body.tecPIA + "', nomePIA = '" + req.body.nomePIA + "', filiacaoPIA = '" + req.body.filiacaoPIA + "', datanascPIA = '" + req.body.datanascPIA + "', localPIA = '" + req.body.localPIA + "', sexoPIA = '" + req.body.sexoPIA + "', estadoCivilPIA = '" + req.body.estadoCivilPIA + "', racaPIA = '" + req.body.racaPIA + "', religiaoPIA = '" + req.body.religiaoPIA + "', escolaridadePIA = '" + req.body.escolaridadePIA + "', rgPIA = '" + req.body.rgPIA + "', emissaoPIA = '" + req.body.emissaoPIA + "', orgaoDocPIA = '" + req.body.orgaoDocPIA + "', certPIA = '" + req.body.certPIA + "', livroPIA = '" + req.body.livroPIA + "', folhaPIA = '" + req.body.folhaPIA + "', cpfPIA = '" + req.body.cpfPIA + "', pisPIA = '" + req.body.pisPIA + "', reservistaPIA = '" + req.body.reservistaPIA + "', eleitorPIA = '" + req.body.eleitorPIA + "', secaoPIA = '" + req.body.secaoPIA + "', zonaPIA = '" + req.body.zonaPIA + "', ctpsPIA = '" + req.body.ctpsPIA + "', serieCtpsPIA = '" + req.body.serieCtpsPIA + "', emissaoCtpsPIA = '" + req.body.emissaoCtpsPIA + "', refEndePIA = '" + req.body.refEndePIA + "', tipoPIA = '" + req.body.tipoPIA + "', ruaPIA = '" + req.body.ruaPIA + "', fonePIA = '" + req.body.fonePIA + "', bairroPIA = '" + req.body.bairroPIA + "', municipioPIA = '" + req.body.municipioPIA + "', profissaoPIA = '" + req.body.profissaoPIA + "', attProfPIA = '" + req.body.attProfPIA + "', tipoAttProfPIA = '" + req.body.tipoAttProfPIA + "', rendaMensalPIA = '" + req.body.rendaMensalPIA + "', empresaPIA = '" + req.body.empresaPIA + "', beneficioPIA = '" + req.body.beneficioPIA + "', valorBenePIA = '" + req.body.valorBenePIA + "', deficienciaPIA = '" + req.body.deficienciaPIA + "', expeDefiPIA = '" + req.body.expeDefiPIA + "', probleSauPIA = '" + req.body.probleSauPIA + "', medicacoesProblePIA = '" + req.body.medicacoesProblePIA + "', depQuimicoPIA = '" + req.body.depQuimicoPIA + "', drogasDepPIA = '" + req.body.drogasDepPIA + "', temRuaPIA = '" + req.body.temRuaPIA + "', motivoTempRuaPIA = '" + req.body.motivoTempRuaPIA + "', proceMotiTempRuaPIA = '" + req.body.proceMotiTempRuaPIA + "', centAcolhiPIA = '" + req.body.centAcolhiPIA + "', comproJudiPIA = '" + req.body.comproJudiPIA + "', qualComproJudiPIA = '" + req.body.qualComproJudiPIA + "', propInicialPIA = '" + req.body.propInicialPIA + "', PTRS = '" + req.body.PTRS + "' WHERE IDPIA = '" + req.body.IDPIA + "'";
  
sql2 = "UPDATE FichaPIA SET especiSauPIA = '" + req.body.especiSauPIA + "' WHERE IDPIA = '" + req.body.IDPIA + "'";
  var db = new sqlite3.Database(DBPATH);
  var db2 = new sqlite3.Database(DBPATH);
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close();

  db2.run(sql2, [],  err => {
    if (err) {
        throw err;
    }
    res.end();
});
db2.close(); 
});



// FICHA ENCAMINHAMENTO

// Insere um registro (é o C do CRUD - Create)
app.post('/encaminhamentoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "INSERT INTO FichaEncaminhamento (servEnca, dataEnca, obsEnca ) VALUES ('" + req.body.servEnca + "', '" + req.body.dataEnca + "', '" + req.body.obsEnca + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});
// Exclui um registro (é o D do CRUD - Delete)
app.post('/encaminhamentodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM FichaEncaminhamento WHERE IdEncaminhamento = '" + req.body.IdEncaminhamento + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/encaminhamentoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "UPDATE FichaEncaminhamento SET obsEnca = '" + req.body.obsEnca + "' WHERE IdEncaminhamento = '" + req.body.IdEncaminhamento + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});
app.get('/encaminhamentoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaEncaminhamento ORDER BY IdEncaminhamento COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FICHA HISTÓRICO VOLUNTÁRIO

app.post('/historicovoluntariosinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "INSERT INTO HistoricoVOL (tituloHisVol, dataHisVol, duracaoHisVol, IDPerfil ) VALUES ('" + req.body.tituloHisVol + "', '" + req.body.dataHisVol + "', '" + req.body.duracaoHisVol + "', '" + req.body.IDPerfil + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/historicovoluntariosdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM HistoricoVOL WHERE IDHistoricoVol = '" + req.body.IDHistoricoVol + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/historicovoluntariosupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "UPDATE HistoricoVOL SET tituloHisVol = '" + req.body.tituloHisVol + "' WHERE IDHistoricoVol = '" + req.body.IDHistoricoVol + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/historicovoluntariosselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM HistoricoVOL ORDER BY IDHistoricoVol COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FICHA PERFIL ADM 

// Insere um registro (é o C do CRUD - Create)
app.post('/perfiladminsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO PerfilADM (perfilADM, imagemADM, descricaoADM, nomePerfilADM, telefonePerfilADM, emailPerfilADM) VALUES ('" + req.body.perfilADM + "', '" + req.body.imagemADM + "', '" + req.body.descricaoADM + "', '" + req.body.nomePerfilADM + "', '" + req.body.telefonePerfilADM + "', '" + req.body.emailPerfilADM + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/perfiladmdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM PerfilADM WHERE IDPerfil = '" + req.body.IDPerfil + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/perfiladmupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  sql = "UPDATE PerfilADM SET perfilADM = '" + req.body.perfilADM + "' WHERE IDPerfil = '" + req.body.IDPerfil + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/perfiladmselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM PerfilADM ORDER BY IDPerfil COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


//FICHA FREQUENCIA

// Insere um registro (é o C do CRUD - Create)
app.post('/fichafrequenciainsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaFrequencia (dataFreq, horarioFreq, nomeFreq, banhoFreq, lancheFreq, roupaFreq) VALUES ('" + req.body.dataFreq + "', '" + req.body.horarioFreq + "', '" + req.body.nomeFreq + "', '" + req.body.banhoFreq + "', '" + req.body.lancheFreq + "', '" + req.body.roupaFreq + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/fichafrequenciadelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaFrequencia WHERE IDFrequencia = '" + req.body.IDFrequencia + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/fichafrequenciaupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaFrequencia SET nomeFreq = '" + req.body.nomeFreq + "', dataFreq = '" + req.body.dataFreq + "', horarioFreq = '" + req.body.horarioFreq + "', lancheFreq = '" + req.body.lancheFreq + "', roupaFreq = '" + req.body.roupaFreq + "', banhoFreq = '" + req.body.banhoFreq + "' WHERE IDFrequencia = '" + req.body.IDFrequencia + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.get('/fichafrequenciaselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaFrequencia ORDER BY IDFrequencia COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json({data:rows});
  });
  db.close();
});


// LUGARES QUE OS ASSISTIDOS JÁ FREQUENTARAM

// Insere um registro (é o C do CRUD - Create)
app.post('/locaiscadastroinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaLocaisCadastro (viadutoLoca, predioppLoca, parquesLoca, tremLoca, rodoviasLoca, construcoesLoca, galeriaSubLoca, casasAbanLoca, outrosLoca) VALUES (  '" + req.body.viadutoLoca + "','" + req.body.predioppLoca + "','" + req.body.parquesLoca + "','" + req.body.tremLoca + "','" + req.body.rodoviasLoca + "','" + req.body.construcoesLoca + "','" + req.body.galeriaSubLoca + "','" + req.body.casasAbanLoca + "','" + req.body.outrosLoca + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/locaiscadastrodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaLocaisCadastro  WHERE IDLocais = '" + req.body.IDLocais + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// Visualisa um registro (é o R do CRUD - Read)
app.get('/locaiscadastroselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaLocaisCadastro ORDER BY IDLocais COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


// Atualiza um registro (é o U do CRUD - Update)
app.post('/locaiscadastroupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaLocaisCadastro SET tremLoca = '" + req.body.tremLoca + "' WHERE IDLocais = '" + req.body.IDLocais + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



// FICHA MOTIVO QUE ESTÁ EM SITUAÇÃO DE RUA

// Insere um registro (é o C do CRUD - Create)
app.post('/motivoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO FichaMotivo (perdaMoraMoti, ameacaMoti, alcoolismoMoti, probleFamiMoti, desempregoMoti, trabalhoMoti, tratamentoSauMoti, preferenciaMoti, esqueceuMoti, outroMoti) VALUES (  '" + req.body.perdaMoraMoti + "','" + req.body.ameacaMoti + "','" + req.body.alcoolismoMoti + "','" + req.body.probleFamiMoti + "','" + req.body.desempregoMoti + "','" + req.body.trabalhoMoti + "','" + req.body.tratamentoSauMoti + "','" + req.body.preferenciaMoti + "','" + req.body.esqueceuMoti + "','" + req.body.outroMoti + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/motivodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM FichaMotivo  WHERE IDMotivoAbo = '" + req.body.IDMotivoAbo + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// Visualisa um registro (é o R do CRUD - Read)
app.get('/motivoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM FichaMotivo ORDER BY IDMotivoAbo COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


// Atualiza um registro (é o U do CRUD - Update)
app.post('/motivoupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE FichaMotivo SET alcoolismoMoti = '" + req.body.alcoolismoMoti + "' WHERE IDMotivoAbo = '" + req.body.IDMotivoAbo + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



// FICHA USUARIOS ADM

// Insere um registro (é o C do CRUD - Create)
app.post('/usuarioadminsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO UsuarioADM (nomeCompletoADM,emailADM,senha,telefone,IDPerfil) VALUES (  '" + req.body.nomeCompletoADM + "','" + req.body.emailADM + "','" + req.body.senha + "','" + req.body.telefone + "','" + req.body.IDPerfil + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/usuariosadmdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM UsuarioADM  WHERE IDUsuarioADM = '" + req.body.IDUsuarioADM + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// Visualisa um registro (é o R do CRUD - Read)
app.get('/usuariosamdselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM UsuarioADM ORDER BY IDUsuarioADM COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/usuariosadmupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE UsuarioADM SET nomeCompletoADM = '" + req.body.nomeCompletoADM + "' WHERE IDUsuarioADM = '" + req.body.IDUsuarioADM + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});







/* Definição dos endpoints do sistema*/

// LOGIN

app.post('/logininsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "INSERT INTO login (email, senha) VALUES ('" + req.body.email + "', '" + req.body.senha + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/logindelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM login WHERE IDlogin = '" + req.body.IDlogin + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/loginupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "UPDATE login SET senha = '" + req.body.senha + "' WHERE IDlogin = '" + req.body.IDlogin + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.post('/loginselect', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = `SELECT senha FROM login where email = '${req.body.email}'`;
  console.log(sql);
  db.all(sql, [], (err,rows) => {
    if (err) {
      throw err;
    } 
    //res.json(rows);
    
    
    if(rows.length > 0 && rows[0].senha == req.body.senha) res.json(true) 
    else res.json(false);

  });
  db.close();
});


app.get('/loginselect2', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM login ORDER BY IDlogin COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FORMULARIO


// Atualiza um registro (é o U do CRUD - Update)
app.post('/formupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "UPDATE forms SET obsForm = '" + req.body.obsForm + "' WHERE IDform = '" + req.body.IDform + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/forminsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO forms (Nome, TelefoneEmail, IDFuncao, funcao, obsForm) VALUES (  '" + req.body.Nome + "','" + req.body.TelefoneEmail + "','" + req.body.IDFuncao + "','" + req.body.funcao + "','" + req.body.obsForm + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});



// Exclui um registro (é o D do CRUD - Delete)
app.post('/formdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM forms WHERE IDform = '" + req.body.IDform + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



app.get('/formselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM forms ORDER BY IDform COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FORMULÁRIO DE CONTATO

// Insere um registro (é o C do CRUD - Create)
app.post('/formcontatoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO contato (nome, contato, assunto) VALUES (  '" + req.body.nome + "','" + req.body.contato + "','" + req.body.assunto + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});



// Exclui um registro (é o D do CRUD - Delete)
app.post('/formcontatodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM contato WHERE IDContato = '" + req.body.IDContato + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



app.get('/formcontatoselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM contato ORDER BY IDContato COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});



// FORMULÁRIO DE PARCEIRO

// Insere um registro (é o C do CRUD - Create)
app.post('/formparceiroinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO parceiros (nome, contato, parceiro, assunto) VALUES (  '" + req.body.nome + "','" + req.body.contato + "','" + req.body.parceiro + "', '" + req.body.assunto + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});



// Exclui um registro (é o D do CRUD - Delete)
app.post('/formparceirodelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM parceiros WHERE IDParceiro = '" + req.body.IDParceiro + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



app.get('/formparceiroselect', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM parceiros ORDER BY IDParceiro COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});





app.listen(port,() => {
  console.log(`Server running at http://:${port}/`);
});