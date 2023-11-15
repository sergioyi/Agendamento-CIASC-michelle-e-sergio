///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //  aqui está o código de como fazer o modal para o botão "click"

/*    const openModalButton = document.querySelector('.open-modal');
      const modal = document.getElementById('modal');
      const fade = document.getElementById('fade');

      //o togle serve para se o que se refere no caso a classe está ela é removida se não é colocada
      const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
      }

      [openModalButton, fade].forEach((el) => {//todos eles tem o evento de click e cada um deles tem o "el" por serem elementos
        el.addEventListener("click", () => toggleModal());
      });*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  aqui está o retorno dos valores do modal de cada especialidde é pego do agendamendo os dados e é coloado em especialidade
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');
//o togle serve para se o que se refere no caso a classe está ela é removida se não é colocada
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
}
///////////////////////////////////////////////////////////////////////

//aqui é para aparecer os botões de hora de cada especialidade

const main = document.querySelector("main");
var contador = 0;//os id's de cada botão vai ser incremntado
function HorariosDisponiveis(buttonId) {//tm como parametro o valor que numero que é o id disponivl no file.json
  let descobre = buttonId;//descobre o id dado como parametro da função
  main.innerHTML = "";//limpa o main
    
    //aqui fica o create da tabela de horario
    const coluna = document.createElement("div");//recebe as caixas dos horarios
    main.appendChild(coluna);
    coluna.style.paddingBottom = "45px";//por causa do tamanho dos botões não ficarem de fora do main

  fetch("../js/file.json")
     .then(response => response.json())
     .then((data) => {//data são os obejetos das especialidades (nome, horarios e id)
          
     const especialidade = data.find(item => item.id == descobre);//find procura dando como parametro "item" e descobrir qual o id dentr os objetos qu tem no file.json, podendo ser atulizado
          
     if (especialidade) {
      //busca os horarios em uma array
        const horarioUsuario = especialidade.array;
      //mudando o nome da página
        const nomeEspecialidade = especialidade.name;
        const titulo = document.querySelector("title");
        titulo.innerHTML = `${nomeEspecialidade}`;

      //criando os botões
        horarioUsuario.forEach((elemen) => { //percorrendo a array que possui os horarios para declarar o foreach e cada horario ser atribuido ao elemen
          contador++;//cria valores para cada botão

          const botao = document.createElement("button");
          coluna.appendChild(botao);
          botao.type = "button";
          botao.className = "botao1";//é por causa do style
          botao.id = "botao - "+contador;//atribui os valores para cada botão
          console.log(botao.id);//DESCOBRIR COMO ZERAR O CONTADOR SE ATRAPALHAR
          //ao percorer todos os elementos tm que fazer a function de mostrar a tabela
          botao.className = "open-modal";
          botao.innerHTML = `${elemen}`;//isso de baixo é para fazer os tickt's que foram removidos
          //<div class="hora">${elemen}<br><div class="arrTicket"><div id="ticket"+contador>30</div>/30</div></div>`








          [botao, fade].forEach((el) => {//os botões e o fade (que passa a ser todo o fundo escuro) é o que desativa o modal pela function toggleModal
            el.addEventListener("click", () => toggleModal());
          });








          botao.addEventListener("click", ()=>{
            corpo.innerHTML = ""//limpar para receber novos valores
            fetch("../js/simulaagendamen.json")
               .then(response => response.json())
               .then((dados) => {
                dados.forEach((e)=>{//vai percorrer a quantidade de dados que tem no array
                //busca nos agendamentos uma especialidade
                  var agenEspecia = e.especialidade;
                //busca nos agendamentos um nome
                  var agenNome = e.name;
                //busca nos agendamentos uma hora
                  var agenHora = e.hora;
          
                  let linha = document.createElement("tr");//criar uma linha para cada item dentro do array
          
              //aqui está o nome
              let EspecialiItem = document.createElement("td");
              EspecialiItem.innerText = agenNome;
              linha.appendChild(EspecialiItem);
              corpo.appendChild(linha);
          
              //aqui está a especialidade
              let nomeItem = document.createElement("td");
              nomeItem.innerText = agenEspecia;
              linha.appendChild(nomeItem);
              corpo.appendChild(linha);
          
              //aqui está a hora
              let HoraItem = document.createElement("td");
              HoraItem.innerText = agenHora;
              linha.appendChild(HoraItem);
              corpo.appendChild(linha);
               })
              })
          })
          //aqui termina o evento de click dos botões de hora
        });
      }
    })
}