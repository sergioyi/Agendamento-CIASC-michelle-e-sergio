//limpa o main
const main = document.querySelector("main");
function limpaMain(){
    main.remove();
    criarTabela();//ao remover o conteudo cria a tabela
}

function criarTabela(){

//criar um switch case para caso  clique em um o target dê o valor do id
//isso retorna o id clicado!!!!!!!!!!!!!!!!!!!!!!!
document.addEventListener("click", function (e) {
  let descobre = e.target.id;//  aqui começa a função para descobrir o id do botão clicaodo para ser atribuido ao enfermegemespe

    //mudando o nome da pagina
    const titulo = document.querySelector("title");
    titulo.innerHTML = "Enfermagem";
    //
    //aqui fica o create da tabela de horario
    const corpo = document.querySelector(".centralizar");
    const titleh2 = document.createElement("h2");
    corpo.appendChild(titleh2);
    const main = document.createElement("main");
    corpo.appendChild(main);
    const coluna = document.createElement("div");//recebe as caixas dos horarios
    main.appendChild(coluna);
    coluna.style.paddingBottom = "45px";//por causa do tamanho dos botões não ficarem de fora

    //criando o titulo da página
    const body = document.querySelector("body");//chamando o body para colocar o titlo h2
    const tituloh2 = document.createElement("h2");
    const terceiroFilhodody = body.children[2];//garantido oo espaço para o para o titulo que ainda vai aparecer
    body.insertBefore(titleh2,terceiroFilhodody);//inserindo o titulo

  fetch("../js/file.json")
  .then(response => response.json())
  .then((data) => {
    const enfermagemespe = data.find(item => item.id == descobre);
    if(enfermagemespe){
      const nomeEspecialidade = enfermagemespe.name;
      const horarioUsuario1 = enfermagemespe.array;
      titleh2.innerHTML=`${nomeEspecialidade}`;

    //criando os botões
    horarioUsuario1.forEach((elemen)=> { //pegando a array para declarar o foreach
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
});
//
}