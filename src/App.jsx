import { useState } from 'react';
import './App.css';
import NavbarForex from './component/NavbarForex';
import ForexpediaaHero from './component/ForexpediaaHero';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarForex/>

      <div>
        <ForexpediaaHero/>
      </div>
      
      <Footer/>

    </>
  )
}

export default App
