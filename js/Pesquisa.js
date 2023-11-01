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
/*
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
*/

//fazendo a tabela
function criarTabela(){
  const centralizaTabela = document.getElementById("centralizar");
  //const centralizaTabela = document.createElement("div");//tenta tirar isso e chamar o criatebela para a div ja existente
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
  const criaDataConsulta = document.createElement("th");
  criaDataConsulta.innerText = "data consulta:";
  criaLinha.appendChild(criaDataConsulta);
  const criaAluno1 = document.createElement("th");
  criaAluno1.innerHTML = "Aluno 1:";
  criaLinha.appendChild(criaAluno1);
  const criaAluno2 = document.createElement("th");
  criaAluno2.innerText = "Aluno 2:";
  criaLinha.appendChild(criaAluno2);
  const criaEspecialidade = document.createElement("th");
  criaEspecialidade.innerText = "Especialidade:";
  criaLinha.appendChild(criaEspecialidade);

  //criando o corpo da tabela

  const criaTbody = document.createElement("tbody");
  //dentro dele fixca as requisições
}
/*    REMOVI ISSO DO HTML DA PESQUISA 
    <table id="tabela">
      <thead id="thead">
        <tr>
          <th>Nome:</th>
          <th>cpf:</th>
          <th>data consulta:</th>
          <th>Aluno 1:</th>
          <th>Aluno 2:</th>
          <th>Especialidade:</th>
        </tr>
      </thead>
      <tbody id="corpo">
        <!--AQUI VAI FICAR A CADA UM DOS DADOS RECEBIDOS DOS INPUT'S-->
      </tbody>
    </table>
*/