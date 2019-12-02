import React from 'react';
import './styles.scss'

function App() {
  return (
    <div>
      <div className="viewer">
        <div className="innerView">
          <div className="page">
            <div className="item1">
              <div className="gridCol">
                <div>모바일</div>
                <div>설문의</div>
              </div>
              <div className="gridCol">
                <div>시작과 끝</div>
              </div>
              <div className="gridCol">

                국민 94%가 사용하는 카카오톡으로 채팅하듯 설문을 진행해보세요! 높은 응답률과 완벽한 인공지능 보고서를 경험할 수 있습니다.
                <button>소개서 다운로드</button>



              </div>
            </div>
            <div className="item2">
              <div className="gridCol">4</div>
              <div className="gridCol">
                <div>○○○○○○○○○</div>
              </div>
              <div className="gridCol">6</div>
            </div>
            <div className="item3">
              <div className="gridCol">7</div>
              <div className="gridCol">포켓서베이</div>
              <div className="gridCol">9</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
