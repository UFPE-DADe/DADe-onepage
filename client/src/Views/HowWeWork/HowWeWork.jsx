import './HowWeWork.css';

import {Title} from '../../components'

import side_arrows from '../../Assets/setas_trabalhamos.svg'

function HowWeWork() {

    return (
      <div className="how-we-work-view" id='work'>
        <div className="how-we-work-content">
          <div className="top-work">
            <Title textColor='#FFFFFF' titleText='Como Trabalhamos?'/>
            <img src={side_arrows} alt="" />
          </div>
          <div className="functions">
            <div className="executive">
              <Title textColor='#FFFFFF' titleText='EXECUTIVA'/>
              <div className="not-title">
                <ul>
                  <li>Gerencia internamente o DA.</li>
                  <li> Participa das reuniões institucionais e estudantis nas quais a 
                    representação dos alunos do curso se faz fundamental.</li>
                </ul>
              </div>

              <div>
                <h3>REUNIÕES DO DEPARTAMENTO</h3>
                <ul className="not-title">
                  <li><h4>Colegiado</h4> (reunião quinzenal com a presença de 2 membros
                  do DADe com direito a 1 voto</li>
                  <li><h4>NDE</h4> -</li>
                  <li><h4>Pleno</h4> -</li>
                </ul>
              </div>

              <div>
                <h3>REUNIÕES DA UFPE</h3>
                <ul className="not-title"><li><h4>Reitoria e Pró-reitorias</h4></li></ul>
              </div>
              <div>
                <h3>REUNIÕES DO MOVIMENTO ESTUDANTIL</h3>
                <ul className="not-title">
                  <li><h4>FODA CAC</h4> (Forúm de DAs do CAC)</li>
                  <li><h4>CEB</h4> - Conselho de Entidades de Base (reuniões de todos os
                  DAs da federal + o DCE)</li>
                  <li><h4>CoNE</h4> (acontece 2 ou 3 vezes ao ano reunindo estudantes de 
                  design de todo o país</li>
                </ul>
              </div>
            </div>

            <div className="comunication">
              <Title textColor='#FFFFFF' titleText='COMUNICAÇÃO'/>
            <div>
              <p>Responsável por compartilhar informações com estudantes. Por hora, 
                funcionamos nas seguintes redes:</p>
            </div>

            <div className="not-title">
              <ul>
                <li>Whatsapp</li>
                <li>Telegram</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div>
              <p>Lá compartilhamos coisas solicitadas por coordenações e professores, avisos 
                urgentes como cancelamento de aula, data de entrega de documentos importantes 
                etc; oportunidades de crescimento (estágio, cursos, bolsas), e divulgamos coisas 
                internas do D.A., pautas de reunião, convidar estudantes para assembleias, entre 
                outros.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default HowWeWork;