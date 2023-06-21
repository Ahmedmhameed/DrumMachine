import { useMemo } from "react";
import "./App.css";
import a1 from "./assets/audios/Cev_H2.mp3";
import a2 from "./assets/audios/Dsc_Oh.mp3";
import a3 from "./assets/audios/Heater-1.mp3";
import a4 from "./assets/audios/Heater-2.mp3";
import a5 from "./assets/audios/Heater-3.mp3";
import a6 from "./assets/audios/Heater-4_1.mp3";
import a7 from "./assets/audios/Heater-6.mp3";
import a8 from "./assets/audios/Kick_n_Hat.mp3";
import a9 from "./assets/audios/RP4_KICK_1.mp3";
import { useRef } from "react";
import Logo from "./components/Logo";
import DrumPad from "./components/DrumPad";
import Controls from "./components/Controls";
import { PowerProvider } from "./components/PowerContext";
import { VolumeProvider } from "./components/VolumeContext";
function App() {
  const display = useRef();
  const drumPads = useMemo(() => {
    return [
      { id: "Cev_H2", keyboardKey: "Q", audio: a1 },
      { id: "Dsc_Oh", keyboardKey: "W", audio: a2 },
      { id: "Heater-1", keyboardKey: "E", audio: a3 },
      { id: "Heater-2", keyboardKey: "A", audio: a4 },
      { id: "Heater-3", keyboardKey: "S", audio: a5 },
      { id: "Heater-4_1", keyboardKey: "D", audio: a6 },
      { id: "Heater-6", keyboardKey: "Z", audio: a7 },
      { id: "Kick_n_Hat", keyboardKey: "X", audio: a8 },
      { id: "RP4_KICK_1", keyboardKey: "C", audio: a9 },
    ];
  }, []);
  return (
    <VolumeProvider>
      <PowerProvider>
        <div id="root">
          <div className="inner-container" id="drum-machine">
            <div className="pad-bank">
              {drumPads.map((d) => (
                <DrumPad key={d.id} {...d} />
              ))}
            </div>
            <Logo />
            <Controls display={display} />
          </div>
        </div>
      </PowerProvider>
    </VolumeProvider>
  );
}

export default App;
