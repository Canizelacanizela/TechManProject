let bt1 = document.getElementById("b1");
let bt2 = document.getElementById("b2");
let bt3 = document.getElementById("b3");
let bt4 = document.getElementById("b4");
let bt5 = document.getElementById("b5");
let bt6 = document.getElementById("b6");
let bt7 = document.getElementById("b7");
let bt8 = document.getElementById("b8");
let bt9 = document.getElementById("b9");
let bt0 = document.getElementById("b0");
let btc = document.getElementById("bc");
let bplay = document.getElementById("bplay");
let senha = document.getElementById("senha");
let senha_digitada = "";

bt1.addEventListener("click", function () {
    senha_digitada += "1";
    senha.value += "*";
});
bt2.addEventListener("click", function () {
    senha_digitada += "2";
    senha.value += "*";
});
bt3.addEventListener("click", function () {
    senha_digitada += "3";
    senha.value += "*";
});
bt4.addEventListener("click", function () {
    senha_digitada += "4";
    senha.value += "*";
});
bt5.addEventListener("click", function () {
    senha_digitada += "5";
    senha.value += "*";
});
bt6.addEventListener("click", function () {
    senha_digitada += "6";
    senha.value += "*";
});
bt7.addEventListener("click", function () {
    senha_digitada += "7";
    senha.value += "*";
});
bt8.addEventListener("click", function () {
    senha_digitada += "8";
    senha.value += "*";
});
bt9.addEventListener("click", function () {
    senha_digitada += "9";
    senha.value += "*";
});
bt0.addEventListener("click", function () {
    senha_digitada += "0";
    senha.value += "*";
});
btc.addEventListener("click", function () {
    senha_digitada = "";
    senha.value = "";
});

bplay.addEventListener("click", function () {
    let info = {
        "senha": senha_digitada
    };

    fetch("http://localhost:3000/login", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(info)
    }).then(res => {
        let data = {
            info: res.json(),
            status: res.status
        }
        return data;
    }).then(res => {
        if (res.status == 404) {
            alert("Dados inválidos")
            window.location.reload();
        } else {
            return res.info
        }
    }).then(res => {
        window.localStorage.setItem("info", JSON.stringify(res[0]));
        if (res[0].perfil == 2)
            window.location.href = "../Home/index.html";
        else
            window.location.href = "../HomeComum/index.html";
    })
});
