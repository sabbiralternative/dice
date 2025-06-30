import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const GameRange = ({
  greenWinChance,
  setGreenWinChance,
  translateX,
  handleChangeRange,
  setTranslateX,
}) => {
  const [active, setActive] = useState(false);

  const handleChangeWinChance = (type) => {
    if (type === "minus") {
      if (greenWinChance === -97) {
        return;
      } else {
        const rangeValue = greenWinChance + 100;
        const plus = rangeValue < 50 ? 12 : 20;
        setTranslateX(rangeValue * 2 + plus);
        setGreenWinChance((prev) => prev - 1);
      }
    } else {
      if (greenWinChance === -3) {
        return;
      } else {
        const rangeValue = greenWinChance + 100;
        const plus = rangeValue < 50 ? 15 : 23;
        setTranslateX(rangeValue * 2 + plus);
        setGreenWinChance((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="games-range__wrapper">
      <div
        onClick={() => handleChangeWinChance("minus")}
        data-track="range.right"
        className="games-range__arrow _left"
      >
        <MdKeyboardArrowLeft color="#fff" />
      </div>
      <div
        onClick={() => handleChangeWinChance("plus")}
        data-track="range.left"
        className="games-range__arrow _right"
      >
        <MdKeyboardArrowRight color="#fff" />
      </div>
      <div className={`games-range ${active ? "active" : ""}`}>
        <div id="range" className="games-range__input">
          <div className="games-range__input-inner">
            <div
              className="games-range__input-track"
              style={{ transform: `translateX(${greenWinChance}%)` }}
            />
          </div>
          <div
            className="games-range__input-slider"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div className="games-range__input-slider-inner" />

            <div className="games-range__input-value">
              {greenWinChance + 100}.00
            </div>
          </div>
          <input
            onTouchEnd={() => setActive(false)}
            onChange={(e) => {
              handleChangeRange(e);
              setActive(true);
            }}
            type="range"
            max={97}
            min={3}
            step={1}
            value={greenWinChance}
            className="games-range__input-hidden"
          />
        </div>
        <div className="range__grade">
          <div className="range__grade-item _0">
            <div className="range__grade-item-text">0</div>
          </div>
          <div className="range__grade-item _10" />
          <div className="range__grade-item _20" />
          <div className="range__grade-item _30" />
          <div className="range__grade-item _40" />
          <div className="range__grade-item _50">
            <div className="range__grade-item-text">50</div>
          </div>
          <div className="range__grade-item _60" />
          <div className="range__grade-item _70" />
          <div className="range__grade-item _80" />
          <div className="range__grade-item _90" />
          <div className="range__grade-item _100">
            <div className="range__grade-item-text">100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRange;
