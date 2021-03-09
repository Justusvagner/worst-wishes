import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Worst Wishes';
  link = 'https://www.instagram.com/worst_wishes_official/';

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/alarm.wav";
    audio.load();
    audio.play();
    setTimeout(() => {
      window.location.href = this.link;
    }, 1500);
  }
}
