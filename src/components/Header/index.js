import NavBar from "./Nav";
import Buscar from "./Buscar";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";


export default function Header() {
    return (
        <div className="_container container-md border">
            <div className="row border d-flex justify-content-center align-items-center">
                <div className="col border" sm={1}>Logo</div>
                <div className="col border" sm={2}>Digital Store</div>
                <div className="col border" sm={6}><Buscar/></div>
                <div className="col border" sm={1}>cadastre-se</div>
                <div className="col border" sm={1}><Link to={'/'} className="btn _botaoEntrar">Entrar</Link></div>
                <div className="col border" sm={1}>
                    <button type="button btn-" className="btn">
                        <ShoppingCart /><span className="badge badge-danger">9</span>
                    </button>
                </div>
            </div>
            <div className="row border">
                <div className="col border" sm={8}><NavBar/></div>
                <div className="col border"></div>
            </div>
        </div>
    )
}