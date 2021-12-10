import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import { swedColourLight } from "./utils/colours";

const App  = () => {
  return (
    <div className='wrapper'>
      <div className='stripe'></div>
      <h1 className='swed-header'>Swedbank</h1>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
