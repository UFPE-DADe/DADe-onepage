import next from '../../Assets/yellow_next.svg'
import prev from '../../Assets/yellow_prev.svg'

function YellowPrevArrow(props) {
  const { className, style ,onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={prev} alt="Voltar" />
    </div>
  );
}

function YellowNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={next} alt="Passar" />
    </div>
  );
}
export {YellowNextArrow, YellowPrevArrow}