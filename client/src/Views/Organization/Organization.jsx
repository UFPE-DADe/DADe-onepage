import {
  Paragraph,
  FooterNotion,
  CardFather
} from '../../components';

import './Organization.css';

function Organization(props) {

    return (
      <section className='organization'>
        <div className='organization-content'>
        <Paragraph/>
        <CardFather/>
        </div>
      </section>
    );
  }

export default Organization;