import SceneComponent from "babylonjs-hook";
import { Axis, SceneLoader, Space } from "@babylonjs/core";
import { PlayerController } from "./game-scripts/PlayerController";

function App() {

  let url = "http://localhost:5173/src/assets/";
  let filename = "GameScene.babylon";

  const load = (scene) => {
    new PlayerController(scene, "PlayerPivot");
  }

  return (
    <>
      <SceneComponent 
        antialias
        onSceneReady={scene => SceneLoader.Append(url, filename, scene, load)}
      />
    </>
  );
}

export default App;