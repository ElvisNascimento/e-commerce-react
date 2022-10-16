import { React } from "react";
import { Link } from "react-router-dom";

let PaginaConstrucao = () => {
    return(
        <React.Fragment>
                <div>
                    <Link to={'/home'}>Voltar</Link>
                </div>
        </React.Fragment>
    );
}
export default PaginaConstrucao;