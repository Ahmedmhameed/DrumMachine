import { useEffect, useRef } from "react";
import { useVolumeContent } from "./VolumeContext";
import { usePowerContent } from "./PowerContext";
// eslint-disable-next-line react/prop-types
function DrumPad({ id = "", keyboardKey = "", audio = "" }) {
  const audioElement = useRef();
  const theDiv = useRef();
  const { power } = usePowerContent();
  const { volume } = useVolumeContent();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (power && e.key === keyboardKey.toLowerCase()) {
        audioElement.current.play();
        addClickStyle();
      }
    };
    document.addEventListener("keydown", (e) => handleKeyDown(e));
  }, [power, keyboardKey]);
  useEffect(() => {
    audioElement.current.volume = volume;
    if (!power) {
      audioElement.current.volume = 0;
    }
  }, [volume, power]);
  const addClickStyle = () => {
    theDiv.current.style.background = "orange";
    setTimeout(() => {
      theDiv.current.style.background = "grey";
    }, 200);
  };
  return (
    <div
      ref={theDiv}
      className="drum-pad btn"
      id={id}
      onClick={() => {
        if (power) {
          audioElement.current.play();
          addClickStyle();
        }
      }}
    >
      <audio
        ref={audioElement}
        className="clip btn"
        id={keyboardKey}
        src={audio}
      ></audio>
      {keyboardKey}
    </div>
  );
}
export default DrumPad;
