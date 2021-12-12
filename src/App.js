import { useState, useEffect } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import { swedColourLight } from "./utils/colours";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Intro from "./components/Intro";

const App  = () => {
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth
  })
  console.log(dimensions)

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize)
    }

  })

  return (
    <div className='wrapper'>
      <div className='stripe'></div>
      <h1 className='swed-header'>Swedbank</h1>
      <Navbar width={dimensions.width} />

      <Router>
        <Routes>
          <Route path="/apply" element={<Form width={dimensions.width} />} />
          <Route exact path="/" element={<Intro />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
