var UrList = "http://localhost:3000/equip";
var Urcoment = "http://localhost:3000/coment";
var listarEquip = document.querySelector(".profileTwo");
var itemSec = document.querySelector(".profile-body-section");
const mComent = document.querySelector("#Mymodal");

function carregar() {
    const options = {
        method: "GET"
    }
    fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listaEquipamento(res);
        })
        .catch(err => console.error(err));
}

function listaEquipamento(profissionais) {
    profissionais.forEach((e, i) => {
        let equip = document.querySelector(".profile-body-section").cloneNode(true);
        equip.classList.remove("model");

        equip.querySelector("#imagem").src = '../assets/' + e.imagem;
        equip.querySelector("#equipamento").innerHTML += e.equipamento;
        equip.querySelector("#descricao").innerHTML += e.descricao;

        listarEquip.appendChild(equip);
    });

}



function sair() {
    window.localStorage.removeItem("info");
    window.location.href = "../Login/index.html";
}


//  ______________modal coment_____________________

// Abrir modal ao clicar no botão
function openModal() {
    const mComent = document.getElementById('myModal');
    document.getElementById("Mymodal").style.display = "block";

    function carregar() {
        const options = {
            method: "GET"
        }
        fetch(Urcoment, options)
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

      let id = document.createElement("p");
      cm.innerHTML = comentario.id;
      cm.appendChild(id);

      let perfil = document.createElement("p");
      cm.innerHTML = comentario.perf.perfil;
      cm.appendChild(perfil);
  
      let data = document.createElement("p");
      let dataObj = new Date(comentario.data);
      let dia = dataObj.getDate();
      let mes = dataObj.getMonth() + 1; // Lembre-se que o mês começa em 0, então somamos 1
      let ano = dataObj.getFullYear();
      
      data.innerHTML =  dia + "/" + mes + "/" + ano;
      cm.appendChild(data);

      let cmText = document.createElement("p");
      cmText.innerHTML = comentario.comentario;
      cm.appendChild(cmText);

      listarEq.appendChild(cm);
    });
  }

// Fechar modal ao clicar no botão de fechar
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("Mymodal").style.display = "none";
  });

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

// Fechar modal ao clicar fora do conteúdo do modal
window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("Mymodal")) {
        document.getElementById("Mymodal").style.display = "none";
    }
});

