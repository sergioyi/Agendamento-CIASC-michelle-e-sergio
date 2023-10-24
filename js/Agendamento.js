//index-nova-consulta  ESTÁ NELA
let nome = document.getElementById('nome');
let especialidade = document.getElementById('especialidade');
let hora = document.getElementById('hora');
let data = document.getElementById('data');
var vAgendamento = [];//vou ter que tentar fazer um objeto para ver se roda ao inves de array
var vEspecialidade = [];
var vHora = [];
var vData = [];
function adicionar() {
    if (localStorage.agendamento) {
        vAgendamento = JSON.parse(localStorage.getItem('agendamento')); 
      }
      if (localStorage.especialidade) {
        vEspecialidade = JSON.parse(localStorage.getItem('especialidade')); 
      }
      if (localStorage.hora) {
        vHora = JSON.parse(localStorage.getItem('hora')); 
      }
      if (localStorage.data) {
        vData = JSON.parse(localStorage.getItem('data')); 
      }
      let nomeItem = (nome.value);
      vAgendamento.push(nomeItem);
      nome.value = "";
      localStorage.agendamento = JSON.stringify(vAgendamento);

      let especialidadeItem = (especialidade.value);
      vEspecialidade.push(especialidadeItem);
      especialidade.value = "";
      localStorage.especialidade = JSON.stringify(vEspecialidade);

      let horaItem = (hora.value);
      vHora.push(horaItem);
      hora.value = "";
      localStorage.hora = JSON.stringify(vHora);

      let dataItem = (data.value);
      vData.push(dataItem);
      data.value = "";
      localStorage.data = JSON.stringify(vData);
}
botao.addEventListener("click", adicionar);






//////////////////////////////////////////////////////////////////////////////////////////////////
//          AQU ESTÁ O NEGOCIO DE ESCOLHA DE ESPECIALIDADE JUNTO COM A ESCOLHA DE HORARIO QUE É DA TELA DE AGENDAMENTO

function horarioNutri(){
  if(especialidade.value == "Nutrição"){
const op = document.getElementById("op");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");
const op4 = document.createElement("option");
const op5 = document.createElement("option");
op1.value = "13:30";
op2.value = "14:00";
op3.value = "15:00";
op4.value = "16:00";
op5.value = "16:30";

op.innerHTML = "";//limpa a lista dos ultimos horarios para colocar novos

op.appendChild(op1);
op.appendChild(op2);
op.appendChild(op3);
op.appendChild(op4);
op.appendChild(op5);
}
}
hora.addEventListener("mouseover", horarioNutri);

function horarioFisi(){
      if(especialidade.value == "Fisioterapia"){ 
const op = document.getElementById("op");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");
const op4 = document.createElement("option");
op1.value = "14:00";
op2.value = "15:00";
op3.value = "16:00";
op4.value = "17:00";

op.innerHTML = "";//limpa a lista dos ultimos horarios para colocar novos

op.appendChild(op1);
op.appendChild(op2);
op.appendChild(op3);
op.appendChild(op4);
}
}
hora.addEventListener("mouseover", horarioFisi);


function horarioEnf(){
      if(especialidade.value == "Enfermagem"){ 
const op = document.getElementById("op");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");
const op4 = document.createElement("option");
const op5 = document.createElement("option");
const op6 = document.createElement("option");
const op7 = document.createElement("option");
const op8 = document.createElement("option");
const op9 = document.createElement("option");
op1.value = "13:00";
op2.value = "14:00";
op3.value = "15:00";
op4.value = "16:00";
op5.value = "17:00";
op6.value = "18:00";
op7.value = "19:00";
op8.value = "20:00";
op9.value = "20:20";

op.innerHTML = "";//limpa a lista dos ultimos horarios para colocar novos

op.appendChild(op1);
op.appendChild(op2);
op.appendChild(op3);
op.appendChild(op4);
op.appendChild(op5);
op.appendChild(op6);
op.appendChild(op7);
op.appendChild(op8);
op.appendChild(op9);
}
}
hora.addEventListener("mouseover", horarioEnf);
