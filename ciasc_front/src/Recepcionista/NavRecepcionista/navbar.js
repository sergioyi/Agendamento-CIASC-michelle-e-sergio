import style from'./navbar.module.css'
import { Outlet, Link } from "react-router-dom";
function navbar() {
    return (<>

        <navbar id={style.navbar}>Recepcionista
        <div>
        <Link to="/recepcionista/agendamento"><button>agendamento</button></Link>
        <Link to="/recepcionista/agendamento"><button>cadastro de paciente</button></Link>
        </div>
        </navbar>
        <Outlet/>
    </>)
}
export default navbar