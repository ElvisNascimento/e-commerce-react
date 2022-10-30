import { Link } from "react-router-dom"
import { Button } from '@mui/material'
export default function Camisetas(){
    return (
        <div>
            <h1>Pagina das Camisetas</h1>
            
            <Link to='/'>
                <Button variant='outlined' >Voltar pro inicio</Button>
            </Link>
        </div>
    )
}