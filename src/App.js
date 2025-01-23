import './App.css';
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useRef, useState, useEffect} from 'react';
import Even from "./components/Even";


function TestComponent() {
  useEffect(() => {
    console.log('컴포넌트 마운트');

    return () => {
      console.log('컴포넌트 언마운트');
    };
  }, []);

  return <div>Test Component</div>;
}

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const disMountRef = useRef(false);
  const [isMounted, setIsMounted] = useState(true);

  const handleSetCount = (value) => {
    setCount(c => c + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });
  

  useEffect(() => {
    if(!disMountRef.current){
      disMountRef.current = true;
      return;
    }
    console.log("컴포넌트 업데이트")
  }, [count, text]);

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
      <div>
        <button onClick={() => setIsMounted((prev) => !prev)}>
          {isMounted ? '컴포넌트 언마운트' : '컴포넌트 마운트'}
        </button>
        {isMounted && <TestComponent />}
      </div>
    </div>

  );
}

export default App;
