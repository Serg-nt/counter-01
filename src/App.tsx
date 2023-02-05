import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
    const [value, setValue] = useState<number>(0)

    const counterIncrement = () => {
        setValue(value + 1)
    }

    const counterReset = () => {
        setValue(0)
    }

  return (
    <div className="App">
      <Counter
          value={value}
          counterIncrement={counterIncrement}
          counterReset={counterReset}
      />
    </div>
  );
}

export default App;
