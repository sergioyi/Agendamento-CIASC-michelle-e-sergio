
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //  aqui tem que criar o modal 
      const openModalButton = document.querySelector('.open-modal');
      const modal = document.getElementById('modal');
      const fade = document.getElementById('fade');

      //o togle serve para se o que se refere no caso a classe está ela é removida se não é colocada
      const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
      }

      [openModalButton, fade].forEach((el) => {//todos eles tem o evento de click.e cada um deles tem o el por serem elementos
        el.addEventListener("click", () => toggleModal());
      });
/////////////////////////////////////////////////////////////////////////////

//  aqui está o retorno dos valores do modal de cada especialidde é pego do agendamendo os dados e é coloado em especialidade

function mostrar() {
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
}