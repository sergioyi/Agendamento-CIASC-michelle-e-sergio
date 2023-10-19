const inserir = document.getElementById('nome');
const inserircpf = document.getElementById('cpf');/*cpf aqi*/
let vetor = [];/*descobrir como criar objetos e substituir o array vetor*/
let vetor1 = [];
const corpo = document.getElementById("corpo");
const tabela = document.getElementById("tabela");
const th = document.getElementById("th");



function adicionar() {
  
  if (localStorage.valores) {
    vetor = JSON.parse(localStorage.getItem('valores'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
    vetor.splice(vetor, 1);// o vetor receba a remoção
    localStorage.valores = JSON.stringify(vetor);/// mande para o local storage/(valores) o nome vazio 
  }
  if (localStorage.valores1) {
    vetor1 = JSON.parse(localStorage.getItem('valores1'));//está pegando o "valores" que tem os valores do "vetor" e devolve a ela
    vetor1.splice(vetor1, 1);// o vetor receba a remoção
    localStorage.valores1 = JSON.stringify(vetor1);/// mande para o local storage/(valores) o nome vazio 
  }
  let novoItem = (inserir.value);
  let novoItem1 = (inserircpf.value);/*cpf aqi*/
  vetor.push(novoItem);
  vetor1.push(novoItem1);/*cpf aqi*/
  inserir.value = "";
  inserircpf.value = "";
  localStorage.valores = JSON.stringify(vetor);
  localStorage.valores1 = JSON.stringify(vetor1);
  corpo.innerHTML = "";
  mostrar();
}
botao.addEventListener("click", adicionar);


function mostrar() {
  if (localStorage.valores || localStorage.valores1) {
    vetor = JSON.parse(localStorage.getItem('valores'))
    vetor1 = JSON.parse(localStorage.getItem('valores1'));
  }

  let linha = document.createElement("tr");
  for (var i in vetor) {
    let nomeItem = document.createElement("td");
    nomeItem.innerText = vetor[i];
    linha.appendChild(nomeItem);
    corpo.appendChild(linha);
  }
  for (var i in vetor1) {
    let cpfItem = document.createElement("td");
    cpfItem.innerText = vetor1[i];/*cpf aqi*/
    linha.appendChild(cpfItem);/*cpf aqi*/
    corpo.appendChild(linha);

  }
}

//      Arrumando o objetojson que faz a requisição

const ObjPesquisa = {
  nome: inserir.value,
  cpf: inserircpf.value
  //dtConsulta:,
  //aluno1:,
  //aluno2:,
  //especialidade:,
}