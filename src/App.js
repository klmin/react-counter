import './App.css';
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(c => c + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
