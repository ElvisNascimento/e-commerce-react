import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DetalhesProduto.css"
import { Star, StarBorder } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Sneakers from '../ProdutosAlta/skeakers.png'
import Carroca from "../CarrocaDetalhesProduto/Carroca"
import TenisBranco from './TenisBranco.png'






export default function DetalhesProduto() {
    function clique(event) {
        event.target.style.color='white'
        event.target.style.background = '#C92071';
      }

    function cliqueCor(event) {
        event.target.style.border = '2px solid #C92071';
    }
     
    return(
        <>
        <Header></Header>

        
        <section className="DetalhesProduto">
            <div className="Cabecalho container d-flex">
                    <strong>Home</strong>  <p>/ Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <div className="d-flex container">
                <div className="col-8">
                    <Carroca/>
                    <div className=" d-flex TenisSelect">
                        <div className="d-flex m-3 align-items-center justify-content-center tenis1 ">
                            <img className="" src={TenisBranco}/>
                        </div>
                        <div className="d-flex m-3 align-items-center justify-content-center tenis2 ">
                            <img className="" src={TenisBranco}/>
                        </div>
                        <div className="d-flex m-3 align-items-center justify-content-center tenis3 ">
                            <img className="" src={TenisBranco}/>
                        </div>
                        <div className="d-flex m-3 align-items-center justify-content-center tenis4 ">
                            <img className="" src={TenisBranco}/>
                        </div>
                        <div className="d-flex m-3 align-items-center justify-content-center tenis5 ">
                            <img className="" src={TenisBranco}/>
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="tnrHeader">
                        <strong>Tênis Nike Revolution 6 Next Nature Masculino</strong>
                        <p>Casual | Nike | REF:38416711</p>
                        <div className="avaliacoes d-flex align-items-center">
                            <div className="stars">
                                <Star style={{fontSize:'20px', color:'#F6AA1C'}}></Star>
                                <Star style={{fontSize:'20px', color:'#F6AA1C'}}></Star>
                                <Star style={{fontSize:'20px', color:'#F6AA1C'}}></Star>
                                <Star style={{fontSize:'20px', color:'#F6AA1C'}}></Star>
                                <StarBorder style={{fontSize:'20px', color:'#F6AA1C'}}></StarBorder>
                            </div>
                            <div className="rates">
                                <button className="rateButton">4.7 <Star style={{fontSize:'14px', color:'white'}}></Star></button>
                            </div>
                            <div className="piu">
                               <p>(90 avaliações)</p>
                            </div>
                        </div>
                        <div className="precoAA d-flex">
                            <p style={{color:'#474747',paddingRight:'5px',fontSize:'15px'}}>R$</p>
                            <strong>219</strong><strong style={{fontSize:'15px',paddingRight:'10px'}}>,00</strong>
                            <h5 style={{textDecoration: "line-through",color:'#CCCCCC'}}>219,00</h5>
                        </div>
                        <div className="descriptionProduct">
                            <h3>Descrição do Produto</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptatum cupiditate mollitia, architecto optio nobis quia eos dolorem soluta aliquam!</p>
                        </div>
                    </div>
                    <div className="tamanhoCor">
                    <div className="tamanho ">
                        <p>Tamanho</p>
                        <div className="d-flex">
                            <button onClick={clique} >39</button>
                            <button onClick={clique}>40</button>
                            <button onClick={clique}>41</button>
                            <button onClick={clique}>42</button>
                            <button onClick={clique}>43</button>
                        </div>
                        <p>Tamanho</p>
                        <div className="d-flex cor">    
                            <button className="cor1" onClick={cliqueCor} ></button>
                            <button className="cor2"onClick={cliqueCor}></button>
                            <button className="cor3"onClick={cliqueCor}></button>
                            <button className="cor4"onClick={cliqueCor}></button>
                        </div>
                    </div>
                </div>
                <button className="btnComprar">Comprar</button>
                </div>
            </div>
            <div className="container ProdutosAlta ">
                    <div className=" d-flex">
                        <div className="col-6">
                            <h5>Produtos Selecionados</h5>
                        </div>
                        <div className="col-4">
                        </div>
                        <div className="col-2 ">
                            <a href="#" className="VerTodos">Ver todos <ArrowForwardIcon></ArrowForwardIcon></a>
                        </div>
                    </div>
            </div>
            <div className="contanier">
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
                    
                </div>
            </div>
        </section>
            <Footer></Footer>
        </>
    )
}