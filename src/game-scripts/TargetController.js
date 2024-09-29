import { InfoManager } from "./../ui-managers/InfoManager";

export class TargetController{
  constructor(scene, index, text){
    this.index = index;
    // GameObjects
    this.scene = scene;
    this.player = this.scene.getMeshByName("Player");
    this.target = this.scene.getMeshByName("Target" + this.index);
    // Variables
    this.isPlayerInside = false;
    this.wasCrystalTaken = false;
    // UI Manager
    this.infoManager = new InfoManager(text);
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
      this.scene.getMeshByName("Crystal" + this.index).visibility = 0;
      this.infoManager.disable();
      this.wasCrystalTaken = true;
    }
  }
}