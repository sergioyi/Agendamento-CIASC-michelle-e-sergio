function Usuario(){
const main = document.querySelector("#deslogar");
main.innerHTML = "";
//Crianndo os botões
const botsair = document.createElement("button");
botsair.type = "button";
botsair.innerText = "Deslogar";
botsair.className = "outrosbotoes";
const dadosuser = document.createElement("button");
dadosuser.type = "button";
dadosuser.innerHTML = "Usúario";
dadosuser.className = "outrosbotoes";
dadosuser.style.cursor = "pointer";
botsair.style.cursor = "pointer";
//
//Dando os valores 
const botsairA = document.createElement("a");
botsairA.href = "../index-Login.html";
botsairA.appendChild(botsair);
const dadosuserA = document.createElement("a");
dadosuserA.href = "../index-informacao-usuario.html";
dadosuserA.appendChild(dadosuser);
//
//criando o corpo
const container = document.createElement("div");
container.style.backgroundColor = "#0a0d22";
container.style.height = "9rem";
container.style.width = "10rem";
container.style.borderRadius = "4px";
container.style.marginTop = "1rem";
container.style.padding = "19px 19px";
container.appendChild(dadosuserA);
container.appendChild(botsairA);
main.appendChild(container);
//
console.log("funcionou!!!");
}
