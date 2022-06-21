let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bi-search");

closeBtn.addEventListener("click", ()=>{
sidebar.classList.toggle("open");
menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
sidebar.classList.toggle("open");
menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
}else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
}
}


// MARIANA SCRIPT

for (var i = 0; i < 4; i++) {
    $("#programação-eventos")
        .append(`<div class="cards-programação col-12 col-md-5 m-2">
    <div class="texto-card-programação" >
        <h4>Sexta-Feira 03/06/2022</h4>
        <h5>Brecho Aberto</h5>
        <P>descrição do evento</P>
        <p> Abertura a comunidade | Privado</p>
    </div>
</div>`)
};

for (var i = 0; i < 3; i++) {
    $("#programação-eventos-2")
        .append(`<div class="cards-programação col-12 col-md-5 m-2">
    <div class="texto-card-programação" >
        <h4>Quarta-Feira 20/07/2022</h4>
        <h5>Laboratório de comidas típicas</h5>
        <P>descrição do evento</P>
        <p> Abertura a comunidade | Privado</p>
    </div>
</div>`)
};

// PARCEIROS ADM DANIEL

for (var i = 0; i < 8; i++) {
    $("#listas-cards-adminstrativo")
        .append(`
        <div class="cards-administrativo texto-card-administrativo col-12 col-md-5 m-2">
            <div>
                <h5 class="texto-ajuda ajuda">Nome do parceiro</h5>
            </div>
            <h5>[Nome do responsável]</h5>
            <p>email: exemplo@exemplo.com.br</p>
            <p>telefone: (11) 1111-1111</p>
            <p>mensagem: "Olá, como posso ajudar hoje?"</p>
        </div>
        `)
};

// VOLUNTARIOS ADM DANIEL
for (var i = 0; i < 8; i++) {
    $("#listas-cards-adminstrativo")
        .append(`
        <div class="cards-administrativo texto-card-administrativo col-12 col-md-5 m-2">
            <div>
                <h5 class="texto-ajuda ajuda">Bazar</h5>
            </div>
            <h5>[Nome do voluntário]</h5>
            <p>email: exemplo@exemplo.com.br</p>
            <p>telefone: (11) 1111-1111</p>
            <p>mensagem: "Olá, gostaria de ajudar com o bazar."</p>
        </div>
        `)
};

//teste//

// Getting all necessary elements from DOM.
const elements = {
    monthToReceiveValueBoxes: document.querySelectorAll(".to-receive-values-box"),
    visibilityControlButtons: document.querySelectorAll("#visibility-control-btn"),
}
// Instancing the resfreshVisibleBoxes function.
function refreshVisibleBoxes() {
    // Getting all month to receive boxes elements and setting its display property according to their classes.
    elements.monthToReceiveValueBoxes.forEach(box => {
        if(box.classList.contains("active")) {
            box.children[1].style.display = "flex";
        } else {
            box.children[1].style.display = "none";
        }
    })
}
// Getting all visibility control buttons.
elements.visibilityControlButtons.forEach(button => {
    // Adding a click event listener to all buttons.
    button.addEventListener("click", function() {
        // Controlling the "active" class in the target month to receive box element.
        if(button.parentNode.parentNode.classList.contains("active")) {
            button.parentNode.parentNode.classList.remove("active")
            button.parentNode.children[1].src = "../icons/arrow-down-circle.svg";
        } else {
            button.parentNode.parentNode.classList.add("active");
            button.parentNode.children[1].src = "../icons/arrow-up-circle.svg";
        }
        // Refreshing the visible boxes.
        refreshVisibleBoxes();
    })
})

// PAGINA Doação

function buttonNewAss() {
    $('#myModal').modal('show');
}

function fecharModal() {
    $('#myModal').modal('hide');
}

const tableBodyy = document.querySelector("#table-body-doacao");

