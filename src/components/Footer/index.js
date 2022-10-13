import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function Footer () {
    
    return( 
        <section className="container bg bg-dark px-5">
            <div className="row text-white ">
                <div className="col mt-5">
                    
                    <button className="h4 bg-white border text-dark px-2 rounded-3">_</button>
                    <span className="h3 mt-5 px-2">Digital Store</span>

                   <p className="mt-4 p-1 h-30 d-inline-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolores modi eum optio incidunt similique.</p>

                    <div className="me-5 ">
                        <ul className="d-flex flex-row me-5 ps-5">
                            <ul className="text-start">
                                <a href="https://www.facebook.com/">
                                    <BsFacebook className="text-white "/>
                                </a>
                            </ul>

                            <ul>
                                <a href="https://www.instagram.com/">
                                    <BsInstagram className="text-white "/>
                                </a>
                            </ul>

                            <ul>
                                <a href="https://twitter.com/">
                                    <BsTwitter className="text-white "/>
                                </a>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className="col mt-5">
                    <ul className="nav flex-column text-white  ">
                        <span className="px-3 ">Informação</span>
                        <li className="nav-item mt-3"><a href="" className="nav-link text-white">Sobre Drip Store</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Segurança</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Wishulst</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Blog</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Trabalhe Conosco</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Meus Pedidos</a></li>
                    </ul>
                </div>

                <div className="col mt-5">
                    <span className="px-3">Categorias</span>
                    <ul className="nav flex-column text-white flex-direction">
                        <li className="nav-item mt-3"><a href="" className="nav-link text-white">Camisetas</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Calças</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Bonés</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Headphones</a></li>
                        <li className="nav-item"><a href="" className="nav-link text-white">Tenis</a></li>
                    </ul>
                </div>

                <div className="col mt-5">
                    <span>Contato</span>
                    <p className="mt-4">
                    Av. Santos Dumont, 1510 - 1 <br />
                    andar - Aldeota, Fortaleza - <br/>
                    CE, 60150-161
                    <br />
                    <br />
                    85 3051-3411
                    </p>
                </div> 
            </div>
            <hr />
            <div className="text-white text-center">@ 2022 Digital College</div>
            <br />

        </section>
    
    )
}