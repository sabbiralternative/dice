import { useState } from "react";
import BetSlip from "./BetSlip";
import Chart from "./Chart";
import GameRange from "./GameRange";
import Header from "./Header";
import Statistic from "./Statistic";

const Home = () => {
  const [greenWinChance, setGreenWinChance] = useState(-50);
  const [translateX, setTranslateX] = useState(117);
  const handleChangeRange = (e) => {
    const rangeValue = Number(e.target.value);
    const greenRange = rangeValue - 100;
    setGreenWinChance(greenRange);
    const plus = rangeValue < 50 ? 16 : 22;
    setTranslateX(rangeValue * 2 + plus);
  };

  return (
    <div
      id="app"
      className="dice"
      // style={{ maxWidth: "500px", margin: "0 auto", minHeight: "100vh" }}
    >
      <div id="post-message-size" className="game-wrapper demo">
        <Header />
        <div
          className="game-container"
          style={{
            display: "initial",
          }}
        >
          <div className="game-history" />
          <div className="game-mode-tabs">
            <div data-track="tab.manual" className="mode-btn active">
              <div className="mode-btn__inner">
                <div className="mode-btn__text">Manual</div>
                <div className="mode-btn__indicator" />
              </div>
            </div>
            <div data-track="tab.auto" className="mode-btn">
              <div className="mode-btn__inner">
                <div className="mode-btn__text">Auto</div>
                <div className="mode-btn__indicator" />
              </div>
            </div>
          </div>
          <Chart greenWinChance={greenWinChance} />
          <GameRange
            setTranslateX={setTranslateX}
            setGreenWinChance={setGreenWinChance}
            greenWinChance={greenWinChance}
            handleChangeRange={handleChangeRange}
            translateX={translateX}
          />
          <BetSlip />
          <Statistic />
        </div>
        <div className="messages" />
      </div>
      <div className="demo-label _demo" />
    </div>
  );
};

export default Home;
