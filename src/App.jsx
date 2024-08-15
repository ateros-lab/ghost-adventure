import SceneComponent from "babylonjs-hook";
import { Axis, GlowLayer, SceneLoader, Space, Color3 } from "@babylonjs/core";
import { PlayerController } from "./game-scripts/PlayerController";
import { TargetController } from "./game-scripts/TargetController";
import UserInterface from "./ui-components/UserInterface";

function App() {

  let url = "http://localhost:5173/src/assets/";
  let filename = "GameScene.babylon";

  const load = (scene) => {
    new GlowLayer("glow", scene);
    new PlayerController(scene);
    new TargetController(scene);
  }

  return (
    <>
      <SceneComponent 
        antialias
        onSceneReady={scene => SceneLoader.Append(url, filename, scene, load)}
      />
      <UserInterface />
    </>
  );
}

export default App;