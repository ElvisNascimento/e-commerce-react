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

export default function Carrinho() {
    const [exibir,setExibir] = useState(true)
    let CarrinhoHover = () => {
        <React.Fragment>
            <div style={{backgroundColor: 'gray', display: exibir ? 'flex' : 'none', flexDirection: 'column', position: 'absolute'}}>
            <span>Meu Carrinho</span>
            <span>Produto 1</span>
            <span>Produto 2</span>
            <span>Valor total</span>
            <Link>Ver Carrinho</Link>
            </div>
        </React.Fragment>
    return(
        <IconButton onClick={() => setExibir(!exibir)} aria-label="cart" data-mui-toggle="dropdown" >
            <CarrinhoHover />
            <StyledBadge badgeContent={2} color="error">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    )
}