import {useState} from "react"
import style from "./Agendamento.module.css"

import lupa from './lupa.png'
import calendario from './calendario.png'
function Agendamento(){

    //  TROCA DE FORMULARIO
    const [verificaformulario, setVerificaformulario] = useState(true);
    // funções de mudar de formulario
    const trocaformulariopesquisa = () =>{
        setVerificaformulario(false)
    }
    const trocaformularioagendamento = () =>{
        setVerificaformulario(true)
    }

    //  SALVANDO DADOS DE AGENDAMENTO
    //objeto fomulario
    const FormularioAgendamento = {
        nome : '',
        cpf : '',
        especialidade : '',
        data : '',
        hora : ''
    }
    const [formularioagendamento, setFormularioagendamento] = useState(FormularioAgendamento);
    const [inputpesquisar, setInputpesquisar] = useState();
    const ModificandoFormulario = (e) =>{
        console.log(e.target.value);
    }
    // retorno olhar os inputs sendo preenchidos
    
    return(<>
<nav id={style.nav}>
    <button onClick={trocaformularioagendamento} type="button" className={style.imgbtn}><img src={calendario} alt="Minha Figura" className={style.img}/></button>
    <button onClick={trocaformulariopesquisa} type="button" className={style.imgbtn}><img src={lupa} alt="Minha Figura" className={style.img}/></button>
</nav>
    <div className={style.div_formular}>
    {

        verificaformulario
        ?

        <form method="post" onChange={ModificandoFormulario}>
        <div >
        <label>nome<input onChange={(e)=>setFormularioagendamento(e.target.value)} className={style.input} type="text" name="nome"/></label>
        <label>cpf<input onChange={(e)=>setFormularioagendamento(e.target.value)} className={style.input} type="text" name="cpf"/></label>
        <label>especialidade<select onChange={(e)=>setFormularioagendamento(e.target.value)} className={style.input} name="especialidade" >
            <option>selecionar</option>
            <option>enfermagem</option>
            <option>fisioterapia</option>
            <option>nutrição</option>
            </select></label>
        <label>data<input onChange={(e)=>setFormularioagendamento(e.target.value)} className={style.input} type="date" name="data"/></label>
        <label>hora<input onChange={(e)=>setFormularioagendamento(e.target.value)} className={style.input} type="time" name="hora"/></label>
        </div>
        <button className={style.botao} type="button">Agendar</button>
    </form>

    :

    <form method="get" onChange={ModificandoFormulario}>
        <label>Pesquisar cpf<input onChange={(e)=>setInputpesquisar(e.target.value)} className={style.input} type="text" name="cpf"/></label>
        <button type="button" className={style.botao}>Pesquisar</button>
    </form>

    }
    </div>

    </>)
}
export default Agendamento
/*        <form method="get"><label>Pesquisar agendamento<input type="text" />
            <button type="button">Pesquisar</button></label>
        </form>*/