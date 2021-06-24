import {
  Navbar,
  Banner,
  Organization,
  Realizations,
  OurMembers,
  Footer,
  Contact,
  HowWeWork
} from './Views';

import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <HowWeWork/>
      <Organization />
      <Realizations/>
      <OurMembers/>
      <Contact/>
      <Footer/>
      
    </>

  );
}

export default App;
