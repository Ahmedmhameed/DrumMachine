/* eslint-disable react/prop-types */

import { usePowerContent } from "./PowerContext";
import { useVolumeContent } from "./VolumeContext";

function Controls({ display }) {
  const { power, setPower } = usePowerContent();
  const { volume, setVolume } = useVolumeContent();
  return (
    <div className="controls-container">
      <Control
        text={"Power"}
        condition={power}
        action={() => {
          setPower((pre) => !pre);
          display.current.innerText = `Power : ${power ? "Off" : "On"}`;
        }}
      />
      <p id="display" ref={display}></p>
      <div className="volume-slider">
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={(e) => {
            if (power) {
              let value = e.target.valueAsNumber;
              setVolume(value);
              display.current.innerText = `Volume : ${parseInt(value * 100)}`;
            }
          }}
        />
      </div>
    </div>
  );
}
function Control({ text, condition, action }) {
  return (
    <div className="control">
      <p>{text}</p>
      <div className="select" onClick={action != undefined ? action : null}>
        <div
          className="inner"
          style={{ float: condition ? "right" : "left" }}
        ></div>
      </div>
    </div>
  );
}

export default Controls;
