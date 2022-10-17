import "./produtosAlta.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Sneakers from './skeakers.png';

export default function ProdutosAlta() {
    return (
        <>
            <div style={{marginTop:'123px',width:'1440px'}}>
                <div className="ProdutosAlta ">
                    <div style={{marginBottom:'20px'}} className=" d-flex">
                        <div style={{paddingLeft:'100px'}} className="">
                            <h5>Produtos em alta</h5>
                        </div>
                        <div style={{marginLeft:'908px'}}>
                            <a href="#" className="VerTodos">Ver todos <ArrowForwardIcon></ArrowForwardIcon></a>
                        </div>
                    </div>
                </div>
                <div className="cards container">
                    <div className="row">
                        <div className="col-3">
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
        </>
    )
}