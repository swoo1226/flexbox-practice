import React from 'react';
import './styles.scss'

function App() {
  return (
    <div>
      <div className="viewer">
        <div className="innerView">
          <div className="page">
            <div className="item1">
              <div className="flexBlock">
                <div className="title">모바일</div>
                <div className="title">설문의</div>
              </div>
              <div className="flexBlock">
                <div className="title">시작과 끝</div>
              </div>
              <div className="flexBlock">
                <div>
                  국민 94%가 사용하는 카카오톡으로 채팅하듯 설문을 진행해보세요! 높은 응답률과 완벽한 인공지능 보고서를 경험할 수 있습니다.
                </div>
                <button>소개서 다운로드</button>
              </div>
            </div>
            <div className="item2">
              <div className="flexBlock">4</div>
              <div className="flexBlock">
                <span>○○○○○</span>
              </div>
              <div className="flexBlock">6</div>
            </div>
            <div className="item3">
              <div className="flexBlock">7</div>
              <div className="flexBlock">
                <div className="title">포켓서베이</div>
              </div>
              <div className="flexBlock">9</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
