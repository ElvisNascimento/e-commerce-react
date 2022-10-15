import NavBar from "./Nav";
import Buscar from "./Buscar";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { Component, useState } from "react";
import LogoDigital from '../../img/LogoDigital.png';
import './style.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


export default function Header() {
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
}
    return (
        <div className="_container container-md">
            <div className="row d-flex justify-content-center align-content-center align-items-center">
                <div className="col-3 ms-5 ps-5 logo"><img src={LogoDigital}/></div>
                <div className="col-5 ms-0"><Buscar/></div>
                <div className="col cadastro"><Link className="cadastro">Cadastre-se</Link></div>
                <div className="col entrar"><Link to={'/'} className="btn _botaoEntrar">Entrar</Link></div>
                <div className="col carrinho">
                    <div>
                    <IconButton onClick={() => setExibir(!exibir)} aria-label="cart" data-mui-toggle="dropdown" >
                    <CarrinhoHover />
                        <StyledBadge badgeContent={2} color="error">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                    </div>
                </div>
            </div>
            <div className="_head_Dois">
                <div><NavBar/></div>
            </div>
        </div>
    )
}