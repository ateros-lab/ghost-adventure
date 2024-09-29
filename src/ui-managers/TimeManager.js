export class TimeManager{
  constructor(scene){
    this.deltaTime = 0;
    this.isTimeActive = true;
    this.time = 20;
    this.timeInfo = document.querySelector('#time-info');
    scene.registerBeforeRender(() => this.update(scene.getEngine().getDeltaTime()));
  }
  update(deltaTime){
    if(!this.isTimeActive) return;
    this.deltaTime += deltaTime;
    if(this.deltaTime >= 1000){
      this.deltaTime = 0;
      this.decreaseTimeValue();
    }
  }
  decreaseTimeValue(){
    this.time--;
    let solid = Math.floor(this.time / 60);
    let part = this.time - (solid * 60);
    let timeText = `0${solid}:${(part >= 10) ? part : '0' + part}`;
    this.timeInfo.innerText = timeText;
  }
}