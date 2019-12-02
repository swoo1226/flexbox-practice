import React from 'react';
import './styles.scss'

function App() {
  return (
    <div>
      <div className="viewer">
        <div className="innerView">
          <div className="page">
            <div className="left-content">     
              <div>
                <div className="first">첫번째 줄</div>
                <div className="second">두번째 줄</div>            
                <div className="third">세번째 줄</div>
              </div>  
            </div>
            <div className="middle-content">
              <div className="first">
                첫번째 줄
              </div>
            </div>
            <div className="right-content">
              <div>
              <div className="first">첫번째 줄</div>
                <div className="second">두번째 줄</div>            
                <div className="third">세번째 줄</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default App;
