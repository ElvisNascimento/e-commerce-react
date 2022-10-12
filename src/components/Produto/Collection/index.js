
import { CardContent } from '@mui/material';
import { Container } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Colletion() {
    return(
        <section>
            <Container className="container-md mt-2 border">
            <p>Coleções em destaque</p>
            <CardContent></CardContent>
            </Container>
        </section>
    )
}