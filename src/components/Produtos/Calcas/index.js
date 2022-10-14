import { Link } from "react-router-dom"
import { Button } from '@mui/material'
export default function Calças(){
     return (
        <div>
            <h1>Pagina das Calças</h1>

            <Link to='/Home'>
                <Button variant='outlined' >Voltar pro inicio</Button>
            </Link>
        </div>
    
    )
}