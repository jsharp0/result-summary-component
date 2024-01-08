import React from 'react';
import logo from './logo.svg';
import reactionIcon from './icon-reaction.svg';
import memoryIcon from './icon-memory.svg';
import verbalIcon from './icon-verbal.svg';
import visualIcon from './icon-visual.svg';
import './App.scss';
import ScoreAlert from './score-alert/Score-Alert';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="result">
          <h2>Your Result</h2>
          <div className="score-circle">
            <h1>76</h1> <span>of 100</span>
          </div>
          <h2 className="heading-light">Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary">
          <h2>Summary</h2>
          <ScoreAlert
            type="danger"
            category="Reaction"
            score={80}
            iconPath={reactionIcon}
          />
          <ScoreAlert
            type="warning"
            category="Memory"
            score={92}
            iconPath={memoryIcon}
          />
          <ScoreAlert
            type="success"
            category="Verbal"
            score={61}
            iconPath={verbalIcon}
          />
          <ScoreAlert
            type="primary"
            category="Visual"
            score={72}
            iconPath={visualIcon}
          />
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
