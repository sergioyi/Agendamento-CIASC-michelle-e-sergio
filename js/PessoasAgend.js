//  aqui está o retorno

let vAgendamento = [];
let vEspecialidade = [];
let vHora = [];
let vData = [];

function mostrar() {
  if (localStorage.agendamento || localStorage.especialidade) {
    vAgendamento = JSON.parse(localStorage.getItem('agendamento'));
    vEspecialiade = JSON.parse(localStorage.getItem('especialidade'));
  }
  let linha = document.createElement("tr");
  for (var i in vAgendamento) {
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
    
    //aqui está a especialidade
    let horaItem = document.createElement("td");
    horaItem.innerText = vHora[i];
    linha.appendChild(horaItem);
    corpo.appendChild(linha);
  }
}