$.ajax({
    url: "revirar-projeto4.herokuapp.com/doacaoselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        
        <tr>
                <th scope="row">${element.IDDoacao}</th>
                <td>${element.tituloDoacao}</td>
                <td>${element.dataDoacao}</td>
                <td>${element.valorDoacao}</td>
                <td>${element.nomeDoador}</td>
                <td>${element.cpfDoador}</td>
                <td>${element.telefoneDoador}</td>

                <td><button onclick="editDoacao(${element.IDDoacao})" class="buttonEdit"><i class="bi bi-pencil-fill"></i></button>
                  <button onclick="deleteDoacao(${element.IDDoacao})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                  <button onclick="viewDoacao(${element.IDDoacao})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                </td>
        </tr>

        `
        tableBodyy.appendChild(tr);
        });
    }
});

function salvarAss() {
    const inputTitulo = document.querySelector("input[name='titulo']").value;
    const inputDescricao = document.querySelector("input[name='descricao']").value;
    const inputData = document.querySelector("input[name='data']").value;
    const inputValor = document.querySelector("input[name='valor']").value;
    const inputCompro = document.querySelector("input[name='compro']").value;
    const inputNomeDoa = document.querySelector("input[name='nomeDoa']").value;
    const inputCpfDoa = document.querySelector("input[name='cpfDoa']").value;
    const inputTelefoneDoa = document.querySelector("input[name='telefoneDoa']").value;



    var settings = {
        "url": "revirar-projeto4.herokuapp.com/doacaoinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "tituloDoacao": inputTitulo,
            "descricaoDoacao": inputDescricao,
            "dataDoacao": inputData,
            "valorDoacao": inputValor,
            "comproDoacao": inputCompro,
            "nomeDoador": inputNomeDoa,
            "cpfDoador": inputCpfDoa,
            "telefoneDoador": inputTelefoneDoa,


        }
      };
      
      $.ajax(settings);
}

function deleteDoacao(id) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="myModal4"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir a doação ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deletedoc(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
            <button onclick="fecharModall()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(div);
    $('#myModal4').modal('show');
};

function fecharModall() {
    $('#myModal4').modal('hide');
    $('#myModal4').remove();
};

function deletedoc(id) {
        $.ajax({
            type: 'POST',
            url: "revirar-projeto4.herokuapp.com/doacaodelete",
            data: {IDDoacao: id},
        })
    }

function editDoacao(id) {
    const divv = document.createElement("div");
    divv.innerHTML = `
    <div id="myModal9"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <label for="exampleInputEmail1" class="form-label"></label>Novo valor:
            <input type="text" class="form-control" name="valorNew" id="edittt">
            </div>
            <div class="modal-footer">
            <button onclick="editVal(${id})" type="button" class="btn btn-primary">Confirmar edição</button>
            <button onclick="fecharVal()" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar edição</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(divv);
    $('#myModal9').modal('show');
};

function fecharVal() {
    $('#myModal9').modal('hide');
    $('#myModal9').remove();
};

function editVal(id) {
    var yr = document.getElementById('edittt').value;
    $.ajax({
        type: 'POST',
        url: 'revirar-projeto4.herokuapp.com/doacaoupdate',
        data: {IDDoacao: id, valorDoacao: yr},
    }).done(function () {
        console.log("aq")
    }).fail(function (msg) {
        //console.log('FAIL');
    }).always(function (msg) {
        //console.log('ALWAYS');
    });
    
    $('#myModal9').modal('hide');
    $('#myModal9').remove();
};

// TESTE

function viewDoacao(id) {
    $.ajax({
        url: "revirar-projeto4.herokuapp.com/doacaoselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const divvv = document.createElement("div");
    divvv.innerHTML = `
    <div id="myModa22"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <p class="textAA">${element.tituloDoacao}</p>
          </div>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
            <p class="textAA">${element.descricaoDoacao}</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"></label>Valor:
            <p class="textAA">${element.valorDoacao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Data:
            <p class="textAA">${element.dataDoacao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
            <p class="textAA">${element.comproDoacao}</p>
          </div>
          <div class="mb-6">
            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
            <p class="textAA">${element.nomeDoador}</p>
          </div>
          <div class="mb-6">
            <label for="exampleInputEmail1" class="form-label"></label>Comprovante:
            <p class="textAA">${element.cpfDoador}</p>
          </div>
          <div class="mb-6">
            label for="exampleInputEmail1" class="form-label"></label>Comprovante:
            <p class="textAA">${element.telefoneDoador}</p>
          </div>
            </div>
            <div class="modal-footer">
            <button onclick="fecharform()" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar formulário</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(divvv);
    $('#myModa22').modal('show');
            });
        }
    });
};

function fecharform() {
    $('#myModa22').modal('hide');
    $('#myModa22').remove();
};





