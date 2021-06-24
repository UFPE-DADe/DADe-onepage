import config from '../../config/config';

import './Navbar.css';
import{
  SectionNavbar,
  LogoDADe,
  Button,
} from '../../components'


import { useState, useEffect } from 'react';
import axios from 'axios';

import hamb from '../../Assets/menu_hamb.svg'
import close from '../../Assets/fechar_menu.svg'

function Navbar() {
  const [logo, SetLogo] = useState([]);

  const loadLogo = async () => {
    const res = await axios.get(`${config.url}/api/logo`);
    SetLogo(res.data);
  };

  const [link_paticipate, SetLinkParticipate] = useState([]);

  const loadLinkParticipate = async () => {
    const res_ = await axios.get(`${config.url}/api/banner`);
    SetLinkParticipate(res_.data[0].link_botao_participe);
  };

  const [toggle, SetToggle] = useState('')
  
  useEffect(() => {
    loadLogo();
    loadLinkParticipate();
  }, []);

  

    return (
      <header>
        {logo?.map(({image}) => (
          <nav>
            <div className="logo-nav">
              <LogoDADe width='180px' height='40px'logo={image[0]?.url}/>
            </div>
            <SectionNavbar text='Como trabalhamos' id='#work'/>
            <SectionNavbar text='Realizações ' id='#realizations'/>
            <SectionNavbar text='Membros' id='#members'/>
            <SectionNavbar text='Contato' id='#contact'/>
            <SectionNavbar text='FAQ' id='#contact'/>

            <Button text='Participar' className="participate-button" width='108px' link={link_paticipate}/>
            <div id="menu-hamburguer">
              <input type="checkbox" id="checkbox-menu" checked={toggle}/>
              <label for="checkbox-menu">
                <img src={hamb} alt="Abrir menu" class="open" onClick={() => SetToggle('a')}/>
              </label>
              
              <div className="menu-nav">
                  <a href="#work" onClick={() => SetToggle('')} >Como trabalhamos?</a>
                  <a href="#realizations" onClick={() => SetToggle('')} >Realizações</a>
                  <a href="#members" onClick={() => SetToggle('')} >Membros</a>
                  <a href="#contact" onClick={() => SetToggle('')} >Contato</a>
                  <a href={link_paticipate} target="_blank" onClick={() => SetToggle('')} >Participar</a>
                  <img src={close} alt="Fechar menu" className="close-menu" onClick={() => SetToggle('')}/>
                </div>
              
            </div>
          </nav>
      ))}
      </header>
    );
  }

export default Navbar;