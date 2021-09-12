import React, { useState } from 'react'
import './App.css';

function App(props) {
  const [allParameters, setAllParameters] = useState (
    {
      edit: true,
      arpOn: true,
      shape: 'sin',
      attack: 0,
      decay: 0,
      sustain: 0,
      release: 0,
    }
  )

  const handlerChangeParameterOption = (key, options) => {
    const newParameters = {...allParameters}
    const currentPosition = options.indexOf(allParameters[key]);
    let nextPosition = currentPosition + 1;
    if (currentPosition === options.length - 1) {
      nextPosition = 0;
    }
    newParameters[key] = options[nextPosition];

    setAllParameters(newParameters)
  }

  const handlerChangeParameterSwitch = (key) => {
    const newParameters = {...allParameters}
    newParameters[key] = !allParameters[key];

    setAllParameters(newParameters)
  }

  const handlerChangeParameter = (key, value) => {
    const newParameters = { ...allParameters }
    newParameters[key] = value;

    setAllParameters(newParameters)
  }


  return (  
    <div className="App">
      <button onClick={() => handlerChangeParameter('attack', 30)}>
        Set attack 30
      </button>
      <button onClick={() => handlerChangeParameter('decay', 30)}>
        Set decay 30
      </button>
      <button onClick={() => handlerChangeParameterSwitch('edit')}>
        Edit
      </button>
      <button onClick={() => handlerChangeParameterSwitch('arpOn')}>
        ARP On
      </button>
      <button onClick={() => handlerChangeParameterOption('shape', ['sin', 'triangle' , 'saw', 'square', 'wave'])}>
        SHAPE On
      </button>
      <pre>
      {JSON.stringify(allParameters, null, 2)}
      </pre>
    </div>
  );
}

export default App;
