import './Realizations-Card.css';

function RealizationsCard(props) {

    return (
    <div className="realizations-card-div">
        <div className="upper-div">
            <div className='date-text'>
                <p className="date-p">{props.date}</p>
            </div>
        </div>
        <div className='middle-text'>
            <h2>{props.title}</h2>
            <p className="description-p">{props.description}</p>
        </div>
      </div>
    );
  }

export default RealizationsCard;