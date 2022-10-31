import "./produtosAlta.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Sneakers from './skeakers.png';

export default function ProdutosAlta() {
    return (
        <div className="container d-flex justify-content-center">
            <div style={{width:'1440px'}}>
                <div className="ProdutosAlta">
                    <div style={{marginBottom:'20px'}} className="d-flex justify-content-between p-0 m-0">
                        <div>
                            <h5>Produtos em alta</h5>
                        </div>
                        <div>
                            <a href="#" className="VerTodos">Ver todos <ArrowForwardIcon></ArrowForwardIcon></a>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className=" col-3">
                            <div className="cartao">
                                <div className="dis">
                                    <button className="discount">30%OFF</button>
                                </div>
                                <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                                <p className="sneakerP">Tênis</p>
                                <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            </div>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="cartao">
                                <div className="dis">
                                    <button className="discount2">30%OFF</button>
                                </div>
                                <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                                <p className="sneakerP">Tênis</p>
                                <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            </div>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                            <p className="sneakerP">Tênis</p>
                            <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                            <p className="sneakerP">Tênis</p>
                            <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                            <p className="sneakerP">Tênis</p>
                            <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                            <p className="sneakerP">Tênis</p>
                            <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                            <p className="sneakerP">Tênis</p>
                            <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className="sneakerImg" src={Sneakers} style={{ backgroundColor: "#FFFFFF" }} alt=""></img>
                            <p className="sneakerP">Tênis</p>
                            <p style={{ fontSize: "24px" }}>K-Swiss V8 - Masculino</p>
                            <div className="preco d-flex">
                                <span className="precoInicial" style={{ textDecoration: "line-through" }}>$200</span> <span className="precoAtual">$100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}