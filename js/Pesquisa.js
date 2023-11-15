const nome = document.getElementById('nome').value;//valor do input de nome
const cpf = document.getElementById('cpf').value;//valor do input de cpf

const centralizaTabela = document.getElementById("tabela");//onde vai ter as linha da tabela
const th = document.getElementById("th");//os titulos das colunas
//fazendo a tabela
function criarTabela(){
  centralizaTabela.innerHTML = "";
  centralizaTabela.className = "centralizar";

  
  const criaTabela = document.createElement("table");//ver se precissa colocar a class tabela

  centralizaTabela.appendChild(criaTabela);
  const criaCabecalho = document.createElement("thead");
  criaTabela.appendChild(criaCabecalho);
  
  const criaLinha = document.createElement("tr");
  criaCabecalho.appendChild(criaLinha);
  const criaNome = document.createElement("th");
  criaNome.innerText = "Nome:";
  criaLinha.appendChild(criaNome);
  
  const criaCpf = document.createElement("th");
  criaCpf.innerText = "CPF:";
  criaLinha.appendChild(criaCpf);
  
  const criaEspecialidade = document.createElement("th");
  criaEspecialidade.innerText = "Especialidade:";
  criaLinha.appendChild(criaEspecialidade);

  const criaDataConsulta = document.createElement("th");
  criaDataConsulta.innerText = "data consulta:";
  criaLinha.appendChild(criaDataConsulta);

  const criaHora = document.createElement("th");
  criaHora.innerText = "hora:";
  criaLinha.appendChild(criaHora);














  //aqui é quem vai receber todos os elementos da promise 

  const corpo = document.createElement("tbody");
  criaTabela.appendChild(corpo);





  fetch("../js/simulaoutroagen.json")
  .then(response => response.json())
  .then((dados) => {
   dados.forEach((e)=>{//vai percorrer a quantidade de dados que tem no array

   //busca nos agendamentos uma especialidade
     var agenEspecia = e.especialidade;
   //busca nos agendamentos um nome
     var agenNome = e.name;
   //busca nos agendamentos uma hora
     var agenHora = e.hora;
   //busca nos agendamentos um cpf
     var agenCpf = e.cpf;
   //busca nos agendamentos uma data
     var agenData = e.data;





 let linha = document.createElement("tr");//criar uma linha para cada item dentro do array





 //aqui está o nome 
 let nomeItem = document.createElement("td");
 nomeItem.innerText = agenNome;
 linha.appendChild(nomeItem);
 corpo.appendChild(linha);

  //aqui está o cpf
  let CpfItem = document.createElement("td");
  CpfItem.innerText = agenCpf;
  linha.appendChild(CpfItem);
  corpo.appendChild(linha);

 //aqui está a especialidade
 let EspecialiItem = document.createElement("td");
 EspecialiItem.innerText = agenEspecia;
 linha.appendChild(EspecialiItem);
 corpo.appendChild(linha);

 //aqui está a data
 let DataItem = document.createElement("td");
 DataItem.innerText = agenData;
 linha.appendChild(DataItem);
 corpo.appendChild(linha);

 //aqui está a hora
 let HoraItem = document.createElement("td");
 HoraItem.innerText = agenHora;
 linha.appendChild(HoraItem);
 corpo.appendChild(linha);
  })
 })


}