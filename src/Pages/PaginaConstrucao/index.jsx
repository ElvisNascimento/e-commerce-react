import { React } from "react";
import { Link } from "react-router-dom";
import foto from './imagem.svg'

export default function PaginaConstrucao(){
    return(
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
        <img src={foto}/>
        <p style={{marginTop:'25px',color:'#474747',fontWeight:'700',fontSize:'25px'}}>Página em Construção</p>
        <Link to='/'>
            <button style={{color:'white',backgroundColor:'#C92071', border:'none',borderRadius:'8px',textDecoration:'none',width:'150px',height:'30px', marginTop:'25px'}} >Voltar pro inicio</button>
        </Link>
    </div>
    )
}