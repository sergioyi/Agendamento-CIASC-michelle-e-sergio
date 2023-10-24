//  aqui está o retorno do modal de cada especialidde

let vAgendamento = [];
let vEspecialidade = [];
let vHora = [];
let vData = [];

function mostrar() {
  if (localStorage.agendamento) {
    vAgendamento = JSON.parse(localStorage.getItem('agendamento'));
    vEspecialidade = JSON.parse(localStorage.getItem('especialidade'));
    vHora = JSON.parse(localStorage.getItem('hora'));
  }
  corpo.innerHTML = ""//limpar para receber novos valores
  for (var i in vAgendamento) {
    let linha = document.createElement("tr");//criar uma linha para cada item dentro do array
    //aqui está o nome
    let nomeItem = document.createElement("td");
    nomeItem.innerText = vAgendamento[i];
    linha.appendChild(nomeItem);
    corpo.appendChild(linha);

    //aqui está a especialidade
    let especilidadeItem = document.createElement("td");
    especilidadeItem.innerText = vEspecialidade[i];
    linha.appendChild(especilidadeItem);
    corpo.appendChild(linha);
    
    //aqui está a hora
    let horaItem = document.createElement("td");
    horaItem.innerText = vHora[i];
    linha.appendChild(horaItem);
    corpo.appendChild(linha);
  }
}