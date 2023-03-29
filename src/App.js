import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Consmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import Menucourt from './components/Menucourt/Menucourt';


function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
     <Shoes></Shoes>
     <Menucourt></Menucourt>
    </div>
  );
}

export default App;
