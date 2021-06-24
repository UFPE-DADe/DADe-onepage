import next from '../../Assets/next.svg'
import prev from '../../Assets/prev.svg'

import './Arrows.css';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      >
      <img className="arrow-img" src={prev} alt="Voltar" />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img className="arrow-img" src={next} alt="Passar" />
    </div>
  );
}
export {NextArrow, PrevArrow}