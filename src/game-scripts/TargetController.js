import { InfoManager } from "./InfoManager";

export class TargetController{
  constructor(scene){
    // GameObjects
    this.scene = scene;
    this.player = this.scene.getMeshByName("Player");
    this.target = this.scene.getMeshByName("Target");
    // Variables
    this.isPlayerInside = false;
    // UI Manager
    this.infoManager = new InfoManager(
      "Congrats! You've successfully found the first crystal. Try to press \"E\" to take it."
    );
    // Event listeners
    this.scene.registerBeforeRender(() => this.udpate());
    window.addEventListener("keydown", event => this.onKeyDown(event.code));
  }

  udpate(){
    if(this.player.intersectsMesh(this.target)) this.onTriggerEnter();
    else this.onTriggerExit();
  }

  onTriggerEnter(){
    this.isPlayerInside = true;
    this.infoManager.showInfo();
  }

  onTriggerExit(){
    this.isPlayerInside = false;
    this.infoManager.hideInfo();
  }

  onKeyDown(eventCode){
    if(eventCode === "KeyE" && this.isPlayerInside) {
      this.scene.getMeshByName("Crystal").visibility = 0;
      this.infoManager.disable();
    }
  }
}