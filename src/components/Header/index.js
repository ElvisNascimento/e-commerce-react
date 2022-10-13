import NavBar from "./Nav";
import Buscar from "./Buscar";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Header() {
    return (
        <div className="_container container-md border">
            <div className="row border d-flex justify-content-center align-items-center">
                <div className="col border" sm={1}>Logo</div>
                <div className="col border" sm={2}>Digital Store</div>
                <div className="col border" sm={6}><Buscar/></div>
                <div className="col border" sm={1}><Link href="">Cadastre-se</Link></div>
                <div className="col border" sm={1}><Link to={'/'} className="btn _botaoEntrar">Entrar</Link></div>
                <div className="col border" sm={1}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={2} color="error">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
            <div className="row border">
                <div className="col border" sm={8}><NavBar/></div>
                <div className="col border"></div>
            </div>
        </div>
    )
}