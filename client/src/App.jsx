import {
  Navbar,
  Banner,
  Organization,
  Realizations,
  OurMembers,
  Footer,
  Contact,
  HowWeWork,
  Faq,
} from './Views';

import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <HowWeWork/>
      <Realizations/>
      <OurMembers/>
      <Faq />
      <Contact/>
      <Footer/>
    </>

  );
}

export default App;
