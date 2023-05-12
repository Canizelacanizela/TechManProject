var UrList = "http://localhost:3000/equip";
var listarEquip = document.querySelector(".profileTwo");
var itemSec = document.querySelector(".profile-body-section");
const mExcluir = document.querySelector("#modalExcluir");
const mComent = document.querySelector("#Mymodal");
const labelid = document.querySelector("#idExclui");

function carregar() {
  const options = {
    method: "GET",
  };
  fetch(UrList, options)
    .then((res) => res.json())
    .then((res) => {
      listaEquipamento(res);
    })
    .catch((err) => console.error(err));
}

function listaEquipamento(profissionais) {
  profissionais.forEach((e, i) => {
    let equip = document.querySelector(".profile-body-section").cloneNode(true);
    equip.classList.remove("model");


    equip.querySelector("#id").innerHTML += e.id;
    equip.querySelector("#imagem").src = "../assets/" + e.imagem;
    equip.querySelector("#equipamento").innerHTML += e.equipamento;
    equip.querySelector("#descricao").innerHTML += e.descricao;
    equip.querySelector("#del").addEventListener("click", () => {
      preparaExclusao(e.id);
    });
    equip.querySelector(".btn-comment").addEventListener("click", () => {
      openModal(e.id)
    })

    listarEquip.appendChild(equip);
  });
}



function sair() {
  window.localStorage.removeItem("info");
  window.location.href = "../Login/index.html";
}

function preparaExclusao(id) {

  mExcluir.setAttribute("style", "display:flex");
  labelid.innerHTML = id;

  mExcluir.setAttribute('style', 'display:flex');
  labelid.innerHTML = id;

}

function excluir(id) {
  let options = { method: "DELETE" };

  fetch("http://localhost:3000/equipdel/" + id, options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 204) {
        window.location.reload();
      } else {
        alert("Erro ao excluir: + " + resp);
      }
    });
}
// __________________cadastrar_________________

function openModalCad() {
  const mCadas = document.getElementById('Mymodel');
  document.getElementById("Mymodel").style.display = "block";
}

// Fechar modal ao clicar fora do conteúdo do modal
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("Mymodel")) {
    document.getElementById("Mymodel").style.display = "none";
  }
});

// Fechar modal ao clicar no botão de fechar
document.getElementsByClassName("closez")[0].addEventListener("click", function () {
  document.getElementById("Mymodel").style.display = "none";
});


function cadastrarEquip() {
  //Cria um objeto com os dados dos campos html <input>

  let equipamento = document.querySelector("#equipamentoc").value
  let imagem = document.querySelector("#imagemc").value
  let descricao = document.querySelector("#descricaoc").value
  let ativo = document.querySelector("#ativoc").value

  let corpo = {
      "equipamento": equipamento,
      "imagem": imagem,
      "descricao": descricao,
      "ativo": Number(ativo),
  }
  console.log(corpo);
  let options = {
      "method": "POST",
      "headers": {
          "content-type": "application/json",
      },
      "body": JSON.stringify(corpo)
  };

  fetch('http://localhost:3000/equipcriar', options)
      .then(res => { return res.json() })
      .then(resp => {
          if (resp != undefined) {
              console.log("Deu Certo");
              window.location.reload();
          } else {
              console.log("Parece que deu erro");
          }
      });
}


//  ______________modal coment_____________________

// Abrir modal ao clicar no botão
function openModal(id) {
 
  const mComent = document.getElementById('myModal');
  document.getElementById("Mymodal").style.display = "block";


  function carregar() {
    // Usar o valor da input em sua requisição ou função
    const options = {
      method: "GET"
    }
    fetch("http://localhost:3000/coment/" + id, options)
      .then(res => res.json())
      .then(res => {
        listacomentario(res);
      })
      .catch(err => console.error(err));
  }

  carregar();
}

function listacomentario(comentarios) {
  const listarEq = document.getElementById("listarEq");

  comentarios.forEach((comentario) => {
    let cm = document.createElement("div");
    cm.classList.add("comment");



    let perfil = document.createElement("p");
    cm.innerHTML = comentario.perf.perfil;
    cm.appendChild(perfil);

    let data = document.createElement("p");
    let dataObj = new Date(comentario.data);
    let dia = dataObj.getDate();
    let mes = dataObj.getMonth() + 1; // Lembre-se que o mês começa em 0, então somamos 1
    let ano = dataObj.getFullYear();

    data.innerHTML = dia + "/" + mes + "/" + ano;
    cm.appendChild(data);

    let cmText = document.createElement("p");
    cmText.innerHTML = comentario.comentario;
    cm.appendChild(cmText);

    listarEq.appendChild(cm);
  });
}



// Fechar modal ao clicar fora do conteúdo do modal
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("Mymodal")) {
    document.getElementById("Mymodal").style.display = "none";
  }
});


// Fechar modal ao clicar no botão de fechar
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  document.getElementById("Mymodal").style.display = "none";
});



document.getElementsByClassName("closexz")[0].addEventListener("click", function () {
  document.getElementById("Mymundo").style.display = "none";
});


function openComentario() {
  const mComent = document.getElementById('Mymundo');
  document.getElementById("Mymundo").style.display = "block";
  document.getElementById("Mymodal").style.display = "none";
}