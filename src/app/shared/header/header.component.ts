import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  link = 'https://www.instagram.com/worst_wishes_official/';

  constructor() { }

  public navbarText = 'Home of Worst Wishes Band';

  playAudio(): void {
    const audio = new Audio();
    audio.src = '../../../assets/audio/alarm.wav';
    audio.load();
    audio.play();
    setTimeout(() => {
      window.location.href = this.link;
    }, 1500);
  }

}
