import Header from './components/Hero/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Hero/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>      
    </div>
  );
}

export default App;
