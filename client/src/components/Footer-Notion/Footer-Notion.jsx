import { useState, useEffect } from 'react';
import axios from 'axios';

import './Footer-Notion.css';

import Button from '../Button';

function Footer(props) {
  const [notion, setNotion] = useState([]);

  const loadNotion = async () => {
    const res = await axios.get('http://localhost:3001/api/notion');
    setNotion(res.data);
  };

  useEffect(() => {
    loadNotion();
  }, []);

  return (
    <section className="footer-div">
      <div className='notion-footer-content'>
      <h1>{props.footerTitle}</h1>
      {notion?.map(({_id, link})  => (
      <Button link={link} text="Acesse nosso Notion" className="Notion-Buttom"/>
      ))}
      </div>
    </section>
  );
}

export default Footer;
