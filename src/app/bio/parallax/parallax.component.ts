import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  @Input() inputText: string = 'Default text';

  @Input() inputName: string = 'Charlie';

  @Input() inputImageUrl: string = '';

  ngOnInit(): void {
  }

}
