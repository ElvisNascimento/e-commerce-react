import { Link } from "react-router-dom"
import { Button } from '@mui/material'
export default function Headphones() {
    return (
        <div>
            <h1> Pagina dos Headphones</h1>
         <Link to='/'>
                <Button variant='outlined' >Voltar pro inicio</Button>
            </Link>
        </div>
    
    )
}