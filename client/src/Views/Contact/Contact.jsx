import config from '../../config/config';

import {
    Title,
    SmallText,
    ContactLine,
  } from '../../components';
  
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  
  import Instagram from '../../Assets/InstaIcon.svg';
  import Twitter from '../../Assets/TwitterIcon.svg';
  import Mail from '../../Assets/MailIcon.svg';
  import Telegram from '../../Assets/TelegramIcon.svg';
  import Whatsapp from '../../Assets/ZapIcon.svg';
  
  import './Contact.css';
  
  function Contact(props) {
    const [contacts, setContacts] = useState([]);

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [subject, setSubject] = useState([]);
    const [message, setMessage] = useState([]);

    const data = {
      name, email, subject, message
    }

    const sendEmail = async (event) => {
      try{
        event.preventDefault()
        await axios.post(`${config.url}/contato`, data);
        alert("Sucesso! Sua mensagem foi enviada!")
        setName("");
        setEmail("")
        setSubject("")
        setMessage("")
      } catch (error) {
        alert(`Algo deu errado: ${error}`)
      }
    }

    const loadContacts = async () => {
      const res = await axios.get(`${config.url}/api/contatos`);
      setContacts(res.data);
    };

    useEffect(() => {
      loadContacts();
    }, []);

      return (
        <section className='contact' id="contact">
          <div className='contact-content'>
            <div className='contact-info'>
              <div className='contact-paragraph'>
                <div className='title-div'>
                <Title titleText='ENTRE EM CONTATO'/>
                </div>
                <div className='small-text-div'>
                <SmallText pSmallText='Acompanhe nossas redes sociais e fique por dentro do que estamos preparando' lineHeight='25px' />
                </div>
              </div>
              {contacts?.map(({_id, whatsapp, telegram, email, twitter, instagram}) => (
              <div className='line-group-div'>
                  <ContactLine lineImg={Instagram} contactInfo='dadeupe' contactLink ={instagram}/>
                  <ContactLine lineImg={Twitter} contactInfo='DADeUFPE' contactLink ={twitter}/>
                  <ContactLine lineImg={Mail} contactInfo='dadeufpe@gmail.com'/>
                  <ContactLine lineImg={Telegram} contactInfo='Telegram' contactLink ={telegram}/>
                  <ContactLine lineImg={Whatsapp} contactInfo='Whatsapp' contactLink ={whatsapp}/>
              </div>
              ))}
            </div>
            <div className='forms'>
              <form className='Form' onSubmit={sendEmail}>
                <input
                value={name} 
                type="text" 
                name="name" 
                placeholder="Digite seu nome"
                required
                onChange={(e) => setName(e.target.value)}
                 />
                <input
                value={email}  
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
                onChange={(e) => setEmail(e.target.value)} 
                />
                <input
                value={subject} 
                type="text" 
                name="subject"
                placeholder="Digite o assunto"
                required
                onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                value={message} 
                name="message"
                placeholder="Tire suas dúvidas ou nos mande uma mensagem" 
                rows="10" 
                required
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className="form-buttom" type='submit'>ENVIAR</button>
              </form>
            </div>
            <div className='contact-paragraph-mobile'>
                <div className='title-div'>
                <Title titleText='ENTRE EM CONTATO'/>
                </div>
                <div className='small-text-div'>
                <SmallText pSmallText='Acompanhe nossas redes sociais e fique por dentro do que estamos preparando' lineHeight='25px' />
                </div>
              </div>
          </div>
        </section>
      );
    }
  
  export default Contact;