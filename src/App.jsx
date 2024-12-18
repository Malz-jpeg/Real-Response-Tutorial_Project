import Header from './components/Hero/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Hero/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
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
      <Value/>
    </div>
  );
}

export default App;
