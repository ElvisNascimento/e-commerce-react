import NavBar from "./Nav";
import Buscar from "./Buscar";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { Component } from "react";
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
    return (
        <div className="_container container-md border">
            <div className="row border d-flex justify-content-center align-content-center align-items-center">
                <div className="col-3 ms-5 ps-5 border"><img src={LogoDigital}/></div>
                <div className="col-5 ms-0 border"><Buscar/></div>
                <div className="col border"><Link className="cadastro">Cadastre-se</Link></div>
                <div className="col border"><Link to={'/'} className="btn _botaoEntrar">Entrar</Link></div>
                <div className="col border">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={2} color="error">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
            <div className="_head_Dois border">
                <div className=" border"><NavBar/></div>
            </div>
        </div>
    )
}