export class InfoManager{
  constructor(text){
    this.text = text;
    this.infoBlock = document.querySelector("#info-block");
    this.infoMessage = document.querySelector("#info-message");
    this.isActive = true;
  }

  showInfo(){
    if(this.isActive){
      this.infoBlock.style.opacity = 1;
      this.infoMessage.innerText = this.text;
    }
  }

  hideInfo(){
    this.infoBlock.style.opacity = 0;
    this.infoMessage.innerText = '';
  }

  disable(){
    this.hideInfo();
    this.isActive = false;
  }

}