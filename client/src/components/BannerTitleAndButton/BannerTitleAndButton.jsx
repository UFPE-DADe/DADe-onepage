import config from '../../config/config';

import './BannerTitleAndButton.css';
import BannerTitle from '../BannerTitle'
import Button from '../Button'

import { useState, useEffect } from 'react';
import axios from 'axios';

function BannerTitleAndButton() {

  const [bannerTitleAndButton, SetBannerTitleAndButton] = useState([]);

  const loadBannerTitleAndButton = async () => {
    const res = await axios.get(`${config.url}/api/banner`);
    SetBannerTitleAndButton(res.data);
  };

  useEffect(() => {
    loadBannerTitleAndButton();
  }, []);

  return (
    <>
    {bannerTitleAndButton?.map(({texto_branco, texto_amarelo, link_botao_participe}) => (
      <div className="banner-title-and-button">
        <BannerTitle purple={texto_branco} yellow={texto_amarelo}/>
        <Button text='Quero participar!' className="participate-button" link={link_botao_participe}/>
      </div>
    ))}
    
    </>
  );
}

export default BannerTitleAndButton;
