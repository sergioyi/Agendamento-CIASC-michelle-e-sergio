const nome = document.getElementById('nome').value;//valor do input de nome
const cpf = document.getElementById('cpf').value;//valor do input de cpf
const corpo = document.getElementById("corpo");//onde vai ter as linha da tabela
const tabela = document.getElementById("tabela");//a tabela inteira com o corpo dentro
const th = document.getElementById("th");//os titulos das colunas
let vetor = [];
//let vetor1 = [];  remover 



//  PASSO A PASSO
//
//1- colocar o link da API para fazer o metodo get, colocando ${nome} para aque o valor seja atribuido a pesquisa
//2- coloco o retorno do fetch "then" trazendo o valor em um formato json
//3- cria uma linha para receber os td's/espaços para colocar os valores
//4- cria um espaço para receber o valor da da requisição td
//5- atribui o valor vindo da API ao seu espaço td. Talvez tenha que remover o <p></p>
//6- coloca os td's na tr 
//7- coloca a tr na tbody
//8- limpa os campos de texto
function adicionar() {
  fetch(  ,{
    method:GET,
  })
  .then((resposta) => resposta.json())
  .then((resultado)=>{
    let linha = document.createElement("tr")
    let nomeItem = document.createElement("td")
    let cpfItem = document.createElement("td")
    nomeItem.innerHTML= `<p>${resultado.nome}</p>`
    nomeItem.innerHTML= `<p>${resultado.nome}</p>`
    linha.appendChild(nomeItem)
    linha.appendChild(cpfItem)
    corpo.appendChild(linha)
    nome.value = ""
    cpf.value = ""
  })
}
botao.addEventListener("click", adicionar);//quando clicar é para buscar na API

//      Arrumando o objetojson que faz a requisição
/*
const ObjPesquisa = {
  "nome":,
  "cpf":,
  "data-consulta":,
  "aluno1":,
  "aluno2":,
  "esecialidade":
}
*/