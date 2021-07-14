import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'
import './App.css';

const BoxSynth = ({children, label}) => (
  <div className="box-synth">
    <div className="synth-box-label">{ label }</div>
    { children }
  </div>
)

function App() {
  const [attack, setAttack] = useState(0)
  const [decay, setDecay] = useState(0)
  const [sustain, setSustain] = useState(0)
  const [release, setRelease] = useState(0)

  return (
    <div className="App">
      <BoxSynth label="filters">
            egeggeg
      </BoxSynth>
      <BoxSynth label="filter-envelope">
        <div className="flex-filter-env">
          <div className="knob">
            <Donut
              diameter={50}
              min={0}
              max={127}
              step={1}
              value={attack}
              theme={{
                  donutColor: 'blue',
                  donutThickness: 15,
              }}
              onValueChange={setAttack}
              ariaLabelledBy={'my-label'}
              >
              <label id={'my-label'}>ATTACK</label>
            </Donut>
          </div>
          <div className="knob">
            <Donut
              diameter={50}
              min={0}
              max={127}
              step={1}
              value={decay}
              theme={{
                  donutColor: 'blue',
                  donutThickness: 15,
              }}
              onValueChange={setDecay}
              ariaLabelledBy={'my-label'}
              >
              <label id={'my-label'}>DECAY</label>
            </Donut>
          </div>
          <div className="knob">
            <Donut
              diameter={50}
              min={0}
              max={127}
              step={1}
              value={sustain}
              theme={{
                  donutColor: 'blue',
                  donutThickness: 15,
              }}
              onValueChange={setSustain}
              ariaLabelledBy={'my-label'}
              >
              <label id={'my-label'}>SUSTAIN</label>
            </Donut>
          </div>
          <div className="knob">
            <Donut
              diameter={50}
              min={0}
              max={127}
              step={1}
              value={release}
              theme={{
                  donutColor: 'blue',
                  donutThickness: 15,
              }}
              onValueChange={setRelease}
              ariaLabelledBy={'my-label'}
              >
              <label id={'my-label'}>RELEASE</label>
            </Donut>
          </div>
        </div>
      </BoxSynth>
    </div>
  );
}

export default App;
