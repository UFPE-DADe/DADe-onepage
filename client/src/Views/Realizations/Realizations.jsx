import './Realizations.css';

import config from '../../config/config';

import{
  Title,
  Text,
  RealizationsCard,
  NextArrow,
  PrevArrow,
} from '../../components'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Realizations() {
    const [realizations, SetRealizations] = useState([]);
    const [qtd, SetQtd] = useState([]);
    
    const loadRealizations = async () => {
        const res = await axios.get(`${config.url}/api/realizacoes`);
        SetRealizations(res.data);
        SetQtd(res.data.length)
    };
    
    useEffect(() => {
        loadRealizations();
    }, []);
    
    const settings = {
        infinite: qtd > 5,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              infinite: qtd > 3,
            }
          },
          {
            breakpoint: 732,
            settings: {
              slidesToShow: 2,
              infinite: qtd > 2,
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              infinite: qtd > 1,
            }
          },
        ]
      };
    
    return (
      <section className='realizations-section' id="realizations">
        <div className="realizations-content">
            <div className="text-div">
                <Title titleText="Realizações" textColor="#FFFFFF"/>
                <Text pTextColor="#FFFFFF" pText="Olha só o que temos feito nos últimos meses:"/>
            </div>
            <div className="carousel-father">
                <Slider {...settings}>
                {realizations?.map(({_id, date, name, description}) => (
                <div className="card-container-slick">
                    <div className="card-container">
                    <RealizationsCard date={date} title={name} description={description}/>
                    </div>
                </div>
                    ))}
                </Slider>
            </div>
        </div>
      </section>
    );
  }

export default Realizations;