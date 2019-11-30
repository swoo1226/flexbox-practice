import React from 'react';
import './styles.scss'

function App() {
  return (
    <div>
      <div className="viewer">
        <div className="innerView">
          <div className="page">
            <div className="item1">
              <div className="gridCol">1</div>
              <div className="gridCol">2</div>
              <div className="gridCol">3</div>
            </div>
            <div className="item2">
              <div className="gridCol">4</div>
              <div className="gridCol">5</div>
              <div className="gridCol">6</div>
            </div>
            <div className="item3">
              <div className="gridCol">7</div>
              <div className="gridCol">8</div>
              <div className="gridCol">9</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
