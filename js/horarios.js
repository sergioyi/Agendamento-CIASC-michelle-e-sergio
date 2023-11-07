const main = document.querySelector("main");
function HorariosDisponiveis(buttonId) {
  function criarTabela() {
    //isso retorna o id clicado!!!!!!!!!!!!!!!!!!!!!!!
    //document.addEventListener("click", function(e) {
      let descobre = buttonId;// e.target.id;//  aqui começa a função para descobrir o id do botão clicaodo para ser atribuido ao enfermegemespe

      main.innerHTML = "";
      //aqui fica o create da tabela de horario
      const coluna = document.createElement("div");//recebe as caixas dos horarios
      main.appendChild(coluna);
      coluna.style.paddingBottom = "45px";//por causa do tamanho dos botões não ficarem de fora

      fetch("../js/file.json")
        .then(response => response.json())
        .then((data) => {
          console.log('carregou1 ', data);
          const enfermagemespe = data.find(item => item.id == descobre);
          console.log('carregou2 ', descobre);
          if (enfermagemespe) {
            const horarioUsuario1 = enfermagemespe.array;
            //mudando o nome da pagina
            const nomeEspecialidade = enfermagemespe.name;
            const titulo = document.querySelector("title");
            titulo.innerHTML = `${nomeEspecialidade}`;

            //criando os botões
            horarioUsuario1.forEach((elemen) => { //pegando a array para declarar o foreach
              console.log(elemen);
              const botao = document.createElement("button");
              coluna.appendChild(botao);
              botao.type = "button";
              botao.className = "botao1";
              botao.innerText = `${elemen}`;
            });
          }
        })
      //  aqui finaliza a função para descobrir o id do botão clicaodo para ser atribuido ao enfermegemespe
    //});
    //
  }
  criarTabela();
}
//versão  corrigida do romulo
/**  
const main = document.querySelector("main");
function HorariosDisponiveis(buttonId) {
  function criarTabela() {
    //isso retorna o id clicado!!!!!!!!!!!!!!!!!!!!!!!
    //document.addEventListener("click", function(e) {
      document.getElementById("splash").style.display = "block";
      let descobre = buttonId;// e.target.id;//  aqui começa a função para descobrir o id do botão clicaodo para ser atribuido ao enfermegemespe

      main.innerHTML = "";
      //aqui fica o create da tabela de horario
      const coluna = document.createElement("div");//recebe as caixas dos horarios
      main.appendChild(coluna);
      coluna.style.paddingBottom = "45px";//por causa do tamanho dos botões não ficarem de fora

      fetch("../js/file.json")
        .then(response => response.json())
        .then((data) => {
          console.log('carregou1 ', data);
          const enfermagemespe = data.find(item => item.id == descobre);
          console.log('carregou2 ', descobre);
          if (enfermagemespe) {
            const horarioUsuario1 = enfermagemespe.array;
            //mudando o nome da pagina
            const nomeEspecialidade = enfermagemespe.name;
            const titulo = document.querySelector("title");
            titulo.innerHTML = `${nomeEspecialidade}`;

            //criando os botões
            horarioUsuario1.forEach((elemen) => { //pegando a array para declarar o foreach
              console.log(elemen);
              const botao = document.createElement("button");
              coluna.appendChild(botao);
              botao.type = "button";
              botao.className = "botao1";
              botao.innerText = `${elemen}`;
            });
            document.getElementById("splash").style.display = "none";
          }
        })
      //  aqui finaliza a função para descobrir o id do botão clicaodo para ser atribuido ao enfermegemespe
    //});
    //
  }
  criarTabela();
}
*/

