
const express = require('express'); 
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("../../../frontend/"));

const hostname = '127.0.0.1';
const port = 3094;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'adm.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


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


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});