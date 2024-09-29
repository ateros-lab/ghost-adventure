import SceneComponent from "babylonjs-hook";
import { GlowLayer, SceneLoader } from "@babylonjs/core";
import UserInterface from "./ui-components/UserInterface";
import { GameManager } from "./game-scripts/GameManager";

function App() {

  let url = "http://localhost:5173/src/assets/";
  let filename = "GameScene.babylon";

  const load = (scene) => {
    new GlowLayer("glow", scene);
    new GameManager(scene);
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