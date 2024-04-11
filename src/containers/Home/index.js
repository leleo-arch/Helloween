import React from 'react';

import {
    Conteiner,
    Imagem,
    ConteinerItens,
    H1,
    Button,
    User,
    Imagemfantasma,
    Conteinerimg,
    Conteinertxt,
    Conteinermenu,
    Conteinerbutton,
    Button3,
    P,
  } from "./Style";

  import logo from "../../assets/Logo.png"
  import Fantasmas from "../../assets/fantasmas.png"
  

  function LP (){

    return (

    <Conteiner>
    <ConteinerItens>
    <Imagem alt="img-Logo" src={logo}/>
     <Conteinermenu>
     <ul>
    <User>
    <a>Login</a>
    <a>Home</a>
    <a>Sobre</a>
    <a>Contato</a>
   </User>
    </ul>
    </Conteinermenu>

    <Conteinertxt>
    <H1>Happy Halloween</H1>
    <P>Dia das Bruxas ou Halloween, é uma celebração observada em vários países, principalmente no mundo anglófono, em 31 de outubro,véspera da festa cristã ocidental do Dia de Todos os Santos
    </P>
    <Conteinerbutton>
    <Button>Avançar</Button>
    <Button>Voltar</Button>
    </Conteinerbutton>
    </Conteinertxt>

    <Conteinerimg>
    <Imagemfantasma alt="img-Logo" src={Fantasmas}/>
    </Conteinerimg>
    <Conteinerbutton>
    <Button3>Login</Button3>
    </Conteinerbutton>
    </ConteinerItens>
    
    </Conteiner>
    )
  }

  export default LP