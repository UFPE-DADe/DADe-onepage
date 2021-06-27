import './Faq.css';

import {
    Title,
    SmallText,
    Acordion,
  } from '../../components';

function Faq() {

    return (
        <section className="faq-section">
            <div className="faq-content">
                <div className="faq-paragraph">
                    <Title titleText="FAQ"/>
                    <SmallText pSmallText="Ficou alguma dúvida? Acesse nossas caixinhas com dúvidas e respostas mais frequentes"/>
                </div>
                    <Acordion/>
            </div>
        </section>
    );
  }

export default Faq; 