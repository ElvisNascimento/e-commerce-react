import { Link } from "react-router-dom"
import { Button } from '@mui/material'
export default function Bones() {
    return (
        <div>
            <h1>Pagina dos Bonés</h1>

            <Link to='/'>
                <Button variant='outlined' >Voltar pro inicio</Button>
            </Link>
        </div>
        
            
        
    )
}