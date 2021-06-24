import config from '../../config/config';

import './OurMembers.css';
import{
  Member,
  Title,
  YellowNextArrow,
  YellowPrevArrow
} from '../../components'

import { useState, useEffect } from 'react';
import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function OurMembers() {

  const [members, SetMembers] = useState([]);

  const loadMembers = async () => {
    const res = await axios.get(`${config.url}/api/members`);
    SetMembers(res.data);
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    rows: 2,
    className: "center",
    slidesToShow: 1,
    // centerMode: true,
    // centerPadding: "50px",
    className:"center",
    nextArrow: <YellowNextArrow className="next-yellow"/>,
    prevArrow: <YellowPrevArrow className="prev-yellow"/>,
  }

    return (
      <section className='members-section' id="members">
        <div className="members-content">
          <div className="title-text">
            <Title titleText='NOSSO MEMBROS' textColor='#FFA500'/>
          </div>
          <div className="all-members">
          {members?.map(({_id, cargo, data_inicial, image, name}) => (
            <Member image={image[0]?.url} name={name} cargo={cargo} data_inicial={data_inicial}/>
          ))}
          </div>
        </div>

        <div className="mobile-members">
          <div className="mobile-members-son">
            <Slider {...settings}>
              {members?.map(({_id, cargo, data_inicial, image, name}) => (
                <div className="single-mobile-member">
                  <Member image={image[0]?.url} name={name} cargo={cargo} data_inicial={data_inicial}/>
                </div>
            ))}
            </Slider>
          </div>
        </div>        
      </section>
    );
  }

export default OurMembers;