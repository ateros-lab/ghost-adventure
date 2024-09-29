import { PlayerController } from "./PlayerController";
import { TargetController } from "./TargetController";
import { TimeManager } from "../ui-managers/TimeManager";

export class GameManager{
  constructor(scene){
    new PlayerController(scene);
    this.timeManager = new TimeManager(scene);
    this.targetObjects = [];
    [1, 2, 3].map(index => {
      this.targetObjects.push(new TargetController(
        scene,
        index,
        `Congrats! You've successfully found crystal ${index}. Try to press \"E\" to take it.`
      ));
    });

    this.player = scene.getMeshByName("Player");
    this.door = scene.getMeshByName("DoorPivot");

    scene.registerBeforeRender(() => this.update());
  }
  update(){
    let areTargetsTaken = true;
    this.targetObjects.map(target => {
      if(!target.wasCrystalTaken) areTargetsTaken = false;
    });
    
    if(this.timeManager.time <= 0){
      this.showTimeInfo("GAME OVER");
    } 
    
    if(this.timeManager.time > 0 && areTargetsTaken){
      if(this.player.intersectsMesh(this.door)){
        this.showTimeInfo("You win!");
      }else{
        this.showTimeInfo("Great! Now, let's try to find the door and go through it, to win.");
      }
    }
    
  }
  showTimeInfo(text){
    this.timeManager.isTimeActive = false;
    this.timeManager.timeInfo.innerText = text;
  }
}