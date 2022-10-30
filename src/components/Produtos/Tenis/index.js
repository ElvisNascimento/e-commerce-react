import { Link } from "react-router-dom"
import { Button } from '@mui/material'

export default function Tenis() {
    return (
        <div>
            <h1> Pagina dos Tênis</h1>
         <Link to='/'>
                <Button variant='outlined' >Voltar pro inicio</Button>
            </Link>
        </div>
    
    )
}