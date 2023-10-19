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