//versão html corrigida do romulo
/** 
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Cadastro Paciente</title>
  <link rel="stylesheet" href="style/padrao.css">
  <link rel="stylesheet" href="style/Inicio.css">
</head>

<body>

  <div id="splash"
    style="position: fixed; z-index: 10000; width: 100%; height: 100%; background-color: white; display: none;">
    Carregando...
  </div>

  <header>
    <div id="ciasc"><strong> C . I . A . S . C</strong></div>
    <img src="Imagens/opcao.png" alt="opções" class="imagem-opicao" onclick="Usuario()">
  </header>
  <!--este botao tem que levar um pop up-->
  <aside>
    <a href="index-nova-consulta.html">
      <button type="button" class="nova-consulta"><strong>Novo Agendamento</strong></button></a>
    <br>
    <a href="index-pesquisa-consulta.html">
      <button type="button" class="pesquisa-consulta"><strong>Pesquisa Consulta</strong></button></a>
    <br>
    <a href="index-cadastro-paciente.html"><button type="button" class="cadastro-paciente"><strong>Cadastro
          Paciente</strong></button></a>
    <br>
    <button type="button" class="fisioterapia" id="1" onclick="HorariosDisponiveis(1)"><img
        src="Imagens/fisioterapia.png" alt="fisioterapia" class="emoji-fisioterapia"><strong>
        Fisioterapia</strong></button>
    <br>
    <button type="button" class="nutricao" id="2" onclick="HorariosDisponiveis(2)"><img src="Imagens/nutriçao.png"
        alt="nutricao" class="emoji-nutricao"><strong> Nutrição</strong></button>
    <br>
    <button type="button" class="enfermagem" id="3" onclick="HorariosDisponiveis(3)"><img src="Imagens/enfermagem.png"
        alt="enfermagem" class="emoji-enfermagem"><strong>Enfermagem</strong></button>
    <br>
  </aside>
  <!--AQUUI ESTÁ A DIFERENÇA DO CADASTRO DE NOVA CONSULTA-->
  <div class="centralizar">
    <main>
      <div class="caixa-de-dentro">
        <form action="" method="post">
          <!--AQUI É PARA COLOCAR O JAVA-->
          <div class="linha1">
            <!--aqui é para deixar o nome ao lado do email-->
            <div id="caixa-nome">
              <label class="nome" for="nome">Nome</label>
              <br>
              <input type="text" id="nome" name="Nome" required>
            </div>
            <div id="caixa-nascimento">
              <label class="nascimento" for="nascimento">Data Nascimento</label>
              <br>
              <input type="date" id="nascimento" name="data de nascimento">
            </div>
          </div>
          <!--aqui termina a lina 1-->
          <div class="linha2">
            <!--aqui é para deixar o nome ao lado do email-->
            <div id="caixa-cpf">
              <label class="cpf" for="cpf">CPF</label>
              <br>
              <input type="text" id="cpf" name="cpf">
            </div>
            <div id="caixa-idade">
              <label class="idade" for="idade">Idade</label>
              <br>
              <input type="number" id="idade" name="idade" required>
            </div>

            <div id="caixa-endereco">
              <label class="telefone" for="endereco">Endereço</label>
              <br>
              <input type="" id="endereco" name="Endereco">
            </div>

          </div>
          <!--aqui termina a linha 2-->
          <div class="linha3">
            <!--aqui é para deixar o nome ao lado do email-->
            <div id="caixa-email">
              <label class="e-mail" for="email">E-mail</label>
              <br>
              <input type="email" id="email" name="email">
            </div>

            <div id="caixa-telefone">
              <label class="telefone" id="tel1" for="telefone">Telefone 1</label>
              <br>
              <input type="tel" id="telefone" name="Telefone 1" required />
            </div>
            <div id="caixa-telefone1">
              <label class="telefone" id="tel2" for="telefone1">Telefone 2</label>
              <br>
              <input type="tel" id="telefone1" name="telefone2">
            </div>

          </div>
          <!--aqui termina a linha 3-->
          <button type="submit" id="botao">Cadastrar</button>
        </form>
      </div>
    </main>
    <div id="deslogar">
      <!--aqui vai ficar o campo de deslogar-->
    </div>
  </div>
  <script src="js/horarios.js"></script>
  <script src="js/deslogar.js"></script>
</body>

</html>
*/